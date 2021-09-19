import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/productActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ setShow, modalItem, has_options }) => {
  // DISPATCH
  const dispatch = useDispatch();

  const onCloseModal = () => {
    setShow(false);
  };
  //HAS_OPTIONS
  console.log(has_options);
  // CHECKED VALUE
  const [Check, setCheck] = useState("");
  // QTY
  const [qty, setQty] = useState(1);
  // CARTITEMS STORE STATE
  const cartItems = useSelector((state) => state.cart.cartItems);

  // CHECK EXISTING ITEMS
  const exisitngItem = cartItems.some((x) => x.id === modalItem.id);
  console.log("exisitngItem", exisitngItem);

  // DISPATCH ADDTOCART ACTION
  const dispatchAddToCart = React.useCallback(() => {
    if (exisitngItem) {
      toast.info("product is already in the cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // dispatch(createNotification(true, "product is already in the cart"));
    } else {
      toast.success("product is added in the cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // dispatch(createNotification(true, "product is added in the cart"));
    }
    const choosenMeal = [];
    choosenMeal.push(Check);

    dispatch(
      addToCart(
        modalItem.id,
        modalItem.title,
        modalItem.price,
        qty,
        choosenMeal
      )
    );
  }, [
    Check,
    dispatch,
    exisitngItem,
    qty,
    modalItem.id,
    modalItem.title,
    modalItem.price,
  ]);

  return (
    <>
      <ToastContainer />
      <div className="modalouter">
        <div className="posnhrk">
          <div className="modal">
            <span className="closeIcon" onClick={onCloseModal}>
              <AiFillCloseCircle />
            </span>
            <h2>{modalItem.title}</h2>
            <small> £{modalItem.price}</small>
            <p>{modalItem.description}</p>
            <div className="indebtn">
              <button
                type="button"
                disabled={qty === 1}
                onClick={() => setQty(qty - 1)}
              >
                <span>-</span>
              </button>
              <p>{qty}</p>
              <button type="button" onClick={() => setQty(qty + 1)}>
                <span>+</span>
              </button>
            </div>
            {has_options !== 0 ? (
              <div>
                <h2>Choose 1</h2>
                {modalItem.options.map((x, i) => {
                  return (
                    <div key={i}>
                      <input
                        type="checkbox"
                        value={x.title}
                        checked={Check === x.title}
                        onChange={() => setCheck(x.title)}
                      />
                      <label>{x.title}</label>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}

            <button
              className={
                !Check && has_options ? "disableModalBtn" : "addorderbtn"
              }
              onClick={dispatchAddToCart}
              disabled={!Check && modalItem.options && modalItem.options.length}
            >
              <p>
                Add to cart <span> £{(modalItem.price * qty).toFixed(2)}</span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
