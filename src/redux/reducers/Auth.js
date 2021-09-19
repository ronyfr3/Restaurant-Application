import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../constants/actionType";

const authreducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      const registerState = {
        isRegistered: true,
        isLoggedIn: false,
        user: {},
      };
      localStorage.setItem("auth", JSON.stringify(registerState));
      return { user: registerState };
    case REGISTER_FAIL:
      return { error: action.payload };
    case LOGIN_SUCCESS:
      const loginAuthState = {
        isRegistered: true,
        isLoggedIn: true,
        user: action.payload,
      };
      localStorage.setItem("auth", JSON.stringify(loginAuthState));
      return { user: loginAuthState };
    case LOGIN_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export default authreducer;
