import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function SignUp() {
  let [data, setdata] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
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
    if (data.password === data.cpassword) {
      alert(`
            Name :${data.name}
            Username : ${data.username}
            Email : ${data.email}
            Phone : ${data.phone}
            Password : ${data.password}
    
            `);
    } else {
      alert("Password And Confirmed Password doesn't Matched");
    }
  }
  return (
    <>
      <div className="container">
        <h5 className="text-center">Signup page</h5>
        <form onSubmit={postDate}>
          <div className="p-3 p-lg-5 border">
            <div className="form-group row">
              <div className="col-md-6 col-12">
                <label htmlFor="name" className="text-black">
                  Full Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                  onChange={getData}
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="col-md-6 col-12">
                <label htmlFor="name" className="text-black">
                  User Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  required
                  onChange={getData}
                  placeholder="Enter Your Username"
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-6 col-12">
                <label htmlFor="name" className="text-black">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  onChange={getData}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="col-md-6 col-12">
                <label htmlFor="phone" className="text-black">
                  Phone Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  required
                  onChange={getData}
                  placeholder="Enter Your Phone no."
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-6 col-12">
                <label for="password" className="text-black">
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                  name="password"
                  onChange={getData}
                  placeholder="Password"
                />
              </div>
              <div className="col-md-6 col-12">
                <label for="cpassword" className="text-black">
                  Confirm Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  required
                  name="cpassword"
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
                  value="Create Account"
                />
              </div>
            </div>
            <div
              className="d-flex justify-space-between"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Link to="/login" className="text-decoraction-none">
                Already User? login to Your account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
