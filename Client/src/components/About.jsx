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
                            Somos una microempresa dedicada a la reparación de celulares y a la venta de accesorios.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Poner cita</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
