import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";

const FormularioAdd = ({ dispatch }) => {
  const [data, setData] = useState({ nombre: " ", numero: " " });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      nombre: data.nombre,
      numero: data.numero,
    },
  };

  const handleAdd = () => {
    if (data.nombre === " " || data.numero === " ") {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Alguno de los campos no ha sido completado.",
      });

      return false;
    } else {
      Swal.fire(
        "¡Contacto Agregado!",
        `${data.nombre} se agregó a tu agenda.`,
        "success"
      );
      dispatch(actionAdd);
      data.nombre = " ";
      data.numero = " ";

      return true;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <label className="mx-1 d-grid gap-2">
            Nombre:
            <input
              onChange={handleChange}
              name="nombre"
              value={data.nombre}
              type="text"
              className="form-control"
              autoComplete="off"
              autoFocus
            />
          </label>
          <label className="mx-1 d-grid gap-2 mt-3">
            Número:
            <input
              onChange={handleChange}
              name="numero"
              type="text"
              value={data.numero}
              className="form-control"
              autoComplete="off"
            />
          </label>
          <div className="mx-1 d-grid gap-2">
            <button onClick={handleAdd} className="btn btn-info mt-3">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioAdd;
