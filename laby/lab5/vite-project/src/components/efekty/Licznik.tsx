import { useState, useEffect, useRef } from "react";

export const Licznik = () => {
    const hasRendered = useRef(false);
    useEffect(() => {
        console.log("Hello World!")
    }, [])
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!hasRendered.current) {
            hasRendered.current = true;
            return;
        }
        console.log("Licznik zwiększył się do " + count.toString())
    }, [count, setCount])
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>dodaj</button>
        </div>
    );
}