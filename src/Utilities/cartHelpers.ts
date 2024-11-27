// Syftet med funktionen är att hantera när en användare klickar på knappen  "Add to cart." Den lägger till produkten i kundvagnen och gör så att knappen blir grön i 1 sekund, och detta för att indikera att produkten har lagts till. 

import { IProduct } from "../Models/IProduct";
import styles from "../Components/AddToCartButton/AddToCartButton.module.css"

// funktionen tar emot en produkt (IProduct) och lägger till den i shopping cart.
export const handleAddToCart = (
  addToCart: (product: IProduct) => void,
  product: IProduct,
  buttonElement: HTMLButtonElement
) => {
  // Varan läggs till i kundvagnen via addToCart
  addToCart(product);

buttonElement.classList.remove(styles.clicked);

// Sätter funktionen i en timeout för att säkerställa att borttagningen "hinner" innan klassen läggs till
setTimeout(() => {
  buttonElement.classList.add(styles.clicked);
  setTimeout(() => {
    buttonElement.classList.remove(styles.clicked);
  }, 1000); //Efter 1 sek tas klassen clicked bort från knappen, vilket återställer dess ursprungliga utseende.
}, 10); // väntar 10 milisek innan den lägger tillbaka clicked-klassen på knappen. Fördröjningen är viktig för att säkerställa att vi hinner ta bort klassen innan vi lägger till den igen
};
