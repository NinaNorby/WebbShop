//Externa bibliotek
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Context Provider
import { CartProvider } from "./Contexts/CartContext";

//komponenter
import Header from "./Components/Header/Header";
import NavigationBar from "./Components/Navigation/NavigationBar/NavigationBar";

// pages
import { HomePage } from "./Pages/HomePage/HomePage";
import { ProductDetailPage } from "./Pages/ProductDetailPage/ProductDetailPage";
import { ShoppingCartPage } from "./Pages/ShoppingCartPage/ShoppingCartPage";


// CSS
import "./App.css";
import './variables.css'

function App() {
  return (
    <div>
      {/* Cart provider  har jag där för att göra statet globalt och därmed få tillgång till min shoppingcart i hela min applikation */}
      <CartProvider>
        <Router>
        <Header companyName="The Holiday Cabin Shop" />
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
