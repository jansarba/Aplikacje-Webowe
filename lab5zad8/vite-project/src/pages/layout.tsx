import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Layout = () => {

    const [id, setId] = useState(0);

    //tragiczna metoda sprawdzania czy jestesmy w artykule zeby ladnie sie wyswietlal domyslny nr w wyszukiwarce (domyslny = obecny/ostatni)
    const location = useLocation();
    const currID = location.pathname.split("/").pop();
    const isCurrIdNumber = !isNaN(parseInt(currID? currID : ""));

    const changeID = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(parseInt(e.target.value));
    }

    return (
        <div>
            <header>
                <div style={{fontSize: "2em"}}>
                    <a href="/" style={{color: "#646cff"}}>eoeoeo</a>
                </div>
                <p>Oto niesamowicie piękny header!</p>
                <div id="menu">
                    <Link to="/blog">Blog</Link>
                    <Link to="./dodaj">Dodaj</Link>
                    <Link to={'./article/' + id}>Artykuł: </Link>
                    <input type="number" min={0} max={99} style={{maxWidth: "4ch"}} defaultValue={isCurrIdNumber ? currID : 0} onChange={changeID}/>
                </div>
            </header>
            <Outlet />
        </div>
    );
};