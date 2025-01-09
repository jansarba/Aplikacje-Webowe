export const Blog = () => {
    const articles = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
            const article = JSON.parse(localStorage.getItem(key)!);
            articles.push(article);
        }
    }
    return (
        <div>
            <h1>Blog</h1>
            <p>Witaj na blogu!</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {articles.map((article, index) => (
                    <a key={index} href={`/blog/article/${article.id}`}>{article.title}, artykuł nr {article.id}</a>
                ))}
            </div>
        </div>
    );
}