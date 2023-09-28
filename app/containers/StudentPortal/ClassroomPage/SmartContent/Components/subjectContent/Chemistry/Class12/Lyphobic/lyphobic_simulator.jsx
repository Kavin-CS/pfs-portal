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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=PHC&amp;exp=Surface_Chemistry&amp;tempId=olab_ot&amp;linktoken=aa02010873b40371cd0b198e483a83d8&amp;elink_lan=en-IN&amp;elink_title=Preparation of Lyophilic and Lyophobic Sols"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Preparation of Lyophilic and Lyophobic
          Sols. Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=34&cnt=4
        </Typography>
      </div>
    </div>
  );
}
