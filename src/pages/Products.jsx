import { Link } from "react-router-dom";
import { assets } from "../assets/assets"; // Correct path to assets

// Utility function
const createProduct = (id, name, price, oldPrice, image, rating = 4) => ({
  id,
  name,
  price,
  oldPrice,
  image,
  rating,
});

// Full Product Data (using all typical assets)
const ProductData = [
  {
    id: "vegetables",
    name: "Organic Veggies",
    products: [
      createProduct(1, "Potato 500g", 25, 30, assets.potato),
      createProduct(2, "Tomato 1kg", 35, 40, assets.tomato),
      createProduct(3, "Carrot 500g", 28, 32, assets.carrot),
      createProduct(4, "Spinach 500g", 15, 18, assets.spinach),
      createProduct(5, "Onion 500g", 19, 22, assets.onion),
      createProduct(6, "Broccoli 500g", 45, 50, assets.broccoli),
      createProduct(7, "Cabbage 1pc", 30, 35, assets.cabbage),
    ],
  },
  {
    id: "fruits",
    name: "Fresh Fruits",
    products: [
      createProduct(1, "Apple 1kg", 110, 120, assets.apple),
      createProduct(2, "Orange 1kg", 75, 80, assets.orange),
      createProduct(3, "Banana 1kg", 45, 50, assets.banana),
      createProduct(4, "Mango 1kg", 140, 150, assets.mango),
      createProduct(5, "Grapes 500g", 65, 70, assets.grapes),
      createProduct(6, "Watermelon 1pc", 90, 100, assets.watermelon),
      createProduct(7, "Pineapple 1pc", 85, 95, assets.pineapple),
    ],
  },
  {
    id: "dairy",
    name: "Dairy Products",
    products: [
      createProduct(1, "Amul Milk 1L", 55, 60, assets.milk),
      createProduct(2, "Paneer 200g", 85, 90, assets.paneer),
      createProduct(3, "Eggs 12 pcs", 85, 90, assets.eggs),
      createProduct(4, "Cheese 200g", 130, 140, assets.cheese),
      createProduct(5, "Butter 100g", 75, 80, assets.butter),
      createProduct(6, "Curd 500g", 45, 50, assets.curd),
    ],
  },
  {
    id: "drinks",
    name: "Cold Drinks",
    products: [
      createProduct(1, "Coca-Cola 1.5L", 75, 80, assets.cocaCola),
      createProduct(2, "Pepsi 1.5L", 73, 78, assets.pepsi),
      createProduct(3, "Sprite 1.5L", 74, 79, assets.sprite),
      createProduct(4, "Fanta 1.5L", 72, 77, assets.fanta),
      createProduct(5, "7 Up 1.5L", 71, 76, assets.sevenUp),
      createProduct(6, "Minute Maid Juice", 65, 70, assets.minuteMaid),
      createProduct(7, "Tropicana Juice", 80, 85, assets.tropicana),
    ],
  },
  {
    id: "instant",
    name: "Instant Food",
    products: [
      createProduct(1, "Maggie Noodles", 15, 20, assets.maggie),
      createProduct(2, "Cup Noodles", 25, 30, assets.cupNoodles),
      createProduct(3, "Instant Pasta", 40, 50, assets.pasta),
      createProduct(4, "Soup Pack", 35, 40, assets.soup),
    ],
  },
  {
    id: "bakery",
    name: "Bakery & Breads",
    products: [
      createProduct(1, "Bread Loaf", 30, 35, assets.bread),
      createProduct(2, "Croissant", 45, 50, assets.croissant),
      createProduct(3, "Donut Pack", 70, 90, assets.donut),
      createProduct(4, "Cake Slice", 90, 100, assets.cake),
      createProduct(5, "Pastry", 60, 70, assets.pastry),
    ],
  },
  {
    id: "grains",
    name: "Grains & Cereals",
    products: [
      createProduct(1, "Rice 1kg", 50, 60, assets.rice),
      createProduct(2, "Wheat Flour 1kg", 45, 55, assets.wheat),
      createProduct(3, "Oats 500g", 35, 40, assets.oats),
      createProduct(4, "Cornflakes 500g", 60, 70, assets.cornflakes),
    ],
  },
];


const Products = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {ProductData.map((category) => {
          // Find first valid product image
          const firstProductWithImage = category.products.find(
            (product) => product.image
          );
          return (
            <Link
              to={`/category/${category.id}`}
              key={category.id}
              className="rounded-lg p-4 flex flex-col items-center justify-center hover:scale-105 transition bg-white shadow-md"
            >
              <img
                src={firstProductWithImage?.image || assets.fallback} // fallback if no image
                alt={category.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{category.name}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
export { ProductData };
