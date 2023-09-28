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

export default function Video() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        height="360"
        src="//www.youtube.com/embed/S4wAtd11S5Y?rel=0"
        width="640"
      />
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of Pollen Germination. Retrieved
          28 February 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=228&cnt=618
        </Typography>
      </div>
    </div>
  );
}
