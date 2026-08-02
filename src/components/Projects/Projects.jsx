import styles from "./Projects.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio website built using React and CSS Modules.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },

  {
    id: 2,
    title: "Student Management System",
    description:
      "A web application for managing students, attendance and fee records.",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },

  {
    id: 3,
    title: "Weather App",
    description:
      "A responsive weather application using a weather API.",
    technologies: ["React", "API", "CSS"],
    github: "#",
    live: "#",
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
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