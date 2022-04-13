import {
  CURRENT_USER_SET,
  CURRENT_USER_DELETE,
  SET_SESSION_ERROR,
  SET_CURRENT_USER_TOKEN,
  CLEAR_SESSION_ERROR
} from "./session.actions";
import initialState from "./session.initialState";
import {
  setUserToLocalStorage,
  removeUserFromLocalStorage,
  setUserTokenToLocalStorage
} from "../utils/auth";

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_USER_SET:
      setUserToLocalStorage(action.payload);
      return {
        ...state,
        user: action.payload,
        errorAuth: false,
        errorMessage: ""
      };
    case CURRENT_USER_DELETE:
      removeUserFromLocalStorage();
      return {
        ...state
      };
    case SET_SESSION_ERROR:
      return {
        ...state,
        errorAuth: true,
        errorMessage: action.payload
      };
    case SET_CURRENT_USER_TOKEN:
      setUserTokenToLocalStorage(action.payload);
      return {
        ...state,
        userToken: action.payload
      };
    case CLEAR_SESSION_ERROR:
      return {
        ...state,
        errorAuth: false,
        errorMessage: ""
      };
    default:
      return state;
  }
}
