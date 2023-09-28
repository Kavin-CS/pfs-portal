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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=INC&amp;exp=action-of-heat-on-ferrous-sulphate-crystals&amp;tempId=olab_ot&amp;linktoken=98f8bddc360601069a582e671b9c77b3&amp;elink_lan=en-IN&amp;elink_title=Decomposition Reaction"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Decomposition Reaction. Retrieved 1
          April 2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=80&cnt=4
        </Typography>
      </div>
    </div>
  );
}
