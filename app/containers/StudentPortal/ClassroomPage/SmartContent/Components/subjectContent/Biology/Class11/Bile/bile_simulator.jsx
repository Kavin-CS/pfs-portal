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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=BIC&amp;exp=UrineTest&amp;tempId=olab_ot&amp;type=bilesalt&amp;linktoken=e0955946a400853d4fca90d35c6820de&amp;elink_lan=en-IN&amp;elink_title=Detection of Bile salt in Urine"
        width="800px"
        height="500px"
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
          amrita.olabs.edu.in,. (2015). Detection of Bile salt in Urine.
          Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=17&sim=211&cnt=4
        </Typography>
      </div>
    </div>
  );
}
