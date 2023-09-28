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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=ORG&amp;exp=Different_technique_of_separation&amp;tempId=olab_ot&amp;linktoken=67a51ffb4a212ffa0d2305042f43a0c0&amp;elink_lan=en-IN&amp;elink_title=Separation of Mixtures Using Different Techniques"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Separation of Mixtures Using Different
          Techniques. Retrieved 3 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=96&cnt=4
        </Typography>
      </div>
    </div>
  );
}
