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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=ORG&amp;exp=Reactivity_of_carbon_compound&amp;tempId=olab_ot_rt&amp;linktoken=9b661097d426f1a2a047319f48d9879b&amp;elink_lan=en-IN&amp;elink_title=Properties of Acetic Acid (Ethanoic Acid)"
        width="770px"
        height="630px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Properties of Acetic Acid (Ethanoic
          Acid). Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=11&cnt=4
        </Typography>
      </div>
    </div>
  );
}
