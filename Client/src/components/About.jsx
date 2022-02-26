import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">Acerca de nosotros</h1>
                        <p className="lead mb-4">
                            Somos una microempresa que lleva años en el mercado/industria de la 
                            reparacion celular, esta a tenido con el tiempo varios establecimientos
                            para poderse expandir y asi llegar a mas personas.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Poner cita</NavLink>
                        <br />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/local.jfif" alt="About Us" class="img-fluid rounded mx-auto d-block " height="400px" width="450px" />
                    </div>
                </div>
                
            <h4 className=" text-primary fw-bold mb-4 ">Horarios de atención</h4>
            <ul>
                <li>Lunes - sabado
                    <ul>
                        <li>
                            <p>10:00 a.m - 6:30 p.m</p>
                        </li>
                    </ul>
                </li>
                <br />
                <li>Domingo
                    <ul>
                        <li>
                            10:00 a.m - 3:00 p.m
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default About
