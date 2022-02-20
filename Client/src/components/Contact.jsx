import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Agendar cita para enviar a reparación un dispositivo móvil</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div class="mb-3">
                                <label for="" class="form-label">Nombre completo.</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="Juan Perez "/>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Número de teléfono.</label>
                                <input type="phone" class="form-control" id="exampleForm"/>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Dirección de correo electrónico.</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Dispositivo.</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ej. Iphone 12, Motorola G7"/>
                            </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">Descripción del fallo.</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-primary">Agendar</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact
