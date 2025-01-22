import styles from "./SocialLinks.module.css";
import {
 SvgSocialGitHub,
 SvgSocialGmail,
 SvgSocialLinkedin,
} from "../../components";

const SocialLinks = () => {
 return (
  <div className={styles.socialHome}>
   <div className={styles.containerSocial}>
    <ul>
     <li>
      <SvgSocialGitHub />
     </li>
     <li>
      <SvgSocialLinkedin />
     </li>
     <li>
      <SvgSocialGmail />
     </li>
    </ul>
   </div>
  </div>
 );
};

export { SocialLinks };
