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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=PHC&amp;exp=Thermochemistry&amp;tempId=olab_ot&amp;linktoken=a4618941b968d8027c25a301da3a8616&amp;elink_lan=en-IN&amp;elink_title=Thermochemistry"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Thermochemistry. Retrieved 29 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=8&sim=145&cnt=4
        </Typography>
      </div>
    </div>
  );
}
