import React from "react";
import { Link } from "react-router-dom";

import "./header.css";
// Компонент отвечающий за шапку spa, и меню навигации
export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className=" btn navbar-brand" to="/">
          <h3>StarDB</h3>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/*Переход к нужным страницам(рендер) черз роутинг*/}
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto btn-group">
            <li>
              <Link to="/people/">People</Link>
            </li>
            <li>
              <Link to="/planets/">Planets</Link>
            </li>
            <li>
              <Link to="/starships/">Starships</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/secret-page">Secret</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
