import logo from "../../assets/svg/logo-tp.svg";
import styles from "./Logo.module.css";

const Logo = () => {
 return (
  <a href="#section-hero">
   <img className={styles.logo} src={logo} alt="Logo Tiago Pimenta" />
  </a>
 );
};

export { Logo };
