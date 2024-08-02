import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/temple.svg";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="Tadjon logo" />
          <span>The Tadjon</span>
        </li>

        <li>
          <Link to="/login">Войти</Link>
        </li>
        <li>
          <Link to="/signup">Регистрация</Link>
        </li>
        <li>
          <button className="btn">Выйти</button>
        </li>
      </ul>
    </nav>
  );
};
