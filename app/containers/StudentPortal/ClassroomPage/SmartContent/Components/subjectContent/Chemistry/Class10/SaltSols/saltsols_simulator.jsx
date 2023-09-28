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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=ORG&amp;exp=Reactivity_of_Metals&amp;tempId=olab_ot_rt&amp;linktoken=1de46bf08eebb5b87712dbc1ab14420c&amp;elink_lan=en-IN&amp;elink_title=To Study the Relative Reactivity of Metals using Salt Solution"
        width="800px"
        height="550px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). To Study the Relative Reactivity of
          Metals using Salt Solution. Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=59&cnt=4
        </Typography>
      </div>
    </div>
  );
}
