import styles from "./Loading.module.css";

const Loading = () => {
 return (
  <svg
   className={styles.loading}
   width={104}
   height={107}
   viewBox="0 0 104 107"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
  >
   <path
    className={styles.tiago}
    d="M61.304 3.476c-4.09-1-59.047-.137-59.304 0 3.235 7.775 6.052 13.69 13.292 14.056h37.32s-1.022 62.476 0 71.473c1.023 8.996 5.795 12.069 15.338 14.994-.175.359.174-85.276 0-90.465-.174-5.19-2.556-9.058-6.646-10.058z"
    fill="url(#paint0_linear_309_11)"
    stroke="#fff"
   />
   <path
    className={styles.pimenta}
    d="M92.54 24c5.466 0 6.46 3.194 6.46 7.129v36.742c-.656 5.112-2.395 6.268-6.46 7.129H67.994c.007-5.64.008-10.603.002-14.355H81.61c2.197-.056 3.199.077 3.638-.357.47-.466.295-1.585.253-4.288V43.5c.085-4.059-.151-4.07-2.922-4.194-.294-.013-.616-.027-.97-.048H35.895C27.177 39.016 22.732 34.305 19 24h73.54z"
    fill="url(#paint1_linear_309_11)"
   />
   <path
    className={styles.pimenta}
    d="M51.974 60.711H34.5c-9.486 1.505-12.67 6.223-12.422 14.355h29.896c.071-6.132-.046-11.273 0-14.355z"
    fill="url(#paint2_linear_309_11)"
   />
   <path
    className={styles.pimenta}
    d="M92.54 24c5.466 0 6.46 3.194 6.46 7.129v36.742c-.656 5.112-2.395 6.268-6.46 7.129H67.994c.007-5.64.008-10.603.002-14.355H81.61c2.197-.056 3.199.077 3.638-.357.47-.466.295-1.585.253-4.288V43.5c.085-4.059-.151-4.07-2.922-4.194-.294-.013-.616-.027-.97-.048H35.895C27.177 39.016 22.732 34.305 19 24h73.54z"
    stroke="#fff"
   />
   <path
    className={styles.pimenta}
    d="M51.974 60.711H34.5c-9.486 1.505-12.67 6.223-12.422 14.355h29.896c.071-6.132-.046-11.273 0-14.355z"
    stroke="#fff"
   />
   <defs>
    <linearGradient
     id="paint0_linear_309_11"
     x1={59.2588}
     y1={10.9736}
     x2={6.25802}
     y2={44.5341}
     gradientUnits="userSpaceOnUse"
    >
     <stop stopColor="#0B8460" />
     <stop offset={0.41} stopColor="#20463A" />
     <stop offset={0.724046} stopColor="#292C2A" />
    </linearGradient>
    <linearGradient
     id="paint1_linear_309_11"
     x1={61.5342}
     y1={28.2903}
     x2={-14.8313}
     y2={55.5069}
     gradientUnits="userSpaceOnUse"
    >
     <stop stopColor="#A4BD1C" />
     <stop offset={0.546125} stopColor="#303514" />
    </linearGradient>
    <linearGradient
     id="paint2_linear_309_11"
     x1={61.5342}
     y1={28.2903}
     x2={-14.8313}
     y2={55.5069}
     gradientUnits="userSpaceOnUse"
    >
     <stop stopColor="#A4BD1C" />
     <stop offset={0.546125} stopColor="#303514" />
    </linearGradient>
   </defs>
  </svg>
 );
};

export { Loading };
