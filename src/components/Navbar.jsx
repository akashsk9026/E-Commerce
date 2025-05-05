import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import Login from './Login';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { cartItems = {} } = useAppContext();

  const totalCartItems = Object.values(cartItems).reduce((acc, count) => acc + count, 0);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "border-b-2 border-green-500 text-green-600 pb-1"
      : "hover:text-green-600 transition";

  return (
    <nav className="flex items-center justify-between px-15 py-4 border-b-1 border-green-100 shadow-sm bg-white relative">
      <div className="flex items-center gap-2">
        <img src={assets.logo} alt="GreenCart Logo" className="h-10" />
      </div>

      <div className="flex items-center gap-6 text-gray-600 font-medium ml-auto">
        <NavLink
          to="/seller-dashboard"
          className=" font-light border border-b-green-600 text-gray-500 px-4 py-1 rounded-full text-sm  hover:bg-green-100 transition"
        >
          Seller Dashboard
        </NavLink>

        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>

        <NavLink to="/AllProducts" className={linkClasses}>
          All Products
        </NavLink>

        <div className="flex items-center border px-3 py-2 rounded-full bg-gray-50">
          <input
            type="text"
            placeholder="Search products"
            className="bg-transparent outline-none text-sm px-2"
          />
          <img src={assets.search_icon} alt="Search" className="h-5 ml-5" />
        </div>

        <div className="relative">
          <NavLink to="/cart">
            <img src={assets.cart_icon} alt="Cart" className="h-7" />
            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {totalCartItems}
            </div>
          </NavLink>
        </div>

        <button
          onClick={() => setShowLogin(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-10 py-2 rounded-full text-sm font-medium transition"
        >
          Login
        </button>
      </div>

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="relative">
            <Login />
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 bg-green-300 hover:bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center"
            >
              X
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
