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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=EMM&amp;exp=MeterBridge-Single-And-Series&amp;tempId=olab&amp;linktoken=ea522fc521e5b9dfedd7d9282ab0fd21&amp;elink_lan=en-IN&amp;elink_title=Metre Bridge-Resistance of a wire"
        width="820px"
        height="610px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Metre Bridge-Resistance of a wire.
          Retrieved 22 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=146&cnt=4
        </Typography>
      </div>
    </div>
  );
}
