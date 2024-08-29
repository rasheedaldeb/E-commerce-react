import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";
import Shop from "./Shop/Shop";
import SingleProduct from "./Shop/SingleProduct";
import CartPage from "./Shop/CartPage";
import SingleBlog from "./Blog/SingleBlog";
import About from "./About/About";
import Contact from "./Contact/Contact";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <NavItems />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="shop/:id" element={<SingleProduct />} />
        <Route
          path="/cart-page"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
