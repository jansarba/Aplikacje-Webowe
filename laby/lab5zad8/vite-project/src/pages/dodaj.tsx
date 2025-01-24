import { useRef } from "react";

export const Dodaj = () => {
    const idInput = useRef<HTMLInputElement>(null);
    const titleInput = useRef<HTMLInputElement>(null);
    const contentInput = useRef<HTMLTextAreaElement>(null);
    
    const HandleFormSubmit = () => {
        const id = idInput.current!.value.trim();
        const title = titleInput.current!.value.trim();
        const content = contentInput.current!.value.trim();

        if (!id || !title || !content) {
            alert("Wszystkie pola są wymagane!");
            return;
        }

        const newArticle = {
            id,
            title,
            content,
        };

        // Use a consistent key-naming convention
        const key = `article-${newArticle.id}`;

        if (localStorage.getItem(key)) {
            alert("Artykuł z tym ID już istnieje!");
            return;
        }

        localStorage.setItem(key, JSON.stringify(newArticle));
        alert("Artykuł został dodany!");
        
        // Clear input fields after submission
        idInput.current!.value = "";
        titleInput.current!.value = "";
        contentInput.current!.value = "";
    };

    return (
        <div>
            <h1>Dodaj</h1>
            <p>Witaj na stronie dodawania!</p>
            <div style={{ display: "flex", flexDirection: "column", padding: "10px", gap: "10px" }}>
                <input type="number" placeholder="Id" ref={idInput} />
                <input type="text" placeholder="Tytuł" ref={titleInput} />
                <textarea
                    style={{ minWidth: "80vmin", minHeight: "40vmin" }}
                    placeholder="Treść"
                    ref={contentInput}
                ></textarea>
                <button onClick={HandleFormSubmit}>Dodaj</button>
            </div>
        </div>
    );
};