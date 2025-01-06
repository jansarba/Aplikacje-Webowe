export const Ternary = () => {
    const a = true;
    const b = false;
    return (
        <div>
            <div>
                {a ? "stwierdzenie a jest prawdziwe" : "a to nieprawda"}
            </div>
            <div>
                {b ? "stwierdzenie b jest prawdziwe" : "b to nieprawda"}
            </div>
        </div>
    )
}