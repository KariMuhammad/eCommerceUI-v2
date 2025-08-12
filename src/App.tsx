import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Home,
  Blogs,
  CompareProducts,
  Store,
  Wishlist,
  Login,
  ResetPassword,
  Register,
} from "@/pages";
import Layout from "@/layouts/Layout";

// CSS
import Blog from "@/pages/Blog";
import Refund from "@/pages/Refund";
import Privacy from "@/pages/Privacy";
import TermsCondition from "@/pages/TermsCondition";
import ShippingPolicy from "@/pages/ShippingPolicy";
import Product from "@/pages/Product";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/compare-products" element={<CompareProducts />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/forgot-password" element={<ResetPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsCondition />}
            />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
