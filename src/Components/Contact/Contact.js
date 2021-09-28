import React, { useState } from "react";
import "./contact.scss";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SiWhatsapp, SiGithub } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

function Contact() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [message, setMessage] = useState(false);
  
  // function called when user submits form
  const submitForm = (data) => {
    setMessage(true)
    reset(); //clear input field
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h2>Contact Me</h2>
        <form action="" onSubmit={handleSubmit(submitForm)}>
        <span style={{textTransform:"capitalize"}}>{errors.email?.message}</span>

          <input
            type="text"
            placeholder="Email"
            name="email"
            {...register("email")}
          />

          <textarea placeholder="Message" contentEditable="false" required></textarea>

          <button type="submit">Send</button>
          {message && (
            <span id='msg' style={{fontSize: "90%"}}>Thank you for your Message, I'd get back to you</span>
          )}
        </form>
      </div>
      <div className="right">
        <img src="/assets/mike.jpg" alt="" />
        {/* social links */}
        <div className="socials">
            <ul>
              <li>
                <a href="https://wa.me/2348102748644">
                  <SiWhatsapp className="soc_icon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ademie">
                  <TiSocialLinkedinCircular className="soc_icon" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Ademie">
                  <SiGithub className="soc_icon" />
                </a>
              </li>
            </ul>
          </div>
          <h5 className="design">
          Design | <a href="https://ademie.netlify.app" style={{ textDecoration: "underline", color: "white" }}>Ademie</a>
        </h5>

      </div>
    </div>
  );
}

export default Contact;
