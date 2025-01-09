import { useRef } from "react";

export const Dodaj = () => {
    const idInput = useRef<HTMLInputElement>(null);
    const titleInput = useRef<HTMLInputElement>(null);
    const contentInput = useRef<HTMLTextAreaElement>(null);
    
    const HandleFormSubmit = () => {
        const newArticle = {
            id: idInput.current!.value,
            title: titleInput.current!.value,
            content: contentInput.current!.value
        };
        localStorage.setItem(newArticle.id, JSON.stringify(newArticle));
    }

    return (
        <div>
            <h1>Dodaj</h1>
            <p>Witaj na stronie dodawania!</p>
            <div style={{ display: "flex", flexDirection: "column", padding: "10px", gap: "10px" }}>
                <input type="text" placeholder="Tytuł" ref={titleInput}/>
                <textarea style={{minWidth: "80vmin", minHeight: "40vmin"}} placeholder="Treść" ref={contentInput}></textarea>
                <input type="number" placeholder="Id" ref={idInput}/>
                <button onClick={HandleFormSubmit}>Dodaj</button>
            </div>
        </div>
    );
}