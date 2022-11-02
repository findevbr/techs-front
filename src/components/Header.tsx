import FindevLogo from '../assets/FinDev.svg';

import { Plus, User } from 'react-feather';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div className="flex items-center justify-between h-[90px] w-full px-[80px]">
            <Link
                to="addTech"
                className="tabButton space-x-[40px] items-center"
            >
                <Plus size={12}/>
                <h1>Adicionar tecnologia</h1>
            </Link>

            <Link className="hover:opacity-40 duration-200 transition-all" to="/">
                <img
                    className="w-[70px]" 
                    src={FindevLogo} 
                    alt="Logo" 
                />
            </Link>

            <div className="flex select-none text-sm hover:bg-[#e9e9e9] text-[#333] duration-200 transition-all rounded-fd-radius-lg px-4 py-2 cursor-pointer items-center justify-center space-x-2">
                <p>Olá, Pablo</p>
                <div className="rounded-[50%] border border-[#DDD] transition-all duration-200 text-[#666] flex items-center justify-center bg-[#eee] w-[30px] h-[30px]">
                    <User size={12}/>
                </div>
            </div>
        </div>
    )
}