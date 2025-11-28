
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " href="/About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Projects">Projetcs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Services">Services</a>
            </li>
           

          </ul>

          

        </div>

      </div>
    </nav>
  );
};

export default Navbar;

