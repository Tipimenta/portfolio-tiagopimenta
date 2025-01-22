import { useState } from "react";
import styles from "./SectionProjects.module.css";
import { ProjectDetails, CardsProjects } from "../../components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const SectionProjects = () => {
 const projects = [
  {
   id: 1,
   title: "Receitas Pimenta",
   description:
    "Projeto de receitas culinárias, com a possibilidade de adicionar, editar e excluir receitas. Utilizando React, Styled Components, Context API e Local Storage.",
   repoLink: "https://github.com/Tipimenta/receitas-pimenta",
   deployLink: "https://receitas-pimenta.vercel.app",
   image:
    "https://github.com/Tipimenta/receitas-pimenta/assets/104909118/7471ca9b-448c-41d8-9611-daa974318b1c",
  },
  {
   id: 2,
   title: "Project 2",
   description:
    "Projeto de receitas culinárias, com a possibilidade de adicionar, editar e excluir receitas. Utilizando React, Styled Components, Context API e Local Storage.",
   repoLink: "https://github.com/Tipimenta/receitas-pimenta",
   deployLink: "https://receitas-pimenta.vercel.app",
   image:
    "https://github.com/user-attachments/assets/cdd5921f-64b8-49fa-a83c-d162407dbbe5",
  },
 ];

 const variants = (delay, positionX, PositionY=0) => ({
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

 const [activeCard, setActiveCard] = useState(0);
 const [ref, inView] = useInView({ threshold: 0.4 });
 const [hasAnimated, setHasAnimated] = useState(false);

 if (inView && !hasAnimated) {
  setHasAnimated(true);
 }

 const handleNext = () => {
  setActiveCard((prev) => (prev + 1) % projects.length);
 };

 const handlePrevious = () => {
  setActiveCard((prev) => (prev - 1 + projects.length) % projects.length);
 };

 return (
  <section id="section-projects" className={styles.SectionProjects} ref={ref}>
   <div className={styles.SectionProjects__container}>
    <motion.h2 variants={variants(0.5 , 0, -100)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>Projetos</motion.h2>
    <div className={styles.SectionProjects__projects}>
      <motion.div className={styles.SectionProjects__projects}  variants={variants(0.7 , -100, 0)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>
     <ProjectDetails 
      title={projects[activeCard].title}
      description={projects[activeCard].description}
      repoLink={projects[activeCard].repoLink}
      deployLink={projects[activeCard].deployLink}
     />
     </motion.div>

     <motion.div className={styles.SectionProjects__Cards} variants={variants(0.7 , 100, 0)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>
      {projects.map((project, index) => {
       const offset = (index - activeCard + projects.length) % projects.length;
       const scale = 1 - Math.abs(offset) * 0.1;
       const zIndex = projects.length - Math.abs(offset);
       const translateX = offset * 40;

       return (
        <CardsProjects
         key={project.id}
         src={project.image}
         isActive={index === activeCard}
         style={{
          transform: `translateX(${translateX}px) scale(${scale})`,
          zIndex: zIndex,
          opacity: scale > 0.5 ? 1 : 0,
         }}
        />
       );
      })}
      <div className={styles.SectionProjects__Arrows}>
       <button
        onClick={handlePrevious}
        className={`${styles.ArrowButton} ${styles.ArrowLeft}`}
       >
        &lsaquo;
       </button>
       <button
        onClick={handleNext}
        className={`${styles.ArrowButton} ${styles.ArrowRight}`}
       >
        	&rsaquo;
       </button>
      </div>
     </motion.div>
    </div>
   </div>
  </section>
 );
};

export { SectionProjects };
