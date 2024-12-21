
import Footer from '../components/Home/Footer';
import FooterCopyright from '../components/Home/FooterCopyRight';
import { ComplexNavbar } from '../components/Home/Navbar'
import ProductDetails from './../components/ProductDetails/produtDetails';

const ProductDetailsPage = () => {
  return (
    <div className='bg-[#f6f6f6]'>
        <ComplexNavbar />
        <ProductDetails />
        <Footer />
        <FooterCopyright/>
    </div>
  )
}

export default ProductDetailsPage
