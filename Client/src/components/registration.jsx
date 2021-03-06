import React, { useState } from 'react'
import Axios from 'axios';

const Registration = () => {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [signupStatus, setsignupStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const register = () => {
        {usernameReg == "" ? setsignupStatus('Se debe ingresar al menos un nombre de usuario') :
        Axios.post('http://localhost:3001/register', {
            username: usernameReg, 
            password: passwordReg,
        }).then((response) => {
            console.log(response);
            if (response.data.affectedRows > 0) {
                setsignupStatus('Se ha creado el usuario de manera exitosa');
            } else {
                setsignupStatus('No se podido crear el usuario');
            }
            
        });
        }
        setTimeout(function() {
            window.location.reload();
        }, 1000)
    }

    return (
        <>
        <br/><br/><br/>
        <center>
            <h1>Registro de usuario</h1>
        </center>
        <br/><br/><br/>

        <div class="container">
            <center>
                <div className="mb-3">
                <label htmlFor="exampleInput" className="form-label">Nombre de usuario</label>
                    <div class="form-group col-md-4">
                        <input type="text" required onChange={(e)=> {setUsernameReg(e.target.value);}} className="form-control" id="exampleInput" />
                    </div>
                </div>

                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <div class="form-group col-md-4">
                        <input type="password" required onChange={(e)=> {setPasswordReg(e.target.value);}} className="form-control" id="exampleInputPassword1" />
                    </div> 
                </div>
                <h5>{ signupStatus }</h5>
                <button onClick={register} type="submit" className="btn btn-outline-primary mt-5">Registrar</button>
            </center>
                
        </div>
        
        </>
    )
}

export default Registration;