import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, SwipeableDrawer } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [state, setState] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200;
      setIsScrolled(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = (x) => {
      if (x.matches) {
        setResponsive(true);
      } else {
        setResponsive(false);
      }
    };
    const x = window.matchMedia("(max-width: 769px)");
    mediaQuery(x);
    x.addEventListener("change", mediaQuery);
  }, []);

  return (
    <div>
      <header
        className={`${isScrolled ? classes.scrolled : ""} ${
          classes.mobileHeader
        }`}
      >
        <motion.code
          className={classes.code}
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          animate={{ opacity: 1, scale: 1.1, x: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <NavLink className={classes.link} to="/">
            &lt;Rijas/&gt;
          </NavLink>
        </motion.code>
        {responsive ? (
          <Button className={classes.menubtn} onClick={() => setState(true)}>
            <MenuIcon />
          </Button>
        ) : (
          <div className={classes.menu}>
            <motion.ul
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1.1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.list}
            >
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ScrollLink
                  className={classes.link}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </ScrollLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ScrollLink
                  className={classes.link}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </ScrollLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ScrollLink
                  className={classes.link}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Skills
                </ScrollLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ScrollLink
                  className={classes.link}
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Works
                </ScrollLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ScrollLink
                  className={classes.link}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </ScrollLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <NavLink className={classes.link} to="/resume">
                  MyResume
                </NavLink>
              </motion.li>
            </motion.ul>
          </div>
        )}
        <SwipeableDrawer
          className={classes.swipe_navigate}
          anchor={"top"}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <ScrollLink
            activeClass={classes.active}
            to="home"
            smooth={true}
            spy={true}
          >
            <Button className={classes.bar_btn}>Home</Button>
          </ScrollLink>
          <ScrollLink
            activeClass={classes.active}
            to="about"
            smooth={true}
            spy={true}
            offset={250}
          >
            <Button className={classes.bar_btn}>About</Button>
          </ScrollLink>
          <ScrollLink
            activeClass={classes.active}
            to="skills"
            smooth={true}
            spy={true}
            offset={-400}
          >
            <Button className={classes.bar_btn}>Skills</Button>
          </ScrollLink>
          <ScrollLink
            activeClass={classes.active}
            to="works"
            smooth={true}
            spy={true}
          >
            <Button className={classes.bar_btn}>Works</Button>
          </ScrollLink>
          <ScrollLink
            activeClass={classes.active}
            to="contact"
            smooth={true}
            spy={true}
          >
            <Button className={classes.bar_btn}>Contact</Button>
          </ScrollLink>
          <NavLink to="/resume">
            <Button className={classes.bar_btn} onClick={toggleDrawer(false)}>
              My Resume
            </Button>
          </NavLink>
        </SwipeableDrawer>
      </header>
    </div>
  );
};

export default MainNavigation;
