import {Menu } from "lucide-react";

export default function Header(){
    const flags=[
        {title: "fr",
            img: "/fr.webp"
        },
        {title: "gb",
            img: "/gb.webp"
        }
    ]

    return(
        <header className="bg-[#660000] w-screen flex justify-between h-[27px] px-2 items-center">
            <Menu className="ms-3"/>
            <img src="/m.sexemodel.logo.png" alt="Logo sexemodel.com" className="h-full object-contain"/>
            <div className="flex gap-2">
                {flags.map((flag, index)=>(
                    <a key={index} href="#"><img src={flag.img} alt={flag.title} width={18}/></a>
                ))}
            </div>
        </header>
    )
}