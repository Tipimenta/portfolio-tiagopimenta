import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./SectionContact.module.css";
import { Button, BackgroundContact, CardsContact } from "../../components";
import email from "../../assets/svg/contact-email.svg";
import whats from "../../assets/svg/contact-whats.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

const SectionContact = () => {

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



 const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
   .sendForm("service_g8kdpbv", "template_8zb55io", form.current, {
    publicKey: "8Q2_SjdemeV6NGeVp",
   })
   .then(
    () => {
     console.log("SUCCESS!");
     form.current.reset();
    },
    (error) => {
     console.log("FAILED...", error.text);
    }
   );
 };

 return (
  <section id="section-contact" className={styles.sectionContact} >
   <BackgroundContact/>
   <div className={styles.contactme} ref={ref}>
    <motion.h2 variants={variants(0.5 , 0, -100)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>Contato</motion.h2>
    <div className={styles.contentContact}>
     <div className={styles.textContact}>
      <motion.p variants={variants(0.5 , -100, 0)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>
       Precisa de alguém para desenvolver soluções digitais, trazer ideias
       criativas à vida, ou melhorar a experiência dos seus usuários, entre em
       contato comigo.
      </motion.p>
      <motion.div className={styles.cards} variants={variants(1 , -100, 0)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>
       <CardsContact img={email} text="Tiagopimenta@gmail.com" title="Email" />
       <CardsContact img={whats} text="(18) 98104-0009" title={"WhatsApp"} />
      </motion.div>
     </div>
     <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <motion.div className={styles.field} variants={variants(0.7 , 0, 100)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>
       <input 
        type="text"
        name="user_name"
        placeholder="Informe seu nome"
        className={styles.input}
       />
       <label className={styles.label} >Nome</label>
      </motion.div>
      <motion.div className={styles.field} variants={variants(1.4 , 0, 100)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>
       <input 
        type="email"
        name="user_email"
        placeholder="Informe seu email"
        className={styles.input}
       />
       <label className={styles.label}>Email</label>
      </motion.div>
      <motion.div className={styles.field} variants={variants(2.1 , 0, 100)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>
       <textarea
        name="message"
        placeholder="Deixe sua mensasgem"
        className={styles.textarea}
       />
       <label className={styles.label2}>Mensagem</label>
      </motion.div>
      <motion.div className={styles.gradientBorder} variants={variants(2.8, 0, 100)} initial="initial" animate={hasAnimated ? "animate" : "initial"}>
       <Button type="submit" value="Enviar" className={styles.bt}>
        Enviar
       </Button>
      </motion.div>
     </form>
    </div>
   </div>
  </section>
 );
};

export { SectionContact };
