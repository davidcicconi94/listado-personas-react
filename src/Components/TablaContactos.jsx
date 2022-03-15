import React from "react";
import FormularioAdd from "./FormularioAdd";

const TablaContactos = ({
  contactos = [],
  dispatch,
  formView,
  setFormView,
}) => {
  const handleDelete = (id) => {
    const actionDelete = {
      type: "delete",
      payload: id,
    };
    dispatch(actionDelete);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* button */}
          <button
            className="btn btn-secondary"
            onClick={() => {
              setFormView(!formView);
            }}
          >
            {!formView ? "+ Agregar Contacto" : "- Cerrar Formulario"}
          </button>
          <table className="table table-dark table-hover mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Número</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {contactos.map((contacto) => {
                const shortId = contacto.id.split("-")[0];

                return (
                  <tr key={shortId}>
                    <th key={shortId}> {shortId} </th>
                    <td key={contacto.name}> {contacto.nombre} </td>
                    <td key={contacto.numero}> {contacto.numero} </td>
                    <td>
                      <button
                        onClick={() => handleDelete(contacto.id)}
                        className="btn btn-danger"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          {formView && <FormularioAdd dispatch={dispatch} />}
        </div>
      </div>
    </div>
  );
};

export default TablaContactos;
