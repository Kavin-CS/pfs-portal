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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=TDM&amp;exp=density-of-solid&amp;tempId=olab_ot_rt&amp;linktoken=907552eb075a2a59f84aa3962ac0c153&amp;elink_lan=en-IN&amp;elink_title=Determination of Density of Solid"
        width="800px"
        height="650px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Determination of Density of Solid.
          Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=2&cnt=4
        </Typography>
      </div>
    </div>
  );
}
