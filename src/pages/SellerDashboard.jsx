import React, { useState } from "react";
import { FaPlus, FaListUl, FaReceipt, FaUpload } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const SellerDashboard = () => {
  const [selectedPage, setSelectedPage] = useState("add-product");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const validEmail = "parashettipriya2004@gmail.com"; 
  const validPassword = "123456"; 

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      setLoginError(""); // Clear any previous error messages
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-100">
      <div className="flex w-full max-w-10xl">
        {isLoggedIn ? (
          <>
            <aside className="w-64 bg-white shadow-md">
              <nav className="flex flex-col p-4 gap-4">
                <SidebarItem
                  label="Add Product"
                  Icon={FaPlus}
                  active={selectedPage === "add-product"}
                  onClick={() => setSelectedPage("add-product")}
                />
                <SidebarItem
                  label="Product List"
                  Icon={FaListUl}
                  active={selectedPage === "product-list"}
                  onClick={() => setSelectedPage("product-list")}
                />
                <SidebarItem
                  label="Orders"
                  Icon={FaReceipt}
                  active={selectedPage === "orders"}
                  onClick={() => setSelectedPage("orders")}
                />
              </nav>
            </aside>

            <main className="flex-1 p-8 bg-white">
              {selectedPage === "add-product" && <AddProductForm />}
              {selectedPage === "product-list" && <Productlist />}
              {selectedPage === "orders" && <h2>Orders page coming soon...</h2>}
            </main>
          </>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
              <h2 className="text-2xl font-semibold mb-6">Login</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
                    required
                  />
                </div>

                {loginError && (
                  <div className="text-red-500 text-sm mt-2">{loginError}</div>
                )}

                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SidebarItem = ({ label, Icon, active, onClick }) => (
  <button
    className={`flex items-center gap-3 p-2 text-left rounded ${
      active ? "bg-green-100 text-green-600 font-medium" : "text-gray-700"
    } hover:bg-green-50`}
    onClick={onClick}
  >
    <Icon className="text-lg" /> {label}
  </button>
);

const AddProductForm = () => {
  const [images, setImages] = useState([null, null, null, null]);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = URL.createObjectURL(file);
      setImages(updatedImages);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-1">
      <h2 className="text-2xl font-semibold mb-6">Add Product</h2>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {images.map((image, idx) => (
          <label
            key={idx}
            className="border border-dashed border-gray-500 p-4 text-center rounded hover:border-green-400 cursor-pointer relative flex items-center justify-center h-28"
          >
            {image ? (
              <img
                src={image}
                alt={`preview-${idx}`}
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <div className="relative flex flex-col items-center">
                <FaUpload className="text-gray-300 text-1xl" />
                <span className="text-sm text-gray-500 mt-0">Upload</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, idx)}
            />
          </label>
        ))}
      </div>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Product Name</label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Product Description</label>
          <textarea
            rows="4"
            placeholder="Type here"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
            required
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Category</label>
          <select
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
            required
          >
            <option value="">Select Category</option>
            <option value="fruits">Vegetables</option>
            <option value="vegetables">Fruits</option>
            <option value="dairy">Drinks</option>
            <option value="dairy">Instant</option>
            <option value="dairy">Dairy</option>
            <option value="dairy">Bekary</option>
            <option value="dairy">Grains</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Product Price</label>
            <input
              type="number"
              defaultValue="0"
              min="0"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Offer Price</label>
            <input
              type="number"
              defaultValue="0"
              min="0"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
        >
          ADD
        </button>
      </form>
    </div>
  );
};


const Productlist = () => {
  const { products = [] } = useAppContext() || {};
  const [productStates, setProductStates] = useState(
    products.reduce((acc, product) => {
      acc[product._id] = product.inStock;
      return acc;
    }, {})
  );

  const handleToggle = (productId) => {
    setProductStates((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div className="mt-2">
      <p className="text-2xl md:text-3xl font-medium mb-6">Product List</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-400 rounded-md">
          <thead>
            <tr className="text-left text-gray-700 border-b">
              <th className="p-2">Product</th>
              <th className="p-2">Category</th>
              <th className="p-2">Selling Price</th>
              <th className="p-2">In Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={Array.isArray(product.image) ? product.image[0] : product.image}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded border"
                  />
                  <span className="font-medium text-gray-600">{product.name}</span>
                </td>
                <td className="p-4 text-gray-600">{product.category}</td>
                <td className="p-4 text-gray-600 font-medium">${product.price}</td>
                <td className="p-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={productStates[product._id]}
                      onChange={() => handleToggle(product._id)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 p-6">
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default SellerDashboard;
