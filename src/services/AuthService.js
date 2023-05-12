import {
  getUser,
  isLogged,
  loginUser,
  logoutUser,
} from "../features/users.slice";

export function saveTokenInLocalStorage(tokenDetails) {
  localStorage.setItem("token", JSON.stringify(tokenDetails));
}

export function saveEmailInLocalStorage(email) {
  localStorage.setItem("email", JSON.stringify(email));
}

export function runLogOutTimer(dispatch) {
  setTimeout(() => {
    dispatch(logoutUser());
    dispatch(isLogged([false]));
  }, 5000000);
}

export function checkAutoLogin(dispatch) {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

  if (token) {
    dispatch(isLogged([true]));
    dispatch(loginUser([JSON.parse(token), JSON.parse(email)]));
    dispatch(getUser([JSON.parse(firstName), lastName]));
  }
}
