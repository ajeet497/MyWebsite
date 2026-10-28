
import { useState } from "react";
import styles from "./Contact.module.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

// IMPORTANT: Replace this with your real receiving email.
const CONTACT_EMAIL = "Jakhaur28032022@gmail.com";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setStatus("sending");

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      _subject: `Portfolio Contact: ${formData.get("name")}`,
    };

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(
          CONTACT_EMAIL
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || data.success !== "true") {
        throw new Error(data.message || "Message could not be sent.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

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
                <p>Jakhaur28032022@gmail.com</p>
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
          <form
            className={styles.contactForm}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your Name"
              autoComplete="name"
              maxLength={100}
              required
              disabled={status === "sending"}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="Your Email"
              autoComplete="email"
              maxLength={254}
              required
              disabled={status === "sending"}
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              aria-label="Your Message"
              maxLength={5000}
              required
              disabled={status === "sending"}
            />

            <button
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message"}
            </button>

            {status === "success" && (
              <p role="status" style={{ color: "#86efac" }}>
                Message submitted successfully! Thank you for
                contacting me.
              </p>
            )}

            {status === "error" && (
              <p role="alert" style={{ color: "#fca5a5" }}>
                Message could not be sent. Please try again
                or contact me by email.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
