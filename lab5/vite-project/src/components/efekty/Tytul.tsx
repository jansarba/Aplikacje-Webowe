import { useState, useEffect } from 'react';

export const Tytul = () => {
    const [title, setTitle] = useState("Hello World!")
    
    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
    );
}