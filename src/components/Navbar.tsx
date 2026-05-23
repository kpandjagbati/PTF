import { Boxes } from "lucide-react"


const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
        <a href="#"
        className="flex items-center font-bold text-5xl md:text-2xl"
        >
            <Boxes className="mr-2" />
        Aris <span className="text-info">.Dev</span>
        </a>
        
        <ul className="hidden md:flex space-x-4">
            <li>
                <a href="#"
                className="btn btn-sm btn-ghost"
                >
                    Acceuil
                </a>
            </li>
            
             <li>
                <a href="#"
                className="btn btn-sm btn-ghost"
                >
                    A propos
                </a>
            </li>

             <li>
                <a href="#"
                className="btn btn-sm btn-ghost"
                >
                    Mes expériences
                </a>
            </li>

            <li>
                <a href="#certifications"
                className="btn btn-sm btn-ghost"
                >
                    Certifications
                </a>
            </li>

            <li>
                <a href="#"
                className="btn btn-sm btn-ghost"
                >
                    Mes projets 
                </a>
            </li>

        </ul>
    </div>
  )
}

export default Navbar