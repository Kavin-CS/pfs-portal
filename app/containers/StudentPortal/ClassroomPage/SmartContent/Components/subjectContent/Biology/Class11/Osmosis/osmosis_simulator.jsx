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
        src=" //amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=PHL&amp;exp=Osmosis_in_potato&amp;tempId=olab_ot&amp;linktoken=d56801ccca1649120e8cc93ff572ff21&amp;elink_lan=en-IN&amp;elink_title=Study of Osmosis"
        width="900px"
        height="550px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2014). Study of Osmosis. Retrieved 4 March 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=182&cnt=2
        </Typography>
      </div>
    </div>
  );
}
