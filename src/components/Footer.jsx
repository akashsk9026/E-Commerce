const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 text-gray-700">
        
        {/* About GreenCart */}
        <div className="group transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center mb-4 text-4xl">
            🛒 <span className="ml-3 text-xl font-bold text-green-700">GreenCart</span>
          </div>
          <p className="text-sm mt-2">
            We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.
          </p>
        </div>

        {/* Quick Links */}
        <div className="group transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center mb-4 text-4xl">
            🧭 <span className="ml-3 text-lg font-semibold text-gray-800">Quick Links</span>
          </div>
          <ul className="space-y-2 text-sm mt-2">
            <li><a href="#" className="hover:text-green-600 transition">🏠 Home</a></li>
            <li><a href="#" className="hover:text-green-600 transition">🔥 Best Sellers</a></li>
            <li><a href="#" className="hover:text-green-600 transition">💸 Offers & Deals</a></li>
            <li><a href="#" className="hover:text-green-600 transition">📞 Contact Us</a></li>
            <li><a href="#" className="hover:text-green-600 transition">❓ FAQs</a></li>
          </ul>
        </div>

        {/* Need Help */}
        <div className="group transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center mb-4 text-4xl">
            💬 <span className="ml-3 text-lg font-semibold text-gray-800">Need help?</span>
          </div>
          <ul className="space-y-2 text-sm mt-2">
            <li><a href="#" className="hover:text-green-600 transition">🚚 Delivery Info</a></li>
            <li><a href="#" className="hover:text-green-600 transition">🔁 Return & Refunds</a></li>
            <li><a href="#" className="hover:text-green-600 transition">💳 Payment Methods</a></li>
            <li><a href="#" className="hover:text-green-600 transition">📦 Track your Order</a></li>
            <li><a href="#" className="hover:text-green-600 transition">📬 Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-600 text-sm mt-10 border-t pt-4">
        © 2025 GreenCart. All rights reserved. 🌱
      </div>
    </div>
  );
};

export default Footer;
