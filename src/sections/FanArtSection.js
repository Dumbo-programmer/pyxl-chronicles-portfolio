import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaUserEdit } from 'react-icons/fa'; // Icons
import styles from './FanArtSection.module.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

const artCardVariants = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: { opacity: 1, rotateX: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } },
};

// Accept onFanArtCardClick prop
function FanArtSection({ fanArts, onFanArtCardClick }) {
  return (
    <motion.section
      className={styles.fanArtSection}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={artCardVariants} className={styles.sectionTitle}>Fan Arts</motion.h2>
      <div className={styles.fanArtGrid}>
        {fanArts.map(art => (
          <motion.div
            key={art.id}
            className={styles.fanArtCard}
            variants={artCardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px var(--color-shadow-medium)' }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            onClick={() => onFanArtCardClick(art)} // Add onClick handler
          >
            <img src={art.image} alt={art.title} className={styles.fanArtImage} />
            <div className={styles.fanArtInfo}>
              <h3 className={styles.fanArtTitle}><FaHeart className={styles.artIcon} /> {art.title}</h3>
              <p className={styles.fanArtArtist}><FaUserEdit className={styles.artIcon} /> by {art.artist}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default FanArtSection;