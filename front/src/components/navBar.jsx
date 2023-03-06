import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <div className="container-fluid border bg-dark">
          <h3 className="aligner">ДОК</h3>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/classifiers">
            Нормативно-справочная информация
            <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/journal">
            Журналы
          </NavLink>
          {/* <NavLink className="nav-item nav-link" to="/login">
          Авторизация
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
