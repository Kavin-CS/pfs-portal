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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=EMM&amp;exp=OhmsLaw_Resistance&amp;tempId=olab_ot&amp;linktoken=5826461f98f6bdb6798feeb6e6f1b889&amp;elink_lan=en-IN&amp;elink_title=Ohm's law and resistance"
        width="820px"
        height="500px"
      />
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Ohm's law and resistance. Retrieved 25
          February 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=22&cnt=1{' '}
        </Typography>
      </div>
    </div>
  );
}
