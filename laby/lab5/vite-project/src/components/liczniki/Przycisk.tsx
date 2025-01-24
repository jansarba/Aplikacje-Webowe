type PrzyciskProps = {
    onClick: () => void;
}

export const Przycisk = (props: PrzyciskProps) => {
    return (
        <button onClick={props.onClick}>dodaj</button>
    ); 
}