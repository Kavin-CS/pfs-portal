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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=PHC&amp;exp=The_Law_of_Conservation_of_Mass_in_a_Chemical_Reaction&amp;tempId=olab_ot_rt&amp;linktoken=49698ec12fec601fb401899e1eeeda16&amp;elink_lan=en-IN&amp;elink_title=The Law of Conservation of Mass in a Chemical Reaction"
        width="800px"
        height="550px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). The Law of Conservation of Mass in a
          Chemical Reaction. Retrieved 3 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=118&cnt=4
        </Typography>
      </div>
    </div>
  );
}
