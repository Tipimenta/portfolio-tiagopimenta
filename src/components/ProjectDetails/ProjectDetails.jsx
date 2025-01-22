// ProjectDetails.jsx
import { Button } from "../../components";
import styles from "./ProjectDetails.module.css";

const ProjectDetails = ({ title, description, repoLink, deployLink }) => {
 return (
  <div className={styles.ProjectDetails}>
   <h3>{title}</h3>
   <p>{description}</p>
   <div className={styles.ButtonGroup}>
    <Button href={deployLink} target="_blank">
     Deploy
    </Button>
    <Button variant="secondary" href={repoLink} target="_blank">
     Repositorio
    </Button>
   </div>
  </div>
 );
};

export { ProjectDetails };
