// src/components/Header.jsx
import { NavLink } from 'react-router-dom'; // Import NavLink for active link styling
import React from 'react';

function Header() {
  return (
    <header className="container mt-4">
      <div className="row justify-content-between align-items-center">
        <div className="col-4">
          <h1 className="display-4">My Portfolio</h1>
        </div>
        <div className="col-8 text-end">
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  end
                  activeClassName="active"
                >
                  About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/portfolio"
                  activeClassName="active"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/resume"
                  activeClassName="active"
                >
                  Resume
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
