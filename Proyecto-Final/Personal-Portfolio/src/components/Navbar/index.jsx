import { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();


  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  //Función Click
  const handleClick = () => {
    //Busca
    const sectionFooter = document.getElementById("footer-section");
    sectionFooter.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between items-center py-5">
      <div className="flex items-center gap-4">
      
        {!user && ( props.usersList.map((doc, index) => ( 
         
          <div key={index}>
            <p className="font-bebasNeue text-xl text-textColor">
            {doc.userList_name}{" "}{doc.userList_astName}
            </p>
          </div>
        
      )))}
        {user && (
          <div className="flex items-center gap-2">
            <div>
              <img
                src={user?.photoURL}
                alt=""
                className="w-[60px] h-[60px] object-cover rounded-full"
              />
            </div>
            <div>
              <p className="text-white font-manrope text-xs ">
                {user?.displayName}
              </p>
              <p className="text-white font-manrope text-xs ">{user?.email}</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <ul className="flex gap-8 list-none">
          <li>
            <a onClick={() =>navigate("/")} className="font-inter text-sm text-custom-C7C7C7 cursor-pointer  hover:text-white hover:underline">              
              Portafolio
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/about")} className="font-inter text-sm text-custom-C7C7C7 cursor-pointer hover:text-white hover:underline">
              Sobre Mi
            </a>
          </li>
          <li>
            <a
              className="font-inter text-sm text-custom-C7C7C7 cursor-pointer hover:text-white hover:underline"
              onClick={handleClick}
            >
              Contacto
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/form")} className="font-inter text-sm text-custom-C7C7C7 cursor-pointer hover:text-white hover:underline">
              Configuración
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/login")} className="font-inter text-sm text-custom-C7C7C7 cursor-pointer hover:text-white hover:underline">
            Login            
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
