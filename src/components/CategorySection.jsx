import Img1 from '../assets/images/camers.png';
import Img2 from '../assets/images/gaming.png';
import Img3 from '../assets/images/headphones.png';
import Img4 from '../assets/images/laptops.png';
import Img5 from '../assets/images/mobiles.png';
import Img6 from '../assets/images/speakers.png';
import Img7 from '../assets/images/wearables.png';

const categories = [
    { name: 'Cameras', image: Img1 },
    { name: 'Gaming', image: Img2 },
    { name: 'Headphones', image: Img3 },
    { name: 'Laptops', image: Img4 },
    { name: 'Mobiles', image: Img5 },
    { name: 'Speakers', image: Img6 },
    { name: 'Wearables', image: Img7 }
  ];
  
const CategorySection = () => {
  return (
    <section className="py-1 ">
      <h2 className="text-3xl font-bold text-center mb-6">Shop By Category</h2>
      <div className="flex justify-center gap-28 flex-wrap mb-20">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer">
            <div className="w-24 h-24 rounded-full shadow-2xl shadow-black bg-gray-200 flex items-center justify-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="mt-2 text-lg font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategorySection
