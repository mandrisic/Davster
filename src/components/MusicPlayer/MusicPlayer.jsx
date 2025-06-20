import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import songsData from '../../../data.json';
import Card from '../Card/Card';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './MusicPlayer.module.scss';

export default function MusicPlayer() {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const shuffled = songsData.sort(() => Math.random() - 0.5);
    setSongs(shuffled);
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      clearInterval(intervalId);
      setIsPlaying(false);
    } else {
      const id = setInterval(() => {
        setCurrentTime(prev => {
          if (prev < songs[currentIndex].duration) return prev + 1;
          clearInterval(id);
          return prev;
        });
      }, 1000);
      setIntervalId(id);
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    clearInterval(intervalId);
    if (currentIndex + 1 < songs.length) {
      setCurrentIndex(prev => prev + 1);
      setIsPlaying(false);
      setIsRevealed(false);
      setCurrentTime(0);
    } else {
      navigate('/end');
    }
  };

  if (songs.length === 0) return <div>Učitavanje...</div>;

  return (
    <div className={styles.musicPlayer}>
      <p className={styles.counter}>{currentIndex + 1} / {songs.length}</p>

      <Card
        song={songs[currentIndex]}
        isRevealed={isRevealed}
        onReveal={() => setIsRevealed(true)}
      />

      <ProgressBar
        currentTime={currentTime}
        duration={songs[currentIndex].duration}
      />

      <div className={styles.controls}>
        <div className={styles.playPause} onClick={handlePlayPause}>
          {isPlaying ? (
            <div className={styles.pauseIcon}>
              <div></div>
              <div></div>
            </div>
          ) : (
            <div className={styles.playIcon}>
              <div className={styles.triangle}></div>
            </div>
          )}
        </div>

        <div className={styles.nextButton} onClick={handleNext}>
          <div className={styles.nextTriangle}></div>
          <div className={styles.nextBar}></div>
        </div>
      </div>

      {isPlaying && (
        <iframe
          width="0"
          height="0"
          src={`https://www.youtube.com/embed/${songs[currentIndex].youtubeId}?autoplay=1`}
          title="YouTube player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
    </div>
  );
}
