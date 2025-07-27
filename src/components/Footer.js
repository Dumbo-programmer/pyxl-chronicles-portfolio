import React from 'react';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa'; // Social icons
import styles from './Footer.module.css';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className={styles.socialLinks}>
        <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaGithub className={styles.socialIcon} />
        </motion.a>
        <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaTwitter className={styles.socialIcon} />
        </motion.a>
        <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaDiscord className={styles.socialIcon} />
        </motion.a>
      </div>
      <p className={styles.copyright}>&copy; {new Date().getFullYear()} Pyxl Chronicles. All rights reserved.</p>
    </motion.footer>
  );
}

export default Footer;