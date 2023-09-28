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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=ACS&amp;exp=ResonanceColumn&amp;tempId=olab_ot&amp;linktoken=5b159a9dae14ec4f61d1ac438cfcf315&amp;elink_lan=en-IN&amp;elink_title=Resonance Column"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Resonance Column. Retrieved 24 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=36&cnt=4
        </Typography>
      </div>
    </div>
  );
}
