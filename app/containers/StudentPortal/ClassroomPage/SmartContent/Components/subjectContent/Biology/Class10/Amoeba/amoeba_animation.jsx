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
}));

export default function Animation() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="//amrita.olabs.edu.in/olab/BIO/CLB/To_study_binary_fission_in_Amoeba_and_budding_in_yeasts/main.html?elink_videoID=lwS5HHNdsKY&amp;linktoken=66ff501bd97fdfaca88d47c2305f4d1d&amp;elink_lan=en-IN&amp;elink_title=Asexual Reproduction in Amoeba and  Yeast"
        width="900px"
        height="700px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Asexual Reproduction in Amoeba and
          Yeast. Retrieved 4 March 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=134&cnt=1
        </Typography>
      </div>
    </div>
  );
}
