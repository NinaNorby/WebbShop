import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrapper}>
      <p className={styles.footerParagraph}>&copy;{currentYear}</p>
    </footer>
  );
};
