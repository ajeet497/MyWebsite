
import styles from "./Projects.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "To-Do App",
    description:
      "A modern responsive portfolio website built using React and CSS Modules.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://ajeet497.github.io/TO_DO_WEB/",
    live: "",
  },

  {
    id: 2,
    title: "Tic-Tac-Game",
    description:
      "A web application for managing students, attendance and fee records.",
    technologies: ["React", "Node.js", "MySQL"],
    github: "https://ajeet497.github.io/TIC-TAC-TOE_GAME/",
    live: "",
  },

 
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h4>PROJECTS</h4>
          <h2>My Recent Work</h2>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className={styles.techStack}>
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className={styles.buttons}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
