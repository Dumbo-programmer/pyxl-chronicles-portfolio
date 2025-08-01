import React, { useState } from 'react'; // Import useState
import { motion, AnimatePresence } from 'framer-motion';
// Add FaChevronLeft, FaChevronRight to imports
import { FaDownload, FaTimes, FaWindows, FaLinux, FaAndroid, FaTags, FaInfoCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './GameDetailModal.module.css';

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

function GameDetailModal({ game, onClose }) {
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!game) return null;

  // Function to go to the next image
  const goToNextImage = () => {
    if (game.images && game.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % game.images.length
      );
    }
  };

  // Function to go to the previous image
  const goToPrevImage = () => {
    if (game.images && game.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex - 1 + game.images.length) % game.images.length
      );
    }
  };

  // Determine if there are multiple images to show navigation buttons
  const hasMultipleImages = game.images && game.images.length > 1;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className={styles.modalContent}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          <button className={styles.closeButton} onClick={onClose}>
            <FaTimes />
          </button>

          <h2 className={styles.gameTitle}>{game.title}</h2>

          <div className={styles.mediaContainer}>
            {game.images && game.images.length > 0 && (
              <div className={styles.imageCarousel}> {/* New wrapper for images and buttons */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex} // Key changes to re-trigger animation
                    src={game.images[currentImageIndex]}
                    alt={`${game.title} screenshot ${currentImageIndex + 1}`}
                    className={styles.gameImage}
                    initial={{ opacity: 0, x: 50 }} // Initial state for new image entering
                    animate={{ opacity: 1, x: 0 }} // Animate to visible
                    exit={{ opacity: 0, x: -50 }} // Exit animation for old image
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {hasMultipleImages && (
                  <>
                    <button className={`${styles.navButton} ${styles.prevButton}`} onClick={goToPrevImage}>
                      <FaChevronLeft />
                    </button>
                    <button className={`${styles.navButton} ${styles.nextButton}`} onClick={goToNextImage}>
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>
            )}
            {/* If you also want to slide through videos, you'd apply similar logic here.
                For simplicity, currently, it only shows the first video if images aren't present.
                You might need to adjust logic if both images and videos are present and slidable. */}
            {(!game.images || game.images.length === 0) && game.videos && game.videos.length > 0 && (
              <div className={styles.videoWrapper}>
                <iframe
                  src={game.videos[0]}
                  title={`${game.title} Trailer`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          <div className={styles.detailSection}>
            <h3 className={styles.sectionHeading}><FaInfoCircle className={styles.sectionIcon} /> Description</h3>
            <p className={styles.gameDescription}>{game.description}</p>
          </div>

          <div className={styles.detailSection}>
            <h3 className={styles.sectionHeading}><FaTags className={styles.sectionIcon} /> Tags</h3>
            <div className={styles.tags}>
              {game.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className={styles.detailSection}>
            <div>
              <div dangerouslySetInnerHTML={{ __html: game.itchioembed }} />
            </div>
            <h3 className={styles.sectionHeading}><FaDownload className={styles.sectionIcon} /> Downloads</h3>
            <div className={styles.downloadButtons}>
              {game.downloads.windows && (
                <motion.a
                  href={game.downloads.windows}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                  whileHover={{ scale: 1.05, backgroundColor: '#0078D7' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWindows /> Windows
                </motion.a>
              )}
              {game.downloads.linux && (
                <motion.a
                  href={game.downloads.linux}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                  whileHover={{ scale: 1.05, backgroundColor: '#FFA500' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinux /> Linux
                </motion.a>
              )}
              {game.downloads.android && (
                <motion.a
                  href={game.downloads.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                  whileHover={{ scale: 1.05, backgroundColor: '#3DDC84' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaAndroid /> Android
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default GameDetailModal;