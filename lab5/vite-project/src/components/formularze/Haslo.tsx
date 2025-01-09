import { useState } from "react";

export const Haslo = () => {
    const [hasla, checkHasla] = useState({
        haslo: "",
        powtorzHaslo: ""
    });
    const checkHandler = (e: { target: { name: string; value: string; }; }) => {
        checkHasla({
            ...hasla,
            [e.target.name]: e.target.value
        });
    }
    const areHaslaEqual = () => {
        if (hasla.haslo === "" && hasla.powtorzHaslo === "") {
            return "Proszę wprowadzić hasło"
        }
        else if (hasla.haslo !== hasla.powtorzHaslo) {
            return "Hasła są różne";
        } else {
            return ""
        }

    }
    return (
        <div>
            <div>
                <input type="password" placeholder="Hasło" value={hasla.haslo} name="haslo" onChange={checkHandler}/>
            </div>
            <div>
                <input type="password" placeholder="Powtórz Hasło" value={hasla.powtorzHaslo} name="powtorzHaslo" onChange={checkHandler}/>
            </div>
            <div>
                {areHaslaEqual()}
            </div>
        </div>
    )
}