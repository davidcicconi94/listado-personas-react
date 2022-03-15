import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ContactosReducer } from "../Reducers/ContactosReducer";
import TablaContactos from "./TablaContactos";

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
    <div className="cotainer mt-5">
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
