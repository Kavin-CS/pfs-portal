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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=CLB&amp;exp=Tissues_In_Plants_And_Animals&amp;tempId=olab_ot_rt&amp;linktoken=875769c54344c6d5d616c5a7dce458b9&amp;elink_lan=en-IN&amp;elink_title=Plant and Animal Tissues"
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
          amrita.olabs.edu.in,. (2013). Plant and Animal Tissues. Retrieved 7
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=131&cnt=4
        </Typography>
      </div>
    </div>
  );
}
