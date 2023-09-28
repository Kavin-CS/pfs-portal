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

export default function Animation() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="//amrita.olabs.edu.in/olab/BIO/PHL/Rate_of_transpiration_in_leaves/main.html?elink_videoID=meRbj3dsZwA&amp;linktoken=cb146309edaf88dda664d27eb1e2c9e1&amp;elink_lan=en-IN&amp;elink_title=Rate of Transpiration"
        width="900px"
        height="700px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2015). Rate of Transpiration. Retrieved 4 March 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=127&cnt=400 
        </Typography>
      </div>
    </div>
  );
}
