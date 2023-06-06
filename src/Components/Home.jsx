import React from "react";

export default function Home() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="assets/images/shopping4.jpg"
              className="d-block w-100 "
              height="500px"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/shopping 2.jpg"
              className="d-block w-100"
              height="500px"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/shopping6.jpg"
              className="d-block w-100"
              height="500px"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>

      <div className="site-section site-section-sm site-blocks-1">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
              data-aos="fade-up"
              data-aos-delay=""
            >
              <div className="icon mr-4 align-self-start">
                <span className="icon-truck"></span>
              </div>
              <div className="text">
                <h2 className="text-uppercase">Free Shipping</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon mr-4 align-self-start">
                <span className="icon-refresh2"></span>
              </div>
              <div className="text">
                <h2 className="text-uppercase">Free Returns</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon mr-4 align-self-start">
                <span className="icon-help"></span>
              </div>
              <div className="text">
                <h2 className="text-uppercase">Customer Support</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section site-blocks-2">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0"
              data-aos="fade"
              data-aos-delay=""
            >
              <a className="block-2-item" href="#">
                <figure className="image">
                  <img
                    src="assets/images/women.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Women</h3>
                </div>
              </a>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
              data-aos="fade"
              data-aos-delay="100"
            >
              <a className="block-2-item" href="#">
                <figure className="image">
                  <img
                    src="assets/images/children.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Children</h3>
                </div>
              </a>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
              data-aos="fade"
              data-aos-delay="200"
            >
              <a className="block-2-item" href="#">
                <figure className="image">
                  <img
                    src="assets/images/men.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Men</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section block-3 site-blocks-2 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 site-section-heading text-center pt-4">
              <h2>Featured Products</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="nonloop-block-3 owl-carousel">
                <div className="item">
                  <div className="block-4 text-center">
                    <figure className="block-4-image">
                      <img
                        src="assets/images/cloth_1.jpg"
                        alt="Image placeholder"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="block-4-text p-4">
                      <h3>
                        <a href="#">Tank Top</a>
                      </h3>
                      <p className="mb-0">Finding perfect t-shirt</p>
                      <p className="text-primary font-weight-bold">$50</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="block-4 text-center">
                    <figure className="block-4-image">
                      <img
                        src="assets/images/shoe_1.jpg"
                        alt="Image placeholder"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="block-4-text p-4">
                      <h3>
                        <a href="#">Corater</a>
                      </h3>
                      <p className="mb-0">Finding perfect products</p>
                      <p className="text-primary font-weight-bold">$50</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="block-4 text-center">
                    <figure className="block-4-image">
                      <img
                        src="assets/images/cloth_2.jpg"
                        alt="Image placeholder"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="block-4-text p-4">
                      <h3>
                        <a href="#">Polo Shirt</a>
                      </h3>
                      <p className="mb-0">Finding perfect products</p>
                      <p className="text-primary font-weight-bold">$50</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="block-4 text-center">
                    <figure className="block-4-image">
                      <img
                        src="assets/images/cloth_3.jpg"
                        alt="Image placeholder"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="block-4-text p-4">
                      <h3>
                        <a href="#">T-Shirt Mockup</a>
                      </h3>
                      <p className="mb-0">Finding perfect products</p>
                      <p className="text-primary font-weight-bold">$50</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="block-4 text-center">
                    <figure className="block-4-image">
                      <img
                        src="assets/images/shoe_1.jpg"
                        alt="Image placeholder"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="block-4-text p-4">
                      <h3>
                        <a href="#">Corater</a>
                      </h3>
                      <p className="mb-0">Finding perfect products</p>
                      <p className="text-primary font-weight-bold">$50</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section block-8">
        <div className="container">
          <div className="row justify-content-center  mb-5">
            <div className="col-md-7 site-section-heading text-center pt-4">
              <h2>Big Sale!</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-7 mb-5">
              <a href="#">
                <img
                  src="assets/images/blog_1.jpg"
                  alt="Image placeholder"
                  className="img-fluid rounded"
                />
              </a>
            </div>
            <div className="col-md-12 col-lg-5 text-center pl-md-5">
              <h2>
                <a href="#">50% less in all items</a>
              </h2>
              <p className="post-meta mb-4">
                By <a href="#">Carl Smith</a>{" "}
                <span className="block-8-sep">&bullet;</span> September 3, 2018
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam iste dolor accusantium facere corporis ipsum animi
                deleniti fugiat. Ex, veniam?
              </p>
              <p>
                <a href="#" className="btn btn-primary btn-sm">
                  Shop Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
