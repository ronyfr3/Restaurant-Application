import React, { useState } from "react";
import Axios from "axios";

const LoginModal = ({ ...infoo }) => {
  const { setShow } = infoo;
  const [state, setState] = useState({
    email: "",
  });
  const [state1, setState1] = useState({
    password: "",
    passcode: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setState1({
      ...state1,
      [name]: value,
    });
  };
  const [show1, setShow1] = useState(false);
  const sendPasscode = (e) => {
    e.preventDefault();
    Axios({
      method: "post",
      url: "https://qrtech.co.uk/api/forgot_password",
      data: { email: state.email },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };
  const resetPassword = (e) => {
    e.preventDefault();
    Axios({
      method: "post",
      url: "https://qrtech.co.uk/api/new_password",
      data: { password: state1.password, passcode: state1.passcode },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };
  const closecross = () => {
    setShow(false);
  };
  const closecross1 = () => {
    setShow1(false);
  };
  const changePasword = () => {
    setShow1(true);
  };
  return (
    <div className="emailpssasscode">
      {!show1 ? (
        <>
          <div className="passssinfo">
            <div className="closssedivss" onClick={closecross}>
              x
            </div>
            <form onSubmit={sendPasscode}>
              <h3>Check your email for a passcode</h3>
              <input
                type="text"
                name="email"
                value={state.email}
                placeholder="your email.."
                onChange={handleChange}
                required
              />
              <button>Send Passcode</button>
              <small>if you received passcode then change password</small>
              <small onClick={changePasword} className="changeps">
                change password
              </small>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="passssinfo">
            <div className="closssedivss" onClick={closecross1}>
              x
            </div>
            <form onSubmit={resetPassword}>
              <h3>Change Password</h3>
              <input
                type="text"
                name="passcode"
                value={state1.passcode}
                placeholder="Your passcode.."
                onChange={handleChange1}
                required
              />
              <input
                type="text"
                name="password"
                value={state1.password}
                placeholder="New password.."
                onChange={handleChange1}
                required
              />
              <button>Reset Password</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginModal;
