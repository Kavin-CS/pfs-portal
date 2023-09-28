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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=EMM&amp;exp=MeterBridge-Single-And-Parallel&amp;tempId=olab&amp;linktoken=af32cfc27f13f329d7d25465be85bda4&amp;elink_lan=en-IN&amp;elink_title=Metre bridge- Law of combination of resistors"
        width="800px"
        height="610px"
      >
        {' '}
      </iframe>{' '}
      <br />
      <br />
      <br />
      <iframe
        src=" https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=EMM&amp;exp=MeterBridge-Single-And-Series&amp;tempId=olab&amp;linktoken=3e4e3dbe9b3b7b100bfbce2a9c31ec43&amp;elink_lan=en-IN&amp;elink_title=Metre bridge- Law of combination of resistors"
        width="800px"
        height="610px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Metre bridge- Law of combination of
          resistors. Retrieved 22 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=150&cnt=762
        </Typography>
      </div>
    </div>
  );
}
