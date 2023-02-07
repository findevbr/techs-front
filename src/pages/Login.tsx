import { User, Lock } from "react-feather";

import { Input } from "../components/Input";
import FindevLogo from '../assets/FinDev.svg';
import { useContext, useEffect, useState } from "react";

import toast from 'react-hot-toast';
import { sucess } from "../styles/toastStyles";
import { AuthContext } from "../contexts/AuthContext";

type Login = {
    email: string;
    password: string;
}

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState<Login>();

    const { login } = useContext(AuthContext);

    function handleLogin() {
        setUser({
            email, 
            password
        });

        login();

        toast.success(`Seja bem vindo(a), ${email}! 😀`);
    }

    useEffect(() => console.log(user), [user]);

    return(
        <div className="flex flex-col h-screen items-center justify-between py-[40px]">
            <div className="flex items-center justify-center">
                <img className="w-1/4" src={FindevLogo} alt="findevlogo" />
            </div>

            <div className="bg-fd-card p-[40px] w-[450px] space-y-[40px] flex flex-col items-center rounded-fd-radius-xg drop-shadow-fd-shadow">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-semibold text-center text-[#333] text-xl">
                        Olá! É muito bom ter ver por aqui 😀
                    </h1>

                    <p className="text-base font-normal text-center text-[#999]">
                        Por favor, insira as informações abaixo para realizar o login.
                    </p>
                </div>

                <div className="flex flex-col space-y-[12px] w-full">
                    <Input 
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        icon={<User size={12}/>}
                        label="Email ou usuário"
                        placeholder="Digite aqui seu email"
                        height="h-[52px]"
                        width="w-full"
                    />
                    <Input 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        icon={<Lock size={12}/>}
                        label="Senha"
                        placeholder="Digite aqui sua senha"
                        height="h-[52px]"
                        width="w-full"
                    />
                </div>

                <button
                    className="filledButton bg-fd-primary w-full"
                    onClick={handleLogin}
                    disabled={
                        email === "" || 
                        password === ""
                    }
                >
                    Continuar
                </button>
            </div>

            <div className="w-full flex items-center justify-center">
                <p className="select-none">
                    Created by Pablo Lopes & Vitor Souza
                </p>
            </div>
        </div>
    );
}