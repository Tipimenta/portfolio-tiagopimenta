import styles from "./Button.module.css";

const Button = ({
 children,
 href,
 type = "button",
 variant = "btn",
 target = "_self",
}) => {
 const buttonClass = `${styles.btn} ${styles[variant]}`;

 if (href) {
  return (
   <a className={buttonClass} href={href} target={target} rel="noreferrer">
    {children}
   </a>
  );
 }

 return (
  <button className={buttonClass} type={type}>
   {children}
  </button>
 );
};

export { Button };
