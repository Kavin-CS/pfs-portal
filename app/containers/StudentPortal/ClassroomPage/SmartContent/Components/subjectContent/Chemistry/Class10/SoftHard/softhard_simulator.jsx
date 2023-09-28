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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=ORG&amp;exp=Cleaning_Capacity_of_Soap_with_Hard_and_Soft_Water&amp;tempId=olab&amp;linktoken=a7be39a95b0ef26e87952c4ba41e21f7&amp;elink_lan=en-IN&amp;elink_title=Cleaning Capacity of Soap with Hard and Soft Water"
        width="800px"
        height="620px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Cleaning Capacity of Soap with Hard and
          Soft Water. Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=120&cnt=4
        </Typography>
      </div>
    </div>
  );
}
