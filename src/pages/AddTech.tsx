import { Input } from "../components/Input";
import { Codepen } from 'react-feather';

export default function AddTech() {
    return(
        <div className="w-full px-[80px]">
            <div className="flex flex-1 flex-col w-1/2 space-y-[12px]">
                <h1
                    className="text-2xl text-[#333] font-semibold"

                >
                    Adicionar tecnologia
                </h1>

                <Input
                    label="Nome da tecnologia"
                    placeholder="Digite aqui o nome da tecnologia que você irá adicionar"
                    height="h-[52px]"
                    width="w-full"
                    icon={<Codepen size={12}/>}
                />
                <Input
                    label="Organização"
                    placeholder="Digite aqui o nome da tecnologia que você irá adicionar"
                    height="h-[52px]"
                    width="w-full"
                    icon={<Codepen size={12}/>}
                />
                <Input
                    label="Linguagem"
                    placeholder="Digite aqui o nome da tecnologia que você irá adicionar"
                    height="h-[52px]"
                    width="w-full"
                    icon={<Codepen size={12}/>}
                />

                <div className="flex w-full space-x-[12px]">
                    <div className="flex-1">
                        <Input
                            label="Ano de lançamento"
                            placeholder="Digite aqui o nome da tecnologia que você irá adicionar"
                            height="h-[52px]"
                            width="w-full"
                            icon={<Codepen size={12}/>}
                        />
                    </div>

                    <div className="flex-1">
                        <Input
                            label="Tipo"
                            placeholder="Digite aqui o nome da tecnologia que você irá adicionar"
                            height="h-[52px]"
                            width="w-full"
                            icon={<Codepen size={12}/>}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-1 flex-col space-y-[12px]">
            
            </div>
        </div>
    );
}