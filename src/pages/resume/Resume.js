import { Fragment, useEffect, useState } from "react";
import {
  GitHub,
  Link,
  LinkedIn,
  MailOutline,
  Phone,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";

import Json from "../../assets/json/resume.json";
import STJ from "../../assets/Images/works/STJOSEPH.jpg";
import JavaScript from "../../assets/Images/Certifications/Javascript.jpg";
import ReactJS from "../../assets/Images/Certifications/React.jpg";
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
          <h1 style={{ margin: 0 }}>{resume?.personal_details.name}</h1>
          <h4 style={{ margin: "8px 0" }}>React Frontend Developer</h4>
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
          <div>
            <GitHub />
            <a
              rel="noopener noreferrer"
              href={resume?.personal_details.github}
              target="_blank"
              className={classes["icon-code"]}
            >
              {resume?.personal_details.github}
            </a>
          </div>
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
      </div>
      <div style={{ padding: "0 20px 8px 20px" }}>
        <div>
          <h4 className={classes.subheader}>Objective:</h4>
          <div className={classes.objective}>{resume?.objective}</div>
        </div>
        <div>
          <h4 className={classes.subheader}>Technical skills:</h4>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className={classes.list_heading}>Languages:</div>
              <ul className={classes.list}>
                {resume?.technical_skills.programming_languages.map(
                  (lang, index) => (
                    <li key={index}>{lang}</li>
                  )
                )}
              </ul>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.list_heading}>Libraries:</div>
              <ul className={classes.list}>
                {resume?.technical_skills.framework.map((frm, index) => (
                  <li key={index}>{frm}</li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </div>
        <div>
          <h4 className={classes.subheader}>Certifications:</h4>
          <div className={classes.list_style_cert}>
            {resume?.certifications.map((cert, index) => (
              <div style={{ display: "list-item" }} key={index}>
                <strong>{cert.name}</strong> {cert.domain && cert.domain} |{" "}
                {cert.platform} | {cert.finished}.
                <a href={index === 0 ? JavaScript : ReactJS} target="blank">
                  <Link className={classes.cert_icon} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className={classes.subheader}>Achievements:</h4>
          {resume?.achievements.map((ach, index) => (
            <Fragment key={index}>
              <div
                className={`${classes.subheader2} ${classes.list_style_achiev}`}
              >
                {ach.college}
                <a rel="noopener noreferrer" href={STJ} target="_blank">
                  <Link
                    style={{ position: "absolute" }}
                    className={classes.cert_icon}
                  />
                </a>
              </div>
              <p className={classes.description}>{ach.desc}</p>
              {resume?.achievements.length - 1 !== index && <Divider />}
            </Fragment>
          ))}
        </div>
        <div>
          <h4 className={classes.subheader}>Education:</h4>
          <div>
            <div className={classes.subheader1}>
              Bachelor of Science in Computer Science (BSc CS)
            </div>
            <div className={classes.subheader2}>
              Jamal Mohamed College
              <small>(Bharathidasan University)</small>
            </div>
            <p className={classes.description}>
              Pursuing Bachelor of Science in Computer Science in&nbsp;
              <strong>Jamal Mohamed College (Bharathidasan University)</strong>
              ,in the year of 2022-2025,
              <br />
              <span className={classes.city}>Trichy.</span>
            </p>
          </div>
          <Divider component="ul" />
          <div>
            <div className={classes.subheader1}>HSC Education</div>
            <div className={classes.subheader2}>
              SFS Matric Higher Secondary school
            </div>
            <p className={classes.description}>
              Completed Higher Secondary Education (12th) with <b>76.4%</b> in
              <strong> SFS Matric Higher Secondary school</strong>
              ,<br />
              <span className={classes.city}>Pudukkottai.</span>
            </p>
          </div>
          <Divider component="ul" />
          <div>
            <div className={classes.subheader1}>SSLC Education</div>
            <div className={classes.subheader2}>
              SFS Matric Higher Secondary school
            </div>
            <p className={classes.description}>
              Completed SSLC (10th) with <b>74.6%</b> in
              <strong> SFS Matric Higher Secondary school</strong>,<br />
              <span className={classes.city}>Pudukkottai.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
