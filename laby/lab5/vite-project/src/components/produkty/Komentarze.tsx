import { useEffect, useState } from 'react'
import { Komentarz, komentarzProps } from './Komentarz'

export const Komentarze = () => {
    const [comments, setComments] = useState<komentarzProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch("https://dummyjson.com/comments");
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setComments(data.comments);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Comments</h1>
            {comments.map((comment: komentarzProps) => (
                <Komentarz
                    {...comment}
                />
            ))}
        </div>
    );
    
}