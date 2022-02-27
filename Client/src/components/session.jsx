import React, { useState } from 'react'
import Axios from 'axios';
import { useEffect } from 'react';

const Session = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username, 
            password: password,
        }).then((response) => {

            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                console.log(response);
                setLoginStatus(response.data[0].user);
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].user);
            }
        });
    }, []);

    return (
        <>
        <br/><br/><br/>
        <center>
            <h1>Inicio de sesión</h1>
        </center>
        <br/><br/><br/>

        <div class="container">
            <center>
                <div className="mb-3">
                <label htmlFor="exampleInput" className="form-label">Nombre de usuario </label>
                    <div class="form-group col-md-4">
                        <input type="text" onChange={(e)=> {setUsername(e.target.value);}} className="form-control" id="exampleInput2" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <div class="form-group col-md-4">
                        <input type="password" onChange={(e)=> {setPassword(e.target.value);}} className="form-control" id="exampleInputPassword2"/>
                    </div>
                </div>
            
                <br />
                <h5>Bienvenido(a): {loginStatus}</h5>
            <button type="submit" onClick={login}  className="btn btn-outline-primary mt-5">Iniciar sesión</button> 
            </center>
        </div>
                    
        </>
    )
}


export default Session;