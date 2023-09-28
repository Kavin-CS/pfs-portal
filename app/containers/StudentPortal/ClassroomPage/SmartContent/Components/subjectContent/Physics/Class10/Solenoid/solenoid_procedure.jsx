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
      <h2 className={classes.headTag}>
        <span>
          As performed in the real lab:
        </span>
      </h2>

      <p>
        <span>
          <strong>Apparatus:</strong>
        </span>
      </p>

      <p>
        <span>
          <span>
            A cardboard, a circular coil, a battery, a key and iron filings.
          </span>
        </span>
      </p>

      <p>
        <span>
          <strong>Procedure:</strong>
        </span>
      </p>

      <ol>
        <li>
          <span>
            <span>
              Take a cardboard with two holes in it.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Pass a circular coil having large number of turns through these
              holes such that half the coil is above it and the remaining part
              is below the cardboard.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Connect the free ends of the coil to a battery, and a plug key in
              series.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Sprinkle iron filings on the cardboard and plug the key.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Tap the cardboard few times and observe the pattern of iron
              filings that is formed on cardboard.
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.headTag}>
        <span>
          As performed in the Simulator:&nbsp;
        </span>
      </h2>

      <ol>
        <li>
          <span>
            <span>
              In <strong>'Controls'</strong> section, vary the amplitude of the
              current and turn density of the coil by adjusting the respective
              sliders
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Observe the magnetic field intensity around the coil. You can
              rotate the coil to view the intensity.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Click <strong>'Reverse the current direction'</strong> check box
              to change the direction of current and observe the change in
              direction of magnetic field.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Click on '<strong>Observations' </strong>to get a better insight
              of the lab.
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.headTag}>Observations:</h2>

      <ol>
        <li>
          <span>
            <span>
              You will observe that the field lines inside the solenoid are in
              the form of parallel straight lines.&nbsp;
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              When the current is reduced to 0, magnetic field intensity around
              the solenoid reduces to 0.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              When we increase the amplitude of 'current' or the 'coil turn
              density', the magnetic field intensity around the solenoid
              increases.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              When we reverse the direction of current the polarity of the
              solenoid is also reversed.
            </span>
          </span>
        </li>
      </ol>

     

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). The magnetic field lines around current
          carrying solenoid.. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=91&cnt=2
        </Typography>
      </div>
    </div>
  );
}
