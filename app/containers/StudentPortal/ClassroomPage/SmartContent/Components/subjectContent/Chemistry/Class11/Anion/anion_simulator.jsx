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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=ORG&amp;exp=Qualitative_Analysis&amp;tempId=olab_ot&amp;linktoken=5e2bf61f02ef186606d4bd0f87e7326b&amp;elink_lan=en-IN&amp;elink_title=Qualitative Analysis of Anions"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Qualitative Analysis of Anions.
          Retrieved 30 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=31&cnt=4
        </Typography>
      </div>
    </div>
  );
}
