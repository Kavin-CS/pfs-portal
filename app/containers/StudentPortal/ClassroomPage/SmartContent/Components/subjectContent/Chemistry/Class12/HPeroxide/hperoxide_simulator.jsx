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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=PHC&amp;exp=Chemical_Kinetics_Rate_reaction_iodide_ions_hydrogen_peroxide&amp;tempId=olab_ot&amp;linktoken=1fc88eff4c130b311a1c4976634f3ca0&amp;elink_lan=en-IN&amp;elink_title=Kinetics Study on the Reaction between Iodide Ions and Hydrogen Peroxide"
        width="810px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Kinetics Study on the Reaction between
          Iodide Ions and Hydrogen Peroxide. Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=117&cnt=4
        </Typography>
      </div>
    </div>
  );
}
