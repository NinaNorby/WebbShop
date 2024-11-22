import { IProduct } from "../../Models/IProduct";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from './ProductList.module.css';


export const ProductList = ({ products }: { products: IProduct[] }) => {
  return (
    <>
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};