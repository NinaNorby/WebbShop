import { Link } from "react-router-dom"; // Importera Link från react-router-dom
import { useCart } from "../../Contexts/CartContext";
import { IProduct } from "../../Models/IProduct";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart(); // Access addToCart från context

  return (
    <div className={styles.productCardWrapper}>
      <img src={product.imageUrl} alt={product.title} className={styles.productImage} />
      {/* Länk till produktDetail */}
      <h2>
        <Link to={`/product/${product.id}`} className={styles.productLink}>
          {product.title}
        </Link>
      </h2>
      <p>{product.description}</p>
      <p>Price: {product.price} kr</p>
      {/* Kanpp för att lägga till i kundkorg */}
      <button
        className={styles.addToCartButton}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
