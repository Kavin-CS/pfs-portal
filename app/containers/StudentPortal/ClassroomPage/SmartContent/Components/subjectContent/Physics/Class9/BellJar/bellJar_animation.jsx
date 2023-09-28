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
        src="//amrita.olabs.edu.in/olab/PHY/WAV/Bell_Jar/index.html?elink_videoID=_OQtRIHN37Y&amp;linktoken=c8d2b7585457069cd176ec6044dc7b88&amp;elink_lan=en-IN&amp;elink_title=Bell Jar Experiment"
        width="900px"
        height="650px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Bell Jar Experiment. Retrieved 3 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=1&sim=83&cnt=142
        </Typography>
      </div>
    </div>
  );
}
