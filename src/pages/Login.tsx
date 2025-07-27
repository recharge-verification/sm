import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ChevronLeft, LogIn } from "lucide-react";
import LoginFields from "../components/LoginFields";

export default function Login(){
const links = [
  { title: "Contacter le Webmaster" },
  { title: "Se connecter" },
  { title: "Termes et conditions" },
  { title: "Politique de confidentialité" },
  { title: "18 USC 2257" },
  { title: "Dispute and Abuse" },
  { title: "Changer de vue classique" },
];

    return(
        <>
            <Header/>
            <div className="mx-3">
                <Link to="" className="bg-linear-to-t from-sky-700 via-sky-400 to-sky-700  text-center flex justify-center items-center  rounded w-13 text-red text-[14px] my-3 text-shadow tracking-tight"><ChevronLeft size={18} strokeWidth={3.25} absoluteStrokeWidth/>Dos</Link>
                <div className="flex items-center space-x-1">
                    <LogIn size={20} color="#660000" strokeWidth={2.5} />
                    <h3 className="text-[#660000] flex text-xl font-semibold serif font-serif">Authentifiés</h3>
                </div>
                <LoginFields />
            </div>

            <div className="flex flex-col justify-center items-center text-center mt-20 mb-10 mx-4">
                <img src="/mc_visa.png" alt="Visa" width={100}/>
                <img src="company_za.png" alt="Company_za" width={200} />
                <div>
                    {
                        links.map((link, index)=>(
                            <a href="#" className="text-blue-600 hover:underline tracking-tight inline-block text-base/8" key={index}>{link.title}<span className="text-black">&nbsp;|&nbsp;</span></a>
                        ))
                    }
                    <p className="text-black tracking-tight">© 2025 ZA Media Services GmbH tous droits réservés</p>
                </div>
            </div>
        </>
    )
}
