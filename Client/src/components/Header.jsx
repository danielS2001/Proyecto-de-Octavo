import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import { useState } from 'react'
import Axios from 'axios'

const Header = () => {

    const [rol, setRol] = useState("");
    const [registered, setRegistered] = useState("");

    Axios.defaults.withCredentials = true;

    const logout = () => {
        Axios.post('http://localhost:3001/logout' , {
        }).then((response) => {
            console.log(response);
        })
        window.location.reload();
    }

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

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Citas</NavLink>
                            </li>
                            
                            {rol == 'admin' && (
                                <li classname="nav-item">
                                <NavLink className="nav-link" to="/citas">Consultar</NavLink>
                                </li>
                            )}
                            <li className="nav-item">
                                {rol == '' ? 
                                <p></p> :
                                <div className="container-sm" style={{"padding-top":"6px","textAlign":"center"}}>
                                    <p className="p-1 bg-primary text-white rounded glyphicon-user"><span className="fa fa-user me-1"></span>Usuario: {rol}</p>
                                </div>
                                }
                            </li>
                        </ul>
                    <NavLink className="navbar-brand mx-auto fw-bolder col-3"  to="/">
                        <div class="container" style={{"padding-right":"50px","textAlign":"center"}}>
                            Hospital del celular
                        </div></NavLink>
                    <Login/>
                    <Signup/>
                    <CartBtn/>
                    
                    {!rol == '' &&
                    <button onClick={logout} className="btn btn-outline-primary ms-2"><span className="fa fa-sign-out me-1"></span>Cerrar sesión</button>
                    }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
