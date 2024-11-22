import { CartProvider } from "./Contexts/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";
import NavigationBar from "./Components/Navigation/NavigationBar/NavigationBar";
import { ProductDetailPage } from "./Pages/ProductDetailPage/ProductDetailPage";
import { ShoppingCartPage } from "./Pages/ShoppingCartPage/ShoppingCartPage";

import "./App.css";

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Header />
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
