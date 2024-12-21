// import Home from "./pages/HOME.JSX";
// import Home from  './pages/User/home.jsx';
import Home from  './pages/User/home.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mobiles from './pages/User/Mobiles.jsx';
import ProductDetailsPage from './pages/User/ProductDetails.jsx';
import Cart from './pages/User/Cart.jsx';
import Wishlist from './pages/User/Wishlist.jsx';
import NewArrivals from './pages/User/NewArrivals.jsx';
import OrderConfirm from './pages/User/OrderConfirm.jsx';
import Checkout from './pages/User/Checkout.jsx';
import OrderDetails from './pages/User/OrderDetails.jsx';
import Profile from './pages/User/Profile.jsx';
import MyOrders from './pages/User/MyOrders.jsx';
import Login from './pages/User/Login.jsx';
import Signup from './pages/User/Signup.jsx';
import NumberLogin from './pages/User/NumberLogin.jsx';
import OTP from './pages/User/OTP.jsx';
import ForgetPassword from './pages/User/ForgetPassword.jsx';
import ForgotOTPNumber from './pages/User/ForgotOTPNumber.jsx';
import ChangePassword from './pages/User/ChangePassword.jsx';
import AllBrands from './pages/User/AllBrands.jsx';

import AdminLogin from './pages/Admin/Login.jsx';
import Dashboard from './pages/Admin/Dashboard.jsx';


const App = () => {

  return (
    <Router>
      <Routes>

        {/* USER SIDE */}
        <Route path="/" element={<Home/>} /> 
        <Route path="/mobiles&tabs" element={<Mobiles/>} /> 
        <Route path="/all-brands" element={<AllBrands/>} /> 
        <Route path='/product-details' element={ <ProductDetailsPage />} />
        <Route path='/cart' element={ <Cart />} />
        <Route path='/wishlist' element={ <Wishlist />} />
        <Route path='/new-arrivals' element={ <NewArrivals />} />
        <Route path='/checkout' element={ <Checkout />} />
        <Route path='/order-confirm' element={ <OrderConfirm />} />
        <Route path='/order-details' element={ <OrderDetails />}/>
        <Route path='/profile' element={ <Profile />} />
        <Route path='/myOrders' element={ <MyOrders />} />

        <Route path='/login' element={ <Login />}/>
        <Route path='/numberLogin' element={ <NumberLogin />}/>
        <Route path='/otp-login' element={ <OTP />}/>

        <Route path='/signup' element={ <Signup />}/>

        <Route path='/forgot-password' element={ <ForgetPassword />} />
        <Route path='/forgot-OTP-number' element={ <ForgotOTPNumber />} />
        <Route path='/change-password' element={ <ChangePassword />}/>

        {/* ADMIN */}
        <Route path='/admin/admin-login' element={ <AdminLogin />} />
        <Route path='/admin/dashboard' element={ <Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
