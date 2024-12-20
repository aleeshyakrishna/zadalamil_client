import { useState } from 'react';
import ProductImage from '../../assets/images/iPhone1.jpg';
import { Link } from 'react-router-dom';
import { CartRemoval } from '../Modal/cartRemoval';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Apple iPhone 15 Pro Max',
      storage: '1TB',
      chipset: 'A17 Bionic chip',
      color: 'Black Titanium',
      price: 1899.0,
      originalPrice: 2099.0,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Apple iPhone 15 Pro Max',
      storage: '1TB',
      chipset: 'A17 Bionic chip',
      color: 'Black Titanium',
      price: 1899.0,
      originalPrice: 2099.0,
      quantity: 1,
    },
  ]);

  const [coupon, setCoupon] = useState('');
  const discount = 200; 

  const updateQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: type === 'increment' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  // Calculate totals
  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = subTotal - discount;

  const [selectedItemId, setSelectedItemId] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenCartRemovalModal = (id) => {
    setSelectedItemId(id);
    setOpen(true);
  };

  const removeFromCart = () => {
    setCartItems((prev) => prev.filter((item) => item.id !== selectedItemId));
    setOpen(false);
  };

  return (
    <section>
    <div className="p-4 ">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-32 md:mt-32 lg:mt-40">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-6">My Shopping Cart</h1>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white flex items-center gap-6 p-4 border rounded-lg">
                <Link to='/product-details'><img
                  src={ProductImage}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg m-4"
                />
                </Link>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">Storage: {item.storage}</p>
                  <p className="text-sm text-gray-500">Chipset: {item.chipset}</p>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button className="text-sm text-blue-500">Save</button>
                    <button onClick={() => handleOpenCartRemovalModal(item.id)} className="text-sm text-red-900">Remove</button>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-gray-400 line-through">AED {item.originalPrice.toLocaleString()}</p>
                  <p className="text-red-900 font-bold">AED {item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-8 h-8 flex items-center justify-center border rounded"
                      onClick={() => updateQuantity(item.id, 'decrement')}
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="w-8 h-8 flex items-center justify-center border rounded"
                      onClick={() => updateQuantity(item.id, 'increment')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to='/'><button className="mt-6 bg-red-900 text-white py-2 px-4 rounded-md hover:bg-red-700">
            Continue Shopping
          </button>
          </Link>
        </div>

        {/* Order Summary */}
        <div>
          <div className="p-6 border rounded-lg space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Coupon</h2>
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="border p-2 flex-1 rounded"
                />
                <button className="bg-red-900 text-white py-2 px-4 rounded-md hover:bg-red-700">
                  APPLY
                </button>
              </div>
            </div>
            <div className="border-t pt-4">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <div className="flex justify-between text-gray-600">
                <p>Sub Total</p>
                <p>AED {subTotal.toLocaleString()}</p>
              </div>
              <div className="flex justify-between text-gray-600">
                <p>Discounts</p>
                <p>- AED {discount.toLocaleString()}</p>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <p>Total</p>
                <p>AED {total.toLocaleString()}</p>
              </div>
            </div>
            <Link to='/checkout'>
            <button className="bg-red-900 text-white py-2 px-4 w-full rounded-md hover:bg-red-700 mt-5">
              CHECKOUT
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <CartRemoval 
            open={open}
            setOpen={setOpen}
            removeFromWishlist={removeFromCart}
          />
    </section>
  );
};

export default ShoppingCart;
