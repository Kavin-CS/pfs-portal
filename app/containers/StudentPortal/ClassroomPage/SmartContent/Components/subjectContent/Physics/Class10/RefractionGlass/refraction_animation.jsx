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
        src="https://www.olabs.edu.in/olabs/OLabsPhysics/snellslaw/snells-teachermode-final-2015.html?linktoken=fdc9ef9d3dd783de8d733465ed935dbf&amp;elink_lan=en-IN&amp;elink_title=To study refraction of light in rectangular glass slab"
        width="900px"
        height="850px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To study refraction of light in
          rectangular glass slab. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=37&cnt=75
        </Typography>
      </div>
    </div>
  );
}
