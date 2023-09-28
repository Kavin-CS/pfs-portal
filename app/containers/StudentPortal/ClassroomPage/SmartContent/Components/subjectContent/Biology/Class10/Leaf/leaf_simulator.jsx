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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=PHL&amp;exp=To_prepare_temporary_mount_of_leaf_peel_show_stomata&amp;tempId=olab_ot_rt&amp;linktoken=02376f2148ba9c8a710b4a65149d7cde&amp;elink_lan=en-IN&amp;elink_title=Demonstration of Stomata on a Leaf Peel"
        width="100%px"
        height="550px"
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
          amrita.olabs.edu.in,. (2013). Demonstration of Stomata on a Leaf Peel.
          Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=137&cnt=4
        </Typography>
      </div>
    </div>
  );
}
