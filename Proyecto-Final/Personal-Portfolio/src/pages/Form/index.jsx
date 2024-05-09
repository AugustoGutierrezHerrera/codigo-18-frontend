import ProyectForm from "../../components/From/Proyects";
import { getDataUser } from "../../services/getData";

export default function FormPage() {

  const proyects = getDataUser("Proyects");
  console.log("recibo lo de proyects");
  console.log(proyects);

  return (
    <>
      <div className="flex pt-20 gap-3">
        <div className="bg-custom-1A1A1A  w-1/5 py-5">
          <div className="p-4">
            <h1 className="text-white text-base uppercase font-manrope text-center">Menú de Configuación</h1>
          </div>
          <nav className="text-custom-C7C7C7 font-manrope text-sm">
            <ul>
              <li className="px-4 py-3 hover:bg-custom-484848 hover:text-white hover:underline cursor-pointer">
                🙋‍♂️Datos Personales
              </li>
              <li className="px-4 py-3 hover:bg-custom-484848 hover:text-white hover:underline cursor-pointer">
                ⚡Proyectos
              </li>
              <li className="px-4 py-3 hover:bg-custom-484848 hover:text-white hover:underline cursor-pointer">
                🧑‍💻Experiencia Laboral
              </li>
              {/* Agrega más opciones de menú según sea necesario */}
            </ul>
          </nav>
        </div>
        <div className="bg-custom-1A1A1A w-10/12">
          <ProyectForm proyects={proyects}/>
        </div>
      </div>
    </>
  );
}
