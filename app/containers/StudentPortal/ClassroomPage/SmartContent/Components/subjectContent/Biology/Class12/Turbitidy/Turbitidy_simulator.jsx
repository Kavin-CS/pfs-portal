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
        src="//amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=BIC&amp;exp=To_Study_pH_Turbidity_Livingorganism_of_Water&amp;tempId=olab_ot&amp;linktoken=5fcbeb37730ebb57830015d179cbd8f5&amp;elink_lan=en-IN&amp;elink_title=Studies on Turbidity, pH and Microbial Presence in Water"
        width="900px"
        height="550px"
        class="iframeStyle"
      >
        {' '}
      </iframe>{' '}
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2015). Studies on Turbidity, pH and Microbial Presence in Water. Retrieved 28 February 2021, from amrita.olabs.edu.in/?sub=79&brch=18&sim=229&cnt=677 
        </Typography>
      </div>
    </div>
  );
}
