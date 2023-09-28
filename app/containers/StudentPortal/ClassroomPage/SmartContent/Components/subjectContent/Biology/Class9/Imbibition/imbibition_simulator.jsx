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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=PHL&amp;exp=To_determine_the_percentage_of_water_imbibed_by_raisins&amp;tempId=olab&amp;linktoken=70e48c455d437fda95db0956abcd0f5f&amp;elink_lan=en-IN&amp;elink_title=Imbibition by Raisins"
        width="850px"
        height="630px"
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
          amrita.olabs.edu.in,. (2013). Imbibition by Raisins. Retrieved 7 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=123&cnt=4
        </Typography>
      </div>
    </div>
  );
}
