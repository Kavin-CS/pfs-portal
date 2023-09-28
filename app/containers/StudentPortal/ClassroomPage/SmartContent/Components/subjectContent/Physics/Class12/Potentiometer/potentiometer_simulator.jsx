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
  headTag:{
    fontSize: 20
  }
}));

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="//amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=EMM&amp;exp=Resistance_of_a_Primary_Cell_using_Potentiometer&amp;tempId=olab_ot&amp;linktoken=a2338b44cb1d807a9fcd72843495a4c1&amp;elink_lan=en-IN&amp;elink_title=The Potentiometer-Internal resistance of a cell"
        width="820px"
        height="500px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). The Potentiometer-Internal resistance of
          a cell. Retrieved 25 February 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=147&cnt=4
        </Typography>
      </div>
    </div>
  );
}
