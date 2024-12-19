
import Footer from '../components/Footer';
import FooterCopyright from '../components/FooterCopyRight';
import { ComplexNavbar } from '../components/Navbar'
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
