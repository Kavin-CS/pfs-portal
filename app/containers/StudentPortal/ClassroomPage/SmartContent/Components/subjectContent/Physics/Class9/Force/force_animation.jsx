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
        src="//amrita.olabs.edu.in/olab/PHY/CLA/NewtonsSecondLaw/main.html?elink_videoID=1srdDxmWe34&amp;linktoken=11504f2aa02da4a05094e99371951839&amp;elink_lan=en-IN&amp;elink_title=Force required to move a wooden block"
        width="900px"
        height="500px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Force required to move a wooden block.
          Retrieved 3 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=108&cnt=1
        </Typography>
      </div>
    </div>
  );
}
