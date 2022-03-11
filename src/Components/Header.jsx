import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark text-white p-3">
      <div className="container-fluid">
        <h1 className="navbar-brand">
          Agenda de contactos <i className="fa-solid fa-address-card mx-2"></i>
        </h1>
        <h1 className="navbar-brand">
          <i className="fa-brands fa-react"></i> React
        </h1>
      </div>
    </nav>
  );
};

export default Header;
