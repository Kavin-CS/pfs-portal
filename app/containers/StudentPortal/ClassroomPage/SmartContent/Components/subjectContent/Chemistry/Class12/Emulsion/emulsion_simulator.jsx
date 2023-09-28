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
        src=" https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=PHC&amp;exp=Effectiveness_of_common_oils&amp;tempId=olab_ot&amp;linktoken=860ed99197fd71c742e3d82bba565d57&amp;elink_lan=en-IN&amp;elink_title=Effectiveness of Different Common Oils in Forming Emulsions"
        width="820px"
        height="500px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2018). Effectiveness of Different Common Oils
          in Forming Emulsions. Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=35&cnt=4
        </Typography>
      </div>
    </div>
  );
}
