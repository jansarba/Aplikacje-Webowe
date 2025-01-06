import { useParams } from "react-router-dom";

export const Article = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Artykuł</h1>
            <p>Witaj na stronie artykułu {id}!</p>
        </div>
    );
}