import styles from "./LinkNav.module.css";

const LinkNav = ({ texto, href }) => {
 return (
  <li className={styles.linkNav}>
   <a href={href}>{texto}</a>
  </li>
 );
};

export { LinkNav };
