import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import Sonometer1The1 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer111/sonometer1-the1.jpg';
import Sonometer1The2 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer111/sonometer1-the2.png';
import Sonometer1The3 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer111/sonometer1-the3.png';
import Sonometer1The4 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer111/sonometer1-the4.png';


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
    fontSize: 17,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Objective</h1>

      <ul>
        <li>
          To study the relation between frequency and length of a given wire
          under constant tension using sonometer. To plot a graph between ν and
          l.
        </li>
        <li>
          To study the relation between length of a given wire and tension for
          constant frequency using sonometer. To plot a graph between l2 and T.
        </li>
      </ul>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>What is a Sonometer ?</h2>

      <p>
        Sonometer consists of a hollow rectangular wooden box of more than one
        meter length, with a hook at one end and a pulley at the other end. One
        end of a string is fixed at the hook and the other end passes over the
        pulley. A weight hanger is attached to the free end of the string. Two
        adjustable wooden bridges are put over the board, so that the length of
        string can be adjusted.
      </p>

      <p>
        <img alt="" src={Sonometer1The1} />
      </p>

      <h2 className={classes.secondaryTag}>Production of transverse waves in stretched strings</h2>

      <p>
        If a string which is stretched between two fixed points is plucked at
        its center, vibrations produced and it move out in opposite directions
        along the string. Because of this, a transverse wave travels along the
        string.
      </p>

      <p>
        If a string of length l having mass per unit length m is stretched with
        a tension T, the fundamental frequency of vibration f is given by;
      </p>

      <p>
        <img
          alt=""
          src={Sonometer1The2}
        />
      </p>

      <h2 className={classes.secondaryTag}>Laws of transverse vibrations on a stretched string</h2>

      <ul>
        <li>
          Law of Length: The frequency of vibration of a stretched string varies
          inversely as its resonating length (provided its mass per unit length
          and tension remain constant.)
        </li>
      </ul>

      <p>
        <img
          alt=""
          src={Sonometer1The3}
        />
        &nbsp;
      </p>

      <ul>
        <li>
          Law of Tension:The frequency of vibration of a stretched string varies
          directly as the square root of its tension, (provided its resonating
          length and mass per unit length of the wire remains constant).
        </li>
      </ul>

      <p>
        ​
        <img
          alt=""
          src={Sonometer1The4}
        />
      </p>

      <h3 className={classes.secondaryTag}>Relation between frequency and length</h3>

      <p>
        From the law of length,&nbsp;&nbsp;<em>f ×l = constant</em>
      </p>

      <p>A graph between f and 1/l will be a straight line.</p>

      <h3 className={classes.secondaryTag}>Relation between length and tension</h3>

      <p>
        From the equation for frequency, <em>√T / l = constant</em>
      </p>

      <p>A graph between T and l2 will be a straight line.</p>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ul>
        <li>Students develop the idea about standing waves.</li>
        <li>Students understand the sonometer apparatus and its working.</li>
        <li>
          Students get the relation between frequency, length and tension of a
          stretched string under vibration.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Sonometer. Retrieved 24 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=5&sim=227&cnt=1
        </Typography>
      </div>
    </div>
  );
}
