import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
  PRODUCTS_DETAILS_FAIL,
  CREATE_PRODUCTS,
  UPDATE_PRODUCTS,
  DELETE_PRODUCTS,
  BOOK_TABLE_SUCCESS,
  BOOK_TABLE_FAIL,
} from "../constants/actionType";

//all product reducer
export const ProductReducer = (
  state = { loading: true, products: [] },
  action
) => {
  // console.log(action.payload);
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { loading: true };
    case PRODUCTS_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_PRODUCTS:
      return { products: [...state.products, action.payload] };
    case UPDATE_PRODUCTS:
      return {
        products: state.products.map((product) =>
          product.id === action.payload.product_id
            ? action.payload
            : state.products
        ),
      };
    case DELETE_PRODUCTS:
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload.product_id
        ),
      };
    default:
      return state;
  }
};

//single product reducer
export const ProductDetailsReducer = (
  state = { loading: true, product: {} },
  action
) => {
  switch (action.type) {
    case PRODUCTS_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCTS_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCTS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
//RESERVATION
export const bookReducer = (state = { book: [] }, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case BOOK_TABLE_SUCCESS:
      return { book: action.payload };
    case BOOK_TABLE_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
