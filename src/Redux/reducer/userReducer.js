// userReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("userAccessToken") || "",
    user: {},
  };

const singleUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
        state.user = action.payload;
       console.log("User Details dispatched to Redux::::::::::::::::::::::::::::::", action.payload);
    },
    
    setTokens: (state, action) => {
      state.token = action.payload;
      console.log("token dispatched to Redux:::::::::::::::", action.payload);
    },
    logoutUser: (state) => {
      localStorage.removeItem("userAccessToken");
      state.user = {
        username: "",
      };
      state.token = "";
    },
  },
});
export const { setUserDetails, logoutUser, setTokens } = singleUser.actions;
export default singleUser.reducer;