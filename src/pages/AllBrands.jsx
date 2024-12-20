import AllBrandsComp from '../components/AllBrands/AllBrandsComp'
import Footer from '../components/Footer'
import FooterCopyright from '../components/FooterCopyRight'
import { ComplexNavbar } from '../components/Navbar'

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
