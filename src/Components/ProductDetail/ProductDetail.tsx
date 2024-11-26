import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IProduct } from "../../Models/IProduct";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5100";

  useEffect(() => {
    if (!id) {
      setError("Invalid product ID.");
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data.result);
        } else {
          setError("Failed to fetch product details.");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Error fetching product.");
      }
    };

    fetchProduct();
  }, [id, apiUrl]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.productDetailWrapper}>
      <h1>{product.title}</h1>
      <img
        className={styles.productImage}
        src={product.imageUrl}
        alt={product.title}
      />
      <p>{product.description}</p>
      <p>Price: {product.price} kr</p>
      <p>In Stock: {product.inStock}</p>
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductDetail;
