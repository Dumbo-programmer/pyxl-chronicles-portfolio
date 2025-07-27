// src/components/FanArtDetailModal.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUserEdit } from 'react-icons/fa'; // Icons for modal
import styles from './FanArtDetailModal.module.css'; // <-- Add this line!
// Re-using modal variants for consistency
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

function FanArtDetailModal({ art, onClose }) {
  if (!art) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop} // Will use the same backdrop style from GameDetailModal.module.css
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className={styles.modalContent} // Will use the same modalContent style
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onClose}>
            <FaTimes />
          </button>

          <h2 className={styles.artTitle}>{art.title}</h2> {/* Specific title style */}

          <div className={styles.artImageContainer}> {/* Container for the image */}
            <img src={art.image} alt={art.title} className={styles.expandedArtImage} /> {/* Expanded image style */}
          </div>

          <div className={styles.detailSection}>
            <p className={styles.artArtist}><FaUserEdit className={styles.sectionIcon} /> by {art.artist}</p>
          </div>
          {/* You can add more details here if your fanArtData ever expands (e.g., description, date) */}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FanArtDetailModal;