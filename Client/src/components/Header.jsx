import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import { useState } from 'react'
import Axios from 'axios'

const Header = () => {

    const [rol, setRol] = useState("");

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn == true) {
                setRol(response.data.user[0].user);
            }
        });
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid py-2">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Acerca de</NavLink>
                            </li>

                            {!rol == '' && (
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Citas</NavLink>
                            </li>
                            )}
                            
                            {rol == 'admin' && (
                                <li classname="nav-item">
                                <NavLink className="nav-link" to="/citas">Consultar</NavLink>
                                </li>
                            )}
                            
                            
                            
                        </ul>
                    <NavLink className="navbar-brand mx-auto fw-bolder col-2"  to="/">Hospital del celular</NavLink>
                    <br/>
                    <Login/>
                    <Signup/>
                    <CartBtn/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
