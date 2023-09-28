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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=ECO&amp;exp=To_Determine_the_Amount_of_Suspended_Particulate_Matter_in_Air&amp;tempId=olab_ot_rt&amp;linktoken=2fbdce14ba89e1441b57429458f3211c&amp;elink_lan=en-IN&amp;elink_title=Study of pollutants in Air"
        width="800px"
        height="550px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of pollutants in Air. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=18&sim=240&cnt=4
        </Typography>
      </div>
    </div>
  );
}
