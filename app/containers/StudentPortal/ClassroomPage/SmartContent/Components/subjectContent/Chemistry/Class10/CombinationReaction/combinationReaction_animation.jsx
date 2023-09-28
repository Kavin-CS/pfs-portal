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
        src="//amrita.olabs.edu.in/olab/CHE/INC/Action_of_water_on-quick_lime/main.html?elink_videoID=egku6aC3THI&amp;linktoken=fb2e8313abc21198a7be1b2c97223e96&amp;elink_lan=en-IN&amp;elink_title=Combination Reaction"
        width="900px"
        height="700px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Combination Reaction. Retrieved 3 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=79&cnt=174
        </Typography>
      </div>
    </div>
  );
}
