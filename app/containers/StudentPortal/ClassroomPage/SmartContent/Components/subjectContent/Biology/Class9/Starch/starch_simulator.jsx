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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=BIC&amp;exp=To_test_the_presence_of_starch_in_the_food_sample&amp;tempId=olab&amp;linktoken=5d2ec168e0cc8beef7c9891df7159c82&amp;elink_lan=en-IN&amp;elink_title=Detection of Starch in Food Samples"
        width="800px"
        height="610px"
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
          amrita.olabs.edu.in,. (2013). Detection of Starch in Food Samples.
          Retrieved 7 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=15&sim=121&cnt=4
        </Typography>
      </div>
    </div>
  );
}
