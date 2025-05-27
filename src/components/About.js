import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";

import classes from "./About.module.css";

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
        {/*<img src={"https://media.licdn.com/dms/image/v2/D5603AQGS-A779zrNxA/profile-displayphoto-shrink_200_200/B56ZNxsidKGwAc-/0/1732779322603?e=1753920000&v=beta&t=jd3rvb6U6tZr-Cvlo6e9iYNYNC8naGR7Y5Ax60OJQJE"} alt="mypic" className={classes.pic} />*/}
        <div className={classes.center}>
          <div className={classes.title}>
            <span className={classes.small}>About Me</span>
            <h3>
              I'm <span>Ameer</span>
            </h3>
            <h3>
              Web & Frontend <span>Developer</span>
            </h3>
          </div>
          <div className={classes.text}>
            <p>
              Hi! I'm Ameer. I am a Web & Frontend Developer, and I'm very passionate
              and dedicated to my work
            </p>
            <p>
             Proficient in HTML, CSS, JavaScript, TypeScript, and frameworks like React.js, Next.js, and Redux and  hands-on experience in CMS platforms such as WordPress, Elementor, Wix.
              UI Libraries & Frameworks: Hands-on experience with Material UI, Bootstrap, and Tailwind CSS to craft sleek and intuitive designs.
            </p>
          </div>
        </div>
      </motion.div>
    </Element>
  );
};

export default About;
