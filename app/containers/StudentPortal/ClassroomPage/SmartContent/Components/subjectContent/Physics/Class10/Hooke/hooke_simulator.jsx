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
        src="https://www.olabs.edu.in/olabs/OLabsPhysics/HookesLaw/hookeslaw.html?linktoken=f58236dd737ece49f9751b0b5c44177d&amp;elink_lan=en-IN&amp;elink_title=Verification of Hooke's Law"
        width="1050px"
        height="950px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). Verification of Hooke's Law. Retrieved 25
          March 2021, from cdac.olabs.edu.in/?sub=74&brch=9&sim=68&cnt=4
        </Typography>
      </div>
    </div>
  );
}
