import React, { useState } from 'react';
import Axios from 'axios';
import { useEffect } from 'react';

const Contact = () => {

    const [nameReg, setNameReg] = useState("");
    const [phoneReg, setPhoneReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [deviceReg, setDeviceReg] = useState("");
    const [descriptionReg, setDescriptionReg] = useState("");
    const [timeReg, setTimeReg] = useState("");
    const [dateReg, setDateReg] = useState("");

    const [appointmentStatus, setAppointmentStatus] = useState("");
    const [Name, setName] = useState("");

    const TableValidation = (nameReg == "" || phoneReg == "" || emailReg == "" || deviceReg == "" || descriptionReg == "" || timeReg == "" || dateReg == "" || timeReg == "09:30" || timeReg == "09:00" || timeReg == "08:30" || timeReg == "08:00" || timeReg == "07:30" || timeReg == "07:00" || timeReg == "06:00" || timeReg == "05:30" || timeReg == "05:00" || timeReg == "04:30" || timeReg == "04:00" || timeReg == "03:30" || timeReg =="03:00" || timeReg == "02:30" || timeReg =="02:00" || timeReg == "01:30" || timeReg == "01:00" || timeReg == "00:30" || timeReg == "00:00"); 

    Axios.defaults.withCredentials = true;

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const appointment = () => {
        TableValidation ? setAppointmentStatus(
            <div class="alert alert-danger" role="alert">
                Por favor, ingrese los datos correspondientes.
            </div>
        ) : (
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
            setAppointmentStatus(
            <div class="alert alert-success" role="alert">
                Cita agendada con exito!
            </div>);
            setTimeout (function() {
                window.location.reload();
            },2000);
        }));
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn == true) {
                setName(response.data.user[0].user);
            }
        });
    }, []);

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
                    <div className="col-md 5 d-flex justify-content-center animate__animated animate__fadeInLeft">
                        <img src="/assets/images/citas.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={onSubmit}>
                        {/* <form action="" id="" method="POST"> */}
                            <div class="mb-3">
                                <label for="" class="form-label">Nombre completo.</label>
                                <input type="text" required onChange={(e)=> {setNameReg(e.target.value);}} class="form-control" id="exampleForm" placeholder={Name}/>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Número de teléfono.</label>
                                <input type="text" required onChange={(e)=> {setPhoneReg(e.target.value);}} maxLength="10" class="form-control" id="exampleForm" placeholder="Ej. 6691010203"/>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Dirección de correo electrónico.</label>
                                <input type="email" required onChange={(e)=> {setEmailReg(e.target.value);}} class="form-control" id="exampleFormControlInput1" placeholder="Ej. nombre@hotmail.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Dispositivo.</label>
                                <input type="text" required onChange={(e)=> {setDeviceReg(e.target.value);}} class="form-control" id="exampleFormControlInput1" placeholder="Ej. Iphone 12, Motorola G7"/>
                            </div>
                            <div class="mb-3">
                                    <label for="" class="form-label">Descripción del fallo.</label>
                                    <textarea required onChange={(e)=> {setDescriptionReg(e.target.value);}} class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="El equipo tiene la pantalla quebrada."></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Fecha.</label>
                                <input type="date" required onChange={(e)=> {setDateReg(e.target.value);}} class="form-control" id="exampleFormControlInput3"/>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Hora.</label>
                                <input type="time" min="10:00" max="18:00" required onChange={(e)=> {setTimeReg(e.target.value);}} class="form-control" id="exampleFormControlInput2" />
                            </div>
                                <h5>{ appointmentStatus }</h5><br/>
                                <center>
                                    <button onClick={ appointment } type="submit" class="btn btn-outline-primary col-3">Agendar cita</button>
                                </center>
                                {/* <button type="reset"  class="btn btn-outline-primary col-3 offset-md-1" defaultValue="Limpiar">Limpiar datos</button><br /><br /> */}
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            )
}
export default Contact
