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

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://www.olabs.edu.in/olabs/OLabsPhysics/snellslaw/snells-law-student-final_v1.html?linktoken=52ce3419e4ddf706069c2028ad828781&amp;elink_lan=en-IN&amp;elink_title=To study refraction of light in rectangular glass slab"
        width="900px"
        height="1100px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To study refraction of light in
          rectangular glass slab. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=37&cnt=58
        </Typography>
      </div>
    </div>
  );
}
