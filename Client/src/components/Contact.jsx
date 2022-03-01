import React, { useState } from 'react'
import Axios from 'axios';

const Contact = () => {

    const [nameReg, setNameReg] = useState("");
    const [phoneReg, setPhoneReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [deviceReg, setDeviceReg] = useState("");
    const [descriptionReg, setDescriptionReg] = useState("");
    const [timeReg, setTimeReg] = useState("");
    const [dateReg, setDateReg] = useState("");

    const [appointmentStatus, setAppointmentStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const appointment = () => {
        Axios.post('http://localhost:3001/appointment', {
            name: nameReg, 
            phone: phoneReg,
            email: emailReg,
            device: deviceReg,
            description: descriptionReg,
            time: timeReg,
            date: dateReg
        }).then((response) => {
            console.log(response);
            setAppointmentStatus('Se ha creado una cita de manera exitosa');
        });
    }

    // const Dates = () => {
    //     Axios.get("http://localhost:3001/appointment").then((response) => {
    //     });
    // }

    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Agendar cita</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/citas.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        {/* <form > */}
                            <div class="mb-3">
                                <label for="" class="form-label">Nombre completo.</label>
                                <input type="text" onChange={(e)=> {setNameReg(e.target.value);}} class="form-control" id="exampleForm" placeholder="Juan Perez "/>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Número de teléfono.</label>
                                <input type="text" onChange={(e)=> {setPhoneReg(e.target.value);}} maxLength="10" class="form-control" id="exampleForm"/>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Dirección de correo electrónico.</label>
                                <input type="email" onChange={(e)=> {setEmailReg(e.target.value);}} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Dispositivo.</label>
                                <input type="text" onChange={(e)=> {setDeviceReg(e.target.value);}} class="form-control" id="exampleFormControlInput1" placeholder="Ej. Iphone 12, Motorola G7"/>
                            </div>
                            <div class="mb-3">
                                    <label for="" class="form-label">Descripción del fallo.</label>
                                    <textarea onChange={(e)=> {setDescriptionReg(e.target.value);}} class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="El equipo tiene la pantalla quebrada."></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Hora.</label>
                                <input type="text" onChange={(e)=> {setTimeReg(e.target.value);}} class="form-control" id="exampleFormControlInput2" placeholder="Ej. 1:30 p.m."/>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Fecha (Año-Mes-Dia).</label>
                                <input type="text" onChange={(e)=> {setDateReg(e.target.value);}} class="form-control" id="exampleFormControlInput3" placeholder="Ej. 2022-03-15/"/>
                            </div>
                                <h5>{ appointmentStatus }</h5>
                                <button onClick={appointment} type="submit" class="btn btn-outline-primary">Agendar</button> 
                                {/* <br /><br /><button onClick={Dates} class="btn btn-outline-primary">Ver citas</button> */}
                        {/* </form> */}
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact
