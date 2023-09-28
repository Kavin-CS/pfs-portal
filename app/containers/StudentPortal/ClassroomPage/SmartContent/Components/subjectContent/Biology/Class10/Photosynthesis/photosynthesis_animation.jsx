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

export default function Animation() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src=" //amrita.olabs.edu.in/olab/BIO/PHL/To_show_experimentally_that_light_is_necessary_for_photosynthesis/main.html?elink_videoID=JuIupbw4I1A&amp;linktoken=cc0ea97179c6b769ced88a8f34ea37f6&amp;elink_lan=en-IN&amp;elink_title=Importance of Light in Photosynthesis"
        width="900px"
        height="700px"
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
