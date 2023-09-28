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
        src=" //amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=ANC&amp;exp=Determination_of_Boiling_point&amp;tempId=olab&amp;linktoken=d3a243f1e15fada68340e3e47ea4cf6e&amp;elink_lan=en-IN&amp;elink_title=Boiling Point of an Organic Compound"
        width="1000px"
        height="700px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2015). Boiling Point of an Organic Compound. Retrieved 2 March 2021, from amrita.olabs.edu.in/?sub=73&brch=7&sim=111&cnt=481 
        </Typography>
      </div>
    </div>
  );
}
