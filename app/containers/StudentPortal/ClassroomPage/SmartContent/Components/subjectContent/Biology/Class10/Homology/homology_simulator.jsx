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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=ZOL&amp;exp=Homology_Analogy&amp;tempId=olab_ot&amp;linktoken=ca63aa4bcefa6b4a22706aa63b1df9f6&amp;elink_lan=en-IN&amp;elink_title=Homology and Analogy"
        width="800px"
        height="500px"
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
          amrita.olabs.edu.in,. (2014). Homology and Analogy. Retrieved 6 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=16&sim=132&cnt=4
        </Typography>
      </div>
    </div>
  );
}
