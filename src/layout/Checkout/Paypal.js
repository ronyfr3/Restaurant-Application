import React, { useEffect, useRef } from "react";

const PaypalButtonComponent = () => {
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          size: "responsive",
          layout: "horizontal",
          color: "black",
          shape: "rect",
          label: "paypal",
          height: 35,
          tagline: false,
        },
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "GBP",
                  value: 568.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log("order:", order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return <div id="paypal-button-container" ref={paypal}></div>;
};

export default PaypalButtonComponent;
