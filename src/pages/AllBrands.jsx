import AllBrandsComp from '../components/AllBrands/AllBrandsComp'
import Footer from '../components/Home/Footer'
import FooterCopyright from '../components/Home/FooterCopyRight'
import { ComplexNavbar } from '../components/Home/Navbar'

const AllBrands = () => {
  return (
    <div className='bg-[#f6f6f6]'>
        <ComplexNavbar />
        <AllBrandsComp />
        <Footer />
        <FooterCopyright />
    </div>
  )
}

export default AllBrands
