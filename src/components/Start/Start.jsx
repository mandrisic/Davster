import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Start.module.scss';

export default function StartScreen() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/game');
  };

  return (
    <motion.div
      className={styles.startContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className={styles.heading}>Koliko dobro poznaješ ex-yu i hrvatske pjesme?</h1>
      <p className={styles.text}>Od 65 pjesama na tebi je da prepoznaš koje godine je izašla pojedina pjesma</p>
      <p className={styles.text}>Misliš da možeš prepoznati sve pjesme?</p>
      <div className={styles.startButton} onClick={handleStart}>
        <p className={styles.btn}>Start</p>
        <p className={styles.arrow}>→</p>
      </div>
    </motion.div>
  );
}