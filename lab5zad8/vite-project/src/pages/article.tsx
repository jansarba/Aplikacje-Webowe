import { useParams } from "react-router-dom";

export type ArticleProps = {
    id: string;
    title: string;
    content: string;
}

export const Article = () => {
    const { id } = useParams();
    if (id) {
        if (localStorage.getItem(id)) {
            const article: ArticleProps = JSON.parse(localStorage.getItem(id)!);
            return (
                <div>
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                </div>
            );
        }
    }

    return (
        <div>
            <h1>Artykuł</h1>
            <p>Witaj na stronie artykułu {id}!</p>
        </div>
    );
}