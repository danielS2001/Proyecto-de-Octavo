import React, { useState } from 'react'
import Axios from 'axios';

const Session = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username, 
            password: password,
        }).then((response) => {
            console.log(response);
        });
    }

    return (
        <>
        <h1>Inicio de sesión</h1>
                            <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Nombre de usuario</label>
                                    <input type="text" onChange={(e)=> {setUsername(e.target.value);}} className="form-control" id="exampleInput2" />
                            </div>
                            <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <input type="password" onChange={(e)=> {setPassword(e.target.value);}} className="form-control" id="exampleInputPassword2"/>
                            </div>
                            {/* <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div> */}
                                    <button type="submit" onClick={login}  className="btn btn-outline-primary w-100 mt-5">Iniciar sesión</button>
        </>
    )
}


export default Session;