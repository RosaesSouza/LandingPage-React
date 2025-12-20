import { useState } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>

            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <a href="/">OFICINAS CRIATIVAS</a>
                </div>

                <button className={styles.hamburger} onClick={toggleMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>


            <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
                <li className={styles.navItem}>
                    <a href="#how" className={styles.navLink} onClick={toggleMenu}>Como Funciona?</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#about" className={styles.navLink} onClick={toggleMenu}>Sobre mim</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#testimonials" className={styles.navLink} onClick={toggleMenu}>Depoimentos</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#values" className={styles.navLink} onClick={toggleMenu}>Valores</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#contacts" className={styles.navLink} onClick={toggleMenu}>Contato</a>
                </li>
            </ul>

        </nav>
    );
};