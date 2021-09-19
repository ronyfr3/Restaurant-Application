import React, { useState } from "react";
import { useHistory } from "react-router";
import { LoginAuthAction } from "../../redux/actions/auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
const Login = () => {
  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [inV, setInV] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInV({
      ...inV,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAuthAction(inV, history));
  };
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  return (
    <div className="login_wrapper">
      <form onSubmit={handleSubmit} className="liuehWIE">
        <h1>Sign in</h1>
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={inV.email}
          onChange={handleChange}
          required
        />
        {error === "Invalid Email!" && (
          <small className="errmsg">{error}</small>
        )}
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={inV.password}
          onChange={handleChange}
          required
        />
        {error === "Invalid Password!" && (
          <small className="errmsg">{error}</small>
        )}
        <br />
        <button type="submit">Login</button>
        <br />
        <div className="kahdbad">
          <small>
            Don't have an account? <Link to="register">Register</Link>
          </small>
          <small className="dhuvisdv" onClick={showModal}>
            Forgot Password
          </small>
        </div>
      </form>
      {show && <LoginModal setShow={setShow} />}
    </div>
  );
};

export default Login;
