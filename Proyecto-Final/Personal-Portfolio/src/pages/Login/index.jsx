import { useState } from "react";
import { createUser } from "../../services/auth";
import { TextField } from "../../components";
import { Link } from "react-router-dom";

export default function LoginPage() {
  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await createUser(values.email, values.password);
  //   setValues({
  //     email: "",
  //     password: "",
  //   });
  //};

  return (
    <>
      <section className="max-w-xl m-auto flex flex-col justify-center h-[100vh]">
        <div className="bg-custom-1A1A1A p-16 rounded-md w-full ms:max-w-ms ">
          <div className="my-5">
            <h2
              className="
             text-center
             text-white
             text-3xl 
             font-bold 
             font-inter
             uppercase"
            >
              Bienvenido 🤗
            </h2>
          </div>

          <form  className="my-5">
            <div className="my-5">
              <TextField
                type="email"
                name="email"
                placeholder="Ingresa tu correo"
              />
            </div>
            <div className="my-5">
              <TextField
                type="password"
                name="password"
                placeholder="Ingresa tu password"
              />
            </div>
            <div className="my-5">
              <button
                className="
              px-5
              py-2
              rounded-md
            text-white
            bg-custom-1A1A1A
              border-dashed
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
                Iniciar Sesión
              </button>
            </div>
          </form>
          <div className="text-center mt-5">
            <p
              className="
            text-white 
            font-manrope
            text-base "
            >
              ¿No tienes una cuenta?
              <Link
                className="underline hover:text-custom-C7C7C7"
                to={"/signup"}
              >
                Registrate
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
