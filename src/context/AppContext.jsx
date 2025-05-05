import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { CheckCircle } from "lucide-react"; // For "Added to Cart"
import { dummyProducts } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const currency = "$";
  const products = dummyProducts;

  const addToCart = (itemID) => {
    const cartData = { ...cartItems };
    cartData[itemID] = (cartData[itemID] || 0) + 1;
    setCartItems(cartData);

    toast.custom((t) => (
      <div
        className={`flex items-center gap-2 px-4 py-2 rounded-xl shadow-md bg-white border text-gray-800 font-medium transition-all ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        <CheckCircle className="text-green-500 w-5 h-5" />
        <span>Added to Cart</span>
      </div>
    ), { duration: 1500, position: "top-center" });
  };

  const updateCartItem = (itemID, quantity) => {
    const cartData = { ...cartItems };
    cartData[itemID] = quantity;
    setCartItems(cartData);
    toast.success("✅ Cart updated");
  };

  const removeFromCart = (itemID) => {
    const cartData = { ...cartItems };

    if (cartData[itemID]) {
      cartData[itemID] -= 1;
      if (cartData[itemID] <= 0) {
        delete cartData[itemID];
      }
      setCartItems(cartData);

      toast.custom((t) => (
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-xl shadow-md bg-white border text-gray-800 font-medium transition-all ${
            t.visible ? "animate-enter" : "animate-leave"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-red-500 w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>Removed from Cart</span>
        </div>
      ), { duration: 1500, position: "top-center" });
    }
  };

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
