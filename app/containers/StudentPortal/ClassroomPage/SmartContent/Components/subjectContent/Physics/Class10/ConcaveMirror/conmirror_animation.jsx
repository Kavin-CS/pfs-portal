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
        src="https://www.olabs.edu.in/olabs/OLabsPhysics/ConcaveFocal/concave_focal_length_tm.html?linktoken=63529fd901b980cf48e36b0f98606f74&amp;elink_lan=en-IN&amp;elink_title=To find focal length of a Concave Mirror"
        width="900px"
        height="1000px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To find focal length of a Concave Mirror.
          Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=67&cnt=76
        </Typography>
      </div>
    </div>
  );
}
