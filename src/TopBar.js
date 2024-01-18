import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import makeStyles from "@mui/styles/makeStyles";
import { Button, Grid } from "@mui/material";

const useStyles = makeStyles(() => ({
  icons: {
    display: "flex",
    padding: "10px 24px 0",
    justifyContent: "flex-end",
  },
  icon: {
    paddingLeft: 8,
    paddingRight: 8,
    background: "#FFF",
  },
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.icons}>
        <Button href="http://www.linkedin.com/in/ejaaz-lakhani" target="_blank">
          <LinkedInIcon />
        </Button>
        <Button href="mailto:ejaaz.lakhani@shaw.ca">
          <EmailIcon />
        </Button>
        <Button>
          <GitHubIcon />
        </Button>
      </div>
    </Grid>
  );
};

export default TopBar;
