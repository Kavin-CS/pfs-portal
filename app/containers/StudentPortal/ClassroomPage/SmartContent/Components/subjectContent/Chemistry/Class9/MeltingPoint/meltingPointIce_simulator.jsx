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
        src=" //amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=ANC&amp;exp=Melting-Point-Ice&amp;tempId=olab_ot&amp;linktoken=dcd8212366544ee98910f547fa131970&amp;elink_lan=en-IN&amp;elink_title=Melting Point of Ice"
        width="900px"
        height="600px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Melting Point of Ice. Retrieved 3 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=2&sim=30&cnt=1
        </Typography>
      </div>
    </div>
  );
}
