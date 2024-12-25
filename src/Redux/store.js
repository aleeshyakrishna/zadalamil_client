// import { legacy_createStore as createStore } from 'redux'
// import rootReducer from './reducer';
 
// const store =createStore(rootReducer);

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer"; // Adjust path based on your folder structure

const store = configureStore({
  reducer: {
    user: userReducer, // If using combineReducers, use `rootReducer` here
  },
});

export default store;
