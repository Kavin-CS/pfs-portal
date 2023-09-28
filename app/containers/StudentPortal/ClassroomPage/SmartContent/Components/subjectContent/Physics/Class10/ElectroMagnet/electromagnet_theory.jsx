import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ElectroMagnetThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/ElectroMagnet1/electro-the1.jpg';

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
          <span>
            To study the phenomenon of electromagnetic induction.
          </span>
        </span>
      </p>

      <h2 className={classes.headTag}>Theory:</h2>

      <p>
        The phenomenon of electromagnetic induction is the existence of an
        induced current in a circuit (such as a coil) placed in a region where
        the magnetic field motion changes with the time. The magnetic field may
        change due to relative motion between coil and magnet placed near the
        coil as shown in the Fig. 1. We know that a current-carrying conductor
        also produces magnetic field that changes with a change in the current
        flowing through it. Thus if a coil is placed near to a current-carring
        conductor, an induced current in the coil may setup&nbsp; due to a
        change in the current through the current-carrying conductor.
      </p>

      <p>
        <img
          alt=""
          src={ElectroMagnetThe1}
          
        />
      </p>

      <p>
        <span>
          Fig. 1: Moving a magnet towards a coil&nbsp;sets&nbsp;up a current in
          the coil circuit,
        </span>
      </p>

      <p>
        <span>
          as indicated by&nbsp;deflection in the galvanometer needle.&nbsp;
        </span>
      </p>

      <p>
        <span>
          <span>
            <span>
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;Source: NCERT class X lab manual &nbsp;
            </span>
          </span>
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Electromagnetic Induction. Retrieved 25
          March 2021, from cdac.olabs.edu.in/?sub=74&brch=9&sim=242&cnt=1
        </Typography>
      </div>
    </div>
  );
}
