import styles from "./About.module.css";
import hoody from "../../assets/hoody.jpeg";

import {
  FaBriefcase,
  FaGraduationCap,
  FaFolderOpen,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className={styles.aboutSection}
    >
      <div className={styles.aboutContainer}>

        <div className={styles.sectionTitle}>
          <h4>ABOUT ME</h4>
          <h2>Get To Know Me</h2>
        </div>

        <div className={styles.aboutContent}>

          {/* Left Side */}

          <div className={styles.imageWrapper}>
            <div className={styles.aboutImage}>
              <img
                src={hoody}
                alt="Ajeet Kumar"
              />
            </div>
          </div>

          {/* Right Side */}

          <div className={styles.aboutText}>

            <h3>Who am I?</h3>

            <div className={styles.aboutCards}>

              <div className={styles.card}>
                <FaBriefcase className={styles.cardIcon} />
                <h4>Experience</h4>
                <p>Fresher</p>
              </div>

              <div className={styles.card}>
                <FaGraduationCap className={styles.cardIcon} />
                <h4>Education</h4>
                <p>BCA Student</p>
              </div>

              <div className={styles.card}>
                <FaFolderOpen className={styles.cardIcon} />
                <h4>Projects</h4>
                <p>15+ Completed</p>
              </div>

            </div>

            <p>
              Hi! I'm Ajeet Kumar, a BCA student and passionate Frontend Developer.
              I enjoy creating responsive websites using HTML, CSS, JavaScript,
              and React. I'm constantly learning new technologies and building
              real-world projects.
            </p>

            <div className={styles.aboutButtons}>

              <button className={styles.primaryBtn}>
                Download CV
              </button>

              <button className={styles.secondaryBtn}>
                Contact Me
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;