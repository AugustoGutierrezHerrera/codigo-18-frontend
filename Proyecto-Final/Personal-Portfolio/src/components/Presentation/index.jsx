import linkedin from "../../assets/presentation/linkedin.svg";
import githab from "../../assets/presentation/githab.svg";
import perfil from "../../assets/presentation/perfil.svg";


export default function Presentation() {

//Función Click
 const handleClick2 = () => {
  //Busca
  const sectionFooter = document.getElementById('footer-section')
  sectionFooter.scrollIntoView({behavior:'smooth'})
}


  return (
    <div className="flex items-center justify-center gap-10 py-20">
      <div>
        <div>
          <h1 className="text-white font-bebasNeue text-7xl uppercase">
            Hola, Yo soy
          </h1>
          <h1 className="text-white font-bebasNeue text-7xl uppercase">
            Robert Garcia
          </h1>
          <p className="text-textColor text-xs font-manrope pt-3">
            Soy un desarrollador front-end con sede en Sydney apasionado por
            crear sitios web accesibles y fáciles de usar.
          </p>
        </div>
        <div className="flex items-center gap-4 pt-10">
          <div>
            <button
            onClick={handleClick2}
            className="
            flex items-center 
            justify-center
            font-manrope
            font-bold
            uppercase
            text-base
            px-7
            py-3
            rounded-3xl
            text-custom-0A0A0A
            bg-custom-D3E97A"
            >
              Contáctame
            </button>
          </div>
          <div
            className=" 
          flex items-center 
          justify-center  
          bg-custom-222222 
          px-3
          py-3
          rounded-full "
          >
            <img src={linkedin} alt="Likeding" />
          </div>
          <div
            className="
          flex items-center 
          justify-center  
          bg-custom-222222 
          px-3
          py-3
          rounded-full"
          >
            <img src={githab} alt="Githab" />
          </div>
        </div>
      </div>
      <div >
        <img src={perfil} alt="Foto de Perfil" />
      </div>
      <br></br>
    </div>
  );
}
