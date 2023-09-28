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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=PLA&amp;exp=Dicot_and_monocot_stem_and_root&amp;tempId=olab_ot&amp;linktoken=42470a014f844da5f1e325e5ca7f26aa&amp;elink_lan=en-IN&amp;elink_title=Characteristics of Dicot and Monocot Stem and Root"
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
          amrita.olabs.edu.in,. (2015). Characteristics of Dicot and Monocot
          Stem and Root. Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=17&sim=192&cnt=4
        </Typography>
      </div>
    </div>
  );
}
