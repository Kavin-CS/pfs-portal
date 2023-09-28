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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=TDM&amp;exp=NewtonsLawOfCooling&amp;tempId=olab_ot&amp;linktoken=cd5922b2c4035c107234ef50e076484e&amp;elink_lan=en-IN&amp;elink_title=Newton's Law of Cooling(Thermal Radiation)"
        width="820px"
        height="500px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Newton's Law of Cooling(Thermal
          Radiation). Retrieved 24 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=5&sim=21&cnt=4
        </Typography>
      </div>
    </div>
  );
}
