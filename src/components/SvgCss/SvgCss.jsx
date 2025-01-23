import styles from "./SvgCss.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const SvgCss = ({ isVisible }) => {
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
      CSS (Cascading Style Sheets) é uma linguagem de estilo que controla a
      aparência de páginas web. Permite personalizar cores, fontes, tamanhos,
      espaçamentos, e criar layouts responsivos. Também adiciona animações e
      efeitos visuais para melhorar a experiência do usuário.
     </span>
    </motion.div>
   )}

   <motion.div
    className={styles.container} // Adiciona uma classe para o contêiner
    initial={{ opacity: 0, y: 150 }} // Estado inicial
    animate={isVisible ? { opacity: 1, y: -130, x: 0 } : { opacity: 0, y: 150 }} // Animação baseada na prop
    transition={{ duration: 0.5, delay: isVisible ? 3.8 : 0 }} // Duração da transição
   >
    <svg
     className={styles.animationSvg} // Classe para o SVG
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 200 100"
     fill="none"
     width="90"
     height="90"
    >
     <path
      d="M0 0v120h84v-6H6V6h48v24h24v42h6V24L60 0H0zm60 8.121L75.879 24H60V8.121zM24 78l-1.102.047-1.101.152-1.078.258-1.055.352-1.02.445-.96.539-.915.633-.855.703-.785.785-.703.855-.621.915-.551.96-.445 1.02-.352 1.043-.246 1.09-.164 1.101L12 90v6l.047 1.102.164 1.101.246 1.078.352 1.055.445 1.008.55.972.622.914.703.856.785.785.856.703.914.621.96.551 1.02.445 1.055.352 1.078.246 1.101.164L24 108l1.102-.047 1.101-.164 1.078-.246 1.055-.352 1.02-.445.96-.551.915-.621.855-.703.785-.785.703-.856.621-.914.54-.949-5.38-2.695-.164.328-.433.644-.516.598-.586.516-.656.433-.703.352-.738.246-.774.164L24 102l-.785-.047-.774-.164-.738-.246-.703-.352-.656-.433-.586-.516-.516-.598L18.81 99l-.352-.703-.258-.75-.152-.762L18 96v-6l.047-.785.152-.774.258-.738.352-.703.433-.656.516-.586.586-.516.656-.433.703-.352.738-.258.774-.152L24 84l.785.047.774.152.738.258.703.352.656.433.586.516.516.586.433.656.165.328 5.378-2.695-.539-.95-.62-.914-.704-.855-.785-.785-.855-.703-.915-.633-.96-.54-1.02-.444-1.055-.352-1.078-.258-1.101-.152L24 78zm27 0a9 9 0 100 18h6a3 3 0 110 6H42v6h15a9 9 0 100-18h-6a3 3 0 110-6h15v-6H51zm30 0a9 9 0 100 18h6a3 3 0 110 6H72v6h15a9 9 0 100-18h-6a3 3 0 110-6h15v-6H81z"
      fill="#979B99"
      fillOpacity={0.95}
     />
    </svg>
   </motion.div>
  </div>
 );
};

export { SvgCss };
