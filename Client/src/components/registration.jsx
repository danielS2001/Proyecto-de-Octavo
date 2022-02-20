import React, { useState } from 'react'
import Axios from 'axios';



const Registration = () => {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg, 
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });

        // const feedback = document.getElementById('LoginSuccess');
        // feedback.value = 'La creación de usuario ha sido exitosa';

        
    }

    return (
        <>
            <h1>Registro de usuario</h1>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Nombre de usuario</label>
                                    <input type="text" onChange={(e)=> {setUsernameReg(e.target.value);}} className="form-control" id="exampleInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <input type="password" onChange={(e)=> {setPasswordReg(e.target.value);}} className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button onClick={register} type="submit" className="btn btn-outline-primary w-100 mt-5">Registrar</button>
                                {/* <p id="LoginSuccess"></p> */}
        </>
    )

}

export default Registration;