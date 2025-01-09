import { useState } from 'react';

export const Aktualizacja = () => {
    const [produkt, changeProdukt] = useState({
        nazwa: "Pomidor",
        cena: 50,
    })

    const updateProdukt = () => {
        changeProdukt(prev => ({...prev, cena: 100}));
    }
    
    return (<div>
        Aktualnie {produkt.nazwa} kosztuje {produkt.cena}
        <div>
            <button onClick={updateProdukt}>Zmień cenę</button>
        </div>
    </div>)
}

