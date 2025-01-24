import { useEffect, useState } from 'react';

export const Odliczanie = () => {
    const [count, setCount] = useState(15.0);
    const [isRunning, setIsRunning] = useState(false);

    const counterDown = () => {
        setCount(prev => (prev - 0.1));
    }

    useEffect(() => {
        let interval: number | undefined = undefined;
        if (isRunning) {
        interval = setInterval(() => {
            counterDown();
        }, 100)
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [count, isRunning])



    return (
        <div>
            <div>{count.toFixed(1)}</div>
            <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "stop" : "start"}</button>
        </div>
    )
}