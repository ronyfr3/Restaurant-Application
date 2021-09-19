import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../../constants/actionType";
import * as api from "../../api";

// REGISTER
export const RegisterAuthAction = (userState, history) => {
  return async (dispatch) => {
    try {
      const res = await api.register_User(userState);
      const { data } = res;
      dispatch({ type: REGISTER_SUCCESS, payload: data });
      history.push("/login");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: REGISTER_FAIL,
          payload: error?.response?.data?.message,
        });
      }
    }
  };
};

//   LOGIN
export const LoginAuthAction = (loginState, history) => {
  // console.log(loginState);
  return async (dispatch) => {
    try {
      const res = await api.logIn_User(loginState);
      const { data } = res;
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      history.push("/");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: LOGIN_FAIL,
          payload: error?.response?.data?.message,
        });
      }
    }
  };
};
