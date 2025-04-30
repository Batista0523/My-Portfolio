import  { useState } from "react";
import { addItem } from "../../helpers/apiCalls";
import "./Contact.css";

function Contact() {
  const endpoint = "contactMe";
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    msg: "",
  });

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addItem(endpoint, formData);
      setFormData({ username: "", email: "", msg: "" });
      alert("🚀 🎉 Message sent successfully 🥳✨🚀");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contactContent">
        <div className="contact-form">
        <h3 style={{ color: 'black' }}>Let&#39;s Connect</h3>

        <p style={{ color: 'black' }} >
  I&#39;m a passionate Full Stack Developer who turns ideas into clean, responsive, and impactful digital experiences.
  If you&#39;re looking for someone who blends strong technical skills with creativity and a collaborative spirit — let&#39;s talk.
  I&#39;m open to freelance, full-time, or apprenticeship opportunities. Let&#39;s build something amazing together!
</p>

          <form onSubmit={handleSubmit}>
            <input
              className="input"
              placeholder="Name"
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              className="input"
              placeholder="Your Message"
              name="msg"
              required
              value={formData.msg}
              onChange={handleChange}
            />
            <input className="btn-submit" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;