import { ArticleProps } from "./article";


export const Blog = () => {
    const articles: ArticleProps[] = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Ensure key is defined and matches the expected pattern (e.g., starts with "article-")
        if (key && key.startsWith("article-")) {
            try {
                const article: ArticleProps = JSON.parse(localStorage.getItem(key)!);
                // Validate article structure
                if (article && article.id && article.title && article.content) {
                    articles.push(article);
                }
            } catch (error) {
                console.error(`Invalid article data for key: ${key}`, error);
            }
        }
    }

    return (
        <div>
            <h1>Blog</h1>
            <p>Witaj na blogu!</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {articles.map((article, index) => (
                    <a key={index} href={`/blog/article/${article.id}`}>
                        {article.title}, artykuł nr {article.id}
                    </a>
                ))}
            </div>
        </div>
    );
};