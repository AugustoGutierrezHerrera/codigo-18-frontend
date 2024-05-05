import { Footer } from "../../components";
import { AboutMe, Capabilities, Experience } from "../../components/About";
import { useState } from "react";

import linkedin from "../../assets/presentation/linkedin.svg";
import githab from "../../assets/presentation/githab.svg";
import sobreMi from "../../assets/about/sobreMi.svg";

export default function AboutPage() {
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

  return (
    <>
      <AboutMe>
        <div className="pb-20">
          <div className="flex items-center gap-4 pt-10">
            <div>
              <button
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
                Descarga Mí CV
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
      </AboutMe>

      <div className="pb-20">
        <img src={sobreMi} alt="" />
      </div>

      <Capabilities />
      <Experience />


      <Footer
        formData={formData}
        handleInputChange={handleInputChange}
        handleListContetForm={handleListContetForm}
      />
    </>
  );
}
