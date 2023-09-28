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
        src="//amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=PHC&amp;exp=Type_Of_Reaction_iron_nail_with_copper&amp;tempId=olab_ot&amp;linktoken=193e23d96a3b14c31574b8926c04f865&amp;elink_lan=en-IN&amp;elink_title=Single Displacement Reaction"
        width="900px"
        height="600px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Single Displacement Reaction. Retrieved
          3 March 2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=81&cnt=108
        </Typography>
      </div>
    </div>
  );
}
