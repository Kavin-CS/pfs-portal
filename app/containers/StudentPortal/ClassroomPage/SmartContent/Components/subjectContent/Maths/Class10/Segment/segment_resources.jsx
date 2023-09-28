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
  },
  header: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <p>
        <a href="https://www.youtube.com/watch?v=YkP8s3OXgBM&amp;ab_channel=dostotussigreatho">
          https://www.youtube.com/watch?v=YkP8s3OXgBM&amp;ab_channel=dostotussigreatho
        </a>
      </p>

      <p>
        <a href="http://www.mathsteacher.com.au/year10/ch06_geometry/09_angles_same_segment/segment.htm">
          http://www.mathsteacher.com.au/year10/ch06_geometry/09_angles_same_segment/segment.htm
        </a>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Angles in the same segment. Retrieved 7
          April 2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=214&cnt=6
        </Typography>
      </div>
    </div>
  );
}
