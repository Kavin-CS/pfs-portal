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
        src="//amrita.olabs.edu.in/olab/BIO/PHL/Osmosis_in_potato/main.html?elink_videoID=_mMnbO31g3U&amp;linktoken=c6f8f07d12d8d8f343c48fefa4265bf2&amp;elink_lan=en-IN&amp;elink_title=Study of Osmosis"
        width="900px"
        height="700px"
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
