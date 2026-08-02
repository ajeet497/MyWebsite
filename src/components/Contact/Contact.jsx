import styles from "./Contact.module.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>

        <div className={styles.sectionTitle}>
          <h4>CONTACT</h4>
          <h2>Get In Touch</h2>
        </div>

        <div className={styles.contactWrapper}>

          {/* Left Side */}

          <div className={styles.contactInfo}>

            <div className={styles.infoCard}>
              <FaEnvelope className={styles.icon} />
              <div>
                <h3>Email</h3>
                <p>ajeet@example.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FaPhoneAlt className={styles.icon} />
              <div>
                <h3>Phone</h3>
                <p>+91 7061964407</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FaMapMarkerAlt className={styles.icon} />
              <div>
                <h3>Location</h3>
                <p>Bihar, India</p>
              </div>
            </div>

          </div>

          {/* Right Side */}

          <form className={styles.contactForm}>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;