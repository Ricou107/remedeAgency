import { createSlice } from "@reduxjs/toolkit";

const initialState = () => ({
  email: "",
  firstName: "",
  lastName: "",
  auth: {
    isLoggedIn: false,
    accessToken: "",
  },
});

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState(),
  reducers: {
    loginUser: (state, action) => {
      // state.auth.isLoggedIn = !state.auth.isLoggedIn;
      state.auth.accessToken = action.payload[0];
      state.email = action.payload[1];
    },

    isLogged: (state, action) => {
      state.auth.isLoggedIn = action.payload[0];
    },
    logoutUser: (state) => {
      state = initialState();
      return state;
    },
    getUser: (state, action) => {
      state.firstName = action.payload[0];
      state.lastName = action.payload[1];
    },

    editUser: (state, action) => {
      state.firstName = action.payload[0];
      state.lastName = action.payload[1];
    },
  },
});

export const { loginUser, isLogged, logoutUser, getUser, editUser } =
  usersSlice.actions;

export default usersSlice.reducer;
