import { useState } from "react";

export const Licznik = () => {
    const [count, setCount] = useState(localStorage.getItem('count') ? parseInt(localStorage.getItem('count')!) : 0);
    localStorage.setItem('count', count.toString());
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>dodaj</button>
        </div>
    );
}