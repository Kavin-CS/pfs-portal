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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=CLA&amp;exp=coefficent_of_viscocity&amp;tempId=olab_ot&amp;linktoken=e0df3e7ad5ce9bca95bfb58150b768e8&amp;elink_lan=en-IN&amp;elink_title=Viscosity of a liquid - Stoke's method"
        width="820px"
        height="500px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Viscosity of a liquid - Stoke's method.
          Retrieved 24 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=5&sim=225&cnt=4
        </Typography>
      </div>
    </div>
  );
}
