import styles from "./SectionSkills.module.css";
import {
 SvgReact,
 SvgHtml,
 SvgJavascript,
 SvgTailwind,
 SvgCss,
 SvgSaas,
 SvgGitHub,
 SvgGit,
 SvgVscode,
 SvgFigma,
 SvgBrain,
 BackgroundSkills,
} from "..";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

const SectionSkills = () => {
 const [ref, inView] = useInView({ threshold: 0.3 });
 const [hasAnimated, setHasAnimated] = useState(false);

 if (inView && !hasAnimated) {
  setHasAnimated(true);
 }

 const textVariants = {
  hidden: { y: 200, opacity: 0 },
  visible: { y: 0, opacity: 1 },
 };

 return (
  <>
   <section className={styles.sectionSkills} id="section-skill">
    <BackgroundSkills />
    <div className={styles.skillContent}>
     <div className={styles.brain}>
      <SvgBrain/>
     </div>
     <div className={styles.Skills} ref={ref}>
      <SvgHtml isVisible={hasAnimated} />
      <SvgJavascript isVisible={hasAnimated} />
      <SvgCss isVisible={hasAnimated} />
      <SvgReact isVisible={hasAnimated} />
      <SvgTailwind isVisible={hasAnimated} />
      <SvgSaas isVisible={hasAnimated} />
      <SvgFigma isVisible={hasAnimated} />
      <SvgGit isVisible={hasAnimated} />
      <SvgGitHub isVisible={hasAnimated} />
      <SvgVscode isVisible={hasAnimated} />
     </div>
    </div>

    <div className={styles.aboutSkills}>
     <motion.h2
      variants={textVariants}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      transition={{ duration: 1 }}
     >
      Habilidades
     </motion.h2>

     <motion.p
      variants={textVariants}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      transition={{ duration: 1, delay: 1 }}
     >
      Possuo habilidades técnicas e comportamentais que me permitem entregar
      resultados com eficiência e colaborar de forma positiva em diferentes
      contextos.
     </motion.p>
     <motion.p
      variants={textVariants}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      transition={{ duration: 1, delay: 1.5 }}
     >
      Entre minhas principais competências estão: comunicação eficaz, trabalho
      em equipe e perseverança, características que me ajudam a superar desafios
      e contribuir para o sucesso dos projetos.
     </motion.p>
    </div>
   </section>
  </>
 );
};

export { SectionSkills };
