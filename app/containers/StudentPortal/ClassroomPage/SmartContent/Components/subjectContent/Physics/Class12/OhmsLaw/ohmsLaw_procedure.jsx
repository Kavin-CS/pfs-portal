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
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
  },
  headTag:{
    fontSize: 20
  }
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div className={classes.divContent}>
      <h1 className={classes.headTag}>Materials Required:</h1>

      <ul>
        <li>A resistance wire</li>
        <li>A voltmeter and an ammeter of appropriate range</li>
        <li>A battery (battery eliminator)</li>
        <li>A rheostat</li>
        <li>A metre scale</li>
        <li>One way key</li>
        <li>Connecting wires</li>
        <li>A piece of sand paper</li>
        <li>Screw gauge</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <ul>
        <li>First we'll draw the circuit diagram.</li>
        <li>
          Arrange the apparatus in the same manner as given in the arrangement
          diagram.
        </li>
        <li>
          Clean the ends of the connecting wires with sand paper to remove
          insulation, if any.
        </li>
        <li>
          Make neat, clean and tight connections according to the circuit
          diagrams. While making connections ensure that +ve marked terminals of
          the voltmeter and ammeter are joined towards the +ve terminals of the
          battery.
        </li>
        <li>
          Determine the least count of voltmeter and ammeter, and also note the
          zero error, if any.
        </li>
        <li>
          Insert the key K, slide the rheostat contact and see that the ammeter
          and voltmeter are working properly.
        </li>
        <li>
          Adjust the sliding contact of the rheostat such that a small current
          passes through the resistance coil or the resistance wire.
        </li>
        <li>
          Note down the value of the potential difference V from the voltmeter
          and current I from the ammeter.
        </li>
        <li>
          Shift the rheostat contact slightly so that both the ammeter and
          voltmeter show full divisions readings and not in fraction.
        </li>
        <li>Record the readings of the voltmeter and ammeter.</li>
        <li>Take at least six sets of independent observations.</li>
        <li>Record the observations in a tabular column</li>
        <li>
          Now, cut the resistance wire at the points where it leaves the
          terminals, stretch it and find its length by the meter scale.
        </li>
        <li>
          Then find out the diameter and hence the radius of the wire using the
          screw gauge and calculate the cross- sectional area A (πr²).
        </li>
        <li>
          Plot a graph between current (I) along X-axis and potential difference
          across the wire (V) along Y-axis.
        </li>
        <li>The graph should be a stright line.&nbsp;</li>
        <li>
          Determine the slope of the graph. The slope will give the value of
          resistance (R) of the material of the wire.
        </li>
        <li>Calculate the resistance per centimeter of the wire.</li>
        <li>
          Now,calculate the resistivity of the material of the wire using the
          formula,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        {/* <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1501058006_Untitled-3.jpg"
          style="width: 84px; height: 56px;"
        /> */}
      </p>

      <h1 className={classes.headTag}>
        &nbsp;Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <ul>
        <li>Select the metal form the drop down list.</li>
        <li>Select the length of the wire from the slider.</li>
        <li>Select the diameter of the wire using the slider.</li>
        <li>Select the resistance of the rheostat using the slider.</li>
        <li>
          To see the circuit diagram, click on the ‘Show circuit diagram’ check
          box seen inside the simulator window.
        </li>
        <li>
          Connections can be made as seen in the circuit diagram by clicking and
          dragging the mouse form one connecting terminal to the other
          connecting terminal of the devices to be connected.
        </li>
        <li>
          Drag the wire and place it on the voltmeter to have it connected.
        </li>
        <li>
          Once all connections are made, click and drag the key to insert it
          into the switch.
        </li>
        <li>
          Slowly move the rheostat contact to change the voltage and current in
          the voltmeter and ammeter accordingly.
        </li>
        <li>
          Calculate the resistivity of the materials based on the length of the
          wire selected.
        </li>
        <li>Click on the ‘Show result’ check box to verify your result.</li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <h1 className={classes.headTag}>Observations:</h1>

      <ul>
        <li>
          Length
          <br />
          Length of the resistance wire l =......cm&nbsp;
        </li>
        <li>
          Range
          <br />
          Range of the given ammeter = .......A.
          <br />
          Range of the given voltmeter = .......V.&nbsp;
        </li>
        <li>
          Least count
          <br />
          Least count of ammeter = .......A.
          <br />
          Least count of voltmeter = .......V.&nbsp;
        </li>
        <li>
          Zero error
          <br />
          Zero error in ammeter, e<sub>1</sub> = .......A.
          <br />
          Zero error in voltmeter,e<sub>2</sub> = ......V.&nbsp;
        </li>
        <li>
          Zero correction
          <br />
          Zero correction for ammeter, (-e<sub>1</sub>) = .......A.
          <br />
          Zero correction for voltmeter, (-e<sub>2</sub>) = ......V.&nbsp;
        </li>
      </ul>

      <p>
        <strong>Table for Ammeter and Voltmeter Readings:</strong>
      </p>

      <p>&nbsp;Mean value of resistance, R = ....................ohms.</p>

      <p>
        <strong>Results:</strong>
      </p>

      <p>
        Resistance per cm of the wire is ........................Ωcm
        <sup>-1</sup>.
      </p>

      <p>Cross-sectional area of the wire, A =&nbsp;πr² = ...........cm²</p>

      <p>
        Resistivity of the material of the wire,&nbsp;ρ
        =&nbsp;................Ωcm
      </p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Ohm's law and resistance. Retrieved 25
          February 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=22&cnt=2
        </Typography>
      </div>
    </div>
  );
}
