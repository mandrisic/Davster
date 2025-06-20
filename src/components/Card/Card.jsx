import styles from './Card.module.scss';
import defaultImage from '../../assets/IMG_20250620_130230.jpg';

export default function Card({ song, isRevealed, onReveal }) {
  return (
    <div className={styles.songCard}>
      <div className={styles.imageContainer} onClick={onReveal}>
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

      <div className={styles.songInfo} onClick={onReveal}>
        <h2 className={styles.songTitle}>{isRevealed ? song.title : '?'}</h2>
        <h3 className={styles.songAuthor}>{isRevealed ? song.artist : '?'}</h3>
      </div>
    </div>
  );
}

