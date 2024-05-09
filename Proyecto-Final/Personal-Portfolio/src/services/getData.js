import { useState, useEffect } from "react";

import { db } from "./firebase";
import { collection, query, getDocs, where } from "firebase/firestore";
import { getCurrentUser } from "./auth";

export function getDataUser(collectiondb) {

  const [proyects, setProyects] = useState([]);
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
    const fetchData = async () => {
      try {
        await fetchUser();
        
        const proyectsRef = collection(db, collectiondb);
        let consult;
        // console.log(collectiondb)
    if(user){           
      
       consult = query(proyectsRef, where("user_id", `==` , user.uid));
        // console.log(user.iud) //Solo si hay un usuario imprimiria.

    }else{
       consult = query(proyectsRef);
    }
        const querySnapshot = await getDocs(consult);

        // const proyectsTmp = querySnapshot.docs.map((doc) => doc.data());
        const proyectsTmp = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setProyects(proyectsTmp);
       console.log("Documento Id")
         console.log(proyects)
      // if (proyectsTmp.length > 0) {
      //   console.log("Documento Id:", querySnapshot.docs[0].id);
      // }

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [user]);

  return proyects;
}
