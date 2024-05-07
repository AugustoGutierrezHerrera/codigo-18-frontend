import { useState } from "react";
import { createDataForm } from "../../services/httpAPI.js";
import { Presentation, Proyects, Footer } from "../../components";
import { AboutMe } from "../../components/About/index.js";
import { getDataUser } from "../../services/getData.js";
import { Link } from "react-router-dom";

export default function Home() {
  const proyects = getDataUser("Proyects");
  console.log("recibo lo de proyects");
  console.log(proyects);

  const usersList = getDataUser("Users_List");
  console.log("recibo lo de usuarios");
  console.log(usersList);

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
      <Presentation usersList={usersList} />

      <Proyects proyects={proyects} />

      <AboutMe usersList={usersList}>
        <div className=" pb-60">
          <p className="text-custom-D3E97A font-manrope uppercase hover:underline">
            <Link to={"/about"}>Más Sobre Mí</Link>
          </p>
        </div>
      </AboutMe>
      <Footer
        usersList={usersList}
        formData={formData}
        handleInputChange={handleInputChange}
        handleListContetForm={handleListContetForm}

      />
    </>
  );
}
