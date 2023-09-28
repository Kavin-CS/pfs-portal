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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=PHL&amp;exp=Characteristics_of_Flowers&amp;tempId=olab_ot&amp;linktoken=53484c9737cf8816499b09b21e677205&amp;elink_lan=en-IN&amp;elink_title=Characteristics of Flowers"
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
          amrita.olabs.edu.in,. (2015). Characteristics of Flowers. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=198&cnt=4
        </Typography>
      </div>
    </div>
  );
}
