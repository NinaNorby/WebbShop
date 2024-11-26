// src/Components/AddToCartButton/AddToCartButton.tsx
import React from "react";
import { useCart } from "../../Contexts/CartContext";
import { IProduct } from "../../Models/IProduct";
import styles from "./AddToCartButton.module.css";

interface AddToCartButtonProps {
  product: IProduct;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart(); // Access addToCart från context

  // Hanterar "Add to Cart"-klick och blinkningseffekt på ikonen
  const handleAddToCart = () => {
    addToCart(product);

    // Hämta kundvagnsikonen och lägg till blink-klassen
    const cartIcon = document.querySelector('.fa-cart-shopping');
    if (cartIcon) {
      cartIcon.classList.add('blink');
      setTimeout(() => {
        cartIcon.classList.remove('blink');
      }, 300);
    }
  };

  return (
    <button
      className={styles.addToCartButton}
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
