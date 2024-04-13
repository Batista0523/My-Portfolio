import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div>
      <div className="contact-container">
        <div className="contactContent">
          <div className="contact-form">
            <form>
              <input
                className="input"
                placeholder="name"
                type="text"
                name="user_name"
              />

              <input
                className="input"
                placeholder="email"
                type="email"
                name="user_email"
              />

              <textarea
                className="input"
                placeholder="Your Message"
                name="message"
              />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
