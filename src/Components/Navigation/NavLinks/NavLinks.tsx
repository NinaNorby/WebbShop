//  NavLinks komponenten innehåller två länkar: "Home" och "Shopping cart".
import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";

// destrukturering av props. med onclick . onclick är valfritt iom ? så att det är valfritt att klicka på länekn ,  samt att jag har satt typen  till void.oncklick är en funktion som inte tar några argument.
const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <ul className={styles.navMenu}>
    <li className={styles.navItem}>
      <Link to="/" onClick={onClick} className={styles.navLink}>
        <i className="fa-solid fa-house"></i> Home
      </Link>
    </li>
    <li className={styles.navItem}>
      <Link to="/cart" onClick={onClick} className={styles.navLink}>
        <i className="fa-solid fa-cart-shopping"></i> Shopping cart
      </Link>
    </li>
  </ul>
);

export default NavLinks;
