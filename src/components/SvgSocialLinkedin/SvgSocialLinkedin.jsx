import styles from "./SvgSocialLinkedin.module.css";

const SvgSocialLinkedin = (props) => {
 return (
  <a
   href="https://www.linkedin.com/in/tipimenta/"
   target="_blank"
   rel="noopener noreferrer"
  >
   <svg
    className={styles.socialLinkedin}
    width={40}
    height={40}
    viewBox="0 0 92 92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
   >
    <path
     d="M46 0C20.619 0 0 20.619 0 46s20.619 46 46 46 46-20.619 46-46S71.381 0 46 0zm0 4c23.22 0 42 18.78 42 42S69.22 88 46 88 4 69.22 4 46 22.78 4 46 4zM28 20c-3.29 0-6 2.71-6 6s2.71 6 6 6 6-2.71 6-6-2.71-6-6-6zm0 4c1.128 0 2 .872 2 2 0 1.128-.872 2-2 2-1.128 0-2-.872-2-2 0-1.128.872-2 2-2zm-4 10a2 2 0 00-2 2v30a2 2 0 002 2h8a2 2 0 002-2V36a2 2 0 00-2-2h-8zm16 0a2 2 0 00-2 2v30a2 2 0 002 2h8a2 2 0 002-2V51c0-2.76 2.24-5 5-5s5 2.24 5 5v15a2 2 0 002 2h8a2 2 0 002-2V49c0-8.26-6.74-15-15-15-2.573 0-4.88.832-7 1.98A2 2 0 0048 34h-8zm-14 4h4v26h-4V38zm16 0h4v1.633a2 2 0 003.387 1.441A10.927 10.927 0 0157 38c6.1 0 11 4.9 11 11v15h-4V51c0-4.94-4.06-9-9-9s-9 4.06-9 9v13h-4V38z"
     fill="url(#paint0_linear_498_98899)"
    />
    <defs>
     <linearGradient
      id="paint0_linear_498_98899"
      x1={46}
      y1={0}
      x2={46}
      y2={92}
      gradientUnits="userSpaceOnUse"
     >
      <stop stopColor="#B9CC45" />
      <stop offset={1} stopColor="#0E7355" />
     </linearGradient>
    </defs>
   </svg>
  </a>
 );
};

export { SvgSocialLinkedin };
