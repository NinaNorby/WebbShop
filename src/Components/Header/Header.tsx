import styles from "./Header.module.css";
interface HeaderProps {
  companyName: string;
}

export const Header = ({ companyName }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.companyName}>{companyName}</h1>
    </header>
  );
};

export default Header;
