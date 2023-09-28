import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import VerifyOhmThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/VerifyOhm1/verifyohm-the1.gif';
import VerifyOhmThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/VerifyOhm1/verifyohm-the2.gif';
import VerifyOhmThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/VerifyOhm1/verifyohm-the3.gif';
import VerifyOhmThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/VerifyOhm1/verifyohm-the4.gif';
import VerifyOhmThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/VerifyOhm1/verifyohm-the5.png';
import VerifyOhmThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/VerifyOhm1/verifyohm-the6.gif';
import VerifyOhmThe7 from '../../../../../../../../../assets/Images/Subjects/Physics/VerifyOhm1/verifyohm-the7.gif';
import VerifyOhmThe8 from '../../../../../../../../../assets/Images/Subjects/Physics/VerifyOhm1/verifyohm-the8.gif';

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
      <h2 className={classes.headTag}>
        <strong>Objective:</strong>
      </h2>

      <p>To verify the Ohm's law.</p>

      <h2 className={classes.headTag}>
        <strong>Statement of Ohm's Law:</strong>
      </h2>

      <p>
        Ohm’s law states that at a constant temperature, current '
        <strong>I'</strong> through a conductor between two points is directly
        proportional to the potential difference or voltage '<strong>V'</strong>
        , across the two points. That is,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt="V propto I"
          src={VerifyOhmThe1}
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
        <img
          alt="or     frac{V}{I} = constant = R"
          src={VerifyOhmThe2}
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img alt="or" src={VerifyOhmThe3} />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt="V = IR"
          src={VerifyOhmThe4}
        />
      </p>

      <p>
        Thus, the ratio <strong>V : I </strong>is a constant. This constant is
        called as the resistance (<strong>R</strong>) of the conductor.
      </p>

      <p>
        <strong>Graph:</strong>
      </p>

      <p>
        After performing experiment for different readings of <strong>V</strong>{' '}
        &amp; <strong>I</strong> and recording the observations, if we plot
        current on the x-axis of a graph and voltage on the y-axis of the graph,
        we will get a straight-line. The gradient of the straight-line graph is
        related to the resistance (<strong>R</strong>) of the conductor.
      </p>

      <p>
        <img
          alt=""
          src={VerifyOhmThe5}
          
        />
      </p>

      <h2 className={classes.headTag}>Related Theory:</h2>

      <h3 className={classes.secondaryTag}>Resistance:</h3>

      <ul>
        <li>
          Resistance is the property of a component which restricts the flow of
          electric current. Energy is used up as the voltage across the
          component drives the current through it and this energy appears as
          heat in the component.
        </li>
        <li>
          Resistance is measured in ohms, the symbol for ohm is an omega(Ω).
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Resistors connected in Series:</h3>

      <p>
        When resistors are connected in series their combined resistance is
        equal to sum of thier the individual resistances. For example if
        resistors <strong>R1</strong> and <strong>R2</strong> are connected in
        series their combined resistance, <strong>R</strong>, is given by:
      </p>

      <p>
        <img
          alt="R = R1+R2"
          src={VerifyOhmThe6}
        />
      </p>

      <h3 className={classes.secondaryTag}>Resistors connected in Parallel:</h3>

      <p>
        When resistors are connected in parallel their combined resistance is
        less than any of the individual resistances. Equation for the combined
        resistance <strong>R</strong> of 2 resistors <strong>R1</strong> and{' '}
        <strong>R2</strong> connected in&nbsp;parallel is given by:
      </p>

      <p>
        <img
          alt="frac{1}{R}=frac{1}{R1}+frac{1}{R2}"
          src={VerifyOhmThe7}
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; OR &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt="R =frac{1}{frac{1}{R1}+frac{1}{R2}}"
          src={VerifyOhmThe8}
        />
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). Verification of Ohm's Law. Retrieved 25
          March 2021, from cdac.olabs.edu.in/?sub=74&brch=9&sim=75&cnt=1
        </Typography>
      </div>
    </div>
  );
}
