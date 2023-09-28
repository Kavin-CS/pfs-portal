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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=OPT&amp;exp=Focallength_of_Concave_mirror&amp;tempId=olab_ot&amp;linktoken=4c653b7aaeb28ee51f88b1d335241b79&amp;elink_lan=en-IN&amp;elink_title=The Concave mirror - u-v method"
        width="820px"
        height="500px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). The Concave mirror - u-v method.
          Retrieved 19 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=230&cnt=4
        </Typography>
      </div>
    </div>
  );
}
