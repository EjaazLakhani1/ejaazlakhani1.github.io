import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Typography } from "@mui/material";
import myResume from "./EjaazLakhani Resume.pdf";

const useStyles = makeStyles(() => ({
  content: {
    display: "flex",
    flexDirection: "column",
    float: "right",
    color: "#D1E8E2",
    marginRight: 16,
    width: "inherit",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    whiteSpace: "break-spaces",
    paddingLeft: 32,
  },
  resume: {
    paddingTop: 8,
  },
  linkText: {
    color: "#D1E8E2",
  },
}));

const text = {
  about: `I Graduated from the University of Calgary in 2022 with a degree in Computer Science and Mathamatics.\n\nIn June 2021 I got my first work experience at Kudos® as a Software Developer Intern and, upon graduation was promoted to a Software Developer.\n\nIn my free time I enjoy furthering my education through online courses, going out with friends, and playing video games.\n`,
  experience: `Software Developer @ Kudos®\nDecember 2022 -> December 2023\n
Worked as a Full Stack Developer using technolgies including React.js, Typescript, React Native and Ruby on Rails to delivery high quality, efficient software.\n
Software Developer Intern @ Kudos®\nJune 2021 -> December 2022\n
Worked Full Stack with the Software Development team, aiding in delivery of high quality software, and the creating of documentation to aid in new member onboarding\n`,
};

const SideContent = ({ content }) => {
  const whiteSpace = " ";
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="subtitle1" className={classes.content}>
        {text[content]}
        <Typography variant="subtitle1" className={classes.resume} noWrap>
          For more information here is my {whiteSpace}
          {
            <a
              href={myResume}
              download="EjaazLakhani Resume.pdf"
              className={classes.linkText}
            >
              resume
            </a>
          }
        </Typography>
      </Typography>
    </div>
  );
};

export default SideContent;
