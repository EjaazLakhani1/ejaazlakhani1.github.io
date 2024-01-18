import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Button, Divider, Grid, Typography } from "@mui/material";
import SideContent from "./SideContent";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 16,
  },
  button: {
    justifyContent: "left !important",
    marginLeft: "32px !Important",
  },
  buttonText: {
    color: "#747474",
  },
  activeButtonText: {
    color: "#FFCB9A",
  },
}));

const SideBar = () => {
  const classes = useStyles();
  const [content, setContent] = useState("about");

  return (
    <>
      <div className={classes.container}>
        <Button
          onClick={() => {
            setContent("about");
          }}
          disableRipple
          variant="text"
          className={classes.button}
        >
          {content === "about" ? (
            <Typography variant="button" className={classes.activeButtonText}>
              About
            </Typography>
          ) : (
            <Typography variant="button" className={classes.buttonText}>
              About
            </Typography>
          )}
        </Button>
        <Button
          onClick={() => {
            setContent("experience");
          }}
          disableRipple
          variant="text"
          className={classes.button}
        >
          {content === "experience" ? (
            <Typography variant="button" className={classes.activeButtonText}>
              experience
            </Typography>
          ) : (
            <Typography variant="button" className={classes.buttonText}>
              experience
            </Typography>
          )}
        </Button>
      </div>
      <SideContent content={content} />
    </>
  );
};

export default SideBar;
