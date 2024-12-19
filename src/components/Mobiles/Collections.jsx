import PropTypes from 'prop-types';
import Img1 from '../../assets/images/mob1.png';
import Img2 from '../../assets/images/mob2.png';
import Img3 from '../../assets/images/mob3.png';
import Img4 from '../../assets/images/mob3.png';
import Img5 from '../../assets/images/mob3.png';
import Img6 from '../../assets/images/mob3.png';
import Img7 from '../../assets/images/mob3.png';
import Img8 from '../../assets/images/mob3.png';
import { Filters } from './Filters';


const collectionData =  [
    { id: 1, image: Img1, title: "Samsung Galaxy Z Fold5 |5G| 12GB RAM | ROM 1 TB", price: 6599, oldPrice: 10999, discount: "28% OFF" },
    { id: 2, image: Img2, title: "Samsung Galaxy Z Fold5 |5G| 12GB RAM | ROM 1 TB", price: 6599, oldPrice: 10999, discount: "28% OFF" },
    { id: 3, image: Img3, title: "Samsung Galaxy Z Fold5 |5G| 12GB RAM | ROM 1 TB", price: 6599, oldPrice: 10999, discount: "28% OFF" },
    { id: 4, image: Img4, title: "Samsung Galaxy Z Fold5 |5G| 12GB RAM | ROM 1 TB", price: 6599, oldPrice: 10999, discount: "28% OFF" },
    { id: 5, image: Img5, title: "Samsung Galaxy Z Fold5 |5G| 12GB RAM | ROM 1 TB", price: 6599, oldPrice: 10999, discount: "28% OFF" },
    { id: 6, image: Img6, title: "Samsung Galaxy Z Fold5 |5G| 12GB RAM | ROM 1 TB", price: 6599, oldPrice: 10999, discount: "28% OFF" },
    { id: 7, image: Img7, title: "Samsung Galaxy Z Fold5 |5G| 12GB RAM | ROM 1 TB", price: 6599, oldPrice: 10999, discount: "28% OFF" },
    { id: 8, image: Img8, title: "Samsung Galaxy Z Fold5 |5G| 12GB RAM | ROM 1 TB", price: 6599, oldPrice: 10999, discount: "28% OFF" },
]

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center relative">

      <div className="absolute top-3 left-3 bg-red-600 text-white text-sm px-2 py-1 rounded">
        {product.discount}
      </div>

      <button className="absolute top-3 right-3 text-gray-500 hover:text-red-600">
        ♥
      </button>

      <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />

      <div className="text-START mt-6">
        <h3 className="text-gray-700 text-sm font-medium">{product.title}</h3>
        <p className="text-gray-400 line-through text-sm mt-5">
          AED {product.oldPrice.toLocaleString()}
        </p>
        <p className="text-black text-lg font-bold">AED {product.price.toLocaleString()}</p>
      </div>

      <button className="bg-gradient-to-r from-[#1D0F0F] to-[#972323] text-white font-semibold px-4 py-2 w-full rounded-md hover:bg-[#6f1b1b] mt-10 mb-10">
        ADD TO CART
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
    discount: PropTypes.string.isRequired,
  }).isRequired,
};


const Collections = () => {
  return (
    <section className="py-1 m-10">
      <h2 className="text-3xl font-bold text-center mb-14">Mobiles & Tablets</h2>

      {/* Layout Container */}
      <div className="w-full mx-auto px-4 flex">
        {/* Filters Section */}
        <aside className="w-1/4 pr-4 border-2">
        <div className="flex justify-between mb-4">
            <h3 className="font-bold text-xl">Filters</h3>
            <h3 className="font-light text-base cursor-pointer">Clear All Filters</h3>
        </div>

          {/* <div className="space-y-6">
            <div>
              <button className="w-full text-left font-semibold">Categories</button>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Phones</li>
                <li>Tablets</li>
              </ul>
            </div>
            <div>
              <button className="w-full text-left font-semibold">Price Range</button>
              <ul className="mt-2 space-y-2 text-sm">
                <li>$0 - $500</li>
                <li>$500 - $1000</li>
              </ul>
            </div>
            <div>
              <button className="w-full text-left font-semibold">RAM</button>
              <ul className="mt-2 space-y-2 text-sm">
                <li>4GB</li>
                <li>8GB</li>
              </ul>
            </div>
          </div> */}
          <Filters />
        </aside>

        {/* Products Section */}
        <main className="w-full py-10 px-5 bg-gray-50">
          <div className=" mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {collectionData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                </div>
            </div>
        </main>
      </div>

    </section>
  )
}

export default Collections
