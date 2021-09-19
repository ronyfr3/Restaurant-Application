import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/actionType";
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const actualItem = action.payload;
      // console.log("actualItem", actualItem);
      const existingItem = state.cartItems.find((x) => x.id === actualItem.id);
      // console.log("existingItem", existingItem);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existingItem.id ? actualItem : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, actualItem] };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};
