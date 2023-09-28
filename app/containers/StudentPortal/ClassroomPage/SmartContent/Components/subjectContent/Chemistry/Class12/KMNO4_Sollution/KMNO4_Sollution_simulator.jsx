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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=INC&amp;exp=Determination_of_concentration_of_KMnO4_solution&amp;tempId=olab_ot&amp;linktoken=b136a9649dd2000e487ab821cce38c87&amp;elink_lan=en-IN&amp;elink_title=Determination of concentration of KMnO₄ solution"
        width="820px"
        height="500px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Determination of concentration of KMnO₄
          solution. Retrieved 28 February 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=115&cnt=551
        </Typography>
      </div>
    </div>
  );
}
