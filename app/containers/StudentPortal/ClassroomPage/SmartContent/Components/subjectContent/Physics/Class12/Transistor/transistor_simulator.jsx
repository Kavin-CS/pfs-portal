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
        src=" https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=EMM&amp;exp=Characteristics_of_a_Common_Emitter&amp;tempId=olab_ot&amp;linktoken=5b2eddf8440cf036e6480ffa70072e8f&amp;elink_lan=en-IN&amp;elink_title=Transistor characteristics"
        width="900px"
        height="600px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Transistor characteristics. Retrieved 23
          March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=234&cnt=4
        </Typography>
      </div>
    </div>
  );
}
