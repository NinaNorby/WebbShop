import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import styles from './NavigationBar.module.css';


const NavigationBar = () => {
  return (
    <header className={styles.navbar}>
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
};

export default NavigationBar;
