import React from 'react'

export default function LeftNav() {
  return (
    <>
      {/* <!-- Main Sidebar Container --> */}
      <aside className=" sidebar-light-primary elevation-3">

        {/* <!-- Sidebar --> */}
        <div className="sidebar">
          {/* <!-- Sidebar user panel (optional) --> */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="assets/AdminLTE/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">Admin</a>
            </div>
          </div>



          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* <!-- Add icons to the links using the .nav-icon className
             with font-awesome or any other icon font library --> */}
              <li className="nav-item menu-open">


              </li>
              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    Users

                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy"></i>
                  <p>
                    Main Category

                  </p>
                </a>
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy"></i>
                  <p>
                    Sub Category

                  </p>
                </a> <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy"></i>
                  <p>
                    Brands

                  </p>
                </a> <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy"></i>
                  <p>
                    Products

                  </p>
                </a> <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy"></i>
                  <p>
                    CheckOut

                  </p>
                </a> <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy"></i>
                  <p>
                    News Letters

                  </p>
                </a> <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy"></i>
                  <p>
                    Contact

                  </p>
                </a>

              </li>

            </ul>



          </nav>

        </div>
      </aside>
    </>
  )
}
