
import Banner from '../components/Banner';
import BestSellers from '../components/bestTele';
import BrandsHome from '../components/Brands';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';
import FooterCopyright from '../components/FooterCopyRight';
import MobileBestSellers from '../components/mobileBest';
import MobileSection from '../components/MobileSection';
import NewArrivalMob from '../components/newArrivalMob';
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
        <NewArrivalMob />
        <ZadServices />
        <BrandsHome />

        <Footer />
        <FooterCopyright />
        
      
    </div>
  )
}

export default Home;
