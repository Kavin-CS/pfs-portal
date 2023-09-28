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
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    paddingTop: 0,
    textAlign: 'left',
    // font-family: 'Noto Sans','Noto Sans Malayalam','Noto Sans Telugu', sans-serif;
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
  },
  headTag: {
    fontSize: 20,
  },
  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h2 className={classes.headTag}>As performed in the real lab</h2>

      <h3 className={classes.secondaryTag}>Apparatus:</h3>

      <p>
        A battery (12 V),&nbsp;a variable resistance (or a rheostat),
        an&nbsp;ammeter (0–5 A), a plug key, and a long straight thick
        copper&nbsp;wire.
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ol>
        <li>
          Fix the cardboard and insert the wire through the centre of cardboard
          such that it is normal to its plane.
        </li>
        <li>
          Connect the wire with rheostat, ammeter, battery and plug key in
          series.
        </li>
        <li>Sprinkle the iron filings uniformly on the cardboard.</li>
        <li>
          Keep&nbsp;the variable of the rheostat at a fixed&nbsp;position and
          note the current through the&nbsp;ammeter.
        </li>
        <li>Close the key and gently tap the cardboard.</li>
        <li>Observe the pattern of the iron filings over the cardboard.</li>
      </ol>

      <h2 className={classes.headTag}>As performed in the simulator</h2>

      <ol>
        <li>
          Adjust the&nbsp;<strong>current</strong>&nbsp;flowing from the
          conductor and&nbsp;<strong>distance</strong>&nbsp;of the object from
          the conductor using the sliders from the&nbsp;
          <strong>Controls</strong>&nbsp;section.
        </li>
        <li>
          Note the direction of the magnetic field and also the direction of
          current flowing through the conductor.
        </li>
        <li>
          Also, note the&nbsp;<strong>magnetic field (B)&nbsp;</strong>acting on
          the&nbsp;<strong>object&nbsp;O.</strong>
        </li>
        <li>
          Click on&nbsp;<strong>"Change Current Direction"</strong>
          &nbsp;checkbox, to change the direction of current.
        </li>
        <li>
          Click on&nbsp;<strong>"Observations "</strong>&nbsp;tab below to view
          the observation.
        </li>
      </ol>

      <h2 className={classes.headTag}>
        <br />
        Observations
      </h2>

      <ol>
        <li>
          You will observe that the magnetic field lines are formed in
          concentric circles around the current carrying conductor. These lines
          do not intersect each other and are&nbsp;<strong>equidistant</strong>
          &nbsp;from each other.
        </li>
        <li>
          The direction of the&nbsp;field is&nbsp;<strong>perpendicular</strong>
          &nbsp;to the conductor.
        </li>
        <li>
          The&nbsp;<strong>magnetic field (B)</strong>&nbsp;acting on the{' '}
          <strong>object O</strong>&nbsp;increases as the current flowing
          through it increases.
        </li>
        <li>
          The field&nbsp;<strong>increases&nbsp;</strong>as{' '}
          <strong>object O</strong> is&nbsp;<strong>closer&nbsp;</strong>to the
          conductor and&nbsp;<strong>decreases&nbsp;</strong>as it moves away
          from the conductor.
        </li>
        <li>
          The direction of magnetic field lines gets reversed if the direction
          of&nbsp;current is reversed.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Magnetic field lines around current
          carrying conductor. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=90&cnt=2
        </Typography>
      </div>
    </div>
  );
}
