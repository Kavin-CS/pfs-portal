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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=ECO&amp;exp=To_Study_Plant_Population_by_Quadrat_Method&amp;tempId=olab_ot_rt&amp;type=frequency&amp;linktoken=60dcc9b8638706bc78437772a207b8a9&amp;elink_lan=en-IN&amp;elink_title=Study of plant population frequency by quadrat method"
        width="800px"
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
          amrita.olabs.edu.in,. (2015). Study of plant population frequency by
          quadrat method. Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=238&cnt=4
        </Typography>
      </div>
    </div>
  );
}
