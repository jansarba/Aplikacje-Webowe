import { useEffect, useState } from 'react';
import { Item, ItemProps } from './Item';

export const ItemsHandler = () => {
    const [items, setItems] = useState<ItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                items.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))
            )}
        </div>
    );
}