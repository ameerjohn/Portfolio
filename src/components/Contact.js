import React, { useState, useEffect } from "react";
import { EmailOutlined, Send } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

import classes from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const formSection = document.getElementById("contact");

      if (formSection) {
        const formSectionTop = formSection.offsetTop;
        const triggerPoint = formSectionTop - window.innerHeight + 100;

        if (scrollPosition >= triggerPoint) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const placeholderColor = "lightGray";
  const buttonStyle = {
    backgroundColor: "#ea4343",
    padding: "15px",
    fontFamily: "Josefin Sans",
    borderRadius: "5px",
    marginTop: "10px",
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setFormError("Please fill out all fields!");
      setTimeout(() => {
        setFormError("");
      }, 2000);
      return;
    }

    await fetch(
      "https://portfolio-messages-2531f-default-rtdb.firebaseio.com/message.json",
      {
        method: "post",
        body: JSON.stringify({ name, email, message }),
      }
    )
      .then((response) => {
        if (response.status === 200) {
          setName("");
          setEmail("");
          setMessage("");
          setFormError("");
          setFormSubmitted(true);
        }
      })
      .catch((err) => {
        setFormError("Error submitting form. Please try again.");
        setFormSubmitted(true);
      });

    setName("");
    setEmail("");
    setMessage("");
    setFormError("");
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 2000);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div className={classes.contact} animate={controls}>
      <div className={classes.title}>
        <span>Get in Touch</span>
        <h3>Connect with me</h3>
      </div>
      <div className={classes.contact_details}>
        <div className={classes.left}>
          <p className={classes.text}>
            Please fill out the form on this section to contact with me. Or Send
            a mail
          </p>
          <div className={classes.email}>
            <EmailOutlined className={classes.email_icon} />
            <span>Email</span>
            <h3>rijrijas@gmail.com</h3>
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
            onChange={handleNameChange}
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
            type={"email"}
            fullWidth
            value={email}
            onChange={handleEmailChange}
            placeholder="Your Email"
            margin="dense"
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
            fullWidth
            value={message}
            onChange={handleMessageChange}
            placeholder="Your Message"
            margin="dense"
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
