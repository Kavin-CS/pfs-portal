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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=PHL&amp;exp=Study_of_distribution_stomata_in_the_upper_and_lower_surface_of_leaves&amp;tempId=olab_ot_rt&amp;linktoken=4cd079a0176cba098c1ab8ae9d092d77&amp;elink_lan=en-IN&amp;elink_title=Study of distribution of stomata"
        width="100%px"
        height="1200px"
        align="middle"
        class="iframeStyle"
        frameborder="0"
        allowfullscreen="true"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of distribution of stomata.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=7&sim=128&cnt=4
        </Typography>
      </div>
    </div>
  );
}
