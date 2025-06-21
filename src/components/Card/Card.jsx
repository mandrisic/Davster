import { useState } from 'react';
import styles from './Card.module.scss';
import { motion } from 'framer-motion';
import defaultImage from '../../assets/IMG_20250620_130230.jpg';

export default function Card({ song, isRevealed, onReveal }) {
   const [isVisible, setIsVisible] = useState(true);

  const handleReveal = () => {
    if (!isRevealed) {
      setIsVisible(false);
      setTimeout(() => {
        onReveal();
        setIsVisible(true);
      }, 400);
    }
  };

  return (
    <motion.div
      className={styles.songCard}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.imageContainer} onClick={handleReveal}>
        <img
          src={isRevealed ? song.imageUrl : defaultImage}
          alt="Song"
          width={300}
          height={300}
        />
        <div className={`${styles.overlay} ${isRevealed ? styles.revealed : ''}`}>
          {isRevealed ? <p>{song.year}</p> : (
            <>
              <p className={styles.question}>O kojoj se pjesmi radi?</p>
              <p className={styles.revealText}>Otkrij me</p>
            </>
          )}
        </div>
      </div>

      <div className={styles.songInfo} onClick={handleReveal}>
        <h2 className={styles.songTitle}>{isRevealed ? song.title : '?'}</h2>
        <h3 className={styles.songAuthor}>{isRevealed ? song.artist : '?'}</h3>
      </div>
    </motion.div>
  );
}