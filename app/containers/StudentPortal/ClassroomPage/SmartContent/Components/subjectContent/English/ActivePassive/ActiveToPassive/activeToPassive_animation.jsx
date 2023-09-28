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
        src="http://180.149.57.33:8080/englishlab/jsp/voiceConversioProcedure/activeToPassive.html?linktoken=832a5a7b816ec8cadba98aa03f258ca2&amp;elink_lan=en-IN&amp;elink_title=Active to Passive Voice Conversion"
        width="1000px"
        height="750px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Active to Passive Voice Conversion.
          Retrieved 9 March 2021, from
          cdac.olabs.edu.in/?sub=84&brch=23&sim=186&cnt=1
        </Typography>
      </div>
    </div>
  );
}
