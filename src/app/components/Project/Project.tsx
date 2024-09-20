import { FC } from "react";
import styles from "./Project.module.css";

export interface IProject {
  title: string;
  img: string;
}

const Project: FC<IProject> = ({ title, img }) => {
  return (
    <li className={styles.project}>
      <a href="">
        <img src={img} alt="Project img" className={styles.img} />
        <h3 className={styles.title}>{title}</h3>
      </a>
    </li>
  );
};
export default Project;
