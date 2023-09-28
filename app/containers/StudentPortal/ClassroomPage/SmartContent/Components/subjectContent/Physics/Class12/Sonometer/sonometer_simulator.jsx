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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=ACS&amp;exp=AC_Sonometer&amp;tempId=olab_ot&amp;linktoken=bf893cc0a478d949ceb6fe36556a18dc&amp;elink_lan=en-IN&amp;elink_title=AC Sonometer"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). AC Sonometer. Retrieved 19 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=6&sim=151&cnt=4
        </Typography>
      </div>
    </div>
  );
}
