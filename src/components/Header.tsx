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
                Adicionar tecnologia
            </Link>

            <img
                className="w-[55px]" 
                src={FindevLogo} 
                alt="Logo" 
            />

            <div className="flex items-center justify-center space-y-4">
                <p>Pablo Lopes</p>
                <div className="rounded-[50%] bg-fd-light w-[25px] h-[25px]"/>
            </div>
        </div>
    )
}