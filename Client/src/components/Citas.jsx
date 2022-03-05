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
        <center><h1>Citas</h1></center><br />
        {role == 'admin' ? (
        <div>
            <center><h3>Si al oprimir el botón no aparece nada, entonces no hay citas agendadas aún.</h3><br />
            <button onClick={VerCitas} className="btn btn-outline-primary">Ver las citas agendadas</button>
            </center>
        </div>)
        : <center><h2>Este módulo no es accesible para usuarios no administradores</h2></center>}
        
        <br /><br />
                <div>
                {listaCitas.map((val, key) => {
                    return (
                        <div>
                        <table>
                            <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Numero teléfonico</th>
                            <th>Correo</th>
                            <th>Dispositivo</th>
                            <th>Descripción</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            </tr>
                            <tr>
                                <td>{val.id_cita}</td>
                                <td>{val.nombreCompleto}</td>
                                <td>{val.correo}</td>
                                <td>{val.dispositivo}</td>
                                <td>{val.descripcion}</td>
                                <td>{val.fecha}</td>
                                <td>{val.hora}</td>
                            </tr>
                        </table>
                        </div>
                    );
                })}
                </div>
    </div>
  )
}
