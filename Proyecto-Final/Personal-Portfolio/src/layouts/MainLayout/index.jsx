import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import { getDataUser } from "../../services/getData.js";

export default function MainLayout() {

  const usersList = getDataUser("Users_List");


  
  return (
    <>
      <div>
        <Navbar usersList={usersList} />

        {<Outlet />}
      </div>
    </>
  );
}
