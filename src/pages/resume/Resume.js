import { Fragment, useEffect, useState } from "react";
import {
  LinkedIn,
  MailOutline,
  Phone,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";

import Json from "../../assets/json/resume.json";
import classes from "./Resume.module.css";

const Resume = () => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    setResume(Json);
  }, []);

  return (
    <div className={classes.overlay}>
      <div className={classes.header}>
        <div>
          <h1 style={{ margin: 0 }}>{resume?.personal_details.name} <span style={{ fontSize: "12px" }}>(She/Her)</span></h1>
          <h4 style={{ margin: "4px 0" }}>Web & Frontend Developer</h4>
          
           <div>
            <LinkedIn />
            <a
              rel="noopener noreferrer"
              href={resume?.personal_details.linkedin}
              target="_blank"
              className={classes["icon-code"]}
            >
              {resume?.personal_details.linkedin}
            </a>
          </div>
        </div>
        <div>
          <div>
            <Phone />
            <a
              href={`tel:${resume?.personal_details.contact_no}`}
              className={classes["icon-code"]}
            >
              {resume?.personal_details.contact_no}
            </a>
          </div>
          <div>
            <MailOutline />
            <a
              href={`mailto:${resume?.personal_details.mail}`}
              className={classes["icon-code"]}
            >
              {resume?.personal_details.mail}
            </a>
          </div>
         <h5 style={{ margin: "4px 0" }}>Nationality : Indian</h5>
        </div>
      </div>
      <div style={{ padding: "0 20px 8px 20px" }}>
        <div>
          <h4 className={classes.subheader}>Objective:</h4>
          <div className={classes.objective}>{resume?.objective}</div>
        </div>
        <div>
          <h4 className={classes.subheader}>Technical skills:</h4>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.list_heading}>Languages:</div>
              <ul className={classes.list}>
                {resume?.technical_skills.programming_languages.map(
                  (lang, index) => (
                    <li key={index}>{lang}</li>
                  )
                )}
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.list_heading}>Libraries:</div>
              <ul className={classes.list}>
                {resume?.technical_skills.framework.map((frm, index) => (
                  <li key={index}>{frm}</li>
                ))}
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.list_heading}>CMS:</div>
              <ul className={classes.list}>
                {resume?.technical_skills.cms.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.list_heading}>Hosting Tools:</div>
              <ul className={classes.list}>
                {resume?.technical_skills.hosting.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className={classes.list_heading}>Project Management:</div>
              <ul className={classes.list}>
                {resume?.technical_skills.management.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
               <div className={classes.list_heading}>Design Tools:</div>
              <ul className={classes.list}>
                {resume?.technical_skills.design.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </div>
        <div>
          <h4 className={classes.subheader}>Experience:</h4>
            {resume?.experience.map((item, index) => (
              <>
                <div>
                  <div className={classes.subheader1}>{item.company}<span className={classes.city}> {item.place}</span></div>
                  <div className={classes.subheader2}>
                    {item.role}
                  </div>
                  <p className={classes.description}>
                   {item.fromto}
                   
                  </p>
                </div>
                <Divider component="ul" />
                </>
            ))}
        </div>
      
        <div>
          <h4 className={classes.subheader}>Education:</h4>
          <div>
            <div className={classes.subheader1}>
              Master of Computer Application (MCA) with <b>81%</b>
            </div>
            <div className={classes.subheader2}>
             Adaikalamatha Arts Science College, Thanjavur
            </div>
            <p className={classes.description}>
              2015-2017
            </p>
          </div>
          <Divider component="ul" />
          <div>
            <div className={classes.subheader1}>
              Bachelor of Computer Application (BCA) with <b>80%</b>
            </div>
            <div className={classes.subheader2}>
             Bon Secours college for Women, Thanjavur
            </div>
            <p className={classes.description}>
              2012-2015
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Resume;