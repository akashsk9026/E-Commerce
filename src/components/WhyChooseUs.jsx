const WhyChooseUs = () => {
  const benefits = [
    {
      title: 'Fresh From Farm 🥬',
      description: 'We source directly from local farms to ensure the freshest produce every day.',
    },
    {
      title: 'Fast & Free Delivery 🚚',
      description: 'Get your groceries delivered within hours—fresh, fast, and at no extra cost.',
    },
    {
      title: 'Affordable Prices 💰',
      description: 'High quality doesn’t mean high prices. Enjoy great deals every day.',
    },
    {
      title: 'Wide Variety of Vegetables 🥒',
      description: 'Explore a vast selection of fresh vegetables for every meal.',
    },
    {
      title: 'Eco-friendly Packaging ♻️',
      description: 'We care for the environment with sustainable and eco-friendly packaging.',
    },
    {
      title: 'Customer Satisfaction 🌟',
      description: 'Our priority is providing the best service and ensuring customer satisfaction.',
    },
  ];

  return (
    <div className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 text-lg">Experience the easiest and freshest way to shop vegetables online.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 hover:bg-green-200"
          >
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
