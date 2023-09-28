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
        src="//amrita.olabs.edu.in/olab/BIO/CLB/Prepare_temporary_mounts_of_onionpeel_and_human_cheekcells/main.html?elink_videoID=Twp381zHuTE&amp;linktoken=2bc2cdc8bbf70d2c866d93474d52de94&amp;elink_lan=en-IN&amp;elink_title=Onion and Cheek Cells"
        width="900px"
        height="700px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2013). Onion and Cheek Cells. Retrieved 4 March 2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=125&cnt=269 
        </Typography>
      </div>
    </div>
  );
}
