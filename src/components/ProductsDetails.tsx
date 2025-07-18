// 1. Import React tools
import { useParams } from "react-router-dom"; // Get the ID from the URL
import { useEffect, useState } from "react"; // For data loading
import axios from "axios"; // For API request

// 2. Define product type
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

// 3. Start the component
export default function ProductDetails() {
  // 4. Get ID from the route URL (e.g., /product/5 → id = 5)
  const { id } = useParams();

  // 5. Create state for the product
  const [product, setProduct] = useState<Product | null>(null);

  // 6. Create loading state
  const [loading, setLoading] = useState(false);

  // 7. Auto-run this function when the page loads
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); // Show loading

      try {
        // 8. Make request to get product by ID
        const response = await axios.get<Product>(
          `https://fakestoreapi.com/products/${id}`
        );

        // 9. Save the result in state
        setProduct(response.data);
      } catch {
        console.error("Error loading product");
      }

      setLoading(false); // Stop loading
    };

    fetchProduct(); // Call the function
  }, [id]); // Only run when the ID changes

  // 10. Show "Loading..." until product is ready
  if (loading || !product) return <p className="p-4">Loading product...</p>;

  // 11. Show product info
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-64 object-contain mx-auto mb-4"
      />

      {/* Price */}
      <p className="text-green-700 font-bold text-lg">${product.price}</p>

      {/* Description */}
      <p className="mt-4 text-gray-700">{product.description}</p>
    </div>
  );
}
