import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux';
import store from './Redux/store.js';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
   <App />
   </Provider>
    {/* <ToastContainer /> */}
    <Toaster
      toastOptions={{
        style: {
          backgroundColor: 'black', 
          color: 'white', 
        },
      }}
     />
  </StrictMode>,
)
