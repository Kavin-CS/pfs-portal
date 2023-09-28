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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=CLB&amp;exp=Study_of_Mitosis_in_Onion_Root_Tips&amp;tempId=olab_ot_rt&amp;linktoken=61ad6ed9432ed9276d0ba149c6b97f5b&amp;elink_lan=en-IN&amp;elink_title=Study Mitosis in Onion Root Tip"
        width="100%px"
        height="600px"
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
          amrita.olabs.edu.in,. (2015). Study Mitosis in Onion Root Tip.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=237&cnt=4
        </Typography>
      </div>
    </div>
  );
}
