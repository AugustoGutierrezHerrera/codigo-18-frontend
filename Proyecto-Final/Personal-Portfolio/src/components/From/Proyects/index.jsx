import { inputDataUser } from "../../../services/getData";
import TextArea from "../../TextArea";
import TextField from "../../TextField";

export default function ProyectForm(props) {


const handleSubmit = async(event) =>{
  event.preventDefault();
   const formDate = new FormData(event.target)
   const proyectData = Object.fromEntries(formDate.entries())   
  inputDataUser("Proyects", proyectData)
       // Limpia los campos del formulario después de enviar
       //event.target.reset();
}


  return (
    <div className="flex flex-col justify-center items-center py-10 ">
      <div className="w-3/5  py-5 ">
        <form onSubmit={handleSubmit} className="my-5 ">
          <div className="my-5">
            <TextField
              type="text"
              name="proyect_title"
              placeholder="Ingresa un Título"prueba
            />
          </div>
          <div className="my-5">
            <TextArea
              type="text"
              name="proyect_description"
              placeholder="Describe tu proyecto"
            />
          </div>
          <div className="my-5">
            <TextField
              type="text"
              name="proyect_client"
              placeholder="Cliente"
            />
          </div>
          <div className="my-5">
            <TextField type="text" name="proyect_rol" placeholder="Rol" />
          </div>
          <div className="my-5">
            <TextField
              type="date"
              name="proyect_date"
              placeholder="Fecha"
              className="appearance-none border border-gray-300 rounded-md  mr-2 w-40"
            />
          </div>
          {/* <div className="my-5">
            <TextField
              type="file"
              name="proyect_title"
              placeholder="Ingresa una Foto"
            />
          </div> */}
          <div className="my-5">
            <TextField
              type="url"
              name="proyect_imgUrl"
              placeholder="Link de Githab"
            />
          </div>
          <div className="my-5">
            <TextField
              type="url"
              name="proyect_demoUrl"
              placeholder="Link Demo"
            />
          </div>
          <div className="my-5">
            <TextField
              type="url"
              name="proyect_viewUrl"
              placeholder="Link del Proyecto"
            />
          </div>|

          <div className=" w-full flex justify-center items-center">
            <div className="w-1/2"> <button
              className="
              px-5
              py-2
              rounded-md
            text-white
            bg-custom-1A1A1A
              border
              border-custom-D3E97A
              font-manrope
              font-bold
              text-lg
              w-full
              hover:bg-custom-D3E97A
              hover:text-custom-1A1A1A
              hover:font-bold
              transition-all ease-out duration-300              
              "
            >
              Guardar
            </button></div>
           
          </div>
        </form>
      </div>

      <div className=" p-5 w-full ">
        <table className=" font-manrope text-xs ">
          <thead className="bg-custom-484848 text-white text-center">
            <tr>
            <th className="py-2 px-4 ">Id</th>
            <th className="py-2 px-4 ">Título</th>
            <th className="py-2 px-4 ">Descripción</th>
            <th className="py-2 px-4 ">Cliente</th>
            <th className="py-2 px-4 ">Fecha</th>
            <th className="py-2 px-4 ">Rol</th>
            <th className="py-2 px-4 ">Edita</th>
            <th className="py-2 px-4 ">Elimina</th>
            </tr>
          </thead>
          <tbody className="text-custom-C7C7C7">
            {props.proyects.map((doc, index) => (
              <tr key={ index}>
                <td className="py-2 px-4 whitespace-nowrap">
                  {doc.id}
                </td>
                <td className="py-2 px-4 whitespace-nowrap">
                  {doc.proyect_title}
                </td>
                <td className="py-2 px-4 ">
                  {/* Reduce el tamaño del texto */}
                  {doc.proyect_description.length > 50
                    ? `${doc.proyect_description.substring(0, 50)}...`
                    : doc.proyect_description}
                </td>
                <td className="py-2 px-4 whitespace-nowrap">
                  {doc.proyect_client}
                </td>
                <td className="py-2 px-4 whitespace-nowrap">
                  {doc.proyect_date.toDate().toLocaleDateString()}
                </td>
                <td className="py-2 px-4 whitespace-nowrap">
                  {doc.proyect_rol}
                </td>   
                <td className="text-center"><button>✏️</button></td>
                <td className="text-center"><button>🗑️</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
