import { useEffect, useState } from "react";
import { useRef } from "react";

export const Logowanie = () => {
    const [hasla, checkHasla] = useState({
        haslo: "",
        powtorzHaslo: "",
        nazwaUzytkownika: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const button = useRef<HTMLButtonElement>(null);

    const checkHandler = (e: { target: { name: string; value: string; }; }) => {
        checkHasla({
            ...hasla,
            [e.target.name]: e.target.value
        });
    }

    const buttonLogic = () => {
        if (!button.current) {
            return "";
        }
        if (hasla.haslo === "" || hasla.powtorzHaslo === "" || hasla.nazwaUzytkownika === "") {
            button.current.disabled = true;
            return "";
        }
        else if (hasla.haslo !== "" && hasla.powtorzHaslo !== "" && hasla.nazwaUzytkownika !== "") {
            button.current.disabled = false;
            if (hasla.haslo === hasla.powtorzHaslo) {
                button.current.onclick = () => {
                    alert("Zalogowano poprawnie");
                }
                return "";
            }
            else {
                button.current.onclick = () => {
                    alert("Hasła są różne");
                return "";
                }
            }
        }
        return "";
    }
    
    useEffect(() => {
        const errorMessage = buttonLogic();
        setErrorMessage(errorMessage);
    }, [hasla]);

    return (
        <div>
            <div>
                <input type="password" placeholder="Hasło" value={hasla.haslo} name="haslo" onChange={checkHandler}/>
            </div>
            <div>
                <input type="password" placeholder="Powtórz Hasło" value={hasla.powtorzHaslo} name="powtorzHaslo" onChange={checkHandler}/>
            </div>
            <div>
                <input type="text" placeholder="Nazwa" value={hasla.nazwaUzytkownika} name="nazwaUzytkownika" onChange={checkHandler}/>
            </div>
            <div>
                <button ref={button}>Zaloguj</button>
            </div>
            {errorMessage}
        </div>
    )
}