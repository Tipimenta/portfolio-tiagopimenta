// Card.jsx
import styles from './CardsProjects.module.css';

const CardsProjects = ({ src, isActive, style }) => {
  return (
    <div
      className={`${styles.Card} ${isActive ? styles.Card__active : ''}`}
      style={style}
    >
      <img src={src} alt="Project Preview" className={styles.Card__Image} />
    </div>
  );
};

export { CardsProjects };
