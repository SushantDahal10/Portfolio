import React from "react";
import "./contact.css";
import { BsFacebook, BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="container" id="contact">
      <h1 className="fs-3 fw-bold my-4 text-center">Let's Work Together</h1>
      <p className="fs-5 text-center">
        Feel free to get in touch with me if you have any questions,
        collaboration opportunities, or just want to say hello! I would love to
        hear from you.
      </p>
      <p className="fs-5 text-center">You can reach me through:</p>
      <div className="social-media-container d-flex justify-content-center">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtmLhFDhRXMQKCRHhTSwjxGcWTRDvVZqSJZvVGJPLmlrsHxbfzKJBMtjpbGlKlvLxMDWQ"
          target="_blank"
          className="social-media-icon"
        >
          <AiOutlineMail />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100020434261664"
          className="social-media-icon"
          target="_blank"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com/sushant_dahal11/"
          className="social-media-icon"
          target="_blank"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/sushant-dahal-821b63251"
          className="social-media-icon"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/SushantDahal10"
          className="social-media-icon"
          target="_blank"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
}
