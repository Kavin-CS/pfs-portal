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

export default function Video() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <div className={classes.animationWrap}>
        <h1 className={classes.header}>Purification of Copper Sulphate Crystals:</h1>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/SAU-gptAFe0?rel=0"
            width="640"
          />
        </p>

        <p>&nbsp;</p>

        <h1 className={classes.header}>Purification of Potash Alum:</h1>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/MwlFgPskW34?rel=0"
            width="640"
          />
        </p>

        

        <h1 className={classes.header}>Purification of Benzoic Acid:</h1>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/FggvNDlkJxo?rel=0"
            width="640"
          />
        </p>

        <div className={classes.wrap}>
          <h1 className={classes.header}>Acknowledgement:</h1>
          <Typography>
            amrita.olabs.edu.in,. (2015). Purification of Impure Samples by
            Crystallization. Retrieved 30 March 2021, from
            amrita.olabs.edu.in/?sub=73&brch=7&sim=110&cnt=480
          </Typography>
        </div>
      </div>
    </div>
  );
}
