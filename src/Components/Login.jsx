import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Login() {
  let [data, setdata] = useState({
    username: "",
    password: "",
  });
  function getData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setdata((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }
  function postDate(e) {
    e.preventDefault();
    alert(`
            Username : ${data.username}
            Password : ${data.password}
            `);
  }

  return (
    <>
      {/* <div className="row mt-3">
        <div className="col-md-2 col-1"></div>
        <div className="col-md-8 col 10">
          <h5 className="text-center">Login Page</h5>
          <form onSubmit={postDate}>
            <div className="p-3 p-lg-5 border">
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="name" className="text-black">
                    User Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={getData}
                    required
                    placeholder="Enter Your Username"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label for="password" className="text-black">
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required

                    onChange={getData}
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-12">
                  <input
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    value="Login"
                  />
                </div>
              </div>
          <div
            className="d-flex justify-space-between"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link to="#" className="text-decoraction-none">
              Forget Password
            </Link>
            <Link to="/signup" className="text-decoraction-none">
            New user?Create a account
            </Link>
          </div>
            </div>
          </form>
        </div>
        <div className="col-md-2 col-1"></div>
      </div> */}

      <div style={{width:"100vw"}}>
          <div className="login-box" style={{margin:"auto"}}>

            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Login To Your Account</p>

                <form onSubmit={postDate}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      onChange={getData}
                      placeholder="Username"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-user"></span>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={getData}
                      placeholder="Password"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label for="remember">Remember Me</label>
                      </div>
                    </div>

                    <div className="col-6">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block fs-1"
                      >
                      LogIn
                      </button>
                    </div>
                  </div>
                </form>

                <div className="social-auth-links text-center mb-3">
                  <p>- OR -</p>
                  <a href="#" className="btn btn-block btn-primary btn-sm">
                    <i className="fab fa-facebook mr-2"></i> Sign in using
                    Facebook
                  </a>
                  <a href="#" className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2"></i> Sign in using
                    Google+
                  </a>
                </div>

                <p className="mb-1">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
                <p className="mb-0">
                  <Link to="/signup" className="text-center">
                    New User? create a free account
                  </Link>
                </p>
              </div>
            </div>
          </div>
          </div>
    </>
  );
}
