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
  },
  headTag: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Books</h1>

      <ul>
        <li>
          &nbsp;&nbsp;Laboratory Manual Physics for class XII - Published by
          NCERT
        </li>
      </ul>

      <h1 className={classes.headTag}>Websites</h1>

      <ul>
        <li>
          <a
            href="https://www.boundless.com/physics/textbooks/boundless-physics-textbook/circuits-and-direct-currents-20/voltmeters-and-ammeters-153/"
            target="_blank"
          >
            https://www.boundless.com/physics/textbooks/boundless-physics-textbook/circuits-and-direct-currents-20/voltmeters-and-ammeters-153/
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/technology/galvanometer"
            target="_blank"
          >
            http://www.britannica.com/technology/galvanometer
          </a>
        </li>
        <li>
          <a
            href="http://en.docsity.com/en-docs/Conversion_of_Galvano_Meter_into_Voltmeter-Physics-Lab_Mannual_"
            target="_blank"
          >
            http://en.docsity.com/en-docs/Conversion_of_Galvano_Meter_into_Voltmeter-Physics-Lab_Mannual_
          </a>
        </li>
        <li>
          <a
            href="http://www.citycollegiate.com/galvanometer_XIIa.htm"
            target="_blank"
          >
            http://www.citycollegiate.com/galvanometer_XIIa.htm
          </a>
        </li>
      </ul>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Conversion of Galvanometer to Ammeter.
          Retrieved 19 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=26&cnt=567
        </Typography>
      </div>
    </div>
  );
}
