import { useNavigate } from 'react-router-dom';
import styles from './End.module.scss';

export default function EndScreen() {
  const navigate = useNavigate();

  return (
    <div className={styles.endContainer}>
      <h1>Čestitam 🎉</h1>
      <p>Na ljestvici od tri Davora koliko ti je bilo teško?</p>
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p>Sretan 65. rođendan tata #smajl</p>
      <button onClick={() => navigate('/')}>Igraj ponovno</button>
    </div>
  );
}