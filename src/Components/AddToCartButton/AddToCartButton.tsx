import { useRef } from "react";
import { useCart } from "../../Contexts/CartContext";
import { IProduct } from "../../Models/IProduct";
import { handleAddToCart } from "../../Utilities/cartHelpers";
import styles from "./AddToCartButton.module.css";

// Definierar strukturen för ett objekt som används som prop i komponenten. Propen är av typen IProduct.
interface AddToCartButtonProps {
  product: IProduct;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart(); // addToCart från context
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Referens till knappen

  const handleClick = () => {
    if (buttonRef.current) {
      handleAddToCart(addToCart, product, buttonRef.current); // Skickar med knappelementet
    }
  };

  return (
    <button
      ref={buttonRef}
      className={styles.addToCartButton}
      onClick={handleClick}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
