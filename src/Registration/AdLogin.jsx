import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {Link} from "react-router-dom"


function AdLogin() {
  return (
    <div>
      <div class="container" style={{width:'20rem', height:'50vh', border:'5px solid orange', borderRadius
      :'20px', margin:'5vh auto', alignItems:'center', backgroundColor:'blue', color:'white'}}>
        <h3 style={{textAlign:'center'}}>Admin Login Page</h3>
        <form class="px-4 py-3">
          <div class="mb-3">
            <label for="exampleDropdownFormEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email"
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
            />
          </div>
          <button type="submit" class="btn btn-light">
            Sign in
          </button>
        </form>
        {/* <div class="dropdown-divider"></div> */}
        <Link class="dropdown-item" to="/forgotpassword">
          Forgot password?
        </Link>
      </div>
      <hr />
    </div>
    
  );
}

export default AdLogin;
