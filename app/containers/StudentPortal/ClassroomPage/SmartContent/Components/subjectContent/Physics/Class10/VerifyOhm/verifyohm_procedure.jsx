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
import VerifyOhmPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/VerifyOhm1/verifyohm-pro1.png';
import VerifyOhmPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/VerifyOhm1/verifyohm-pro2.jpg';

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
      <h2 className={classes.headTag}>As performed in the real lab:</h2>

      <h3 className={classes.secondaryTag}>Material required :</h3>

      <p>
        A resistor of about 5 Ω, an ammeter ( 0 - 3 A), a voltmeter (0 - 10 V),
        four&nbsp;dry cells of 1.5 V each with a cell holder (or a battery
        eliminator), a plug&nbsp;key, connecting wires, and a piece of sand
        paper.
      </p>

      <h3 className={classes.secondaryTag}>Precautions :</h3>

      <ul>
        <li>All the electrical connections must be neat and tight.</li>
        <li>Voltmeter and Ammeter must be of proper range.</li>
        <li>The key should be inserted only while taking readings.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Circuit Diagram:</h3>

      <p>
        <img
          alt=""
          src={VerifyOhmPro1}
          
        />
      </p>

      <h3 className={classes.secondaryTag}>&nbsp;Procedure :</h3>

      <ol>
        <li>Draw the circuit diagram as shown above.</li>
        <li>Arrange the apparatus as per the circuit diagram.</li>
        <li>
          Clean the ends of the connecting wires with sand paper and make them
          shiny.
        </li>
        <li>
          Make the connections as per circuit diagram. All connections must be
          neat and tight. Take care to connect the ammeter and voltmeter with
          their correct polarity. (+ve to +ve and -ve to -ve).
        </li>
        <li>
          Determine the zero error and least count of the ammeter and voltmeter
          and record them.
        </li>
        <li>Adjust the rheostat to pass a low current.</li>
        <li>
          Insert the key K and slide the rheostat contact to see whether the
          ammeter and voltmeter are showing deflections properly.
        </li>
        <li>
          Adjust the rheostat to get a small deflection in ammeter and
          voltmeter.
        </li>
        <li>Record the readings of the ammeter and voltmeter.</li>
        <li>
          Take atleast six sets of readings by adjusting the rheostat gradually.
        </li>
        <li>
          Plot a graph with <strong>V</strong> along x-axis and{' '}
          <strong>I</strong> along y-axis.
        </li>
        <li>The graph will be a straight line which verifies Ohm's law.</li>
        <li>
          Determine the slope of the V-I graph. The reciprocal of the slope
          gives resistance of the wire.
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>
        <span>Observations:</span>
      </h3>

      <ul>
        <li>Range of the given ammeter=.................... A.</li>
        <li>Least count of the given ammeter = ..................... A.</li>
        <li>Range of the given voltmeter = .....................V.</li>
        <li>Least count of the given voltmeter = .....................V.</li>
        <li>Mean value of V/I from observations, R = .......... Ω.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Observation from graph:</h3>

      <ul>
        <li>Slope of I vs V graph = ...........</li>
        <li>R from graph = 1/ slope = .............. Ω.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Observation table:</h3>

      <p>
        <img
          alt=""
          src={VerifyOhmPro2}
          
        />
        &nbsp;
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.headTag}>As performed in the simulator:</h2>

      <ol>
        <li>
          Click on <strong>Show Label</strong> checkbox to label/unlable the
          apparatus in the circuit.
        </li>
        <li>
          Click on <strong>Show Help</strong> checkbox to show/hide the 'help'
          for performing the lab.
        </li>
        <li>
          Click on the <strong>Observation Table </strong>tab&nbsp;below to open
          the Observation table.
        </li>
        <li>
          Drag the plug key to switch <strong>on/off </strong>the current.
        </li>
        <li>
          Adjust the rheostat such that ammeter shows the low value of Current (
          <strong>I</strong>). Note corresponding voltmeter reading.
        </li>
        <li>
          Increase the current by adjusting the slider of the rheostat and take
          about 5 or 6 sets of readings.
        </li>
        <li>
          Note carefully ammeter and voltmeter readings in each set and record
          in the <strong>Observation Table</strong>.
        </li>
        <li>
          Note <strong>V/I</strong> ratio for each set of reading in the{' '}
          <strong>Resistance</strong> column.
        </li>
        <li>
          Click on <strong>Plot Graph</strong> button to plot voltmeter readings
          (<strong>V</strong>) along the x-axis and the corresponding
          &nbsp;ammeter readings (<strong>I</strong>) along the y-axis in the
          graph.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). Verification of Ohm's Law. Retrieved 25
          March 2021, from cdac.olabs.edu.in/?sub=74&brch=9&sim=75&cnt=2
        </Typography>
      </div>
    </div>
  );
}
