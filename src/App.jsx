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
        {/* <Route path='/order-details' element={ <OrderDetails />} /> */}
        <Route path='/order-details' element={ <OrderDetails />}/>
      </Routes>
    </Router>
  )
}

export default App
