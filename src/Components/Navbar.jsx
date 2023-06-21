import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="site-wrap mt-5">
        <header className="site-navbar mt-4" role="banner">
          <div className="site-navbar-top ">
            <div className="container ">
              <div className="row align-items-center">
                <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                  <form action="" className="site-block-top-search">
                    <span className="icon icon-search2"></span>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Search"
                    />
                  </form>
                </div>

                <div className="col-12 mb-1 mb-md-0 col-md-4 order-1 order-md-2 text-center ">
                  <div className="site-logo">
                    <Link to="/" className="js-logo-clone">
                      Shopia
                    </Link>
                  </div>
                </div>

                <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                  <div className="site-top-icons">
                    <ul>
                      {localStorage.getItem("login") ? (
                        <>
                          <li>
                            <Link to="/profile">
                              <span className="icon icon-person "></span>
                            </Link>
                            Profile
                          </li>
                          <li>
                            <Link to="/cart" className="site-cart mx-3">
                              <span className="icon icon-shopping_cart "></span>
                              Cart
                              <span className="count">2</span>
                            </Link>
                          </li>
                        </>
                      ) : (
                        <li>
                          <Link to="/login">
                            <i class="bi bi-box-arrow-in-right"> Login</i>
                          </Link>
                        </li>
                      )}
                      <li className="d-inline-block d-md-none ml-md-0">
                        <Link
                          to="#"
                          className="site-menu-toggle js-menu-toggle"
                        >
                          <span className="icon-menu"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav
            className="site-navigation text-right text-md-center   "
            role="navigation"
          >
            <div className="container">
              <ul
                className="site-menu js-clone-nav d-none d-md-block fixed-top bg-white"
                style={{ width: "100%", height: "55px", alignItems: "center" }}
              >
                <li className=" active  ">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/Admin">Admin</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
