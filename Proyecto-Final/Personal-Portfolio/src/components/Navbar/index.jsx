

export default function Navbar(props){
    return(
        <div className="flex justify-between py-3">
            <div>
                <p className="font-bebasNeue text-xl text-textColor">ROBERT GARCIA</p>
            </div>
            <div >
                <ul className="flex gap-8 list-none" >
                    <li><a className="font-inter text-xs text-textColor" href="">Portafolio</a></li>
                    <li><a className="font-inter text-xs text-textColor" href="">Sobre mí</a></li>
                    <li><a className="font-inter text-xs text-textColor" href="">Contacto</a></li>
                    <li><a className="font-inter text-xs text-textColor" href="/login">Login</a></li>
                </ul>
            </div>
        </div>
    ) 
} 