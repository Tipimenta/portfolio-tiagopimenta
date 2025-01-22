import { useState } from "react";
import styles from "./SvgGit.module.css";
import { motion } from "framer-motion";

const SvgGit = ({ isVisible }) => {
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
      Git é um sistema de controle de versão que rastreia alterações no código.
      Facilita a colaboração em projetos, permitindo ramificações, fusões e o
      gerenciamento de versões de forma eficiente.
     </span>
    </motion.div>
   )}

   <motion.div
    className={styles.container} // Adiciona uma classe para o contêiner
    initial={{ opacity: 0, y: 150 }} // Estado inicial
    animate={
     isVisible ? { opacity: 1, y: -130, x: 230 } : { opacity: 0, y: 150 }
    } // Animação baseada na prop
    transition={{ duration: 0.5, delay: isVisible ? 4.8 : 0 }} // Duração da transição
   >
    <svg
     className={styles.animationSvg}
     width={90}
     height={90}
     viewBox="0 0 200 100"
     fill="none"
    >
     <path
      d="M55.2 4.8a5.01 5.01 0 013.59 1.49l45.319 45.32a5.069 5.069 0 010 7.18L58.791 104.11A5.01 5.01 0 0155.2 105.6a5.01 5.01 0 01-3.59-1.491L6.29 58.791a5.07 5.07 0 010-7.182l29.57-29.568 5.456 5.456a14.35 14.35 0 003.703 13.884c.881.882 1.884 1.64 2.981 2.269v23.11c-4.369 2.521-7.2 7.218-7.2 12.44 0 7.94 6.46 14.4 14.4 14.4s14.4-6.46 14.4-14.4c0-5.222-2.831-9.919-7.2-12.44V48.58l2.916 2.916a14.35 14.35 0 003.703 13.884A14.311 14.311 0 0079.2 69.6c3.844 0 7.462-1.5 10.181-4.219 5.616-5.615 5.616-14.747 0-20.362-2.71-2.71-6.3-4.2-10.134-4.2-1.266 0-2.531.168-3.75.497l-6.413-6.413a14.35 14.35 0 00-3.703-13.884c-2.71-2.71-6.3-4.2-10.134-4.2-1.266 0-2.531.169-3.75.497l-5.456-5.457 5.568-5.568A5.01 5.01 0 0155.2 4.8zm0-4.8a9.823 9.823 0 00-6.984 2.897l-8.963 8.962 11.09 11.091a9.733 9.733 0 014.904-1.331c2.437 0 4.875.928 6.74 2.794 3.16 3.159 3.62 7.959 1.454 11.634L74.344 46.95a9.733 9.733 0 014.903-1.331c2.437 0 4.875.928 6.74 2.794a9.596 9.596 0 010 13.575A9.569 9.569 0 0179.2 64.8a9.569 9.569 0 01-6.788-2.813c-3.159-3.159-3.618-7.959-1.453-11.643L60.056 39.44a9.312 9.312 0 01-2.456 1.012v29.484c4.134 1.07 7.2 4.791 7.2 9.263 0 5.306-4.294 9.6-9.6 9.6-5.297 0-9.6-4.294-9.6-9.6 0-4.472 3.066-8.194 7.2-9.263V40.453c-1.603-.412-3.131-1.21-4.387-2.466-3.16-3.159-3.62-7.959-1.454-11.634l-11.1-11.1L2.897 48.216c-3.863 3.853-3.863 10.115 0 13.968l45.319 45.319A9.824 9.824 0 0055.2 110.4a9.824 9.824 0 006.984-2.897l45.319-45.319c3.863-3.853 3.863-10.115 0-13.968L62.184 2.896A9.823 9.823 0 0055.2 0z"
      fill="#979B99"
     />
    </svg>
   </motion.div>
  </div>
 );
};

export { SvgGit };
