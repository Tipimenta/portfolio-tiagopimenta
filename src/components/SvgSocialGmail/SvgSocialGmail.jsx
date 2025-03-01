import styles from "./SvgSocialGmail.module.css";

const SvgSocialGmail = (props) => {
 return (
  <a
   href="mailto:tiagopimenta.ata@gmail.com"
   target="_blank"
   rel="noopener noreferrer"
  >
   <svg
    className={styles.socialGmail}
    width={48}
    height={40}
    viewBox="0 0 97 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
   >
    <path
     d="M85.53.01a10.957 10.957 0 00-6.965 2.133L48.022 24.717 23.206 6.374a2 2 0 00-1.286-.567h.5L17.49 2.16a10.96 10.96 0 00-6.972-2.14c-2.438.106-4.826 1.05-6.68 2.878a12.807 12.807 0 00-3.816 9.129v6.867a2 2 0 000 .59v46.723c0 3.842 3.157 7 7 7h15a2 2 0 002-2V37.952l22.812 16.863a2 2 0 002.375 0l22.813-16.863v33.254a2 2 0 002 2h15c3.842 0 7-3.158 7-7V19.444a1.999 1.999 0 000-.52v-6.898c0-3.517-1.42-6.749-3.742-9.074-.067-.067-.09-.086-.063-.059a3.235 3.235 0 00-.011-.012C90.352 1.057 87.966.117 85.53.011zm-.22 3.996c1.513.06 2.98.633 4.09 1.727l.048.047a8.804 8.804 0 012.574 6.246v6.172l-16 11.824V9.206c0-.068-.002-.136-.008-.204l4.926-3.64h.004a6.922 6.922 0 014.367-1.356zm-74.573.012a6.929 6.929 0 014.375 1.356L20.03 9.01a1.99 1.99 0 00-.008.196v20.816l-16-11.824v-6.172a8.77 8.77 0 012.625-6.281c1.11-1.096 2.575-1.668 4.09-1.727zm61.285 7.93v21.031l-24 17.738-24-17.738V11.952l22.812 16.863a2 2 0 002.375 0l22.813-16.867zm-68 11.222l16 11.828v34.208h-13c-1.682 0-3-1.319-3-3V23.17zm88 0v43.036c0 1.681-1.319 3-3 3h-13V34.998l16-11.828z"
     fill="url(#paint0_linear_498_98900)"
    />
    <defs>
     <linearGradient
      id="paint0_linear_498_98900"
      x1={48.0194}
      y1={0}
      x2={48.0194}
      y2={73.2056}
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

export { SvgSocialGmail };
