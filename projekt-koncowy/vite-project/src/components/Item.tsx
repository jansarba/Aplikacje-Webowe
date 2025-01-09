export type ItemProps = {
    id: number;
    title: string;
    description: string;
    };

export const Item = (item: ItemProps) => {
    return (
        <div className="bg-dark text-slate-100 p-4 rounded-lg">
            <h2 className="font-bold">{item.title}</h2>
            <p>{item.description}</p>
        </div>
    );
}