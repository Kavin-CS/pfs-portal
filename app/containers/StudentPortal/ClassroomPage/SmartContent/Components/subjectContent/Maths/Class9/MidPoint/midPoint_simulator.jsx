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
}));

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://www.olabs.edu.in/OlabsMathematics/MidPoint/index.jsp?linktoken=be35de2df5c04a85f0c441a561e3a004&amp;elink_lan=en-IN&amp;elink_title=Mid-point theorem"
        width="100%px"
        height="900px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Mid-point theorem. Retrieved 4 March 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=181&cnt=4
        </Typography>
      </div>
    </div>
  );
}
