import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUsers, FaGamepad, FaPaintBrush, FaHome } from 'react-icons/fa'; // Icons
import styles from './Header.module.css';

function Header() {
  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.5 }}
    >
      <div className={styles.logo}>
        <Link to="/">
          <img src="/logo.png" alt="Pyxl Chronicles Logo" className={styles.logoImage} />
          <span>Pyxl Chronicles</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="#team">
              <FaUsers className={styles.navIcon} /> Team
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="#games">
              <FaGamepad className={styles.navIcon} /> Games
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="#fanart">
              <FaPaintBrush className={styles.navIcon} /> Fan Arts
            </a>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;