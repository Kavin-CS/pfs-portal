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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&cat=EMM&exp=EMF_of_Two_Primary_Cells&tempId=olab_ot&linktoken=5bf2cec8ab94a5f630843a5a6f065e53&elink_lan=en-IN&elink_title=The%20potentiometer-%20Comparison%20of%20emf"
        width="820px"
        height="500px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). The potentiometer- Comparison of emf.
          Retrieved 18 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=231&cnt=4
        </Typography>
      </div>
    </div>
  );
}
