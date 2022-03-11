import React from "react";

const TablaContactos = ({ contactos }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contactos.map((contacto) => {
                return (
                  <tr key={contacto.id}>
                    <th key={contacto.id}> {contacto.id} </th>
                    <td key={contacto.name}> {contacto.nombre} </td>
                    <td key={contacto.numero}> {contacto.numero} </td>
                    <td>
                      <button className="btn btn-danger">Eliminar</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablaContactos;
