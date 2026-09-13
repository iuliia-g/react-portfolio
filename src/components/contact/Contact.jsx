import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_amymeu3",
        "template_b5y3ijd",
        formRef.current,
        "VN4zT8uJ-Z7wtKdGe"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>

      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Connect</h1>

          <div className="c-info">
            <div className="c-info-item">
              <FaEnvelope className="c-icon" />
              <a href="mailto:iuliia.grishko@gmail.com">
                iuliia.grishko@gmail.com
              </a>
            </div>

            <div className="c-info-item">
              <FaGithub className="c-icon" />
              <a
                href="https://github.com/iuliia-g"
                target="_blank"
                rel="noreferrer"
              >
                github.com/iuliia-g
              </a>
            </div>

            <div className="c-info-item">
              <FaLinkedin className="c-icon" />
              <a
                href="https://www.linkedin.com/in/iuliia-grishko/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/iuliia-grishko
              </a>
            </div>
          </div>
        </div>

        <div className="c-right">
          <h2>Get in Touch</h2>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
            />

            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />

            <textarea
              rows="6"
              placeholder="Message"
              name="message"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;