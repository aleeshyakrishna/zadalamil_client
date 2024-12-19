// import Home from "./pages/HOME.JSX";
import Home from  './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mobiles from './pages/mobiles';
import ProductDetailsPage from './pages/ProductDetails.jsx';
import Cart from './pages/Cart.jsx';

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
      </Routes>
    </Router>
  )
}

export default App
