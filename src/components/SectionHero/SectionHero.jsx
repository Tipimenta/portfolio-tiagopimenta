import styles from "./SectionHero.module.css";
import { Button } from "../Button/Button";
import { SvgRadar } from "../SvgRadar";
import { motion } from "framer-motion";

const variants = (delay) => ({
 initial: {
  opacity: 0,
  y: 100,
 },
 animate: {
  opacity: 1,
  y: 0,
  transition: {
   duration: 1.4,
   delay: delay,
  },
 },
});

const SectionHero = () => {
 return (
  <section className={styles.home} id="section-hero">
   <SvgRadar className={styles.svgRadar} />

   <div className={styles.bgHome}>
    <div className={styles.nameHome}>
     <motion.h6 variants={variants(0.5)} initial="initial" animate="animate">
      Olá, Eu sou
     </motion.h6>
     <motion.h1 variants={variants(1.2)} initial="initial" animate="animate">Tiago Pimenta</motion.h1>
     <motion.h6 variants={variants(1.9)} initial="initial" animate="animate">Prazer em ter você aqui!</motion.h6>
    </div>
    <div className={styles.aboutHome}>
     <motion.h6 variants={variants(2.6)} initial="initial" animate="animate">Sobre mim</motion.h6>
     <motion.h3 variants={variants(3.3)} initial="initial" animate="animate">
     Estudante de Front-End e UI Design, apaixonado em tecnologia e em criar soluções digitais.
     </motion.h3>
     <motion.div className={styles.buttons} variants={variants(4)} initial="initial" animate="animate">
      <Button href="#section-about">Saiba mais</Button>
      <Button variant="secondary" href="#">
       Currículo
      </Button>
     </motion.div>
    </div>
   </div>
  </section>
 );
};

export { SectionHero };
