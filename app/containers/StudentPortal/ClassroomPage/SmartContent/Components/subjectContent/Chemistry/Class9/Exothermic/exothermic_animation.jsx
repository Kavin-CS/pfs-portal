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

export default function Animation() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <div className={classes.animationWrap}>
        <h1 className={classes.header}>Exothermic</h1>
        <iframe
          src="https://www.olabs.edu.in/olabs/OLabsPhysics/ExothermicReaction/Exothermic-Reaction.html?linktoken=cf7234d92b63ad30156e368b01b10fe1&amp;elink_lan=en-IN&amp;elink_title=Exothermic and Endothermic Reactions"
          width="900px"
          height="1000px"
        >
          {' '}
        </iframe>

        <h1 className={classes.header}>Endothermic</h1>
        <iframe
          src="https://www.olabs.edu.in/olabs/OLabsPhysics/EndothermicReaction/Endothermic-Reaction.html?linktoken=596c4a78f2e0a8dcc30e7fb874e66df2&amp;elink_lan=en-IN&amp;elink_title=Exothermic and Endothermic Reactions"
          width="900px"
          height="1000px"
        >
          {' '}
        </iframe>
        <div className={classes.wrap}>
          <h1 className={classes.header}>Acknowledgement:</h1>
          <Typography>
            cdac.olabs.edu.in,. (2012). Exothermic and Endothermic Reactions.
            Retrieved 3 April 2021, from
            cdac.olabs.edu.in/?sub=75&brch=12&sim=92&cnt=151
          </Typography>
        </div>
      </div>
    </div>
  );
}
