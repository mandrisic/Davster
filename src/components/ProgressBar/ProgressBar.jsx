import styles from './ProgressBar.module.scss';

export default function ProgressBar({ currentTime, duration }) {
  const progressPercentage = (currentTime / duration) * 100;

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  };

  return (
    <div className={styles.progressBar}>
      <span>{formatTime(currentTime)}</span>
      <div className={styles.barContainer}>
        <div className={styles.bar}>
          <div className={styles.progress} style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
      <span>{formatTime(duration)}</span>
    </div>
  );
}
