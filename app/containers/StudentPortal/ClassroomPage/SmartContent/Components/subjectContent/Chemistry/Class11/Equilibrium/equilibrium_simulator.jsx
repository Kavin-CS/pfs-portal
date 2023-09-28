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
        src=" https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=INC&amp;exp=Chemical_Equillibrium&amp;tempId=olab_ot_rt&amp;linktoken=d1300d07066bcd63db5ef39508f33ae6&amp;elink_lan=en-IN&amp;elink_title=Chemical Equilibrium"
        width="100%px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Chemical Equilibrium. Retrieved 30 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=7&sim=112&cnt=4
        </Typography>
      </div>
    </div>
  );
}
