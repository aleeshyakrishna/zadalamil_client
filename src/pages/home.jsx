
import Banner from '../components/Home/Banner';
import BestSellers from '../components/Home/bestTele';
import BrandsHome from '../components/Home/Brands';
import CategorySection from '../components/Home/CategorySection';
import Footer from '../components/Home/Footer';
import FooterCopyright from '../components/Home/FooterCopyRight';
import MobileBestSellers from '../components/Home/mobileBest';
import MobileSection from '../components/Home/MobileSection';
import NewArrivalMob from '../components/Home/newArrivalMob';
import NewArrivals from '../components/Home/newArrivalsTele';
import ServicesSection from '../components/Home/serviceCard';
import TelevisionSection from '../components/Home/television';
import ZadServices from '../components/Home/zadServices';
import { ComplexNavbar } from './../components/Home/Navbar';


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
