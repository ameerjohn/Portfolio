import React, { useEffect, useState, useCallback } from "react";
import { Card, CardContent, CardActions, Button, Paper } from "@mui/material/";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";

import Json from "../assets/json/resume.json";
import classes from "./Works.module.css";
import { Link } from "react-router-dom";

const Works = () => {
  const [resume, setResume] = useState(null);
  const controls = useAnimation();

  const handleScroll = useCallback(() => {
    const worksSection = document.getElementById("works");

    if (worksSection) {
      const worksSectionTop = worksSection.offsetTop;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= worksSectionTop - window.innerHeight * 0.8) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }
  }, [controls]);

  useEffect(() => {
    setResume(Json);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, handleScroll]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  return (
    <Element name="works" id="works">
      <div className={classes.worksection}>
        <div className={classes.worklist}>
          <ul>
            <li className={classes.list}>
              <div className={classes.list_inner}>
                <div className={classes.main_title}>
                  <span>What I Do</span>
                  <h3>My Works</h3>
                </div>
              </div>
            </li>
            {resume?.projects.map((data, index) => (
              <motion.li
                key={data.id}
                className={classes.list}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                exit="exit"
              >
                <div className={classes.list_inner}>
                  <Card
                    key={data.id}
                    className={classes.card}
                    component={Paper}
                    variant="outlined"
                  >
                    <CardContent>
                      <div className={classes.cardtitle}>{data.name}</div>
                      <p className={classes.cardcontent}>{data.description}</p>
                    </CardContent>
                    <CardActions className={classes.action_btn}>
                      <Button
                        className={classes.btn}
                        color="error"
                        variant="outlined"
                      >
                        <Link
                          className={classes.link}
                          to={data.src_url}
                          target="blank"
                        >
                          Show Src Code
                        </Link>
                      </Button>
                      {data.site_url && (
                        <Button
                          className={classes.btn}
                          color="error"
                          variant="contained"
                        >
                          <Link
                            className={classes.link}
                            to={data.site_url}
                            target="blank"
                          >
                            Show Webpage
                          </Link>
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default Works;
