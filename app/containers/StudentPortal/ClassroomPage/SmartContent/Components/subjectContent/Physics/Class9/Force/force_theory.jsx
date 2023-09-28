import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
// import OhmsLaw from '../../../../../../assets/Images/Subjects/Physics/ocontent.jpg';
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
      <div class="divContent">
        <h1 className={classes.headTag}>Our Objective</h1>

        <p>
          To establish relationship between weight of a rectangular wooden block
          lying on a horizontal table and the minimum force required to just
          move it using a spring balance.
        </p>

        <h1 className={classes.headTag}>The Theory</h1>

        <p>
          According to <strong>Newton’s Second Law of Motion,</strong> the force
          acting on a body is directly proportional to the product of the mass
          of the body and the acceleration produced in the body by the
          application of the force. The acceleration takes place in the
          direction in which the force acts.
        </p>

        <p>
          Newton’s Second Law of Motion precisely explains the relationship
          between force and acceleration.
        </p>

        <p>
          Suppose a body of mass ‘m’ is moving by the application of a force
          ‘F’,&nbsp; then the produced acceleration ‘a’ will be directly
          proportional to the applied force.
        </p>

        <p>
          <strong>Acceleration ∝ Force&nbsp;</strong>
        </p>

        <p>
          <strong>F ∝ a&nbsp;</strong>
        </p>

        <p>
          <strong>&nbsp;F ∝ m&nbsp;</strong>
        </p>

        <p>
          <strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Therefore, F = kma&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ………… (1)
          </strong>
        </p>

        <p>
          <strong>&nbsp;Where k is constant of proportionality </strong>
        </p>

        <p>
          <strong>&nbsp;I</strong>
          <strong>n SI unit, k =1</strong>
        </p>

        <p>
          <strong>T</strong>
          <strong>herefore, F = ma</strong>
        </p>

        <p>&nbsp;</p>

        <h2 className={classes.secondaryTag}>
          Importance of the Newton’s Second Law of Motion
        </h2>

        <ul>
          <li>
            &nbsp;Newton’s Second Law of Motion gives a quantitative measure of
            force.
          </li>
        </ul>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <strong>&nbsp;F = ma</strong>
        </p>

        <ul>
          <li>
            The Second Law is a basic law of motion because both First and Third
            Law can be derived from this law.
          </li>
        </ul>

        <h2 className={classes.secondaryTag}>
          Examples of the application of the Second Law of Motion
        </h2>

        <ol>
          <li>Breaking a slab of ice.</li>
          <li>Catching a cricket ball.</li>
          <li>An athlete practicing high jump or long jump.</li>
        </ol>

        <p>
          From these examples, it is clear that we unknowingly try to reduce or
          increase the rate of change of momentum, by reducing or increasing the
          time period in which this change in momentum takes place.
        </p>

        <h1 className={classes.headTag}>Learning Outcomes</h1>

        <p>The student learns about:</p>

        <ol>
          <li>Force.</li>
          <li>Relation between force, mass and acceleration.</li>
          <li>Newton’s Second Law of Motion.</li>
        </ol>

        <p>&nbsp;</p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Force required to move a wooden block.
          Retrieved 3 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=108&cnt=1
        </Typography>
      </div>
    </div>
  );
}
