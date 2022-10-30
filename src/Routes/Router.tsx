import { useEffect, useState } from "react";
import Header from "../components/Header";
import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { useNavigate } from "react-router-dom";

export default function Router() {
    const [authenticated, setAuthenticated] = useState(true);

    const navigate = useNavigate();

    useEffect(() => navigate('/'), [authenticated]);

    return (
        <div>
            { authenticated ? <Header /> : <></>} 
            { authenticated ? <AuthRoutes /> : <AppRoutes /> }
        </div>
    )
}