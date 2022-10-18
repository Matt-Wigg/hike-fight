import styles from './Nav.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMountain, faHiking, faHandFist } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {
  const [hideBurger, sethideBurger] = useState(true);

  const togglehideBurgerOpen = () => {
    sethideBurger(!hideBurger);
  };

  return (
    <nav className={styles.navbar}>
      {/* close when open */}
      <div
        className={hideBurger ? styles.navbarOverlay : styles.navbarOverlayOpen}
        onClick={togglehideBurgerOpen}
      ></div>
      <button
        type='button'
        className={styles.navbarBurger}
        onClick={togglehideBurgerOpen}
      >
        <FontAwesomeIcon icon={faHandFist} className={styles.icon}/>
      </button>
      <h1 className={styles.navbarTitle}>Hike Fight</h1>
      <nav className={hideBurger ? styles.navbarMenu : styles.navbarMenuOpen}>
        <button type='button'>Home</button>
        <button type='button'>About</button>
        <button type='button'>Hike</button>
        <button type='button'>Base Camp</button>
        <button type='button'>The Lodge</button>
        <button type='button'>Journal</button>
        <button type='button'>Maps</button>
        <button type='button'><FontAwesomeIcon icon={faTwitter}/></button>
        <button type='button'><FontAwesomeIcon icon={faDiscord}/></button>
        <button type='button'><FontAwesomeIcon icon={faInstagram}/></button>
      </nav>
    </nav>
  );
};

export default Nav;
