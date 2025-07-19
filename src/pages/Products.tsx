// src/components/Products.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Define product structure
type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

// Component
export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get<Product[]>(
        "https://fakestoreapi.com/products"
      );
      setProducts(response.data);
    } catch {
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  // Add item to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Calculate total cart price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col md:flex-row p-4 gap-6">
      {/* LEFT: Product List Section */}
      <div className="w-full md:w-3/4">
        <h1 className="text-2xl font-bold mb-4"> All Products</h1>

        {/* <button
          onClick={fetchProducts}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          Load Products
        </button> */}

        {/* Loading or error */}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow hover:bg-gray-50 cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto mb-2"
              />
              <h2 className="font-semibold text-sm">{product.title}</h2>
              <p className="text-green-700 font-bold mt-2">${product.price}</p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Cart Sidebar */}
      {/* RIGHT: Cart Sidebar */}
      <div className="w-full md:w-1/4 p-4 bg-gray-50 rounded self-start">
        <h2 className="text-xl font-bold mb-2">🛒 Cart</h2>

        {/* Empty cart */}
        {cart.length === 0 && (
          <p className="text-gray-500">No items in cart.</p>
        )}

        {/* Cart Items List */}
        <ul className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 border-b pb-2 last:border-b-0"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-contain"
              />

              {/* Title and Price */}
              <div className="flex-1 text-sm">
                <p className="font-semibold line-clamp-2">{item.title}</p>
                <p className="text-green-700">${item.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Total Amount */}
        {cart.length > 0 && (
          <p className="mt-4 font-bold text-right text-lg">
            Total: ${total.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}
