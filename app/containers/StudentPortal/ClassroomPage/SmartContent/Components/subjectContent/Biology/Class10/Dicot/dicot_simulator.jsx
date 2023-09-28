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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=PHL&amp;exp=To_identify_different_parts_embryo_of_Dicot_seed&amp;tempId=olab_ot_rt&amp;linktoken=2ceb4093f10a5cc6eebe2c6a1334405b&amp;elink_lan=en-IN&amp;elink_title=Embryo of Dicot Seeds"
        width="100%px"
        height="570px"
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
          amrita.olabs.edu.in,. (2014). Embryo of Dicot Seeds. Retrieved 6 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=16&sim=135&cnt=375
        </Typography>
      </div>
    </div>
  );
}
