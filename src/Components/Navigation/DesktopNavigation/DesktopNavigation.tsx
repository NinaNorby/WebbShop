import NavLinks from "../NavLinks/NavLinks";
import styles from '../NavigationBar/NavigationBar.module.css';


const DesktopNavigation = () => {
  return (
    <nav className={styles.DesktopNavigation}>
      <NavLinks />
    </nav>
  );
};

export default DesktopNavigation;
