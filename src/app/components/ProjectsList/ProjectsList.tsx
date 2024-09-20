import Project, { IProject } from "../Project/Project";
import styles from "./ProjectsList.module.css";

const projects: IProject[] = [
  {
    img: "/public/images/projects/01.jpg",
    title: "Gaming streaming portal",
  },
  { img: "/public/images/projects/02.jpg", title: "Video service" },
  { img: "/public/images/projects/03.jpg", title: "Video portal" },
  { img: "/public/images/projects/04.jpg", title: "Dating app" },
  { img: "/public/images/projects/05.jpg", title: "Landing" },
  { img: "/public/images/projects/06.jpg", title: "Gaming community" },
];

const ProjectsList = () => {
  return (
    <div className="container">
      <h2 className={styles.title}>Projects</h2>
      <ul className={styles.projects}>
        {projects.map((project) => {
          return (
            <Project
              img={project.img}
              title={project.title}
              key={project.title}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default ProjectsList;
