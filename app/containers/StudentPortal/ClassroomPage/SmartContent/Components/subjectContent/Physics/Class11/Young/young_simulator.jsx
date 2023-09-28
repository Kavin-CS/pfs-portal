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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=AME&amp;exp=Youngs_Modulus&amp;tempId=olab_ot&amp;linktoken=2bee392254ebf386dcbc196dae0aa45b&amp;elink_lan=en-IN&amp;elink_title=Young's Modulus"
        width="800px"
        height="500px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Young's Modulus. Retrieved 24 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=155&cnt=4
        </Typography>
      </div>
    </div>
  );
}
