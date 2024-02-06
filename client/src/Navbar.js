import React from 'react'
import { Link } from 'react-router-dom';
import logo from "./images/utilities/carbonNormiLogo.jpg"

function Navbar() {
  return (
    <div className="mb-4">
      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/home">
            <img height="60px" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            style={{ justifyContent: "space-around" }}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item mx-5 active">
                <Link className="nav-link" aria-current="page" to="./home">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link className=" nav-link" to="./activities">
                  Faculties
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link className="nav-link" to="./carbonNetZero">
                  Carbon Net Zero
                </Link>
              </li>
              <li className=" nav-item  mx-5">
                <Link className="nav-link" to="./login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar