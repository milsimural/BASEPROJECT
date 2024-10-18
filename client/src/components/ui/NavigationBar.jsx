import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000000' }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 'bold' }}>
          FLASHCARDS
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: 'none' }} 
        >
          <span className="navbar-toggler-icon" style={{ backgroundColor: '#fff' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile" style={{ color: '#fff' }}>
                Username
              </NavLink>
            </li>
            <li className="nav-item" style={{ borderLeft: '2px solid #fff', height: 'auto', margin: '0 10px' }}></li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout" style={{ color: '#fff' }}>
                Logout
              </NavLink>
            </li>
            <li className="nav-item" style={{ borderLeft: '2px solid #fff', height: 'auto', margin: '0 10px' }}></li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{ color: '#fff' }}>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
