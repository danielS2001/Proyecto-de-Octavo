import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {

    return (
        <>
        <NavLink to="/session" className="btn btn-outline-primary ms-2"> 
        <span className="fa fa-sign-in me-1"></span> Iniciar sesión
        </NavLink>


            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
              
            </button> */}

            {/* <!-- Modal --> */}
            {/* <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Iniciar sesión</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                        </div>
                    </div>
                </div>
            </div> */}
        </>
)}

    export default Login
