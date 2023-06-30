import React, { useState } from 'react'
import LeftNav from './LeftNav.jsx'
import { Link } from 'react-router-dom'


export default function AddMaincategory() {
    var [name, setname] = useState("")
    function getdata(e) {
        setname(e.target.value)
    }
    async function postData(e) {
        e.preventDefault()
        alert("Name" + name)
    }
    return (
        <>
            <div className="row">
                <div className="col-md-3 col-12">
                    <LeftNav />
                </div>
                <div className="col-md-9 col-12">
                    <h5 className='text-center p-3'>Maincategory <Link to="/admin-add-maincategory"><span class="material-symbols-outlined float-right">add</span></Link></h5>
                    <form onChange={postData}>
                        <div className="p-3 p-lg-5 border">
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <label htmlFor="name" className="text-black">
                                        Name <span className="text-danger" placeholder='Enter Maincategory'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        onChange={getdata}
                                        placeholder='Enter Maincategory'
                                    />
                                </div>
                            </div>
                                    <input
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-block"
                                        value="Send Message"
                                    />

                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}
