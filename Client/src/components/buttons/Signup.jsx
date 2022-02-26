import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
    

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal"> */}
            <NavLink to="/registration" className="btn btn-outline-primary ms-2"> 
            <span className="fa fa-user-plus me-1"></span> Regístrate
            </NavLink>
            {/* </button> */}

            {/* <!-- Modal --> */}
            {/* <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registro</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            


                        </div> */}
    </>
    )
}

export default Signup
