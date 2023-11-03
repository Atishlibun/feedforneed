import React from "react";

function ForgotPassword() {
  return (
    <div>
      <div
        class="container"
        style={{
          width: "20rem",
          height: "65vh",
          border: "3px solid black",
          borderRadius: "20px",
          margin: "5vh auto",
          alignItems: "center",
          backgroundColor: "darkorange",
          backgroundImage:'url(https://dbdzm869oupei.cloudfront.net/img/sticker/preview/58817.png)',
          color: "black",
          backgroundSize:'cover'
        }}
      >
        <h3 style={{ textAlign: "center" }}>Password Reset Page</h3>
        <form class="px-4 py-3">
          <div class="mb-3">
            <label for="exampleDropdownFormEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="Enter E-mail id"
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
            <label for="exampleDropdownFormPassword1" class="form-label">
              New Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="New Password"
            />
          </div>
          <div class="mb-3">
            <label for="exampleDropdownFormPassword1" class="form-label">
              New Re-Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="New Re-Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Reset Password
          </button>
        </form>
      </div>
      <hr />
    </div>
  );
}

export default ForgotPassword;
