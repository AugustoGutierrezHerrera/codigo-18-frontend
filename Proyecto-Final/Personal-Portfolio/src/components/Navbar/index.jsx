import { Link } from "react-router-dom"

export default function Navbar(){

    //Función Click
 const handleClick = () => {
    //Busca
    const sectionFooter = document.getElementById('footer-section')
    sectionFooter.scrollIntoView({behavior:'smooth'})
 }

    return(
        <div className="flex justify-between py-3">
            <div>
                <p className="font-bebasNeue text-xl text-textColor">ROBERT GARCIA</p>
            </div>
            <div >
                <ul className="flex gap-8 list-none" >
                    <li><a className="font-inter text-xs text-textColor" ><Link to={"/"}>Portafolio</Link> </a></li>
                    <li><a className="font-inter text-xs text-textColor" ><Link to={"/about"}>Sobre Mí</Link> </a></li>
                    <li><a className="font-inter text-xs text-textColor cursor-pointer" onClick={handleClick}>Contacto</a></li>
                    <li><a className="font-inter text-xs text-textColor"><Link to={"/login"}>Login</Link> </a></li>
                </ul>
            </div>
        </div>
    ) 
} 