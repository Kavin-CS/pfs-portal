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

export default function Animation() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="http://www.youtube.com/embed/SQae73zfknQ?hl=en-IN&cc_lang_pref=fr&cc_load_policy=1&rel=0&controls=1&autoplay=0&showinfo=0&iv_load_policy=3"
        width="900px"
        height="700px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Vernier Calipers. Retrieved 2 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=16&cnt=391
        </Typography>
      </div>
    </div>
  );
}
