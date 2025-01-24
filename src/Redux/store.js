import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import loadReducer from './reducer/loaderSlice';
import authReducer from './reducer/authSlice';

const store = configureStore({
  reducer: {
    user: userReducer, 
    loader: loadReducer,
    auth: authReducer,
  },
});

export default store;
