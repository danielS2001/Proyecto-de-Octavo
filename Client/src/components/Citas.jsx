import React, { useState } from 'react';
import Axios from 'axios';
import { useEffect } from 'react'; 


export default function Citas() {

    const [listaCitas, setListaCitas] = useState([]);
    const [role, setRole] = useState("");

    Axios.defaults.withCredentials = true;

    const VerCitas = () => {
        Axios.get('http://localhost:3001/select').then((response) => {
            setListaCitas(response.data);
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn == true) {
                setRole(response.data.user[0].user);
            }
        });
    }, []);

  return (
    <div>
        <div className="col-12 text-center py-4 my-4">
            <h1>Citas agendadas</h1>
            <hr />
            <div class="container-fluid mb-5">
                <div class="alert alert-warning" role="alert">
                <strong>Nota:</strong> Si al oprimir el botón no aparece información, entonces aún no hay registros.
                </div>
            </div>
        </div>
        
        {role == 'admin' ? (
        <div>
            <center>
            <button onClick={VerCitas} className="btn btn-outline-primary">Consultar</button><br /><br /><br />
            <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                                <tr class="table-info">
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Numero telefonico</th>
                                    <th>Correo</th>
                                    <th>Dispositivo</th>
                                    <th>Descripción</th>
                                    <th>Hora</th>
                                    <th>Fecha</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </center>
        </div>)
        : <center>
            <div class="alert alert-danger" role="alert">
             <h2>Usted no tiene acceso a este módulo, si se trata de un error por favor ponerse en contacto</h2>
            </div>
            </center>}
                
                    {listaCitas.map((val, key) => {
                        return (
                            <div class="table-responsive">
                                <table class="table table-striped table-hover">
                                <tbody>
                                        <tr>   
                                            <td>{val.id_cita}</td>
                                            <td>{val.nombreCompleto}</td>
                                            <td>{val.numeroTelefono}</td>
                                            <td>{val.correo}</td>
                                            <td>{val.dispositivo}</td>
                                            <td>{val.descripcion}</td>
                                            <td>{val.fecha}</td>
                                            <td>{val.hora}</td>
                                        </tr>
                                </tbody>
                            </table>
                            </div>
                            
                        );
                    })}
    </div>
  )
}
