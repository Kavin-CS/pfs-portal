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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=PHL&amp;exp=Study_of_Plasmolysis&amp;tempId=olab_ot_rt&amp;linktoken=c39788a4da90dc08be84621edbee8a51&amp;elink_lan=en-IN&amp;elink_title=Study of Plasmolysis"
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
          amrita.olabs.edu.in,. (2015). Study of Plasmolysis. Retrieved 5 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=199&cnt=4
        </Typography>
      </div>
    </div>
  );
}
