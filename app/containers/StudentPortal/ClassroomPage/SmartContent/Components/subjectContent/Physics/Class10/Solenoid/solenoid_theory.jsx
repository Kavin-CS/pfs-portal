import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import SolenoidThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Solenoid1/solenoid-the1.png';


const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    textAlign: 'left',
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
  },
  OhmsLawImg: {
    width: '350px',
    height: '210px',
  },
  headTag: {
    fontSize: 20,
  },
  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h2 className={classes.headTag}>Objective:</h2>

      <p>
        <span>
          To observe the magnetic field lines around current carrying solenoid.
        </span>
      </p>

      <h2 className={classes.headTag}>Theory:</h2>

      <ol>
        <li>
          A coil of many circular turns of insulated copper wire wrapped closely
          in the shape of a cylinder is called a solenoid.
        </li>
        <li>
          The pattern of the magnetic field lines around a current-carrying
          solenoid is illustrated in Fig.1.
        </li>
        <li>
          The pattern of the field is similar to magnetic field around a bar
          magnet. One end of the solenoid behaves as a magnetic north pole,
          while the other behaves as the south pole.
        </li>
        <li>
          The field lines inside the solenoid are in the form of parallel
          straight lines. This indicates that the magnetic field is the same at
          all points inside the solenoid. That is, the field is uniform inside
          the solenoid.
        </li>
      </ol>

      <p>&nbsp;</p>

      <p>
        <img
          alt=""
          src={SolenoidThe1}
          
        />
      </p>

      <p>
        Fig 1:&nbsp;Field lines of the magnetic field&nbsp;through and around a
        current
        <br />
        carrying solenoid.
      </p>

      <p>
        <span>
          Source: NCERT class X lab manual &nbsp;
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). The magnetic field lines around current
          carrying solenoid.. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=91&cnt=1
        </Typography>
      </div>
    </div>
  );
}
