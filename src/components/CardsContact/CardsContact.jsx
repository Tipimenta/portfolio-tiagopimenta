import styles from "./CardsContact.module.css";

const CardsContact = ({ img, text, title }) => {
 return (
  <div className={styles.cardContact}>
   <div className={styles.cardContent}>
    <h4>{title}</h4>
    <img src={img} alt="Email" />
    <p className={styles.cardText}>{text}</p>
   </div>
  </div>
 );
};

export { CardsContact };
