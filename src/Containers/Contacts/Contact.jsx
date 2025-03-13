import React, { useState } from "react";
import { addItem } from "../../helpers/apiCalls";
import "./Contact.css";

function Contact() {
  const endpoint = "contact";

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, msg } = formData;

    try {
      await addItem(endpoint, {
        username,
        email,
        msg,
      });

      setFormData({
        username: "",
        email: "",
        msg: "",
      });

      alert("🚀 🎉 Message sent successfully 🥳✨🚀");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.",error);
    }
  };

  return (
    <div>
      <div className="contact-container">
        <div className="contactContent">
          <div className="contact-form">
            <form className="contact-form" onSubmit={handleSubmit}>
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
    </div>
  );
}

export default Contact;
