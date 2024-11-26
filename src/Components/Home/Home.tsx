// Home.tsx
import { useEffect, useState } from "react";
import { IProduct } from "../../Models/IProduct";
import { fetchProducts } from "../../Utilities/fetchProducts";
import { getLoremIpsum } from "../../Utilities/getLoremIpsum";
import { ProductList } from "../../Components/ProductList/ProductList";
import styles from "./Home.module.css";

interface HomeProps {
  products?: IProduct[]; // Lägg till en optional prop för produkter
}

export const Home = ({ products: initialProducts }: HomeProps) => {
  const [products, setProducts] = useState<IProduct[]>(initialProducts || []);

  useEffect(() => {
    if (!initialProducts) {
      const getProducts = async () => {
        try {
          const data = await fetchProducts(); // Hämtar data externt
          setProducts(data); // Uppdaterar state med de hämtade produkterna
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      };
      getProducts(); // Hämtar data när komponenten laddas
    }
  }, [initialProducts]);

  return (
    <div className={styles.homeWrapper}>
      <h1 className={styles.heading}>Welcome!</h1>
      <p className={styles.homepageParagraph}>{getLoremIpsum()}</p>
      <ProductList products={products} />
    </div>
  );
};
