import React from "react";
import { motion } from "framer-motion";

import classes from "./Skills.module.css";
import html from "../assets/Images/Skills/html.png";
import css from "../assets/Images/Skills/css.png";
import js from "../assets/Images/Skills/js.png";
import reactjs from "../assets/Images/Skills/reactjs.png";
import jquery from "../assets/Images/Skills/jquery.png";
import bootstrap from "../assets/Images/Skills/bootstrap.png";
import vue from "../assets/Images/Skills/vue.png";
import nextJs from "../assets/Images/Skills/nextjs.png";
import tailwind from "../assets/Images/Skills/tailwind.png";
import php from "../assets/Images/Skills/php.png";
import json from "../assets/Images/Skills/json.png";
import wordpress from "../assets/Images/Skills/wordpress.png";
import elementor from "../assets/Images/Skills/elementor.png";
import wocommerce from "../assets/Images/Skills/wocommerce.png";
import wix from "../assets/Images/Skills/wix.png";
import shopify from "../assets/Images/Skills/shopify.png";
import prestashop from "../assets/Images/Skills/prestashop.png";
import photoshop from "../assets/Images/Skills/photoshop.png";
import illustrator from "../assets/Images/Skills/illustrator.png";

import git from "../assets/Images/Skills/git.png";
// import svn from "../assets/Images/Skills/svn.png";

const Skills = () => {
  const skillData = [
    { src: html, alt: "HTML", label: "HTML" },
    { src: css, alt: "CSS", label: "CSS" },
    { src: js, alt: "JAVASCRIPT", label: "JavaScript" },
     { src: jquery,  alt: "jquery", label: "Jquery"},
    { src: reactjs, alt: "REACTJS", label: "ReactJS" },
       { src: vue,  alt: "Vuejs", label: "Vuejs"},
    { src: nextJs,  alt: "NextJs", label: "NextJs"},
    { src: bootstrap,  alt: "Bootstrap", label: "Bootstrap"},
    { src: tailwind,  alt: "Tailwindcss", label: "Tailwindcss"},
    { src: php,  alt: "PHP", label: "PHP"},
     { src: json,  alt: "JSON", label: "JSON"},
    { src: wordpress,  alt: "Wordpress", label: "Wordpress"},
    { src: elementor,  alt: "Elementor", label: "Elementor"},
     { src: wocommerce,  alt: "Wocommerce", label: "Wocommerce"},
     { src: wix,  alt: "Wix", label: "Wix"},
     { src: shopify,  alt: "Shopify", label: "Shopify"},
     { src: prestashop,  alt: "Prestashop", label: "Prestashop"},
         { src: photoshop,  alt: "Photoshop", label: "Photoshop"},
    { src: illustrator,  alt: "Illustrator", label: "Illustrator"},
     { src: git,  alt: "GIT", label: "GIT"}
     // { src: svn,  alt: "SVN", label: "SVN"},

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
      {/*<h3>Web Development</h3>*/}
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
