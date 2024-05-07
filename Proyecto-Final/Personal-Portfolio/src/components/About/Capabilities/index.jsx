import { useEffect, useState } from "react";

export default function Capabilities(props) {
  return (
    <>
      {props.usersList.map((doc, index) => (
        <div key={index} className="flex gap-20 pt-20 pb-20">
          <div className="w-1/2">
            <h2 className=" text-white font-bebasNeue text-7xl">
              Mis Capacidades
            </h2>
          </div>

          <div className="w-1/2">
            <div>
              <p className="text-custom-C7C7C7 text-base pb-10">
               {doc.userList_abilitiesDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {doc.userLista_abilities
                .map((word, index) => (
                  <p key={index} className="text-white uppercase border border-custom-484848 rounded-3xl py-3 px-7 inline-block">
                    {word}
                  </p>
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
