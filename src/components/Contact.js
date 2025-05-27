import React, { useState, useEffect } from "react";
import { EmailOutlined, Send } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import emailjs from "emailjs-com";

import classes from "./Contact.module.css"; // Your CSS module

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const formSection = document.getElementById("contact");
      if (!formSection) return;
      const triggerPoint = formSection.offsetTop - window.innerHeight + 100;
      controls.start(window.scrollY >= triggerPoint ? "visible" : "hidden");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

const handleSubmit = async (event) => {
  event.preventDefault();
  if (!name || !email || !message) {
    setFormError("Please fill out all fields!");
    setTimeout(() => setFormError(""), 2000);
    return;
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message
  };

  try {
    await emailjs.send(
      "service_4s6ghxk",
      "template_lq4mxek",
      templateParams,
      "OQE0HOecqntm_AwW4" // pass public key as string
    );
    setFormSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  } catch (error) {
    console.error(error);
    setFormError("Error sending email. Please try again.");
  }

  setTimeout(() => {
    setFormSubmitted(false);
    setFormError("");
  }, 3000);
};


  const placeholderColor = "#fff";
  const buttonStyle = {
    backgroundColor: "#112A46",
    padding: "15px",
    fontFamily: "Josefin Sans",
    borderRadius: "5px",
    marginTop: "10px",
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div className={classes.contact} animate={controls} id="contact">
      <div className={classes.title}>
        <span>Get in Touch</span>
        <h3>Connect with me</h3>
      </div>
      <div className={classes.contact_details}>
        <div className={classes.left}>
          <p className={classes.text}>
            Please fill out the form on this section to contact with me. Or
            Send a mail
          </p>
          <div className={classes.email}>
            <EmailOutlined className={classes.email_icon} />
            <span>Email</span>
            <h3>amirjohn724@gmail.com</h3>
          </div>
        </div>
        <motion.form
          className={classes.form}
          variants={formVariants}
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
        >
          {formSubmitted && (
            <p style={{ color: "green" }}>
              Form submitted successfully! We will contact you soon.
            </p>
          )}
          {formError && <p style={{ color: "red" }}>{formError}</p>}
          <TextField
            variant="outlined"
            margin="dense"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            InputProps={{
              style: {
                color: placeholderColor,
                fontFamily: "Josefin Sans",
              },
            }}
          />
          <TextField
            variant="outlined"
            type="email"
            margin="dense"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            InputProps={{
              style: {
                color: placeholderColor,
                fontFamily: "Josefin Sans",
              },
            }}
          />
          <TextField
            variant="outlined"
            multiline
            rows={4}
            margin="dense"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            InputProps={{
              style: {
                color: placeholderColor,
                fontFamily: "Josefin Sans",
              },
            }}
          />
          <Button variant="contained" style={buttonStyle} type="submit">
            Submit Message <Send />
          </Button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
