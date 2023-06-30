import React from 'react'
import LeftNav from './LeftNav.jsx'
import { Link } from 'react-router-dom'

export default function Adminhome() {
  return (
    <>
      <div className="row">
        <div className="col-md-3 col-12">
          <LeftNav />
        </div>
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="col-md-6">
              <img src="assets/images/person_1.jpg" height="459px" alt="" />
            </div>
            <div className="col-md-6">
              <table className='table table-bordered'>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>Dheeraj Malik</td>
                  </tr>
                  <tr>
                    <th>User name</th>
                    <td>Admin</td>
                  </tr>
                  <tr>
                    <th>Email address</th>
                    <td>Dheerajmlk123@gmail.com</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>1234567890</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <Link to="#"className="btn btn-primary btn-lg btn-block">Update Profile</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
