interface props{
    type?: string;
    placeholder?: string;
    width?: string;
    height?: string;
    icon?: React.ReactNode;
    shaddow?: boolean;
    onChange?: (event: any) => void;
    onKeyPress?: (event: any) => void;
    value?: string;
    defaultValue?: string;
    error?: boolean;
    className?: string;
    disabled?: boolean;
    label?: string;
}

export function Input(props: props) {
    return(
        <div className={`flex flex-col group justify-center ${props.className} ${props.shaddow ? 'drop-shadow-fd-shadow' : 'drop-shadow-none'}`}>
            { props.label && <p className="text-xs mb-1 text-[#999] font-normal">{props.label}</p> }
            <div className="flex items-center">
                <div className={`absolute translate-x-3 ${props.error ? 'text-fd-danger' : 'text-fd-description'}`}>
                    {props.icon ? props.icon : <></>}
                </div>
                <input 
                    disabled={props.disabled}
                    onKeyPress={props.onKeyPress}
                    onChange={props.onChange}
                    defaultValue={props.defaultValue}
                    value={props.value}
                    className={`
                        ${props.height}
                        ${props.width}  
                        ${props.icon ? 'pl-8' : 'pl-2'} 
                        bg-[#fff]
                        p-2 
                        text-xs 
                        rounded-[12px]
                        font-light 
                        ${props.error ? 'text-fd-danger ' : 'text-fd-grey'}
                        text-ellipsis
                        border-2
                        border-fd-light
                        border-inherit
                        outline-none

                        transition-all duration-200

                        ${props.error && 'border-fd-danger'}

                        focus:border-fd-primary
                        focus:bg-fd-ghost-bg
                    `}
                    type={props.type ? props.type : 'text'} 
                    placeholder={props.placeholder ? props.placeholder : ''} 
                />
            </div>
        </div>
    )
}