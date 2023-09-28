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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=MPY&amp;exp=Pressure&amp;tempId=olab_ot_rt&amp;linktoken=43432629e10522ff846bcc69a1e93333&amp;elink_lan=en-IN&amp;elink_title=Pressure Exerted by a Solid Iron Cuboid on Sand"
        width="800px"
        height="650px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Pressure Exerted by a Solid Iron Cuboid
          on Sand. Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=71&cnt=4
        </Typography>
      </div>
    </div>
  );
}
