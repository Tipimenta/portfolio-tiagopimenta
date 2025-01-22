import styles from "./SectionFooter.module.css";
import logo from "../../assets/svg/logo-tp.svg";

const SectionFooter = () => {
 return (
  <footer className={styles.footer}>
   <div className={styles.portfolio}>
    <p>
     Portfolio by: <span>Tiago Pimenta</span>.{" "}
    </p>
    <img src={logo} />
   </div>

   <p>© 2025 Tiago Pimenta - Todos os direitos reservados.</p>
  </footer>
 );
};

export { SectionFooter };
