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

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="//amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=WAV&amp;exp=Bell_Jar&amp;tempId=olab_ot_rt&amp;linktoken=cbc09134e65a8d20950db8c0d57c3868&amp;elink_lan=en-IN&amp;elink_title=Bell Jar Experiment"
        width="820px"
        height="550px"
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
