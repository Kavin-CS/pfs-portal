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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=ORG&amp;exp=Saponification_The_Process_of_Making_Soap&amp;tempId=olab&amp;linktoken=97134f513fbbdd2afadffddeecbf81c9&amp;elink_lan=en-IN&amp;elink_title=Saponification-The process of Making Soap"
        width="800px"
        height="620px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Saponification-The process of Making
          Soap. Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=119&cnt=4
        </Typography>
      </div>
    </div>
  );
}
