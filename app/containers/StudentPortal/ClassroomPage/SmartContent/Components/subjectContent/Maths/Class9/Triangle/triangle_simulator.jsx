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
        src="https://www.olabs.edu.in/OlabsMathematics/AreaOfTriangle/index.jsp?linktoken=ed2dafc585941c8e1954c7b05ec957ca&amp;elink_lan=en-IN&amp;elink_title=Area of triangle"
        width="100%px"
        height="900px"
      >
        {' '}
      </iframe>{' '}
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Area of triangle. Retrieved 4 March 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=179&cnt=1
        </Typography>
      </div>
    </div>
  );
}
