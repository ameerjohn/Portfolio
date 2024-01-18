import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";

import classes from "./About.module.css";
import rijas from "../assets/Images/Me/rijas.png";

const About = () => {
  const aboutVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        const aboutSectionTop = aboutSection.offsetTop;

        if (scrollPosition >= aboutSectionTop - window.innerHeight * 0.5) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <Element name="about" id="about">
      <motion.div
        className={classes.about}
        variants={aboutVariants}
        initial="hidden"
        animate={controls}
      >
        <img src={rijas} alt="mypic" className={classes.pic} />
        <div className={classes.center}>
          <div className={classes.title}>
            <span className={classes.small}>About Me</span>
            <h3>
              I'm <span>Rijas</span>
            </h3>
            <h3>
              Web <span>Designer</span>
            </h3>
          </div>
          <div className={classes.text}>
            <p>
              Hi! I'm Rijas. I am a Frontend developer, and I'm very passionate
              and dedicated to my work
            </p>
            <p>
              I'm from Pudukkottai, and I'm pursuing BSc Computer Science at
              Jamal Mohamed College(Autonomous) in Trichy. I'm a React
              developer. I create successful websites that are fast, user
              friendly, and easy to use.
            </p>
          </div>
        </div>
      </motion.div>
    </Element>
  );
};

export default About;
