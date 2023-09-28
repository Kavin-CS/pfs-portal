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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=CLA&amp;exp=Galvanometer_into_ammeter_and_voltmeter&amp;tempId=olab_ot&amp;linktoken=ffabf19ef32f52a0c8bdfe0967fa3d99&amp;elink_lan=en-IN&amp;elink_title=Conversion of Galvanometer to Ammeter"
        width="900px"
        height="500px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Conversion of Galvanometer to Ammeter.
          Retrieved 19 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=26&cnt=4
        </Typography>
      </div>
    </div>
  );
}
