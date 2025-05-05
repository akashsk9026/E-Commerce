import React from 'react';
import ProductCard from './ProductCard';
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
  const { products = [] } = useAppContext() || {};

  console.log("BestSeller Products:", products);

  if (!products.length) {
    return (
      <div className="mt-16">
        <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
        <p className="text-gray-500 mt-4">No products available.</p>
      </div>
    );
  }

  const filteredProducts = products
    .filter((product) => product?.inStock)
    .slice(0, 5);

  if (!filteredProducts.length) {
    return (
      <div className="mt-16">
        <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
        <p className="text-gray-500 mt-4">No products in stock.</p>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;