import { useParams } from "react-router-dom";

export type ArticleProps = {
    id: string;
    title: string;
    content: string;
};

export const Article = () => {
    const { id } = useParams();

    if (id) {
        const key = `article-${id}`;
        const storedArticle = localStorage.getItem(key);

        if (storedArticle) {
            const article: ArticleProps = JSON.parse(storedArticle);
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
            <p>Nie znaleziono artykułu {id}!</p>
        </div>
    );
};