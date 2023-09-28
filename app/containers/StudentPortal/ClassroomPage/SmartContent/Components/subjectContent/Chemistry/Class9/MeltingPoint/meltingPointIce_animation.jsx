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
        src="//amrita.olabs.edu.in/olab/CHE/ANC/Melting-Point-Ice/index.html?elink_videoID=38QZEsB2xJM&amp;linktoken=87d7a585fcac7b872949cc7a2b5e11d8&amp;elink_lan=en-IN&amp;elink_title=Melting Point of Ice"
        width="900px"
        height="700px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Melting Point of Ice. Retrieved 3 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=2&sim=30&cnt=1
        </Typography>
      </div>
    </div>
  );
}
