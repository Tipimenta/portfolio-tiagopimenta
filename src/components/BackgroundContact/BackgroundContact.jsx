// import { motion } from "framer-motion";
import styles from "./backgroundContact.module.css";

const BackgroundContact = () => {
 return (
  <svg
   width={1440}
   height={1024}
   viewBox="0 0 1440 1200"
   fill="none"
   
   className={styles.backgroundContact}
   xmlns="http://www.w3.org/2000/svg"
  >
   <g>
    <path fill="#030917" d="M0 0H1440V1024H0z" />
    <g filter="url(#filter0_f_542_98889)">
     <circle cx={161.5} cy={329.5} r={78.5} fill="#00C95A" fillOpacity={0.32} />
    </g>
    <g filter="url(#filter1_f_542_98889)">
     <circle
      className={styles.circle}
      cx={1005.5}
      cy={590.5}
      r={78.5}
      fill="#00C95A"
     />
    </g>
    <g filter="url(#filter2_f_542_98889)">
     <circle
      className={styles.circle1}
      cx={112.5}
      cy={801.5}
      r={48.5}
      fill="#00C95A"
     />
    </g>
    <g filter="url(#filter3_f_542_98889)">
     <circle
      cx={1333.5}
      cy={336.5}
      r={175.5}
      fill="#00C95A"
      fillOpacity={0.17}
     />
    </g>
    <g filter="url(#filter4_f_542_98889)" className={styles.circle1}>
     <circle
      cx={900.5}
      cy={1024.5}
      r={104.5}
      fill="00C95A#"
      fillOpacity={0.4}
     />
    </g>
   </g>
   <defs>
    <filter
     id="filter0_f_542_98889"
     x={-24.7}
     y={143.3}
     width={372.4}
     height={372.4}
     filterUnits="userSpaceOnUse"
     colorInterpolationFilters="sRGB"
    >
     <feFlood floodOpacity={0} result="BackgroundImageFix" />
     <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
     <feGaussianBlur
      stdDeviation={53.85}
      result="effect1_foregroundBlur_542_98889"
     />
    </filter>
    <filter
     id="filter1_f_542_98889"
     filterUnits="userSpaceOnUse"
     colorInterpolationFilters="sRGB"
    >
     <feFlood floodOpacity={0} result="BackgroundImageFix" />
     <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
     <feGaussianBlur
      stdDeviation={13}
      result="effect1_foregroundBlur_542_98889"
     />
    </filter>
    <filter
     id="filter2_f_542_98889"
     filterUnits="userSpaceOnUse"
     colorInterpolationFilters="sRGB"
    >
     <feFlood floodOpacity={0} result="BackgroundImageFix" />
     <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
     <feGaussianBlur
      stdDeviation={13}
      result="effect1_foregroundBlur_542_98889"
     />
    </filter>

    <filter
     id="filter3_f_542_98889"
     x={1050.3}
     y={53.3}
     width={566.4}
     height={566.4}
     filterUnits="userSpaceOnUse"
     colorInterpolationFilters="sRGB"
    >
     <feFlood floodOpacity={0} result="BackgroundImageFix" />
     <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
     <feGaussianBlur
      stdDeviation={53.85}
      result="effect1_foregroundBlur_542_98889"
     />
    </filter>
    <filter
     id="filter4_f_542_98889"
     x={688.3}
     y={812.3}
     width={424.4}
     height={424.4}
     filterUnits="userSpaceOnUse"
     colorInterpolationFilters="sRGB"
    >
     <feFlood floodOpacity={0} result="BackgroundImageFix" />
     <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
     <feGaussianBlur
      stdDeviation={53.85}
      result="effect1_foregroundBlur_542_98889"
     />
    </filter>
   </defs>
  </svg>
 );
};

export { BackgroundContact };
