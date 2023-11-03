import React, { useState} from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {Link} from "react-router-dom"
// import axios from 'axios'


function DoLogin() {
  return (
    <div>
      <div
        class="container"
        style={{
          width: "20rem",
          height: "55vh",
          border: "3px solid black",
          borderRadius: "20px",
          margin: "5vh auto",
          alignItems: "center",
          backgroundColor: "darkorange",
          color: "white",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Doner Login Page</h3>
        <form class="px-4 py-3">
          <div class="mb-3">
            <label for="exampleDropdownFormEmail1" class="form-label">
              Doner Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email"
              // onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <div class="mb-3">
            <label for="exampleDropdownFormPassword1" class="form-label">
              Doner Password
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
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="dropdownCheck"
              />
              <label class="form-check-label" for="dropdownCheck">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" 
          class="btn btn-primary">
            Sign in
          </button>
        </form>
        <div class="dropdown-divider"></div>
        <Link class="dropdown-item" to="/doregstration">
          New around here? Sign up
        </Link>
        <Link class="dropdown-item" to="/forgotpassword">
          Forgot password?
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default DoLogin;
