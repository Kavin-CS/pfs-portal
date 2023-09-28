import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import ZenerThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Zener1/zener-the1.jpg';
import ZenerThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Zener1/zener-the2.jpg';
import ZenerThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Zener1/zener-the3.jpg';


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
        To draw the reverse characteristic curve of a Zener diode and to find
        its reverse breakdown voltage.
      </p>

      <h1 className={classes.headTag}>The Theory:</h1>

      <h2>Zener diode</h2>

      <p>
        A Zener diode is a heavily doped silicon crystal diode which allows
        current to flow in the forward direction in the same manner as an ideal
        diode. It also permits the current to flow in the reverse direction when
        the voltage is above a certain value known as the breakdown voltage.
        Breakdown voltage is also known as Zener knee voltage.
      </p>

      <p>
        The device was named after an American Physicist, Clarence Zener, who
        described the property concerning the breakdown of electrical
        insulators.
      </p>

      <p>
        The device consists of a reverse biased, highly doped, p-n junction
        diode operating in the breakdown region. Conventional diodes and
        rectifiers never operate in the breakdown region, but the Zener diode
        can safely be operated at this point.
      </p>

      <h2 className={classes.secondaryTag}>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={ZenerThe1} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp; &nbsp;{' '}
        <img alt="" src={ZenerThe2} />
      </h2>

      <h2 className={classes.secondaryTag}>Working of Zener diode</h2>

      <p>
        As the reverse voltage applied to the Zener diode increases, it reaches
        the breakdown voltage at which Zener current increases to a large value.
        In the breakdown region, further increase in reverse voltage will not
        increase the voltage across the Zener diode, it only increases the
        current. Thus, a constant voltage called Zener voltage (V<sub>z</sub>)
        is maintained across the Zener diode when the supply voltage changes.
        Hence, it acts as a voltage regulator.
      </p>

      <p>
        The reverse characteristic is obtained by taking reverse voltage along –
        ve X-axis and reverse current along –ve Y-axis. As the reverse voltage
        reaches a certain value, the reverse current increases to a large value,
        but the voltage across the diode remains a constant. This is the break
        down voltage V<sub>z</sub>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={ZenerThe3} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>
          Students understand the terms Zener diode, breakdown voltage, etc.
        </li>
        <li>
          Students are able to do the experiment in the real laboratory, once
          they understand the procedure.
          <br />
          &nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Zener Diode. Retrieved 23 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=6&sim=24&cnt=1
        </Typography>
      </div>

      <p>&nbsp;</p>
    </div>
  );
}
