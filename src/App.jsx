import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductCategory from "./pages/ProductCategory";
import ProductData from "./pages/Products";
import Footer from "./components/Footer";
import BestSeller from "./components/BestSeller";
import CartTable from "./pages/CartTable";
import SellerDashboard from "./pages/SellerDashboard";


const App = () => {
  const location = useLocation();
  const isSellerPath = location.pathname.includes("/seller-dashboard");

  return (
    <div>
      {!isSellerPath && <Navbar />}

      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/shop" element={<AllProducts />} />
          <Route path="/deals" element={<BestSeller />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:id" element={<ProductData />} />
          <Route path="/cart" element={<CartTable />} /> 
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
        </Routes>
      </div>

      {!isSellerPath && <Footer />}
      
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 1500,
          style: {
            borderRadius: "10px",
            background: "#fff",
            color: "#333",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          },
        }}
      />
    </div>
  );
};

export default App;
