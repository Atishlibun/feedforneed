import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {Link} from "react-router-dom"
// import axios from "axios";


function DoRegistration() {

  
  return (
    <div>
      <div
        class="container"
        style={{
          width: "20rem",
          height: "38rem",
          border: "3px solid black",
          borderRadius: "20px",
          margin: "5vh auto",
          alignItems: "center",
          backgroundColor: "darkorange",
          color: "white",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Registration Page</h3>
        <form class="px-4 py-3" action="post">
        <div class="mb-3">
            <label for="exampleDropdownFormEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="Enter Your Name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleDropdownFormEmail1" class="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div class="mb-3">
            <label for="exampleDropdownFormEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email"
              // onChange={(e)=>{setEmail(e.target.value)}}

            />
          </div>
          <div class="mb-3">
            <label for="exampleDropdownFormPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
              // onChange={(e)=>{setPassword(e.target.value)}}

            />
          </div>
          <div class="mb-3">
            <label for="exampleDropdownFormPassword1" class="form-label">
              Re-Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Re-Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Sign Up
          </button>
        </form>
        <div class="dropdown-divider"></div>
        <Link class="dropdown-item" to="/dologin">
          <span>Already Signup ? </span>Login
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default DoRegistration;
