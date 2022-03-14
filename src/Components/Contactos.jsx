import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ContactosReducer } from "../Reducers/ContactosReducer";
import FormularioAdd from "./FormularioAdd";
import TablaContactos from "./TablaContactos";

// const contactos = [
//   {
//     id: "1",
//     nombre: "David",
//     numero: "152613141",
//   },
//   {
//     id: "2",
//     nombre: "Estefania",
//     numero: "153823116",
//   },
// ];

const init = () => {
  const contactos = localStorage.getItem("contactos");
  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  const [formView, setFormView] = useState(false);

  return (
    <div className="cotainer mt-3">
      {/* <button
        className="btn btn-secondary"
        onClick={() => {
          setFormView(!formView);
        }}
      >
        + Agregar Contacto
      </button> */}

      {formView && <FormularioAdd dispatch={dispatch} />}

      <TablaContactos
        setFormView={setFormView}
        formView={formView}
        contactos={state}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Contactos;
