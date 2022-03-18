import React, { useState, useEffect, useRef } from 'react';

export default function PayPal({total}) {
    const paypal = useRef();
    var parsed = total.toString();
    var price = parseFloat(parsed).toFixed(2);
    const [paymentStatus, setPaymentStatus] = useState("");
    // const [paidReg, setPaidReg] = useState("");

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Accesorios para celular",
                            amount: {
                                currency_code: "MXN",
                                value: price,
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                setPaymentStatus(<div class="alert alert-success" role="alert">
                ¡El pago en PayPal se ha realizado con éxito!
            </div>);
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current);
    }, []);

    console.log(price);

  return (
    <div>
        <div ref={paypal}></div>
        <h5>{ paymentStatus }</h5>
    </div>
  )
}
