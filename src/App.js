/* eslint-disable no-undef */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Divider, Grid, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  body: {
    minHeight: 100,
    minWidth: "300px",
  },
  header: {
    marginLeft: 32,
    textAlign: "left",
    float: "left",
    color: "#D1E8E2",
  },
  name: {
    paddingTop: 32,
    paddingBottom: 0,
    fontSize: "3rem",
  },
  divider: {
    background: "#D1E8E2",
    height: 2,
  },
  bio: {
    padding: "16px 0",
  },
  subText: {
    paddingBottom: 16,
  },
  content: {
    display: "grid",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <header className={classes.body}>
      <div className={classes.content}>
        <TopBar />
        <Grid item xs={12}>
          <div className={classes.header}>
            <Typography variant="h3" className={classes.name}>
              Ejaaz Lakhani
            </Typography>
            <Typography variant="h4" className={classes.bio}>
              Aspiring Full Stack Developer
            </Typography>
            <Typography variant="h6" className={classes.subText}>
              Committed to building high quality, efficient web and mobile
              applications
            </Typography>
          </div>
        </Grid>
        <Divider variant="fullWidth" classes={{ root: classes.divider }} />
        {/* <div>
          <Button>About</Button>
          <Button>Experience</Button>
        </div> */}
        <SideBar />
      </div>
    </header>
  );
};

export default App;
