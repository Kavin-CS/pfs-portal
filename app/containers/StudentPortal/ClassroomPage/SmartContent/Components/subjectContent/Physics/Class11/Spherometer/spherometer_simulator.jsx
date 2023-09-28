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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=CLA&amp;exp=Radius_of_Curvature&amp;tempId=olab_ot&amp;linktoken=2bdc9d69af6ed97be81c5a9aa3f5d4c3&amp;elink_lan=en-IN&amp;elink_title=Spherometer"
        width="820px"
        height="500px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Spherometer. Retrieved 23 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=168&cnt=4
        </Typography>
      </div>
    </div>
  );
}
