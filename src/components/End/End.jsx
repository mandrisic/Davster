import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './End.module.scss';
import image1 from '../../assets/IMG_20250620_131531.jpg';
import image2 from '../../assets/IMG_20250620_130048.jpg';
import image3 from '../../assets/IMG_20250620_130309.jpg';
import image4 from '../../assets/IMG_20250620_130149.jpg';
import image5 from '../../assets/IMG_20250620_130325.jpg';

const ratings = [
  { src: image1, alt: 'Vrlo teško', message: 'Auu, jako loše 💀' },
  { src: image2, alt: 'Teško', message: 'Bit će bolje drugi put 😅' },
  { src: image3, alt: 'Taman', message: 'Zaslužio si nazdraviti s rakijom 🙂' },
  { src: image4, alt: 'Lako', message: 'Možeš se opustiti, dobar si znalac 😎' },
  { src: image5, alt: 'Prelagano', message: 'Juppi, super si! 🤠' }
];

export default function EndScreen() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [fadeClass, setFadeClass] = useState(styles.hidden);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeClass(styles.fadeIn);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.endContainer} ${fadeClass}`}>
      <h1 className={styles.heading}>Čestitam 🎉</h1>
      <p>Na ljestvici od pet Davora koliko ti je bilo teško?</p>

      <div className={styles.imagesContainer}>
        {ratings.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className={`${styles.davorImage} ${selectedIndex === index ? styles.selected : ''}`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <p className={styles.message}>{ratings[selectedIndex].message}</p>
      )}

      <p>Sretan 65. rođendan tata 🎂</p>
      <div className={styles.endButton} onClick={() => navigate('/')}>
        <span className={styles.btn}>Igraj ponovno</span>
        <span className={styles.arrow}>→</span>
      </div>
    </div>
  );
}
