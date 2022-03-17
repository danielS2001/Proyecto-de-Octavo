import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PayPal from './PayPal';
import Axios from 'axios';

const Checkout = () => {
    const state = useSelector((state) => state.addItem);

    // const [totalReg, setTotalReg] = useState({
    //     total: 0.0,
    //     paid: false
    // });

    const [nameReg, setNameReg] = useState("");
    const [lastNameReg, setLastNameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [addressReg, setAddressReg] = useState("");
    const [stateReg, setStateReg] = useState("");
    const [cityReg, setCityReg] = useState("");
    // var stateReg = "";
    // var cityReg = "";
    const [zipCodeReg, setZipCodeReg] = useState("");

    const [purchaseStatus, setPurchaseStatus] = useState("");

    const TableValidation = (nameReg == "" || lastNameReg == "" || emailReg == "" || addressReg == "" || stateReg == "" ||  cityReg == "" || zipCodeReg == ""); 

    Axios.defaults.withCredentials = true;

    const Buy = (item) => {
        
        state.map((item) => {
        {TableValidation === false && (
            Axios.post('http://localhost:3001/shipment', {
                FirstName: nameReg, 
                LastName: lastNameReg,
                mail: emailReg,
                address: addressReg,
                state: stateReg,
                city: cityReg,
                ZipCode: zipCodeReg,
                product: item.title,
                price: item.price
            }).then((response) => {
                console.log(response);
                setPurchaseStatus(
                <div class="alert alert-success" role="alert">
                    Compra realizada con éxito.
                </div>);
            })
        )}
        });

        setTimeout (function() {
            window.location.reload();
        },10000)
    }

    var total = 0.00;
    const itemList = (item) => {
        total =  total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const CarroVacio = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>El carrito se encuentra vacío por el momento.</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const [checkout, setCheckout] = useState(false);

    return (
        <>
        {state.length === 0 && CarroVacio()}
        { state.length !== 0 &&
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Tu carrito</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (MXN)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Datos de envío</h4>
                        <form className="needs-validation" novalidate="" onSubmit={onSubmit}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Nombre(s)</label>
                                    <input type="text" onChange={(e)=> {setNameReg(e.target.value);}} className="form-control" id="name" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Ingrese un Nombre valido.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Apellidos</label>
                                    <input type="text" onChange={(e)=> {setLastNameReg(e.target.value);}} className="form-control" id="lastname" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Ingrese Apellidos validos.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Correo electronico</label>
                                    <input type="email" onChange={(e)=> {setEmailReg(e.target.value);}} className="form-control" id="email" placeholder="tu@ejemplo.com" />
                                    <div className="invalid-feedback">
                                        Ingrese un correo electronico valido para actualizaciones de su envio.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Dirección</label>
                                    <input type="text" onChange={(e)=> {setAddressReg(e.target.value);}} className="form-control" id="address" placeholder="Villa Galaxia Calle Tauro #1246" required="" />
                                    <div className="invalid-feedback">
                                        Ingrese una dirección de envio.
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="state" className="form-label">Estado</label>
                                    <input type="text" onChange={(e)=> {setStateReg(e.target.value);}} className="form-control" id="state" placeholder="Sinaloa" required="" />
                                    {/* <select className="form-select" id="state" required="">
                                        <option value="">Seleccione...</option>
                                        <option value="Sinaloa">Sinaloa</option>
                                    </select> */}
                                    <div className="invalid-feedback">
                                        Ingrese un Estado valido.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="city" className="form-label">Ciudad</label>
                                    <input type="text" onChange={(e)=> {setCityReg(e.target.value);}} className="form-control" id="city" placeholder="Mazatlan" required="" />

                                    {/* <select className="form-select" id="city" required="">
                                        <option value="">Seleccione...</option>
                                        <option value="Mazatlan">Mazatlán</option>
                                    </select> */}
                                    <div className="invalid-feedback">
                                        Ingrese una ciudad valida.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Código Postal</label>
                                    <input type="text" onChange={(e)=> {setZipCodeReg(e.target.value);}} className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Ingrese su codigo postal.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Metodo de pago</h4> 

                            {checkout ? (
                                <PayPal total={total}/>
                            ) : (
                            <button className="btn btn-outline-primary col-3" onClick={() => {
                                setCheckout(true);
                            }}>Pago en Paypal</button> 
                            )}

                            <hr className="my-4" />

                            <h5>{ purchaseStatus }</h5>
                            <button className="w-100 btn btn-primary btn-lg" onClick={ Buy } type="submit">Continuar con la compra</button>                        </form>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Checkout
