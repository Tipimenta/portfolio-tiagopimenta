import { useState } from "react";
import styles from "./SvgHtml.module.css";
import { motion } from "framer-motion";

const SvgHtml = ({ isVisible }) => {
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
      HTML (HyperText Markup Language) é a linguagem padrão para criar a
      estrutura de páginas web. Define elementos como textos, imagens, links,
      tabelas e formulários. Serve como base para a construção de conteúdo, que
      pode ser estilizado com CSS e dinamizado com JavaScript.
     </span>
    </motion.div>
   )}

   <motion.div
    className={styles.container} // Adiciona uma classe para o contêiner
    initial={{ opacity: 0, y: 150, x: 0 }} // Estado inicial
    animate={
     isVisible ? { opacity: 1, y: -20, x: -70 } : { opacity: 0, y: 150, x: 0 }
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
      d="M12 0v72h6V6h48v24h24v42h6V24L72 0H12zm60 8.121L87.879 24H72V8.121zM0 78v30h6V96h12v12h6V78h-6v12H6V78H0zm30 0v6h9v24h6V84h9v-6H30zm32.965 0A3.005 3.005 0 0060 81v27h6.012V88.254l3.867 3.867a3.005 3.005 0 004.254 0L78 88.254V108h6.012V81c-.001-2.679-3.242-4.018-5.133-2.121L72 85.758l-6.867-6.88A3.005 3.005 0 0062.965 78zM90 78v30h24v-6H96V78h-6zm-78 36v6h84v-6H12z"
      fill="#979B99"
     />
    </svg>
   </motion.div>
  </div>
 );
};

export { SvgHtml };
