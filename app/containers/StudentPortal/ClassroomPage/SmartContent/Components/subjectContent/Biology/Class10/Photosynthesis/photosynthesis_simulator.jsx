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
}));

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=PHL&amp;exp=To_show_experimentally_that_light_is_necessary_for_photosynthesis&amp;tempId=olab_ot_rt&amp;linktoken=9a878c9a4997584f98d2c373e637219d&amp;elink_lan=en-IN&amp;elink_title=Importance of Light in Photosynthesis"
        width="100%px"
        height="575px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Importance of Light in Photosynthesis.
          Retrieved 4 March 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=126&cnt=316
        </Typography>
      </div>
    </div>
  );
}
