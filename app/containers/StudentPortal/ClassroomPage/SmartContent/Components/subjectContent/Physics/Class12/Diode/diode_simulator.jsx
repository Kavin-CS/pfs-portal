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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=CLA&amp;exp=IV_characteristic_curve_of_diode&amp;tempId=olab_ot&amp;linktoken=7a7ab5c988734d5d236804057fb2fb45&amp;elink_lan=en-IN&amp;elink_title=Diode characteristics"
        width="820px"
        height="500px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Diode characteristics. Retrieved 22
          March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=233&cnt=4
        </Typography>
      </div>
    </div>
  );
}
