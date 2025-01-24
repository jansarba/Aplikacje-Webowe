import { Student } from './StudentManager';
import { useState } from "react";

interface DodawanieProps {
    onClick: (student: Student) => void;
}

export const Dodawanie = ({onClick}: DodawanieProps) => {
    const [imie, setImie] = useState<string>("");
    const [nazwisko, setNazwisko] = useState<string>("");
    const [rocznik, setRocznik] = useState<number>(2000);

    const checkData = (student: Student) => {
        if(student.imie === "" || student.nazwisko === "" || student.rocznik < 1900 || rocznik > 2021) {
            return false;
        }
        return true;
    }

    const handleClick = () => {
        if (!checkData({imie, nazwisko, rocznik})) {
            alert("Niepoprawne dane");
            return;
        }
        onClick({imie, nazwisko, rocznik});
        setImie("");
        setNazwisko("");
        setRocznik(2000);
    }

    return (
        <div className="non-transparent" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div>
                <input type="text" placeholder="Imie" value={imie} onChange={(e) => setImie(e.target.value)}/>
                <input type="text" placeholder="Nazwisko" value={nazwisko} onChange={(e) => setNazwisko(e.target.value)}/>
                <input type="number" placeholder="Rocznik" value={rocznik} onChange={(e) => setRocznik(parseInt(e.target.value))}/>
            </div>
            <div>
                <button onClick={handleClick}>Dodaj</button>
            </div>
        </div>
    )
}