import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import TransistorThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Transistor1/trans-the1.jpg';
import TransistorThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Transistor1/trans-the2.jpg';
import TransistorThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Transistor1/trans-the3.jpg';


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
      <h1 className={classes.headTag}>Our Objective:</h1>

      <p>
        &nbsp;To study the static characteristic of a transistor (Common Emitter
        Configuration)
      </p>

      <h1 className={classes.headTag}>The Theory:</h1>

      <p>
        A transistor is a semiconductor device used to amplify or switch
        electronic signals and electrical power. It is composed of semiconductor
        material with at least three terminals for connection to an external
        circuit. A voltage or current applied to one pair of the transistor's
        terminals changes the current through another pair of terminals. Because
        the controlled (output) power can be higher than the controlling (input)
        power, a transistor can amplify a signal.
      </p>

      <h2 className={classes.secondaryTag}>Bipolar Junction Transistors</h2>

      <p>
        Bipolar Junction Transistors are transistors which are made up of 3
        regions, the base, the collector, and the emitter. A small current
        entering in the base region of the transistor causes a much larger
        current flow from the emitter to the collector region. Bipolar junction
        transistors come in two main types, npn and pnp. A npn transistor is one
        in which the majority current carrier are electrons. Electron flowing
        from the emitter to the collector forms the base of the majority of
        current flow through the transistor. The other type of charge,holes, are
        a minority. pnp transistors are the opposite. In pnp transistors, the
        majority current carriers are holes.
      </p>

      <p>The circuit diagram for npn transistor is shown below.</p>

      <p>
        <img alt="" src={TransistorThe1} />
      </p>

      <h2 className={classes.secondaryTag}>Transistor characteristics:</h2>

      <h3 className={classes.secondaryTag}>
        <strong>1) Input characteristics</strong>
      </h3>

      <p>
        Keeping the collector- emitter (V<sub>CE</sub>) voltage constant, the
        base- emitter (V<sub>BE</sub>) voltage is increased from 0 and the
        corresponding base current (I<sub>B</sub>) values are noted. This is
        repeated for increasing values of V<sub>CE</sub>. The family of curve
        obtained by plotting I<sub>B</sub> against V<sub>BE</sub> for each V
        <sub>CE</sub> value is called input characteristics.
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={TransistorThe2} />
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>2) Output Characteristics</strong>
      </h3>

      <p>
        By keeping the base current (I<sub>B</sub>) constant, collector- emitter
        (V<sub>CE</sub>) voltage is varied and the corresponding I<sub>C</sub>{' '}
        values are obtained. This is repeated for increasing values of I
        <sub>B</sub>. The family of curves obtained by plotting I<sub>C</sub>{' '}
        against V<sub>CE</sub> for each value of I<sub>B</sub> is called output
        characteristics.
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={TransistorThe3} />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <p>Students understand the following terms:</p>

      <ul>
        <li>Transistor</li>
        <li>pnp and npn transistors</li>
        <li>Transistor characteristics</li>
      </ul>

      <p>
        Students will be able to do the experiment, once they understand the
        procedure.
        <br />
        &nbsp;
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Transistor characteristics. Retrieved 23
          March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=234&cnt=1
        </Typography>
      </div>
    </div>
  );
}
