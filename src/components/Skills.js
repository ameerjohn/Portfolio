import React from "react";
import { motion } from "framer-motion";

import classes from "./Skills.module.css";
import html from "../assets/Images/Skills/html.png";
import css from "../assets/Images/Skills/css.png";
import js from "../assets/Images/Skills/js.png";
import reactjs from "../assets/Images/Skills/reactjs.png";

const Skills = () => {
  const skillData = [
    { src: html, alt: "HTML", label: "HTML" },
    { src: css, alt: "CSS", label: "CSS" },
    { src: js, alt: "JAVASCRIPT", label: "JavaScript" },
    { src: reactjs, alt: "REACTJS", label: "ReactJS" },
  ];

  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={classes.skills}
      variants={skillsContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>My Skills</h2>
      <h3>Web Development</h3>
      <div className={classes.imgs}>
        {skillData.map((skill, id) => (
          <motion.div
            key={id}
            className={classes.skillItem}
            variants={skillItemVariants}
          >
            <img src={skill.src} alt={skill.alt} />
            <label>{skill.label}</label>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
