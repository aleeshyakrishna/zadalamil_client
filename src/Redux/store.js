// import { legacy_createStore as createStore } from 'redux'
// import rootReducer from './reducer';
 
// const store =createStore(rootReducer);

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import loadReducer from './reducer/loaderSlice';

const store = configureStore({
  reducer: {
    user: userReducer, 
    loader: loadReducer,
  },
});

export default store;
