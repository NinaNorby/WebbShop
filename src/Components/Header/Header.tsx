import styles from "./Header.module.css";

export const Header = () => {
  let companyname: string = "The Holiday Cabin Shop" ;
  return (
    <>
      <header className="header">
        {/* Istället för att använda en h1 ska man kaunna utifrån komponenter kunna hantera det.  */}
        <h1 className={styles.companyName}>{companyname} </h1>
      </header>
    </>
  );
};

export default Header;
