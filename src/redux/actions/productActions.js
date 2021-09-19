import {
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CREATE_PRODUCTS,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  CREATE_PRODUCTS_FAIL,
  UPDATE_PRODUCTS_FAIL,
  DELETE_PRODUCTS_FAIL,
  BOOK_TABLE_SUCCESS,
  BOOK_TABLE_FAIL,
} from "../constants/actionType";

import * as api from "../api";
//book table
export const booktable = (info) => async (dispatch) => {
  console.log("info", info);
  try {
    const { data } = await api.reservertable(info);
    dispatch({ type: BOOK_TABLE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BOOK_TABLE_FAIL,
      payload: "fail",
    });
  }
};
//CREATE_PRODUCTS
export const createProduct = (product) => async (dispatch) => {
  // console.log(product);
  try {
    const { data } = await api.createProducts(product);
    dispatch({ type: CREATE_PRODUCTS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCTS_FAIL,
      payload: "fail",
    });
  }
};
//UPDATE_PRODUCTS
export const updateProduct = (product) => async (dispatch) => {
  // console.log("updateproduct", product);
  try {
    const { data } = await api.updateProducts(product);
    console.log(data);
    dispatch({ type: UPDATE_PRODUCTS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCTS_FAIL,
      payload: "fail",
    });
  }
};
//DELETE_PRODUCTS
export const deleteProduct = (info) => async (dispatch) => {
  console.log("info", info);
  try {
    await api.deleteProducts(info);
    dispatch({ type: DELETE_PRODUCTS, payload: info });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCTS_FAIL,
      payload: "fail",
    });
  }
};
//GET_ALL_PRODUCTS_FROM BACKEND
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    // console.log(data)
    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_LIST_FAIL,
      payload: "fail",
    });
  }
};

//ADD_TO_CART function
//getState return the current updated state of the cart
export const addToCart =
  (id, title, price, qty, check, deliveryType) =>
  async (dispatch, getState) => {
    const PRODUCTS = {
      id,
      title,
      price,
      qty,
      check,
      deliveryType,
    };
    dispatch({
      type: CART_ADD_ITEM,
      payload: PRODUCTS,
    });
    localStorage.setItem(
      "cartProduct",
      JSON.stringify(getState().cart.cartItems)
    );
  };

//CART_REMOVE_ITEM
export const removeCartItem = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem(
    "cartProduct",
    JSON.stringify(getState().cart.cartItems)
  );
};
