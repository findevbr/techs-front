import FindevLogo from '../assets/FinDev.svg';

import { Plus } from 'react-feather';
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
                    className="w-[55px]" 
                    src={FindevLogo} 
                    alt="Logo" 
                />
            </Link>

            <div className="flex select-none hover:bg-[#E9E9E9] duration-200 transition-all rounded-fd-radius-md p-2 cursor-pointer items-center justify-center space-x-2">
                <p className="text-[#333]">Pablo Lopes</p>
                <div className="rounded-[50%] bg-fd-light w-[25px] h-[25px]"/>
            </div>
        </div>
    )
}