import { useState } from "react";

export const Formularz = () => {
    const [text, setText] = useState("");
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <div>{text}</div>
        </div>
    );
}