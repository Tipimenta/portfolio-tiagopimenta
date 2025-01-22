import { useState } from "react";
import styles from "./SvgFigma.module.css";
import { motion } from "framer-motion";

const SvgFigma = ({ isVisible }) => {
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
     animate={{ opacity: 1, y: -200, x: 0, pointerEvents: "initial " }}
     exit={{ opacity: 0, y: -150 }}
     transition={{ duration: 0.3 }}
    >
     <span>
      Figma é uma ferramenta de design colaborativa usada para criar protótipos,
      interfaces e wireframes. Permite o trabalho em equipe em tempo real e
      facilita a exportação de assets.
     </span>
    </motion.div>
   )}

   <motion.div
    className={styles.container} // Adiciona uma classe para o contêiner
    initial={{ opacity: 0, y: 150 }} // Estado inicial
    animate={isVisible ? { opacity: 1, y: -2, x: 290 } : { opacity: 0, y: 150 }} // Animação baseada na prop
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
      d="M20.4.8C9.162.8 0 9.962 0 21.2c0 7.92 4.68 14.623 11.302 18C4.68 42.577 0 49.28 0 57.2s4.68 14.623 11.302 18C4.68 78.577 0 85.28 0 93.2c0 11.238 9.162 20.4 20.4 20.4 11.238 0 20.4-9.162 20.4-20.4V67.175C44.02 73.284 50.237 77.6 57.6 77.6c10.575 0 19.2-8.625 19.2-19.2 0-8.692-5.937-15.771-13.884-18.122C70.929 37.524 76.8 30.128 76.8 21.2 76.8 9.962 67.638.8 56.4.8h-36zm0 4.8H36v31.2H20.4c-8.644 0-15.6-6.956-15.6-15.6 0-8.644 6.956-15.6 15.6-15.6zm20.4 0h15.6c8.644 0 15.6 6.956 15.6 15.6 0 8.643-6.956 15.6-15.6 15.6H40.8V5.6zm-20.4 36H36v31.2H20.4c-8.644 0-15.6-6.956-15.6-15.6 0-8.644 6.956-15.6 15.6-15.6zm20.4 0h8.025a19.068 19.068 0 00-8.025 8.025V41.6zM57.6 44C65.581 44 72 50.419 72 58.4c0 7.981-6.419 14.4-14.4 14.4-7.981 0-14.4-6.419-14.4-14.4 0-7.981 6.419-14.4 14.4-14.4zM20.4 77.6H36v15.6c0 8.643-6.956 15.6-15.6 15.6-8.644 0-15.6-6.957-15.6-15.6 0-8.644 6.956-15.6 15.6-15.6z"
      fill="#979B99"
     />
    </svg>
   </motion.div>
  </div>
 );
};

export { SvgFigma };
