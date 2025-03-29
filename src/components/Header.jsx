import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg bg-body-tertiary bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Recipee Organiser
          </Link>
          <div  >
            <ul className="navbar-nav d-flex flex-row"> {/* Used flex-row to align items horizontally */}
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: "blue" }}>
                  Recipees
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-recipe"  style={{ color: "blue" }}>
                  Add Recipees
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;