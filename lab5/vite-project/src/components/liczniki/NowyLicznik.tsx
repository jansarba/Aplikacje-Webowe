import { Przycisk } from "./Przycisk";
import { useState } from "react";

export const NowyLicznik = () => {
    const [count, setCount] = useState(0);
    const doCounting = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <Przycisk onClick={doCounting} />
            <div>{count}</div>
        </div>
    );
}