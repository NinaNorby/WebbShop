import { useEffect, useState } from 'react';
import { IProduct } from '../../Models/IProduct';
import { fetchProducts } from '../../Utilities/fetchProducts';
import { ProductList } from '../../Components/ProductList/ProductList';
import { getLoremIpsum } from '../../Utilities/getLoremIpsum';
import styles from './HomePage.module.css';

export const HomePage = () => {
   // State för att lagra produkterna som hämtas från apiet.  
  const [products, setProducts] = useState<IProduct[]>([]);

  // hämtar data när komponenten laddas för första gången 
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts(); // Hämtar data externt
      setProducts(data); // Uppdaterar statet  med de hämtade produkterna
    };
    //  Anropar den (async) funktionen för att starta hämtningen av data
    getProducts(); 
  }, []);

  return (
      // wraappar allt pga css 
    <div className="homeWrapper">
      <h1 className={styles.heading}>Välkommen!</h1>
        {/* Skapat lorem ipsum tect genom en funktion för att det ska bli renare i returnen*/}
      <p className={styles.homepageParagraph}>{getLoremIpsum()}</p>
      {/* Renderar komponenten "ProductList" med de hämtade produkterna som props */}
      <ProductList products={products} />
    </div>
  );
};
