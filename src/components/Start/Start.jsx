import { useNavigate } from 'react-router-dom';
import styles from './Start.module.scss';

export default function StartScreen() {
  const navigate = useNavigate();

  return (
    <div className={styles.startContainer}>
      <h1 className={styles.heading}>Koliko dobro poznaješ ex-yu i hrvatske pjesme?</h1>
      <p className={styles.text}>Od 65 pjesama na tebi je da prepoznaš koje godine je izašla pojedina pjesma</p>
      <p className={styles.text}>Misliš da možeš prepoznati sve pjesme?</p>
      <div className={styles.startButton} onClick={() => navigate('/game')}>
        <p className={styles.btn}>Start</p>
        <p className={styles.arrow}>→</p>
      </div>
    </div>
  );
}