import React from 'react';
import { motion } from 'framer-motion';
import { FaPlayCircle, FaChevronRight } from 'react-icons/fa'; // Example icons
import styles from './HeroSection.module.css';

// --- Framer Motion Variants ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between children animations
      delayChildren: 0.5,   // Delay before children start animating
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 10,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 12,
      delay: 1.5, // Appears after title and tagline
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px var(--color-primary-pink), 0 0 40px var(--color-dark-pink)',
    transition: {
      repeat: Infinity, // Make it pulse
      repeatType: 'reverse',
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Variants for subtle background elements (pixels, shapes)


function HeroSection() {
  return (
    <motion.section
      className={styles.heroSection}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <img src="/gamepad_icon.png" className={styles.bgIcon} alt="pixel icon" />

      {/* Animated background elements (for 'digital canvas' feel) */}
  {/* === Floating Code Lines === */}
{[...Array(8)].map((_, i) => (
  <motion.div
    key={`code-${i}`}
    className={styles.codeLine}
    initial={{ opacity: 0, y: Math.random() * 200 - 100 }}
    animate={{
      opacity: [0, 1, 0.3],
      y: [0, Math.random() * 50 - 25],
    }}
    transition={{
      duration: Math.random() * 6 + 4,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
      delay: Math.random() * 2,
    }}
    style={{
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
    }}
  >
    <code>{['const sprite = 🧊', 'if (hit) 💥', 'drawTile()', 'initScene()', '<pixel />'][i % 5]}</code>
  </motion.div>
))}

{/* === Floating Game Icons === */}
{[...Array(6)].map((_, i) => (
  <motion.div
    key={`icon-${i}`}
    className={styles.iconFloat}
    initial={{ scale: 0, rotate: 0, opacity: 0 }}
    animate={{
      scale: 1,
      rotate: 360,
      opacity: 0.6,
    }}
    transition={{
      duration: Math.random() * 8 + 6,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'linear',
      delay: Math.random() * 2,
    }}
    style={{
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
    }}
  >
    {['🎮', '🖌️', '💾', '📦', '🧱', '💻'][i % 6]}
  </motion.div>
))}

      {/* Hero Content */}
      <div className={styles.heroContent}>
  <motion.h1
  variants={textVariants}
  className={styles.mainTitle}
  whileHover={{
    x: [0, -5, 5, -2, 2, 0],
    transition: { duration: 0.3 },
  }}
>
  Pyxl Chronicles
</motion.h1>

        <motion.p variants={textVariants} className={styles.tagline}>
          An ambitious group of teen artists crafting free experiences for everyone to enjoy!
        </motion.p>
        <motion.button
          className={styles.ctaButton}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          // You can add onClick for scrolling to games section or a specific route
          onClick={() => document.getElementById('games').scrollIntoView({ behavior: 'smooth' })}
        >
          <FaPlayCircle className={styles.buttonIcon} /> Explore Our Games <FaChevronRight className={styles.buttonIconRight} />
        </motion.button>
      </div>
    </motion.section>
  );
}

export default HeroSection;