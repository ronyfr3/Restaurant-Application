// PaidBy card select korle must payment Id deya lagbe na hle hbe na err dekhabe

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import PaypalButtonComponent from "../../layout/Checkout/Paypal";

const Checkout = () => {
  const dispatch = useDispatch();
  // CART STATE
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  // CALCULATE SUB TOTAL
  const subtotalCal = cartItems
    .map((x) => x.qty * x.price)
    .reduce((a, c) => a + c, 0)
    .toFixed(2);
  // DISCOUNT CALCULATE
  const disCountPrice = ((subtotalCal * 10) / 100).toFixed(2);

  // CHECKED VALUE
  const [check, setCheck] = useState("");
  const [paidBy, setPaidBy] = useState("");
  console.log("paidBy", paidBy);
  const totalMoney =
    check === "Collection" ? subtotalCal - disCountPrice : subtotalCal;

  // DETAILS ARRAY OF PRODUCTS
  const porductsInfo = [];

  cartItems?.map((x) =>
    porductsInfo.push({
      name: x.title,
      checkedItem: x.check,
      quantity: x.qty,
      unit_price: x.price,
      unit_total: (x.price * x.qty).toFixed(2),
    })
  );
  console.log("porductsInfo", porductsInfo);

  // ORDER DETAILS FOR POST REQUEST
  const orderDetails = {
    restaurant_id: 4,
    order_type: check,
    payment_type: paidBy,
    payment_status: "Not Paid",
    payment_id: "",
    requested_time: "6.30",
    total: parseInt(totalMoney),
    details: {
      products: porductsInfo,
      subtotal: parseInt(subtotalCal),
      discount: check === "Collection" ? 10 : "",
      total: parseInt(totalMoney),
    },
  };
  console.log("orderDetails", orderDetails);

  // access_token
  const access_token = JSON.parse(localStorage.getItem("auth"))?.user
    ?.access_token;

  // SEND ORDER TO BACKEND
  const history = useHistory();
  const sendOrder = () => {
    if (paidBy && paidBy.length) {
      Axios({
        method: "post",
        url: "YOUR ORDER API",
        data: orderDetails,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then(function (response) {
          //handle success
          //toastify success msg
          history.push("/");
        })
        .catch(function (response) {
          //handle error
          //toastify something wrong
        });
    }
  };
  return (
    <div className="alisudliu">
      <h2>Your order details</h2>
      {/* Order Type */}
      <div className="cart_checkbox">
        <h2>please check one of the order type</h2>
        <div className="cartchh">
          <input
            type="checkbox"
            value="Delivery"
            checked={check === "Delivery"}
            onChange={(e) => setCheck(e.target.value)}
          />
          <label htmlFor="Delivery">Delivery</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Collection"
            checked={check === "Collection"}
            onChange={(e) => setCheck(e.target.value)}
          />
          <label htmlFor="Collection">Collection</label>
        </div>
      </div>
      <div>
        <h2>selected products</h2>
        <div className="asdiobasd">
          <table>
            <thead>
              <tr>
                <th>product</th>
                <th>quantity</th>
                <th>price</th>
                <th>subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((x, i) => {
                const { check, price, qty, title } = x;
                return (
                  <tr key={i}>
                    <td>
                      <small>{title}</small>
                      <div>
                        {check.map((x, i) => (
                          <small key={i}>{x}</small>
                        ))}
                      </div>
                    </td>
                    <td>{qty}</td>
                    <td>{price.toFixed(2)}</td>
                    <td>{(qty * price).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            {check === "Collection" ? (
              <div>
                <h2>after applying 10% discount</h2>
                <div>
                  <small>Total Amount</small>
                  <small>{totalMoney.toFixed(2)}</small>
                </div>
              </div>
            ) : (
              <div>
                <small>Total Amount</small>
                <small>{totalMoney}</small>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <h2>Pay method</h2>
        <input
          type="checkbox"
          value="Cash"
          checked={paidBy === "Cash"}
          onChange={(e) => setPaidBy(e.target.value)}
        />
        <label htmlFor="Delivery">pay by cash</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Card"
          checked={paidBy === "Card"}
          onChange={(e) => setPaidBy(e.target.value)}
        />
        <label htmlFor="Collection">pay by card</label>
      </div>
      {paidBy === "Card" ? <PaypalButtonComponent /> : ""}
      <button
        onClick={sendOrder}
        disabled={!check && !check.length}
        className={!check ? "dis" : !paidBy ? "dis" : "ndis"}
      >
        Place order
      </button>
    </div>
  );
};

export default Checkout;
