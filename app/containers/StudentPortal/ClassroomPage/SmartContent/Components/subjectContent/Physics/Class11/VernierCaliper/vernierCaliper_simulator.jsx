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
        src="//amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=CLA&amp;exp=VernierCalipers&amp;tempId=olab_ot&amp;linktoken=1dea188158c2830ce895454c8d136e5a&amp;elink_lan=en-IN&amp;elink_title=Vernier Calipers"
        width="820px"
        height="500px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2014). Vernier Calipers. Retrieved 2 March 2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=16&cnt=391 
        </Typography>
      </div>
    </div>
  );
}
