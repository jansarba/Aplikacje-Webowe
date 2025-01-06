import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {

    const [id, setId] = useState(0);

    const changeID = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(parseInt(e.target.value));
    }

    return (
        <div>
            <header>
                <div style={{fontSize: "2em"}}>
                    eoeoeo
                </div>
                <p>Oto niesamowicie piękny header!</p>
                <div id="menu">
                    <Link to="/blog">Blog</Link>
                    <Link to="./dodaj">Dodaj</Link>
                    <Link to={'./article/' + id}>Artykuł: </Link>
                    <input type="number" min={0} max={99} style={{maxWidth: "4ch"}} defaultValue={0} onChange={changeID}/>
                </div>
            </header>
            <Outlet />
        </div>
    );
};