import { useEffect, useState } from "react";

import { createDataForm } from "../../services/httpAPI.js";

import { Navbar, Presentation, AboutMi, Footer } from "../../components";

import { db } from "../../Config/Firebase.js";

// import { collection, query, where, getDocs } from "firebase/firestore";

export default function Home() {
  // const [nameInput, setNameInput] = useState("a");
  // const [emailInput, setEmailInput] = useState("b");
  // const [cellInput, setCellInput] = useState("c");
  // const [messageInput, setMessageInput] = useState("d");

  const [formData, setFormData] = useState({
    nameInput: "",
    emailInput: "",
    cellInput: "",
    messageInput: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Opcion envio a mockapi #2
  const handleListContetForm = async (formData) => {
    createDataForm(formData);
  };

  // const handleNameChange = (event) => {
  //   setNameInput(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setEmailInput(event.target.value);
  // };

  // const handleCellChange = (event) => {
  //   setCellInput(event.target.value);
  // };

  // const handleMessageChange = (event) => {
  //   setMessageInput(event.target.value);
  // };

  // const [proyects, setProyects] = useState([]);
  // 1. Referencia a la coleccion
  // const proyectsRef = collection(db, "Proyects");
  // 2. Consulta a la coleccion
  // const consult = query(proyectsRef);
  // 3. Pedir la data
  // useEffect(() => {
  //   const getProyects = async () => {
  //     try {
  //       const proyectsTmp = [];
  //       const rptaConsulta = await getDocs(consult);

  //       rptaConsulta.forEach((doc) => {
  //         proyectsTmp.push(doc.data());
  //       });

  //       setProyects(proyectsTmp);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getProyects();
  // });

  return (
    <>
      
      <Presentation />
      <div>
        <hr className="border border-custom-484848" />
      </div>
      <div className="w-1/2 pt-20">
        <h2 className="text-white font-bebasNeue text-7xl pb-5">
          Proyectos Destacados
        </h2>
        <p className="text-custom-C7C7C7 font-manrope text-base pb-5">
          Estos son algunos de los proyectos seleccionados que muestran mi
          pasión por el desarrollo front-end.
        </p>
      </div>
      <div>
        {/* {proyects.map((doc, i) => (
          <div key={i} className="flex gap-10 pb-24 items-center">
            <div className="w-1/2">
              <img src={doc.img_Proyect} alt="" />
            </div>
            <div className="w-7/12">
              <h4 className="text-white text-3xl pb-5">{doc.title_Proyect}</h4>
              <p className="text-custom-C7C7C7 text-base pb-10">
                {doc.description_Proyect}
              </p>
              <h6 className="text-white text-sm font-manrope uppercase pb-2">
                Información de Proyecto
              </h6>

              <hr className="border-custom-484848" />
              <div className="py-2 flex justify-between">
                <p className="text-white text-sm font-manrope">Cliente</p>
                <p className="text-custom-C7C7C7 text-sm">
                  {doc.client_Proyect}
                </p>
              </div>


              <hr className="border-custom-484848" />
              <div className="py-2 flex justify-between">
                <p className="text-white text-sm font-manrope">Año</p>
                <p className="text-custom-C7C7C7 text-sm">
                  {doc.year_Proyect.toDate().toLocaleDateString()}
                </p>
              </div>


              <hr className="border-custom-484848" />
              <div className="py-2 flex justify-between">
                <p className="text-white text-sm font-manrope">Cargo</p>
                <p className="text-custom-C7C7C7 text-sm font-manrope">
                  {doc.role_Proyect}
                </p>
              </div>
              <hr className="border-custom-484848" />
            </div>
          </div>
        ))} */}
      </div>

      <AboutMi />
      {/* Opcion envio a mockapi #1 */}
      {/* <Footer formData={formData} handleInputChange={handleInputChange}/> */}

      {/* Opcion envio a mockapi #2 */}
      <Footer formData={formData} handleInputChange={handleInputChange} handleListContetForm={handleListContetForm}/>
    </>
  );
}
