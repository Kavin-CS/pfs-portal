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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=ANC&amp;exp=Chromatography&amp;tempId=olab_ot&amp;linktoken=dde17b29cd594b1b42029cc7c4400986&amp;elink_lan=en-IN&amp;elink_title=Paper Chromatography"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Paper Chromatography. Retrieved 29 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=8&sim=133&cnt=4
        </Typography>
      </div>
    </div>
  );
}
