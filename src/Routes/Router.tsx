import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { useNavigate } from "react-router-dom";
import Favicon from "react-favicon";

import FindevFavDark from '../assets/favdark.png';
import FindevFavLight from '../assets/fav.png';
import { AuthContext } from "../contexts/AuthContext";

export default function Router() {
    const { authenticated } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => navigate('/'), [authenticated]);

    return (
        <div>
            { authenticated ? <Header /> : <></>} 
            { 
                authenticated 
                    ? <Favicon url={FindevFavDark} /> 
                    : <Favicon url={FindevFavLight} /> 
            } 
            { authenticated ? <AuthRoutes /> : <AppRoutes /> }
        </div>
    )
}