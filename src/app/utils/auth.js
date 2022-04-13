export function setUserToLocalStorage(data) {
  localStorage.setItem("vibitno_user_data", JSON.stringify(data));
}

export function removeUserFromLocalStorage() {
  localStorage.removeItem("vibitno_user_data");
}

export function setUserTokenToLocalStorage(token) {
  localStorage.setItem("vibitno_user_token", JSON.stringify(token));
}

export function getUserToken() {
  return JSON.parse(localStorage.getItem("vibitno_user_token"));
}

export function isAuthenticated() {
  return JSON.parse(localStorage.getItem("vibitno_user_data"));
}
