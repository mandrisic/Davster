import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const playerRef = useRef(null);

  useEffect(() => {
    const shuffled = songsData.sort(() => Math.random() - 0.5);
    setSongs(shuffled);
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

const handleNext = () => {
  if (isTransitioning) return;

  setIsTransitioning(true);

  setTimeout(() => {
    if (currentIndex + 1 < songs.length) {
      setCurrentIndex(prev => prev + 1);
      setIsPlaying(false);
      setIsRevealed(false);
      setCurrentTime(0);
      setIsTransitioning(false);
    } else {
      handleEndGame();
    }
  }, 500);
};

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  const handleEndGame = () => {
  if (isTransitioning) return;

  setIsTransitioning(true);

  setTimeout(() => {
    navigate('/end');
  }, 500);
};

  if (songs.length === 0) return <div>Učitavanje...</div>;

  return (
    <div className={`${styles.musicPlayer} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
      <p className={styles.counter}>{currentIndex + 1} / {songs.length}</p>

      <Card
        song={songs[currentIndex]}
        isRevealed={isRevealed}
        onReveal={() => setIsRevealed(true)}
      />

      <ProgressBar
        currentTime={currentTime}
        duration={songs[currentIndex].duration}
        onSeek={time => playerRef.current.seekTo(time)}
      />

      <div className={styles.controls}>
        <div className={`${styles.playPause} ${isPlaying ? styles.playing : ''}`} onClick={handlePlayPause}>
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

      <ReactPlayer
        ref={playerRef}
        url={`https://www.youtube.com/watch?v=${songs[currentIndex].youtubeId}`}
        playing={isPlaying}
        onProgress={handleProgress}
        width="0"
        height="0"
        controls={false}
        onReady={() => console.log('Player spreman')}
        onError={e => console.log('Greška u playeru', e)}
      />
    </div>
  );
}