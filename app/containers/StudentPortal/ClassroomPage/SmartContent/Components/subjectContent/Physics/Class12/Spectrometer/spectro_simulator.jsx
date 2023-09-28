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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=OPT&amp;exp=refraction_of_light_prism&amp;tempId=olab_ot&amp;linktoken=d732d9679fc4feb3c2bd9b028175baee&amp;elink_lan=en-IN&amp;elink_title=Refraction through a Prism"
        width="820px"
        height="500px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Refraction through a Prism. Retrieved 22
          March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=246&cnt=4
        </Typography>
      </div>
    </div>
  );
}
