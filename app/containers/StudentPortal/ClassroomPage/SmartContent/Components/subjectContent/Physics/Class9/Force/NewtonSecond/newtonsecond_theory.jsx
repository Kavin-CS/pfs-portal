import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import NewtonSecondThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonSecond1/newtonsecond-the1.png';
import NewtonSecondThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonSecond1/newtonsecond-the2.png';
import NewtonSecondThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonSecond1/newtonsecond-the3.png';
import NewtonSecondThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonSecond1/newtonsecond-the4.png';


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
      <h1 className={classes.headTag}>Can you define Newton’s Second Law of Motion?</h1>

      <p>
        Newton's Second Law&nbsp; of motion states that the rate of change of
        momentum of an object is proportional to the applied unbalanced force in
        the direction of the force.
        <br />
        &nbsp;ie.,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; F=ma
      </p>

      <p>
        Where<strong> F</strong> is the force applied, <strong>m</strong> is the
        mass of the body, and <strong>a</strong>, the acceleration produced.
      </p>

      <h1 className={classes.headTag}>
        What will happen if a body is subject to multiple forces at the same
        time?
      </h1>

      <p>
        If a body is subjected to multiple forces at the same time, then the
        acceleration produced is proportional to the vector sum (that is, the
        net force) of all the individual forces.
        <br />
        &nbsp;
      </p>

      <p>
        <img alt="" src={NewtonSecondThe1} />
      </p>

      <p>
        <br />
        The Second Law can also be shown to relate the net force and the
        momentum p of the body:
      </p>

      <p>
        <img alt="" src={NewtonSecondThe2} />
      </p>

      <p>
        &nbsp;
        <br />
        Therefore, Newton's Second Law also states that the net force acting on
        a body is equal to the rate of change of momentum of the body.
      </p>

      <p>
        <img alt="" src={NewtonSecondThe3} />
      </p>

      <h1 className={classes.headTag}>How does momentum affect the net force?</h1>

      <p>
        The First Law of Motion indicates that when an unbalanced external force
        acts on an object, its velocity changes, ie., the object is accelerated.
        Now, let’s&nbsp; study how the acceleration of an object depends on the
        force applied. Consider the example. A car at rest does not require much
        attention when parked along a road side. But the moving car, even at a
        low speed, may kill a person standing in its path. A small mass, such as
        a bullet may kill a person when fired from a gun. From these examples it
        is clear that the impact produced by the objects depends on their mass
        and velocity. When we combine the mass and velocity of an object, we get
        another quantity called momentum, which was introduced by Newton.
      </p>

      <h1 className={classes.headTag}>Let’s define Momentum:</h1>

      <p>
        Momentum has both direction and magnitude. Its direction is the same as
        that of velocity. When an unbalanced force is applied on an object, it
        changes the velocity of an object, which in turn changes its momentum.
        So, it is concluded that the force necessary to change the momentum of
        an object depends on the time rate at which the momentum is changed.
        <br />
        <br />
        The acceleration of a moving object can be calculated by:
      </p>

      <p>
        <img alt="" src={NewtonSecondThe4} />
      </p>

      <h1 className={classes.headTag}>Learning Outcome:</h1>

      <p>The student learns about</p>

      <ol>
        <li>Mass</li>
        <li>Acceleration</li>
        <li>Force</li>
        <li>Momentum</li>
        <li>Newton's Second Law of Motion</li>
      </ol>

      <h3 className={classes.secondaryTag}>
        &nbsp;Let’s understand the concept behind&nbsp; Newton’s Second Law by a
        simple experiment.
      </h3>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Verification of Newton's Second Law.
          Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=44&cnt=1
        </Typography>
      </div>
    </div>
  );
}
