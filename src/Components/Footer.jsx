import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="site-footer border-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-6 mb-lg-0">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-4">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">Home</Link>
                    </li>
                    <li>
                      <Link to="#">About</Link>
                    </li>
                    <li>
                      <Link to="#">Shop</Link>
                    </li>
                    <li>
                      <Link to="#">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-4">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/Profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/Cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/Checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="#">Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           
            <div className="col-md-6 col-lg-6">
              <div className="block-5 mb-5">
                <h3 className="footer-heading mb-4">Contact Information</h3>
                <ul className="list-unstyled">
                  <li className="address">
                    Civil Road Shop -46,47 Gohana ,Haryana 131301
                  </li>
                  <li className="phone">
                    <Link to="tel://23923929210">+2 392 3929 210</Link>
                  </li>
                  <li className="email">Dheerajmlk123@gmail.com</li>
                </ul>
              </div>

              <div className="block-7">
                <form action="#" method="post">
                  <label htmlFor="email_subscribe" className="footer-heading">
                    Subscribe
                  </label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control py-4"
                      id="email_subscribe"
                      placeholder="Email"
                    />
                    <input
                      type="submit"
                      className="btn btn-sm btn-primary w-25"
                      value="subscribe"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center"></div>
        </div>
      </footer>
    </>
  );
}
