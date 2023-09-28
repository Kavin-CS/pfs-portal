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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=TAX&amp;exp=Monocot_and_dicot_plants&amp;tempId=olab_ot_rt&amp;linktoken=c8b1fe95ea5457488c01cb3eaa6f694a&amp;elink_lan=en-IN&amp;elink_title=Monocot and Dicot Plants"
        width="100%px"
        height="560px"
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
          amrita.olabs.edu.in,. (2014). Monocot and Dicot Plants. Retrieved 7
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=139&cnt=315
        </Typography>
      </div>
    </div>
  );
}
