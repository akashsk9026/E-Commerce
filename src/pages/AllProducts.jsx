import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const AllProducts = () => {
  const { products = [], currency, addToCart, cartItems, removeFromCart } = useAppContext() || {};

  // Handle the case if no products are available
  if (!products.length) {
    return (
      <div className="mt-16">
        <p className="text-2xl md:text-3xl font-medium">All Products</p>
        <p className="text-gray-500 mt-4">No products available.</p>
      </div>
    );
  }

  const filteredProducts = products.filter((product) => product?.inStock);

  if (!filteredProducts.length) {
    return (
      <div className="mt-16">
        <p className="text-2xl md:text-3xl font-medium">All Products</p>
        <p className="text-gray-500 mt-4">No products in stock.</p>
      </div>
    );
  }

  const ProductCard = ({ product }) => {
    const [count, setCount] = useState(0);

    return product && (
      <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
        <div className="group cursor-pointer flex items-center justify-center px-2">
          <img
            className="group-hover:scale-105 transition max-w-26 md:max-w-36"
            src={Array.isArray(product.image) ? product.image[0] : product.image}
            alt={product.name}
          />
        </div>
        <div className="text-gray-500/60 text-sm">
          <p>{product.category}</p>
          <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
          <div className="flex items-center gap-0.5">
            {Array(5).fill('').map((_, i) => (
              <img
                key={i}
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                alt="star"
                className="md:w-3.5 w3"
              />
            ))}
            <p>4</p>
          </div>
          <div className="flex items-end justify-between mt-3">
            <p className="md:text-xl text-base font-medium text-primary">
              {currency}{product.offerPrice}{" "}
              <span className="text-gray-500/60 md:text-sm text-xs line-through">${product.price}</span>
            </p>
            <div className="text-primary" onClick={(e) => { e.stopPropagation(); }}>
              {!cartItems[product._id] ? (
                <button
                  className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium"
                  onClick={() => {
                    setCount(1);
                    addToCart(product._id);
                  }}
                >
                  <img src={assets.cart_icon} alt="cart_icon" />
                  Add
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
                  <button
                    onClick={() => { removeFromCart(product._id); }}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    -
                  </button>
                  <span className="w-5 text-center">{cartItems[product._id]}</span>
                  <button
                    onClick={() => { addToCart(product._id); }}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">All Products</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
