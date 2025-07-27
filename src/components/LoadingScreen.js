import React from 'react';
import { motion } from 'framer-motion';
import { GiGamepad } from 'react-icons/gi'; // Example icons
import styles from './LoadingScreen.module.css'; // Use CSS Modules

const loadingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const iconRotate = {
  rotate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "linear"
    }
  }
}

function LoadingScreen() {
  return (
    <motion.div
      className={styles.loadingContainer}
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={itemVariants} className={styles.iconWrapper}>
        <motion.div variants={iconRotate} animate="rotate">
            <GiGamepad className={styles.loadingIcon} /> {/* Example icon */}
        </motion.div>
      </motion.div>
      <motion.h1 variants={itemVariants} className={styles.loadingText}>
        Loading Pyxl Chronicles...
      </motion.h1>
      <motion.div variants={itemVariants} className={styles.loadingBarContainer}>
        <motion.div
          className={styles.loadingBar}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </motion.div>
    </motion.div>
  );
}

export default LoadingScreen;