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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=PHC&amp;exp=Chemical_Kinetics_Effect_concentration_rate_reaction_sodium_thiosulphate&amp;tempId=olab_ot&amp;linktoken=4709896011f7f5541515d016aeff8adc&amp;elink_lan=en-IN&amp;elink_title=Kinetics Study on the Reaction between Sodium Thiosulphate and Hydrochloric Acid"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Kinetics Study on the Reaction between
          Sodium Thiosulphate and Hydrochloric Acid. Retrieved 29 March 2021,
          from amrita.olabs.edu.in/?sub=73&brch=8&sim=142&cnt=4
        </Typography>
      </div>
    </div>
  );
}
