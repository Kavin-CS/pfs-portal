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
  headTag: {
    fontSize: 20,
  },
}));

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=CLA&amp;exp=Newtons_Third_Law&amp;tempId=olab_ot_rt&amp;linktoken=16968955aa1fea6e02b3b24b1be1eb24&amp;elink_lan=en-IN&amp;elink_title=Newton's Third law of Motion"
        width="820px"
        height="600px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Newton's Third law of Motion. Retrieved
          26 March 2021, from amrita.olabs.edu.in/?sub=1&brch=1&sim=105&cnt=4
        </Typography>
      </div>
    </div>
  );
}
