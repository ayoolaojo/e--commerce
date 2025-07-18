import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductsDetails";

function Navigation() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
}

export default Navigation;
