import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const CartTable = () => {
  const { cartItems, products, removeFromCart, addToCart, currency } = useAppContext();

  const cartProductList = products?.filter((product) => cartItems[product._id]) || [];

  const calculateSubtotal = (productId, price) => cartItems[productId] * price;

  const totalAmount = cartProductList.reduce(
    (total, product) => total + calculateSubtotal(product._id, product.offerPrice),
    0
  );

  const taxRate = 0.02;
  const tax = +(totalAmount * taxRate).toFixed(2);
  const shipping = 0;

  const totalWithTax = (totalAmount + tax + shipping).toFixed(2);

  return (
    <div className="px-4 py-10 md:px-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Shopping Cart{" "}
        <span className="text-green-600 text-xl">({Object.values(cartItems).reduce((a, b) => a + b, 0)} Items)</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Cart Table */}
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th>Product Details</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartProductList.map((product) => (
                <tr key={product._id} className="bg-white">
                  <td className="flex items-center gap-4 py-2">
                    <img
                      src={Array.isArray(product.image) ? product.image[0] : product.image}
                      alt={product.name}
                      className="w-20 h-20 object-contain rounded border"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{product.name}</p>
                      <p className="text-sm text-gray-500">Weight: N/A</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-600">Qty:</span>
                        <select
                          className="border rounded px-2 py-1 text-sm"
                          value={cartItems[product._id]}
                          onChange={(e) => addToCart(product._id, parseInt(e.target.value))}
                        >
                          {[...Array(10).keys()].map((n) => (
                            <option key={n + 1} value={n + 1}>
                              {n + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </td>
                  <td className="text-gray-700 font-medium">
                    {currency}
                    {calculateSubtotal(product._id, product.offerPrice)}
                  </td>
                  <td>
                    <button
                      onClick={() => removeFromCart(product._id, true)}
                      className="text-red-500 hover:text-red-700 text-lg"
                    >
                      <FaTimes />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Link to="/AllProducts" className="mt-6 inline-block text-green-600 hover:underline text-sm">
            ← Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
          <hr className="mb-4" />

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600">DELIVERY ADDRESS</h4>
            <p className="text-gray-500 text-sm mt-1">No address found</p>
            <Link to="/address" className="text-green-600 text-sm font-medium hover:underline">
              Change
            </Link>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600">PAYMENT METHOD</h4>
            <select className="w-full border px-3 py-2 mt-2 rounded text-sm">
              <option>Cash On Delivery</option>
              <option>Online Payment</option>
            </select>
          </div>

          <div className="text-sm text-gray-700 space-y-2 mt-6">
            <div className="flex justify-between">
              <span>Shipping Fee</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (2%)</span>
              <span>{currency}{tax}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-2">
              <span>Total Amount:</span>
              <span>{currency}{totalWithTax}</span>
            </div>
          </div>

          <button
            className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
