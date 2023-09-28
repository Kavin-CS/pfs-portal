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
        src="https://www.olabs.edu.in/OlabsMathematics/QuadNew/index.jsp?linktoken=bb490b07e248c3a603bf1909de0cead7&amp;elink_lan=en-IN&amp;elink_title=The quadrilateral formed by the mid-points of a quadrilateral"
        width="100%px"
        height="750px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). The quadrilateral formed by the mid-points
          of a quadrilateral. Retrieved 8 April 2021, from
          cdac.olabs.edu.in/?sub=80&brch=21&sim=203&cnt=4
        </Typography>
      </div>
    </div>
  );
}
