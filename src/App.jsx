import Header from "./components/Header/Header";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Categories from "./pages/categories/Categories";
import Home from "./pages/home/Home";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import Register from "./components/register/Register";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:category" element={<Categories />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
