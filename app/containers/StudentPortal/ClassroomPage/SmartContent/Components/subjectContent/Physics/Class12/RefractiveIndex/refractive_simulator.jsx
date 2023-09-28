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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=OPT&amp;exp=Refractive_Index_ConvexLens&amp;tempId=olab_ot&amp;linktoken=d8e4f359117c275c3cb97b44371a317e&amp;elink_lan=en-IN&amp;elink_title=Refractive Index of a Liquid"
        width="800px"
        height="500px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Refractive Index of a Liquid. Retrieved
          22 March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=247&cnt=4
        </Typography>
      </div>
    </div>
  );
}
