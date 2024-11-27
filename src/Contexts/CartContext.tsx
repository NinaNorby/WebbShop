//Jag skapade Contex efter att ha läst i Reacts dokumentaion för att slippa skicka props mellan alla komponenter nu när jag ska möjliggöra att man kan lägga i varor i kundkorgen  https://react.dev/learn/passing-data-deeply-with-context.

import { createContext, useContext, useState, ReactNode } from 'react';
import { IProduct } from '../Models/IProduct';

// Skapar ett CartContext med en tomt värde 
const CartContext = createContext<{
  // ska vara en En array över produkter som finns i kundkorgen.
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
}>({
  cartItems: [],
  addToCart: () => {},
});

// Skapar en komponent om omsluter hela din applikation och tillhandahåller CartContext till alla underliggande komponenter. Denna lägger jag sedan runt App.tsx. Den kommer att sedan använda en usestate som håller koll på cartItems
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  // Funktion för att lägga till produkter i kundkorgen
  const addToCart = (product: IProduct) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

/* useCart är  då en funktion /hook som  ska tillåta mig hämta info om kundkorgen/ cart från CartContext. Jag kommer då kunna se se vilka produkter som finns i cartItems och lägga till nya produkter i cart via addtocart.*/
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};