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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=OPT&amp;exp=velocity-of-pulse-using-slinky&amp;tempId=olab_ot&amp;linktoken=e10a6df89203f3d4c87b6d4f94ff3243&amp;elink_lan=en-IN&amp;elink_title=Velocity of a Pulse Propagated Through a Slinky"
        width="800px"
        height="480px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Velocity of a Pulse Propagated Through a
          Slinky. Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=93&cnt=4
        </Typography>
      </div>
    </div>
  );
}
