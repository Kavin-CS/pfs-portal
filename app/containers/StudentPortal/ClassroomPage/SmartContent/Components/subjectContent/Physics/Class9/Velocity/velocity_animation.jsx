import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  animationWrap: {
    width: ' 90%',
    margin: '0 auto',
    padding: 12,
  },
  headTag: {
    fontSize: 20,
  },
}));

export default function Animation() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        width="760"
        height="427.5"
        src="https://www.youtube.com/embed/rbjaLMCukJo?hl=en-IN&amp;cc_lang_pref=fr&amp;cc_load_policy=1&amp;rel=0&amp;controls=1&amp;autoplay=0&amp;showinfo=0&amp;iv_load_policy=3"
        frameborder="0"
        allowfullscreen=""
      />

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Velocity of a Pulse Propagated Through a
          Slinky. Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=93&cnt=190
        </Typography>
      </div>
    </div>
  );
}
