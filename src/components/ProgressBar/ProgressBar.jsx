import styles from './ProgressBar.module.scss';

export default function ProgressBar({ currentTime, duration, onSeek }) {
  const progressPercentage = (currentTime / duration) * 100;

  function formatTime(seconds) {
  const secs = Math.floor(seconds);
  const mins = Math.floor(secs / 60);
  const remSecs = secs % 60;
  return `${mins}:${remSecs < 10 ? '0' : ''}${remSecs}`;
}

  return (
    <div className={styles.progressBar}>
      <span>{formatTime(currentTime)}</span>
       <input
        type="range"
        min="0"
        max={Math.floor(duration)}
        value={Math.floor(currentTime)}
        onChange={e => onSeek && onSeek(Number(e.target.value))}
        className={styles.progressSlider}
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
}
