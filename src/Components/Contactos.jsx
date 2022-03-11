import React from "react";
import { useReducer } from "react";
import { ContactosReducer } from "../Reducers/ContactosReducer";
import FormularioAdd from "./FormularioAdd";
import TablaContactos from "./TablaContactos";

const contactos = [
  {
    id: "1",
    nombre: "David",
    numero: "152613141",
  },
  {
    id: "2",
    nombre: "Estefania",
    numero: "153823116",
  },
];

const Contactos = () => {
  const reducer = useReducer(ContactosReducer, contactos);
  console.log(reducer);

  return (
    <div className="cotainer mt-3">
      <TablaContactos contactos={contactos} />
      <FormularioAdd />
    </div>
  );
};

export default Contactos;
