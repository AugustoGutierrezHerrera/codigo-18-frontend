import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/auth";
import { getDataUser } from "../../services/getData";
import { Navbar } from "../../components";

export default function FormLayouts() {
  const [showPage, setShowPage] = useState(false);
  const navigate = useNavigate();

 

  const fetchUser = async () => {
    try {
      const user = await getCurrentUser();

      if (user) {
        navigate("/form");
        setShowPage(true);
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const usersList = getDataUser("Users_List");

  return (
    <>
    
      <Navbar usersList={usersList} />

      <div>{showPage && <Outlet />}</div>
    </>
  );
}
