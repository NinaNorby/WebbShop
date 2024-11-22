// ShoppingCart: En komponent för att visa och hantera kundkorgen.
import { useCart } from "../../Contexts/CartContext";
// import { IProduct } from "../../Models/IProduct";

import styles from "../ShoppingCart/ShoppingCart.module.css";

//Bytte ut från usestate till min useCart där denna då kommer att hämta cartItems från CartContex
const ShoppingCart = () => {
  const { cartItems } = useCart();

  return (
    <div className={styles.shoppingCartWrapper}>
      <h1 className={styles.shoppingCartHeading}>Your shopping cart</h1>
      {/* Om cartitems är 0 kommer <p>. texten att visas */}
      {cartItems.length === 0 ? (
        <div className={styles.ShoppingCartDiv}>
          <p>Your shopping cart is empty! </p>
          <img
            className={styles.shoppingCartImg}
            src="https://i.postimg.cc/K8cwkqkS/jem-sahagun-Bwz0-Cbs85w-unsplash.jpg"
            alt="A Christmas ball that looks sad"
          />
        </div>
      ) : (
        <ul className={styles.shoppingCartUL}>
          {cartItems.map((item) => (
            <li className={styles.shoppingCartLI} key={item.id}>
              {item.title} - {item.price} kr
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
