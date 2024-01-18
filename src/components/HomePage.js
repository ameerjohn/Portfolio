import React from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import {
  MailOutline,
  Facebook,
  Twitter,
  Instagram,
  Mouse,
} from "@mui/icons-material";

import classes from "./HomePage.module.css";
import ME1 from "../assets/Images/Me/ME1.png";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const avatarVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.5 } },
  };

  const socialVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
    exit: { y: 50, opacity: 0, transition: { duration: 0.5 } },
  };

  const mailVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
    exit: { x: -50, opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div
        className={classes.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className={classes.content}>
          <span className={classes.hello}>Hello, I'm</span>
          <h3 className={classes.name}>Rijas</h3>
          <span className={classes.job}>
            Frontend <span>Developer</span>
          </span>
          <div className={classes.btnnav}>
            <ScrollLink className={classes.hellobtn} to="contact" smooth={true}>
              Say Hello
              <MailOutline className={classes.mailicon} />
            </ScrollLink>
            <ScrollLink className={classes.abtmebtn} to="about" smooth={true}>
              About Me
            </ScrollLink>
          </div>
        </div>
        <motion.div className={classes.avatar} variants={avatarVariants}>
          <div className={classes.main}>
            <img src={ME1} alt="MyPic" className={classes.mypic} />
          </div>
          <span className={classes.one}>
            <span className={classes.inlayer}></span>
          </span>
          <span className={classes.two}>
            <span className={classes.inlayer}></span>
          </span>
          <span className={classes.three}>
            <span className={classes.inlayer}></span>
          </span>
          <span className={classes.four}>
            <span className={classes.in}></span>
          </span>
          <span className={classes.five}>
            <span className={classes.inlayer}></span>
          </span>
          <h3 className={classes.stroketxt}>
            <span>Rijas</span>
          </h3>
        </motion.div>
        <motion.div className={classes.social} variants={socialVariants}>
          <ul>
            <li>
              <NavLink
                to={"https://www.facebook.com/rijasafradi.rijasafradi.7"}
                target="_blank"
              >
                <Facebook style={{ fill: "white" }} />
              </NavLink>
            </li>
            <li>
              <NavLink to={"https://twitter.com/RijasAfradi"} target="_blank">
                <Twitter style={{ fill: "white" }} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"https://www.instagram.com/afridi_lasmo_/"}
                target="_blank"
              >
                <Instagram style={{ fill: "white" }} />
              </NavLink>
            </li>
          </ul>
        </motion.div>
        <motion.div className={classes.mail} variants={mailVariants}>
          <ScrollLink className={classes.mouseicon} to="about" smooth={true}>
            <Mouse style={{ fill: "white" }} />
          </ScrollLink>
          <NavLink className={classes.link}>rijrijas@gmail.com</NavLink>
        </motion.div>
        <hr />
      </motion.div>
    </>
  );
};

export default HomePage;
