import { useState } from "react";
import styles from "./SvgTailwind.module.css";
import { motion } from "framer-motion";

const SvgTailwind = ({ isVisible }) => {
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
      Tailwind é um framework CSS utilitário que oferece classes pré-definidas
      para estilizar rapidamente elementos HTML. Focado em produtividade,
      permite criar designs customizados diretamente no código.
     </span>
    </motion.div>
   )}

   <motion.div
    className={styles.container} // Adiciona uma classe para o contêiner
    initial={{ opacity: 0, y: 150 }} // Estado inicial
    animate={
     isVisible ? { opacity: 1, y: -150, x: 120 } : { opacity: 0, y: 150 }
    } // Animação baseada na prop
    transition={{ duration: 0.5, delay: isVisible ? 3.8 : 0 }} // Duração da transição
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
      clipRule="evenodd"
      d="M59 3c-14.933 0-24.267 8-28 24 5.6-8 12.133-11 19.6-9 4.26 1.141 7.305 4.452 10.675 8.118C66.765 32.089 73.121 39 87 39c14.934 0 24.266-8 28-24-5.6 8-12.134 11-19.6 9-4.26-1.141-7.305-4.453-10.675-8.118C79.235 9.911 72.879 3 59 3zM31 39C16.067 39 6.733 47 3 63c5.6-8 12.133-11 19.6-9 4.26 1.141 7.305 4.452 10.675 8.118C38.765 68.088 45.121 75 59 75c14.933 0 24.266-8 28-24-5.6 8-12.133 11-19.6 9-4.26-1.141-7.305-4.453-10.675-8.118C51.235 45.91 44.879 39 31 39z"
      stroke="#979B99"
      strokeWidth={5}
      strokeLinejoin="round"
     />
    </svg>
   </motion.div>
  </div>
 );
};

export { SvgTailwind };
