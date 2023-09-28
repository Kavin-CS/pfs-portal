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
        src="https://amrita.olabs.co.in/olab/html5/?sub=PHY&amp;cat=EMM&amp;exp=OhmsLaw&amp;tempId=olab_ot&amp;linktoken=db62f0ff19068bfe39c2da3f509cdf88&amp;elink_lan=en-IN&amp;elink_title=Ohm's Law"
        width="820px"
        height="500px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Ohm's Law. Retrieved 25 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=4&sim=99&cnt=4
        </Typography>
      </div>
    </div>
  );
}
