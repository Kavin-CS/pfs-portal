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
        src="//amrita.olabs.edu.in/olab//html5/?sub=BIO&amp;cat=PHL&amp;exp=Rate_of_transpiration_in_leaves&amp;tempId=olab_ot_rt&amp;linktoken=dcefe08eb2849fe8a5171f129ffd31b6&amp;elink_lan=en-IN&amp;elink_title=Rate of Transpiration"
        width="100%px"
        height="550px"
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
