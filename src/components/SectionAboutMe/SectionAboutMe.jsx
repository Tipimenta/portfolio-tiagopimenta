import { BackgroundSVGs, SocialLinks, SvgAboutMe } from "../../components";
import styles from "./SectionAboutMe.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

const SectionAboutMe = () => {

 const [ref, inView] = useInView({ threshold: 0.3 });
 const [hasAnimated, setHasAnimated] = useState(false);
 if (inView && !hasAnimated) {
  setHasAnimated(true);
 }

  const variants = (delay, positionX=0, PositionY=0) => ({
   initial: {
    opacity: 0,
    x: positionX,
    y: PositionY,
   },
   animate: {
    opacity: 1,
    x: 0,
    y:0,
    transition: {
     duration: 1.4,
     delay: delay,
    },
   },
  });

 return (
  <section className={styles.sectionAboutme} id="section-about" ref={ref}>
   <BackgroundSVGs />

   <div className={styles.about}>
    <motion.h2 variants={variants(0.5 , -100, 0)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>Sobre mim</motion.h2 >
    <motion.p variants={variants(1.2 , -100, 0)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>
     Sou formado em Ciências da Computação e trabalho como Técnico em
     Informática, sempre buscando aprender e crescer na área de tecnologia.
     Atualmente, estou estudando desenvolvimento front-end e UI Design.
    </motion.p>
    <motion.p variants={variants(1.9 , -100, 0)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>
     No meu tempo livre, meus hobbies são assistir filmes, séries e animes,
     correr na rua para desafiar meus limites e aproveitar um bom churrasco com
     amigos e família. Esses momentos me ajudam a equilibrar trabalho,
     aprendizado e diversão.
    </motion.p>
   </div>
   <div className={styles.imageAbout}>
    <motion.div variants={variants(0.5 , 100, 0)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>
    <SvgAboutMe />
    </motion.div>
    <motion.div variants={variants(2.5 , 0, 120)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>
    <SocialLinks />
    </motion.div>
   </div>
  </section>
 );
};

export { SectionAboutMe };
