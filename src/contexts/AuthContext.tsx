import { createContext, useState } from "react";
import { LogIn } from "react-feather";

type AuthContextType = {
    authenticated: boolean;
    login: Function;
    logout: (e: any) => void;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
    const [authenticated, setAuthenticated] = useState(Boolean);

    function login() {
        setAuthenticated(true);
    }

    function logout() {
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                login,
                logout
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}