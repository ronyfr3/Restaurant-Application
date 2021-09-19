import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState();
  const [admin, setAdmin] = useState();
  const cart = useSelector((state) => state.cart.cartItems);
  const location = useLocation();
  const history = useHistory();
  const userLogout = () => {
    localStorage.removeItem("auth");
    history.push(history.location.pathname);
  };
  // console.log(history);
  const userdata = () =>
    setUser(JSON.parse(localStorage.getItem("auth"))?.user?.access_token);
  const admindata = () =>
    setAdmin(
      JSON.parse(localStorage.getItem("auth"))?.user?.data?.profile?.role
    );
  useEffect(() => {
    userdata();
    admindata();
  }, [location]);

  return (
    <div className="header_section goToTop">
      {/* UPPER SECTION OF HEADER */}
      <div className="DSKHUkey">
        <img src="webLogo.png" alt="" />
        <p>Himalayan Dine</p>
      </div>
      <header>
        <div className={show ? "hideLinks" : "second_header"}>
          <ul>
            <div className="leftside">
              <div className="header_image">
                <img src="webLogo.png" alt="" />
              </div>
              <li>
                <Link to="/" onClick={() => setShow(false)}>
                  home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setShow(false)}>
                  about us
                </Link>
              </li>
              <li>
                <Link to="/menu" onClick={() => setShow(false)}>
                  our Menus
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setShow(false)}>
                  contact us
                </Link>
              </li>
            </div>
            <div className="rightside">
              {admin === "RestaurantAdmin" ? (
                <li>
                  <Link to="/admin_dashboard" onClick={() => setShow(false)}>
                    Dashboard
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/customer_dashboard" onClick={() => setShow(false)}>
                    Dashboard
                  </Link>
                </li>
              )}
              {user ? (
                <li>
                  <button onClick={userLogout} className="alihbalsid">
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link to="/account" onClick={() => setShow(false)}>
                    Account
                  </Link>
                </li>
              )}
              <li>
                <Link to="/cart" onClick={() => setShow(false)}>
                  <FiShoppingCart className="FiShoppingCart" />{" "}
                  <small className="cartitem"> ({cart.length})</small>
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="hambergur">
          {!show ? (
            <span className="hmenu" onClick={() => setShow(!show)}>
              &#9778;
            </span>
          ) : (
            <span className="hmenu" onClick={() => setShow(false)}>
              &#9747;
            </span>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
