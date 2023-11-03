import React from "react";
import PropTypes from "prop-types";

// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom"


function Navbar(props) {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 style={{ marginLeft: "20px" }}>
          <Link className="navbar-brand" to="/">
            <span style={{ color: "red" }}>F</span>eed{" "}
            <span style={{ color: "red" }}>F</span>or{" "}
            <span style={{ color: "red" }}>N</span>eed
          </Link>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/aboutus">
                Aboutus
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Login
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/adlogin">
                  Admin
                </Link>
                <Link className="dropdown-item" to="/dologin">
                  Donor
                </Link>
                <Link className="dropdown-item" to="/relogin">
                  Receiver
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contactus">
                Contactus
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="#">
                <h6 style={{ marginLeft: "80px" }}>
                  <i className="fa-solid fa-users"></i> User Name
                </h6>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="#">
                <h6 style={{ marginLeft: "80px" }}>
                  <i class="fa-solid fa-address-card"></i> Address
                </h6>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="#">
                <h5 style={{ marginLeft: "80px" }}>
                  <i class="fa-solid fa-bell"></i>
                </h5>
              </Link>
            </li>
          </ul>

          <form
            className="form-inline my-2 my-lg-0"
            style={{ marginRight: "20px" }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              // onClick={() => {
              //   props.toggleMode();
              // }}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlfor="flexSwitchCheckDefault"
            ></label>
          </div>
        </div>
      </nav>
    </div>
    
    </>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here",
};
