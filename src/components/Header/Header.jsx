import { useEffect } from "react";
import { LinkNav, Logo } from "../../components";
import styles from "./Header.module.css";

const Header = () => {
 useEffect(() => {
  const handleScroll = () => {
   const nav = document.querySelector(`.${styles.navList}`);
   if (window.scrollY > 100) {
    nav.classList.add(styles.navListScrolled);
   } else {
    nav.classList.remove(styles.navListScrolled);
   }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 return (
  <ul className={styles.navList}>
   <div className={styles.navListItem}>
    <div className={styles.navListLeft}>
     <LinkNav texto="Projetos" href="#section-projects" />
     <LinkNav texto="Habilidades" href="#section-skill" />
    </div>
    <Logo />
    <div className={styles.navListRight}>
     <LinkNav texto="Sobre mim" href="#section-about" />
     <LinkNav texto="Contato" href="#section-contact" />
    </div>
   </div>
  </ul>
 );
};

export { Header };
