import axios from "axios";

const url = "YOUR API";

// access_token
const access_token = JSON.parse(localStorage.getItem("auth"))?.user
  ?.access_token;
// AXIOS INTERCEPTOR
const axiosInterceptor = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
});
//RESERVE TABLE
export const reservertable = (data) =>
  axios.post(`${url}/new_reservation`, data);
//PRODUCTS API
export const fetchProducts = () => axios.get(`${url}/menu/4`);
export const fetchSingleProduct = (id) => axios.get(`${url}/${id}`);
export const createProducts = (newProduct) =>
  axiosInterceptor.post(`/new_product`, newProduct);
export const updateProducts = (product) =>
  axiosInterceptor.post(`/edit_product`, product);
export const deleteProducts = (product) =>
  axiosInterceptor.post(`/delete_product`, product);

// AUTHENTICATION API
export const register_User = (data) =>
  axiosInterceptor.post(`${url}/register`, data);
export const logIn_User = (data) => axiosInterceptor.post(`${url}/login`, data);
