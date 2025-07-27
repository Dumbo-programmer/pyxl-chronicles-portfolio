import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaTwitter, FaGithub, FaInstagram, FaGlobe } from 'react-icons/fa';
import styles from './TeamSection.module.css';

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
};

function TeamSection({ teamMembers }) {
  return (
    <motion.section
      className={styles.teamSection}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={cardVariants} className={styles.sectionTitle}>
        Our Team
      </motion.h2>
      <div className={styles.teamGrid}>
        {teamMembers.map(member => (
          <motion.div
            key={member.id}
            className={styles.teamCard}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: '0 10px 30px var(--color-shadow-medium)' }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            <img src={member.avatar} alt={member.name} className={styles.avatar} />
            <h3 className={styles.memberName}>{member.name}</h3>
            <p className={styles.memberRole}>
              <FaBriefcase className={styles.roleIcon} /> {member.role}
            </p>

            {/* Handle multiple social links (array) */}
            {Array.isArray(member.social) ? (
              <div className={styles.socialLinksContainer}>
  {member.social?.map(({ platform, url }) => (
    <a
      key={platform}
      href={url}
      className={styles.socialLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${member.name}'s ${platform}`}
    >
      {platform === 'twitter' && <FaTwitter />}
      {platform === 'github' && <FaGithub />}
      {platform === 'instagram' && <FaInstagram />}
      {platform === 'website' && <FaGlobe />}
    </a>
  ))}
</div>

            ) : (
              // Single social link (object)
              member.social?.url && (
                <a
                  href={member.social.url}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s ${member.social.platform}`}
                >
                  {member.social.platform === 'twitter' && <FaTwitter />}
                  {member.social.platform === 'github' && <FaGithub />}
                  {member.social.platform === 'instagram' && <FaInstagram />}
                  {member.social.platform === 'website' && <FaGlobe />}
                </a>
              )
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default TeamSection;
