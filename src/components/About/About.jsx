
import { useState } from "react";
import styles from "./About.module.css";
import hoody from "../../assets/hoody.jpeg";

import {
  FaBriefcase,
  FaGraduationCap,
  FaFolderOpen,
} from "react-icons/fa";

const About = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (card) => {
    setActiveCard((previous) =>
      previous === card ? null : card
    );
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.sectionTitle}>
          <h4>ABOUT ME</h4>
          <h2>Get To Know Me</h2>
        </div>

        <div className={styles.aboutContent}>
          {/* Left Side - Profile Image */}
          <div className={styles.imageWrapper}>
            <div className={styles.aboutImage}>
              <img src={hoody} alt="Ajeet Kumar" />
            </div>
          </div>

          {/* Right Side - About Information */}
          <div className={styles.aboutText}>
            <h3>Who am I?</h3>

            <div className={styles.aboutCards}>
              {/* Experience Card */}
              <button
                type="button"
                className={styles.card}
                onClick={() => toggleCard("experience")}
                aria-expanded={activeCard === "experience"}
              >
                <FaBriefcase className={styles.cardIcon} />
                <h4>Experience</h4>
                <p>2 Years</p>
              </button>

              {/* Education Card */}
              <button
                type="button"
                className={styles.card}
                onClick={() => toggleCard("education")}
                aria-expanded={activeCard === "education"}
              >
                <FaGraduationCap className={styles.cardIcon} />
                <h4>Education</h4>
                <p>BCA Student</p>
              </button>

              {/* Projects Card */}
              <a
                href="#projects"
                className={styles.card}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <FaFolderOpen className={styles.cardIcon} />
                <h4>Projects</h4>
                <p>Explore Projects</p>
              </a>
            </div>

            {/* Experience Details */}
            {activeCard === "experience" && (
              <div className={styles.cardDetails}>
                <h4>Teaching Experience</h4>
                <p>
                  2 years of teaching experience.
                </p>
                <p>
                  Interested in education, technology,
                  and helping students learn.
                </p>
              </div>
            )}

            {/* Education Details */}
            {activeCard === "education" && (
              <div className={styles.cardDetails}>
                <h4>Education</h4>
                <p>
                  Bachelor of Computer Applications (BCA)
                </p>
                <p>
                  Currently pursuing BCA through IGNOU.
                </p>
              </div>
            )}

            {/* Introduction */}
            <p>
              Hi! I'm Ajeet Kumar, a BCA student and aspiring
              Full-Stack Web Developer. I enjoy building
              responsive, user-friendly web applications using
              HTML, CSS, JavaScript, and React. I'm also learning
              backend development with Node.js, Express.js, and
              MySQL. Through hands-on projects, I'm continuously
              improving my problem-solving skills and turning
              ideas into practical web solutions.
            </p>

            {/* Action Buttons */}
            <div className={styles.aboutButtons}>
              <a
                className={styles.primaryBtn}
                href="/Ajeet-Kumar-CV.pdf"
                download="Ajeet-Kumar-CV.pdf"
              >
                Download CV
              </a>

              <a
                className={styles.secondaryBtn}
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
