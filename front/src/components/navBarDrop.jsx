import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/classifiers/dest">
        <div className="container-fluid border bg-dark">
          <h3 className="aligner">док</h3>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Нормативно-справочная информация
            </a>
            <div
              className="dropdown-menu navbar-dark bg-dark border bg-dark"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <NavLink
                className="dropdown-item nav-link"
                to="/classifiers/dest"
              >
                Место доставки
              </NavLink>
              <NavLink
                className="dropdown-item nav-link"
                to="/classifiers/persontype"
              >
                Таблица должностей отправителей
              </NavLink>
              <NavLink
                className="dropdown-item nav-link"
                to="/classifiers/tdrc"
              >
                Направления передачи
              </NavLink>
              <NavLink
                className="dropdown-item nav-link"
                to="/classifiers/lists"
              >
                Список рассылки
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Журналы
            </a>
            <div
              className="dropdown-menu navbar-dark bg-dark border bg-dark"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <NavLink
                className="dropdown-item nav-link"
                to="/journals/mes-out-ns"
              >
                Исходящие сообщения
              </NavLink>
              <NavLink
                className="dropdown-item nav-link"
                to="/journals/mes-out-s"
              >
                Испходящие сообщения (важные)
              </NavLink>
              <NavLink
                className="dropdown-item nav-link"
                to="/journals/mes-in-ns"
              >
                Входящие сообщения
              </NavLink>
              <NavLink
                className="dropdown-item nav-link"
                to="/journals/mes-in-s"
              >
                Входящие сообщения (важные)
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
