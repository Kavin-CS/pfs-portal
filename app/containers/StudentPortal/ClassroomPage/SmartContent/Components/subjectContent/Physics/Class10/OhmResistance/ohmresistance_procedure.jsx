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
import OhmResistancePro1 from '../../../../../../../../../assets/Images/Subjects/Physics/OhmResistance1/ohmresistance-pro1.gif';
import OhmResistancePro2 from '../../../../../../../../../assets/Images/Subjects/Physics/OhmResistance1/ohmresistance-pro2.png';
import OhmResistancePro3 from '../../../../../../../../../assets/Images/Subjects/Physics/OhmResistance1/ohmresistance-pro3.png';


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
      <h1 className={classes.headTag}>Materials Required&nbsp;</h1>

      <ul>
        <li>Lead Accumulator or battery eliminator</li>
        <li>Ammeter</li>
        <li>Voltmeter</li>
        <li>A resistance wire</li>
        <li>Rheostat</li>
        <li>One way Key</li>
        <li>Metre Scale</li>
        <li>Connecting wires&nbsp;</li>
      </ul>

      <h1 className={classes.headTag}>The Procedure&nbsp;</h1>

      <ol>
        <li>Draw the circuit diagram.</li>
        <li>Arrange the required materials on the table.</li>
        <li>Make the connections according to the circuit diagrams.</li>
        <li>
          Determine the least count of the voltmeter and ammeter, and also note
          the&nbsp;
          <img
            alt=""
            class="TB_Button_Image"
            src={OhmResistancePro1}
            
          />
          zero error, if any.
        </li>
        <li>
          Insert the key K, then slide the rheostat contact and see that the
          ammeter and voltmeter are working properly.
        </li>
        <li>
          Adjust the sliding contact of the rheostat such that a small current
          passes through the resistance coil or the resistance wire.
        </li>
        <li>
          Note down the value of the potential difference (V) from the voltmeter
          and current (I) from the ammeter.
        </li>
        <li>
          Shift the rheostat contact slightly so that both the ammeter and
          voltmeter show full divisions readings.
        </li>
        <li>Record the readings of the voltmeter and ammeter.</li>
        <li>
          In each case V/I is calculated, which gives the resistance R of the
          resistor and it is found as a constant.
        </li>
        <li>Take at least six sets of independent observations.</li>
        <li>
          Cut the resistance wire at the points where it leaves the terminals,
          stretch it and find its length by the meter scale.
        </li>
        <li>
          A graph is drawn with I along the X-axis and V along the Y-axis. The
          graph obtained is a straight line. This also verifies Ohm’s law.
        </li>
        <li>
          Note a particular point of current on X axis and extend a line joining
          the straight line and the point on Y axis. Mark these points.
        </li>
        <li>
          Note the values of OB and AB then calculate the value of R as AB/OB.
        </li>
        <li>
          Calculate the resistance per cm of the resistance wire can be found
          out by using the equation 2. &nbsp;
        </li>
      </ol>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/">Online Labs</a>)
      </h1>

      <ul>
        <li>Use the slider to select the length of the resistance wire.</li>
        <li>
          To see the circuit diagram, click on the 'Show circuit diagram' check
          box seen inside the simulator window.
        </li>
        <li>
          Connections can be made as seen in the circuit diagram by clicking and
          dragging the mouse from one connecting terminal to the other
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
          Slowly move the rheostat contact to change the volt and current in the
          Voltmeter and Ammeter accordingly.
        </li>
        <li>
          The readings are shown both in Voltmeter and Ammeter and also as
          readings on the left side pane.
        </li>
        <li>
          Calculate the resistance based on the length of the wire selected and
          enter the resistance of the wire and resistance per cm in the
          respective text boxes.
        </li>
        <li>
          Click on the 'Check' button to see if the result is right or wrong.
        </li>
        <li>
          An external work sheet is shown below the simulator window that can be
          used to plot a graph based on the data provided in the worksheet.
        </li>
        <li>To see the graph, click on the graph icon in the worksheet.</li>
        <li>Click on the 'Reset' button to redo the experiment.</li>
      </ul>

      <h1 className={classes.headTag}>Our Observations</h1>

      <p>Length of the resistance wire l =......cm</p>

      <p>Least count of ammeter = .......A.</p>

      <p>Least count of voltmeter = .......V.</p>

      <p>Zero correction for ammeter, (-e1) = .......A.</p>

      <p>Zero correction for voltmeter, (-e2) = ......V. &nbsp;</p>

      <ol>
        <li>
          <strong>Table for Ammeter and Voltmeter Readings:</strong>&nbsp;
        </li>
      </ol>

      <div>
        <table
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
          
        >
          <tbody>
            <tr>
              <td rowspan="2">
                <strong>Serial no of obs</strong>
              </td>
              <td colspan="2">
                <strong>Ammeter Reading I&nbsp;(A)</strong>
              </td>
              <td colspan="2">
                <strong>Voltmeter Reading V (V)</strong>
              </td>
              <td rowspan="2">
                &nbsp;&nbsp;&nbsp;
                <img
                  align="middle"
                  alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»R«/mi»«mo»=«/mo»«mfrac»«mi mathvariant=¨normal¨»V«/mi»«mi mathvariant=¨normal¨»I«/mi»«/mfrac»«/math»"
                  class="Wirisformula"
                  src={OhmResistancePro2}
                  title="Double click to edit"
                />{' '}
                <strong>&nbsp; (Ohm)</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>
                  &nbsp;&nbsp; Observed&nbsp;&nbsp;
                  <br />
                  &nbsp;
                </strong>
              </td>
              <td>
                <strong>Corrected</strong>
              </td>
              <td>
                &nbsp;&nbsp; <strong>Observed</strong>&nbsp;&nbsp;
              </td>
              <td>
                <strong>Corrected</strong>
              </td>
            </tr>
            <tr>
              <td>&nbsp;1</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;2</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;3</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;4</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Mean value of resistance, R = ....................ohms.</p>

      <p>Length of the resistance wire, l=…………cm</p>

      <p>
        Resistance per cm ,
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mi»R«/mi»«mi»l«/mi»«/mfrac»«/math»"
          class="Wirisformula"
          src={OhmResistancePro3}
          title="Double click to edit"
        />{' '}
        =…………..Ωcm<sup>-1</sup>
      </p>

      <h1 className={classes.headTag}>Result</h1>

      <p>
        &nbsp;Resistance per cm of the wire is ........................Ωcm
        <sup>-1</sup>.&nbsp;
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Ohm's Law. Retrieved 25 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=4&sim=99&cnt=2
        </Typography>
      </div>
    </div>
  );
}
