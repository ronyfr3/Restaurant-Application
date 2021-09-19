import React from "react";
import { IoTrashBin } from "react-icons/io5";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/productActions";
import { removeCartItem } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
const Cart = () => {
  const totalCarts = useSelector((state) => state.cart.cartItems);

  // CHECKOUT COMBINE FUNCTIONALITY
  const dispatch = useDispatch();

  // INCREMENT QTY
  const increment = (id) => {
    const product = totalCarts.find((item) => item.id === id);
    if (product) {
      const newProduct = {
        ...product,
        qty: product.qty + 1,
        check: product.check,
      };
      dispatch(
        addToCart(
          newProduct.id,
          newProduct.title,
          newProduct.price,
          newProduct.qty,
          newProduct.check
        )
      );
    }
  };
  // DECREMENT QTY
  const decrement = (id) => {
    const product = totalCarts.find((item) => item.id === id);
    if (product) {
      const newProduct = {
        ...product,
        qty: product.qty - 1,
        check: product.check,
      };
      dispatch(
        addToCart(
          newProduct.id,
          newProduct.title,
          newProduct.price,
          newProduct.qty,
          newProduct.check
        )
      );
    }
  };

  // AFTER DISATCH CART GO FOR CHECKOUT PAGE
  let history = useHistory();
  const checkout = () => {
    const loginStatus = JSON.parse(localStorage.getItem("auth"))?.isLoggedIn;
    if (loginStatus) {
      history.push("/checkout");
    } else {
      //toastify please login to your account
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    }
  };

  // REMOVE FROM CART
  const deleteProduct = (id) => {
    //toastify successfully removed
    dispatch(removeCartItem(id));
  };

  // CALCULATE SUB TOTAL
  const subtotalCal = totalCarts
    .map((x) => x.qty * x.price)
    .reduce((a, c) => a + c, 0);

  return (
    <div className="cart">
      {totalCarts?.length === 0 ? (
        <div className="empty_Cart">
          <p>Your cart is currently empty</p>
          <Link to="/menu">Return to shop</Link>
        </div>
      ) : (
        <div className="cart_info">
          <div className="cart_order">
            <h1>Your order</h1>
          </div>

          <div className="trashbox">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th> price</th>
                  <th>qty</th>
                  <th>subtotal</th>
                  <th>trash</th>
                </tr>
              </thead>
              <tbody>
                {totalCarts.map((x, i) => {
                  const { id, title, price, check } = x;
                  return (
                    <tr key={i}>
                      <td>
                        <p className="skskskaadev">{title}</p>
                        <ul>
                          {check
                            ? check.map((x, i) => <li key={i}>{x}</li>)
                            : ""}
                        </ul>
                      </td>
                      <td> £{price}</td>
                      {/*  */}
                      <td className="indebtn">
                        <button
                          disabled={
                            (
                              (totalCarts &&
                                totalCarts.find(
                                  (choice) => choice.id === id
                                )) ||
                              {}
                            ).qty === 1
                          }
                          onClick={() => decrement(id)}
                        >
                          <span>-</span>
                        </button>
                        <span>
                          {
                            (
                              (totalCarts &&
                                totalCarts.find(
                                  (choice) => choice.id === id
                                )) ||
                              {}
                            ).qty
                          }
                        </span>
                        <button onClick={() => increment(id)}>
                          <span>+</span>
                        </button>
                      </td>
                      {/*  */}
                      <td>
                        Subtotal: £
                        {(
                          (
                            (totalCarts &&
                              totalCarts.find((choice) => choice.id === id)) ||
                            {}
                          ).qty * price
                        ).toFixed(2)}
                      </td>
                      <td>
                        <IoTrashBin
                          className="trash"
                          onClick={() => deleteProduct(id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="basket_totals">
            <h2>basket totals</h2>
            <div className="basket_info_wrapper">
              <table>
                <tbody>
                  <tr>
                    <th>subtotal</th>
                    <th>total</th>
                  </tr>
                  <tr>
                    <td>{subtotalCal.toFixed(2)}</td>
                    <td>{subtotalCal.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button
            className="aoiugqr8"
            onClick={checkout}
            disabled={totalCarts?.length === 0}
          >
            proceed to checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
