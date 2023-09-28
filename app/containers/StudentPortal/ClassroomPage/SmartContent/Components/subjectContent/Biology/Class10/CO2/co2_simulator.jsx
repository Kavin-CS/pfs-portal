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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=PHL&amp;exp=Respiration_in_plants_and_animals&amp;tempId=olab_ot_rt&amp;linktoken=ef2da8cd9cdd70e1b4990468922dca2b&amp;elink_lan=en-IN&amp;elink_title=Role of Carbon Dioxide during Respiration"
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
          amrita.olabs.edu.in,. (2013). Role of Carbon Dioxide during
          Respiration. Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=136&cnt=4
        </Typography>
      </div>
    </div>
  );
}
