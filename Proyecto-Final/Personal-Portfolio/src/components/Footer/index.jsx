import linkedin from "../../assets/presentation/linkedin.svg";
import githab from "../../assets/presentation/githab.svg";
import twitter from "../../assets/presentation/twitter.svg";
import instagram from "../../assets/presentation/instagram.svg";
import { useState } from "react";
import { createDataForm } from "../../services/httpAPI.js";


export default function Footer(props) {
  
  const handleFormSubmit = async (e) => {
    // No actualiza la pagina
    e.preventDefault();

    const contactData = {
       name:  props.formData.nameInput,
       email: props.formData.emailInput,
       cell: props.formData.cellInput,
       message: props.formData.messageInput,

    }
      // Opcion envio a mockapi #1
      // createDataForm(contactData);

      //Opcion envio a mockapi #2
      await props.handleListContetForm(contactData)
      console.log(contactData)
    

  };

  const underlineStyle = {
    textDecoration: "underline",
    textDecorationColor: "#D3E97A",
  };

  return (
    <section id="footer-section">
      <div >
        <hr className=" border border-custom-484848" />
      </div>
      <div className="flex gap-10 pt-20 pb-20" >
        <div className="w-1/2 flex flex-col" >
          <div>
            <h2 className="text-white font-bebasNeue text-7xl">Contactame</h2>
          </div>
          <div>
            <p className="text-custom-C7C7C7 font-manrope text-base pt-3">
              Mi correo de contacto: <span className="text-white " style={underlineStyle}>robertgarcia@gmail.com
              </span>
            </p>
            <p className=" text-custom-C7C7C7 font-manrope text-base">
              Para mas información, aqui esta mi <span className="text-white" style={underlineStyle}>
                resumen
              </span>
            </p>
          </div>
          <div className="flex gap-7 pt-5">
            <img src={linkedin} alt="Linkedin" />
            <img src={githab} alt="Githab" />
            <img src={twitter} alt="Twitter" />
            <img src={instagram} alt="Instagram" />
          </div>
          <div className="mt-auto">
            <p className="text-custom-C7C7C7 font-manrope">
              © 2023 Robert Garcia
            </p>
          </div>
        </div>

        {/*-------------- FORMULARIO --------------*/}
        <div className="w-1/3">
          <form onSubmit={handleFormSubmit} className="flex flex-col">
            <label className="text-custom-C7C7C7 font-manrope text-base pb-1">
              Nombre
            </label>
            <input
              id="name"
              name="nameInput"//para que sirve nameFer*33
              type="text"
              onChange={props.handleInputChange}
              value={props.formData.nameInput}
              placeholder="Escribe tu nombre(s)"
              className="w-[450px] h-[51px] bg-custom-1A1A1A mb-6 text-custom-C7C7C7 font-manrope text-base px-5 focus:outline-none"
            />

            <label className="text-custom-C7C7C7 font-manrope text-base pb-1">
              Email
            </label>
            <input
              id="email"
              name="emailInput"
              type="email"
              onChange={props.handleInputChange}
              value={props.formData.emailInput}
              placeholder="email@ejemplo.com"
              className="w-[450px] h-[51px] bg-custom-1A1A1A  mb-6 text-custom-C7C7C7 font-manrope text-base px-5 focus:outline-none"
            />

            <label className="text-custom-C7C7C7 font-manrope text-base pb-1">
              Teléfono
            </label>
            <input              
              id="telefono"
              name="cellInput"
              type="text"
              onChange={props.handleInputChange}
              value={props.formData.cellInput}
              placeholder="+51 999-888-777"
              className="w-[450px] h-[51px] bg-custom-1A1A1A  mb-6 text-custom-C7C7C7 font-manrope text-base px-5 focus:outline-none"
            />

            <label className="text-custom-C7C7C7 font-manrope text-base pb-1">
              Mensaje
            </label>
            <textarea            
              id="message"
              name="messageInput"
              type="message"
              rows={4}
              onChange={props.handleInputChange}
              value={props.formData.messageInput}
              placeholder="Mensaje..."
              className="w-[450px] h-[51px] bg-custom-1A1A1A  mb-6 text-custom-C7C7C7 font-manrope text-base px-5 pt-3 focus:outline-none"
            />
            <div>
            <button className="text-custom-0A0A0A bg-custom-D3E97A font-manrope font-bold text-base px-7 py-3 rounded-3xl  uppercase">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
