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
  header: {
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
        src="https://www.youtube.com/embed/n4esSHxz_J8?hl=en-IN&amp;cc_lang_pref=fr&amp;cc_load_policy=1&amp;rel=0&amp;controls=1&amp;autoplay=0&amp;showinfo=0&amp;iv_load_policy=3"
        frameborder="0"
        allowfullscreen=""
      />
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Tests for the functional groups.
          Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=141&cnt=727
        </Typography>
      </div>
    </div>
  );
}
