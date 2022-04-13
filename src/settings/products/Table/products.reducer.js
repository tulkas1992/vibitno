import {
  IS_FETCHING_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SET_PRODUCTS_PAGINATION,
  NEXT_PRODUCT_PAGE,
  PREVIOUS_PRODUCT_PAGE
} from "./products.actions";
import initialState from "./products.initialState";

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case IS_FETCHING_PRODUCTS:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: [...action.payload]
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    case SET_PRODUCTS_PAGINATION:
      return {
        ...state,
        pagination: { ...action.payload }
      };
    default:
      return state;
  }
}
