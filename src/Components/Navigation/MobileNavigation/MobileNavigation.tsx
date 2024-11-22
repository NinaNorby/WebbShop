import { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import styles from '../NavigationBar/NavigationBar.module.css';
import NavLinks from "../NavLinks/NavLinks";


const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.MobileNavigation}>
      <button
        className={styles.menuIcon}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <MdClose size="30px" color="black" />
        ) : (
          <MdOutlineMenu size="30px" color="black" />
        )}
      </button>
      {isMenuOpen && <NavLinks onClick={() => setIsMenuOpen(false)} />}
    </nav>
  );
};

export default MobileNavigation;
