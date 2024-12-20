// import Home from "./pages/HOME.JSX";
import Home from  './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mobiles from './pages/mobiles';
import ProductDetailsPage from './pages/ProductDetails.jsx';
import Cart from './pages/Cart.jsx';
import Wishlist from './pages/Wishlist.jsx';
import NewArrivals from './pages/NewArrivals.jsx';
import OrderConfirm from './pages/OrderConfirm.jsx';
import Checkout from './pages/Checkout.jsx';
import OrderDetails from './pages/OrderDetails.jsx';
import Profile from './pages/Profile.jsx';
import MyOrders from './pages/MyOrders.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/sIGNUP.JSX';
import NumberLogin from './pages/NumberLogin.jsx';
import OTP from './pages/OTP.jsx';


const App = () => {

  return (
    // <>
    //   <div>
    //     <Home />
    //   </div>
    // </>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/mobiles&tabs" element={<Mobiles/>} /> 
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
      </Routes>
    </Router>
  )
}

export default App
