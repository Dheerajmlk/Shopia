import React, { useState } from "react";

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
      <div className="row mt-3">
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
            </div>
          </form>
          
        </div>
        <div className="col-md-2 col-1"></div>
      </div>
    </>
  );
}
