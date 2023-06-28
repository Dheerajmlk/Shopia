import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftNav() {
  return (
    <>
      <div class="list-group">
        <Link to="/admin" class="list-group-item list-group-item-action">Home <i class="bi bi-house float-right"></i></Link>
        <Link to="/admin-user" class="list-group-item list-group-item-action">User <i class="bi bi-person float-right"></i></Link>
        <Link to="/admin-maincategory" class="list-group-item list-group-item-action">Main Categories<i class="bi bi-bag float-right"></i></Link>
        <Link to="admin-subcategory" class="list-group-item list-group-item-action">Sub Categories<i class="bi bi-bag float-right"></i></Link>
        <Link to="/admin-brands" class="list-group-item list-group-item-action">Brands<i class="bi bi-bag float-right"></i></Link>
        <Link to="/admin-product" class="list-group-item list-group-item-action">Products<i class="bi bi-bag float-right"></i></Link>
        <Link to="/admin-checkout" class="list-group-item list-group-item-action">Checkouts<i class="bi bi-bag-check float-right"></i></Link>
        <Link to="/admin-contact" class="list-group-item list-group-item-action">Contact<i class="bi bi-phone float-right"></i></Link>
        <Link to="/admin-newslatter" class="list-group-item list-group-item-action ">Newslatters<i class="bi bi-envelope float-right"></i></Link>
      </div>
    </>
  )
}
