import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ResisterImg from '../../../../../../../../../assets/Images/Subjects/Physics/SeriesTheory.gif';
import ResisterImg2 from '../../../../../../../../../assets/Images/Subjects/Physics/SeriesTheory2.gif';
import ERRSeriesTheory from '../../../../../../../../../assets/Images/Subjects/Physics/ERRSeriesTheory.gif';

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
      <h1 className={classes.headTag}>Our Objective</h1>

      <p>
        How to determine the equivalent resistance of two resistors when
        connected in series.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        Before we start learning about series circuits, we need to know what
        electrical circuits are and what are different types of circuits!
      </p>

      <img alt="ERRSeriesTheory" src={ERRSeriesTheory} />


      <h2 className={classes.secondaryTag}>Electrical Circuit</h2>

      <p>
        An electric circuit is simply a closed loop through which charges can
        continuously move. An electric circuit basically contains a source of
        electricity, a load resistance, a switch or a key for turning the
        circuit on or off at one's convenience.
      </p>

      <p>
        The diagrammatic representation of an electric circuit is called the
        circuit diagram.&nbsp;
      </p>
      <h2 className={classes.headTag}>Types of circuits</h2>

      <p>
        When two or more resistors are connected such a way that one end of one
        resistor is connected to the starting end of the other, then the circuit
        is called a <strong>Series Circuit</strong>
      </p>

      <p>
        Similarly, if the starting ends of two resistors are joined to a point
        and the terminal ends of the two are combined and given connection to a
        source of electricity,
      </p>

      <p>
        <img alt="" src={ResisterImg} />
      </p>

      <p>
        those circuits are called<strong> Parallel Circu</strong>
        <strong>it.</strong>
      </p>

      <p>
        Since the current has only one path to take, the current through a
        series circuit is the same through each resistor.
      </p>

      <h2 className={classes.headTag}>
        Before calculating the equivalent resistance, let me ask you, "What is
        resistance?"
      </h2>

      <p>
        Voltage can be thought of as the pressure pushing charges along a
        conductor.
      </p>

      <p>
        Electrical resistance shows how much energy you need when you move the
        charges/current through your devices. If you need lots of energy, then
        the resistance required is also high.
      </p>

      <p>
        In many materials, the voltage and resistance are connected by Ohm's
        Law:
      </p>

      <p>
        That is,&nbsp; the property of a conductor to oppose the flow of charges
        through it is called its resistance.
      </p>

      <p>
        All metals are good conductors, so all metal wires have a relatively low
        resistance.
      </p>

      <p>
        The longer a piece of wire the higher is its resistance. Double the
        length means double the resistance.
        <br />
        &nbsp;
      </p>

      <p>
        The resistance of a piece of wire also depends on its
        thickness/cross-sectional area A of the conductor. Double the area means
        half the resistance.&nbsp; A thin wire has a higher resistance than the
        same thick piece.
      </p>

      <p>
        <br />
      </p>

      <p>
        Finally, resistance of a piece of wire depends on its temperature also.
        The higher the temperature the higher is the resistance.&nbsp;
      </p>

      <h2 className={classes.headTag}>
        Calculating the effective resistance/total resistance of series
        circuits:
      </h2>

      <p>
        The total resistance/effective resistance of the circuit is found by
        simply adding up the resistance values of the&nbsp;&nbsp; individual
      </p>

      <p>&nbsp;</p>

      <p>
        <img alt="" src={ResisterImg2} />
      </p>

      <p>
        resistors. Adding resistors in series always increases the effective
        resistance.
        <br />
        ie.,&nbsp; If&nbsp; R<sub>s</sub>&nbsp; be the resistance of the series
        combination then,
      </p>

      <p>
        <br />
        Here, we used Meter Bridge to calculate the effective resistance
        accurately.
      </p>

      <p>
        The Meter Bridge is a device for measurement of resistance using the
        principle of Wheatstone Network.
      </p>

      <p>Let’s do an experiment now ……</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Equivalent Resistance of Resistors
          (Series). Retrieved 3 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=4&sim=40&cnt=122
        </Typography>
      </div>
    </div>
  );
}
