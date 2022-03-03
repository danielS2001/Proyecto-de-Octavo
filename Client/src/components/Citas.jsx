import React, { useState } from 'react'
import Axios from 'axios';

export default function Citas() {

    const [listaCitas, setListaCitas] = useState([]);

    const VerCitas = () => {
        Axios.get('http://localhost:3001/select').then((response) => {
            setListaCitas(response.data);
        });
    };

  return (
    <div>
        <h1>Citas</h1> <br />
        <button onClick={VerCitas} class="btn btn-outline-primary">Ver las citas agendadas</button><br /><br />
            {listaCitas.map((val, key) => {
                            return (
                                <div>
                                <table>
                                    <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Numero telefonico</th>
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
  )
}
