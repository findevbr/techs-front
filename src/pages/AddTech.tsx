import { Input } from "../components/Input";
import { Briefcase, Calendar, Codepen, Codesandbox, Image, Terminal, Upload } from 'react-feather';
import { useState } from "react";
import { useFetcher } from "react-router-dom";

export default function AddTech() {
    const [techName, setTechName] = useState('');
    const [org, setOrg] = useState('');
    const [lang, setLang] = useState('');
    const [yearLaunch, setYearLauch] = useState('');
    const [type, setType] = useState('');
    
    document.title = "Adicionar tecnologia | Findev Tech";

    const handleChange = (e: any) => {
        const result = e.target.value.replace(/\D/g, "");

        setYearLauch(result);
    }

    return(
        <div className="flex w-full px-[80px] containerWithHeader">
            <div className="flex flex-1 flex-col w-1/2 justify-between h-full py-[40px]">
                <div className="flex flex-col space-y-[24px]">
                    <h1
                        className="text-3xl text-[#333] font-semibold"

                    >
                        Adicionar tecnologia
                    </h1>

                    <div className="flex flex-col space-y-[12px]">
                        <Input
                            label="Nome da tecnologia"
                            onChange={e => setTechName(e.target.value)}
                            placeholder="Digite aqui o nome da tecnologia que você irá adicionar"
                            height="h-[52px]"
                            width="w-full"
                            icon={<Codepen size={12}/>}
                        />
                        <Input
                            label="Organização"
                            onChange={e => setOrg(e.target.value)}
                            placeholder="Digite aqui o nome da tecnologia que você irá adicionar"
                            height="h-[52px]"
                            width="w-full"
                            icon={<Briefcase size={12}/>}
                        />
                        <Input
                            label="Linguagem"
                            onChange={e => setLang(e.target.value)}
                            placeholder="Digite aqui o nome da tecnologia que você irá adicionar"
                            height="h-[52px]"
                            width="w-full"
                            icon={<Terminal size={12}/>}
                        />

                        <div className="flex w-full space-x-[12px]">
                            <div className="flex-1">
                                <Input
                                    label="Ano de lançamento"
                                    placeholder="Digite aqui o nome da tecnologia que você irá adicionar"
                                    onChange={handleChange}
                                    height="h-[52px]"
                                    width="w-full"
                                    type="number"
                                    value={yearLaunch}
                                    icon={<Calendar size={12}/>}
                                />
                            </div>

                            <div className="flex-1">
                                <Input
                                    label="Tipo"
                                    onChange={e => setType(e.target.value)}
                                    placeholder="Digite aqui o nome da tecnologia que você irá adicionar"
                                    height="h-[52px]"
                                    width="w-full"
                                    icon={<Codesandbox size={12}/>}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full mt-[12px] space-x-[12px]">
                    <button
                        disabled={
                            techName === '' ||
                            org === '' ||
                            lang === '' ||
                            yearLaunch === '' ||
                            type === ''
                        }
                        className="bg-fd-primary flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 p-4 rounded-fd-radius-lg text-sm h-[40px] text-[#fff] hover:opacity-40 duration-200 transition-all"
                    >
                        Adicionar tecnologia
                    </button>

                    <button
                        disabled={
                            techName === '' ||
                            org === '' ||
                            lang === '' ||
                            yearLaunch === '' ||
                            type === ''
                        }
                        className="bg-fd-ghost flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 p-4 rounded-fd-radius-lg text-sm h-[40px] text-fd-primary hover:opacity-40 duration-200 transition-all"
                    >
                        Adicionar e permanecer na página
                    </button>
                </div>

            </div>

            <div className="flex flex-1 flex-col space-y-[12px] h-full items-center pt-[50px]">
                <div 
                    className="flex flex-col select-none bg-fd-card cursor-pointer rounded-fd-radius-xg drop-shadow-blue-shadow h-[450px] border-dashed border-[3px] transition-all duration-200 items-center justify-center border-fd-description hover:border-fd-primary text-fd-description hover:text-fd-primary space-y-[12px] w-[450px]"
                >
                    <Image size={80}/>

                    <span className="text-3xl">
                        Adicionar imagem
                    </span>
                </div>

                <button
                    className="tabButton space-x-4 items-center"
                >
                    <Upload size={12}/>
                    <h1>Subir imagem</h1>
                </button>
            </div>
        </div>
    );
}