import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }

    return (
        <>
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

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Codigo promocional" />
                                <button type="submit" className="btn btn-secondary"></button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Dirección de envio</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Nombre(s)</label>
                                    <input type="text" className="form-control" id="name" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Ingrese un Nombre valido.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Apellidos</label>
                                    <input type="text" className="form-control" id="lastname" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Ingrese Apellidos validos.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Correo electronico</label>
                                    <input type="email" className="form-control" id="email" placeholder="tu@ejemplo.com" />
                                    <div className="invalid-feedback">
                                        Ingrese un correo electronico valido para actualizaciones de su envio.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Dirección</label>
                                    <input type="text" className="form-control" id="address" placeholder="Villa Galaxia Calle Tauro #1246" required="" />
                                    <div className="invalid-feedback">
                                        Ingrese una dirección de envio.
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Estado</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">...</option>
                                        <option>Sinaloa</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Ingrese un Estado valido.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">Ciudad</label>
                                    <select className="form-select" id="state" required="">
                                        <option value="">Seleccione...</option>
                                        <option>Mazatlán</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Ingrese una ciudad valida.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Código Postal</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Ingrese su codigo postal.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Metodo de pago</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="debit">Pago efectivo: OXXO</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Continuar con la compra</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
