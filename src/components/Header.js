import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaGamepad, FaPaintBrush, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 12 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

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

      {/* Desktop Nav */}
      <nav className={`${styles.nav} ${styles.desktopNav}`}>
        <ul>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="#team"><FaUsers className={styles.navIcon} /> Team</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="#games"><FaGamepad className={styles.navIcon} /> Games</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="#fanart"><FaPaintBrush className={styles.navIcon} /> Fan Arts</a>
          </motion.li>
        </ul>
      </nav>

      {/* Hamburger Button */}
      <div className={styles.hamburger} onClick={() => setIsMenuOpen(prev => !prev)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className={styles.mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <ul>
              <li><a href="#team" onClick={() => setIsMenuOpen(false)}><FaUsers /> Team</a></li>
              <li><a href="#games" onClick={() => setIsMenuOpen(false)}><FaGamepad /> Games</a></li>
              <li><a href="#fanart" onClick={() => setIsMenuOpen(false)}><FaPaintBrush /> Fan Arts</a></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
