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
        src="https://www.olabs.edu.in/OlabsMathematics/VolumeOfSphere/index.jsp?linktoken=5b3362aa5c32a1414a634645e42b2ea2&amp;elink_lan=en-IN&amp;elink_title=Volume of a sphere"
        width="100%px"
        height="950px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Volume of a sphere. Retrieved 28 February
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=165&cnt=1
        </Typography>
      </div>
    </div>
  );
}
