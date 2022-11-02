import { useEffect, useState } from "react";
import Header from "../components/Header";
import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { useNavigate } from "react-router-dom";
import Favicon from "react-favicon";

import FindevFavDark from '../assets/favdark.png';
import FindevFavLight from '../assets/fav.png';

export default function Router() {
    const [authenticated, setAuthenticated] = useState(true);

    const navigate = useNavigate();

    useEffect(() => navigate('/'), [authenticated]);

    return (
        <div>
            { authenticated ? <Header /> : <></>} 
            { 
                !authenticated 
                    ? <Favicon url={FindevFavDark} /> 
                    : <Favicon url={FindevFavLight} /> 
            } 
            { authenticated ? <AuthRoutes /> : <AppRoutes /> }
        </div>
    )
}