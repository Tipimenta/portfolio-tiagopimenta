import { useState } from "react";
import styles from "./SvgJavascript.module.css";
import { motion } from "framer-motion";

const SvgJavascript = ({ isVisible }) => {
 const [showModal, setShowModal] = useState(false);
 return (
  <div
   className={styles.wrapper} // Envolve o componente
   onMouseEnter={() => setShowModal(true)} // Mostra o modal ao passar o mouse
   onMouseLeave={() => setShowModal(false)} // Esconde o modal ao remover o mouse
  >
   {/* O modal que aparece ao passar o mouse */}
   {showModal && (
    <motion.div
     className={styles.modal}
     initial={{ opacity: 0, y: -150, x: 0, pointerEvents: "none" }}
     animate={{ opacity: 1, y: -250, x: 0, pointerEvents: "initial " }}
     exit={{ opacity: 0, y: -150 }}
     transition={{ duration: 0.3 }}
    >
     <span>
      JavaScript é uma linguagem de programação que adiciona interatividade e
      dinamismo às páginas web. É amplamente usado para manipular elementos
      HTML, realizar requisições assíncronas e criar aplicações web completas.
     </span>
    </motion.div>
   )}

   <motion.div
    className={styles.container} // Adiciona uma classe para o contêiner
    initial={{ opacity: 0, y: 150 }} // Estado inicial
    animate={
     isVisible ? { opacity: 1, y: -75, x: -30 } : { opacity: 0, y: 150 }
    } // Animação baseada na prop
    transition={{ duration: 0.5, delay: isVisible ? 4.8 : 0 }} // Duração da transição
   >
    <svg
     className={styles.animationSvg}
     width={90}
     height={90}
     viewBox="0 0 200 100"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
    >
     <path
      d="M0 0v120h84v-6H6V6h48v24h24v42h6V24L60 0H0zm60 8.121L75.879 24H60V8.121zM54 78v18l-.047.785-.152.762-.258.75-.352.703-.433.644-.516.598-.586.516-.656.433-.703.352-.738.246-.774.164L48 102l-.785-.047-.774-.164-.738-.246-.703-.352-.656-.433-.586-.516-.516-.598L42.81 99l-.352-.703-.258-.75-.152-.762L42 96h-6l.047 1.102.164 1.101.246 1.078.352 1.055.445 1.008.55.972.622.914.703.856.785.785.855.703.915.621.96.551 1.02.445 1.055.352 1.078.246 1.101.164L48 108l1.102-.047 1.101-.164 1.078-.246 1.055-.352 1.02-.445.96-.551.914-.621.856-.703.785-.785.703-.856.621-.914.551-.972.445-1.008.352-1.055.246-1.078.164-1.101L60 96V78h-6zm21 0a9 9 0 000 18h6a3 3 0 010 6H66v6h15a9.006 9.006 0 006.364-2.636 9.003 9.003 0 000-12.728A9.001 9.001 0 0081 90h-6a3 3 0 010-6h15v-6H75z"
      fill="#979B99"
     />
    </svg>
   </motion.div>
  </div>
 );
};

export { SvgJavascript };
