import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-100 via-white to-green-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-10 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-6">
          Stay Fresh with Veggies!
        </h2>
        <p className="text-gray-600 mt-4 mb-8 text-lg">
          Subscribe to receive weekly updates on farm-fresh produce, special discounts, and healthy tips.
        </p>

        <form
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 shadow-sm w-full sm:w-auto"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            Subscribe
          </button>
        </form>

        {submitted && (
          <p className="text-green-600 mt-4 font-medium animate-pulse">
            ✅ Subscribed successfully!
          </p>
        )}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {/* Section 1 */}
          <div className="transform hover:scale-105 transition-all duration-300 shadow-lg p-6 rounded-lg bg-white border border-gray-200 hover:bg-green-50 hover:shadow-xl">
            <h4 className="text-green-600 font-semibold text-lg mb-2">💰 Exclusive Discounts</h4>
            <p className="text-gray-600 text-sm">
              Get early access to offers and price drops on seasonal vegetables.
            </p>
          </div>

          {/* Section 2 */}
          <div className="transform hover:scale-105 transition-all duration-300 shadow-lg p-6 rounded-lg bg-white border border-gray-200 hover:bg-green-50 hover:shadow-xl">
            <h4 className="text-green-600 font-semibold text-lg mb-2">🌿 Health Tips</h4>
            <p className="text-gray-600 text-sm">
              Learn how to eat healthy with weekly nutrition tips and recipes.
            </p>
          </div>

          {/* Section 3 */}
          <div className="transform hover:scale-105 transition-all duration-300 shadow-lg p-6 rounded-lg bg-white border border-gray-200 hover:bg-green-50 hover:shadow-xl">
            <h4 className="text-green-600 font-semibold text-lg mb-2">🚚 Fresh Arrivals</h4>
            <p className="text-gray-600 text-sm">
              Be the first to know when new fresh stock hits our shelves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
