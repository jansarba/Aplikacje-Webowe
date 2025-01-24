import { useState } from "react";

export const Licznik = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>dodaj</button>
        </div>
    );
}