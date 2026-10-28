
import styles from "./Hero.module.css";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaAddressCard,
} from "react-icons/fa";

import { FaCircleDown } from "react-icons/fa6";

import PhotoAjeet2 from "../../assets/PhotoAjeet2.png";

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.parentHeroSection}>
        {/* Left Side */}
        <div className={styles.heroContent}>
          <h2>Hi, I'm</h2>

          <h1>Ajeet Kumar</h1>

          <h3>Frontend Web Developer</h3>

          <p>
            I enjoy building fast, modern, and responsive web
            applications using HTML, CSS, JavaScript, and React.
            I'm always eager to learn new technologies and improve
            my development skills.
          </p>

          <div className={styles.buttonContainer}>
            <a
              className={styles.primaryBtn}
              href="/Ajeet-Kumar-CV.pdf"
              download="Ajeet-Kumar-CV.pdf"
            >
              <FaCircleDown />
              <span>Download CV</span>
            </a>

            <a
              className={styles.secondaryBtn}
              href="#contact"
            >
              <FaAddressCard />
              <span>Contact Me</span>
            </a>
          </div>

          <div className={styles.socialMedia}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.heroImage}>
          <img src={PhotoAjeet2} alt="Ajeet Kumar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
