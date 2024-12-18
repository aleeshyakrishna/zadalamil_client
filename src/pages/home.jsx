
import Banner from '../components/Banner';
import BestSellers from '../components/bestTele';
import BrandsHome from '../components/Brands';
import CategorySection from '../components/CategorySection';
import MobileBestSellers from '../components/mobileBest';
import MobileSection from '../components/MobileSection';
import NewArrivals from '../components/newArrivalsTele';
import ServicesSection from '../components/serviceCard';
import TelevisionSection from '../components/television';
import ZadServices from '../components/zadServices';
import { ComplexNavbar } from './../components/Navbar';


const Home = () => {
  return (
    <div className='bg-[#f6f6f6]'>
        <ComplexNavbar />
        <Banner  />
        <CategorySection />
        <ServicesSection />
        <TelevisionSection />
        <BestSellers />
        <NewArrivals />
        <MobileSection />
        <MobileBestSellers />
        <ZadServices />
        <BrandsHome />
        
      
    </div>
  )
}

export default Home;
