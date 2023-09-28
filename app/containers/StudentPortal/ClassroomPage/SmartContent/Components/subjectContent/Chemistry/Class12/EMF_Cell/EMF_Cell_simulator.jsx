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
        src="//amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=ELC&amp;exp=EMF_measurement&amp;tempId=olab_ot_rt&amp;linktoken=5ff2142271ae950ef84b069a538b8d18&amp;elink_lan=en-IN&amp;elink_title=Determination of EMF of a Cell"
        width="100%"
        height="600px"
        class="iframeStyle"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Determination of EMF of a Cell.
          Retrieved 28 February 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=153&cnt=4
        </Typography>
      </div>
    </div>
  );
}
