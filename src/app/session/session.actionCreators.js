import {
  CURRENT_USER_SET,
  CURRENT_USER_DELETE,
  SET_SESSION_ERROR,
  SET_CURRENT_USER_TOKEN,
  CLEAR_SESSION_ERROR
} from "./session.actions";
import * as service from "./session.service";

function setCurrentUser(user) {
  return {
    type: CURRENT_USER_SET,
    payload: user
  };
}

function deleteCurrentUser() {
  return {
    type: CURRENT_USER_DELETE
  };
}

function setSessionError(error) {
  return {
    type: SET_SESSION_ERROR,
    payload: error
  };
}

function setUserToken(token) {
  return {
    type: SET_CURRENT_USER_TOKEN,
    payload: token
  };
}

export function clearSessionError() {
  return {
    type: CLEAR_SESSION_ERROR
  };
}

export function login(user) {
  return dispatch =>
    service
      .login(user)
      .then(response => {
        dispatch(setUserToken(response.data.access_token));
        return service.getCurrentUser(response.data);
      })
      .then(data => dispatch(setCurrentUser(data.data)))
      .catch(err => dispatch(setSessionError(err.response.data.message)));
}
