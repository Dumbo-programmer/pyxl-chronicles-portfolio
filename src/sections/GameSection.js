import React from 'react';
import { motion } from 'framer-motion';
import { FaPlayCircle } from 'react-icons/fa';
import styles from './GameSection.module.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } },
};

function GameSection({ games, onGameCardClick }) {
  return (
    <motion.section
      className={styles.gameSection}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={cardVariants} className={styles.sectionTitle}>Our Games</motion.h2>
      <div className={styles.gameGrid}>
        {games.map(game => (
          <motion.div
            key={game.id}
            className={styles.gameCard}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px var(--color-shadow-medium)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onGameCardClick(game)}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            <img src={game.thumbnail} alt={game.title} className={styles.gameThumbnail} />
            <div className={styles.gameInfo}>
              <h3 className={styles.gameTitle}>{game.title}</h3>
              <p className={styles.gameDescription}>{game.description.substring(0, 100)}...</p>
              <div className={styles.tags}>
                {game.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <motion.button
                className={styles.viewGameButton}
                whileHover={{ backgroundColor: 'var(--color-dark-pink)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlayCircle /> View Game
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default GameSection;