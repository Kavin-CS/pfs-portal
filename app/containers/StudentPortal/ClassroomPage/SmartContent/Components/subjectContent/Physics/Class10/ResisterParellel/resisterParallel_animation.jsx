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
        src=" //amrita.olabs.edu.in/olab/PHY/EMM/MeterBridge-Single-And-Parallel/index.html?elink_videoID=s0Pk34_yN-Y&amp;linktoken=9825a48d22a03c9c4526996447f59eb6&amp;elink_lan=en-IN&amp;elink_title=Equivalent Resistance of Resistors (Parallel)"
        width="900px"
        height="700px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). The Potentiometer-Internal resistance of
          a cell. Retrieved 25 February 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=147&cnt=723
        </Typography>
      </div>
    </div>
  );
}
