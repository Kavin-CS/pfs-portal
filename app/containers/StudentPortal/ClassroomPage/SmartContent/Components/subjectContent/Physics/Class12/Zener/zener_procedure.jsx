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
import ZenerPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Zener1/zener-pro1.jpg';


const useStyles = makeStyles(theme => ({
  divContent: {
    // webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // fontSize: 14,
    // lineHeight: '1.42857143',
    // color: '#333',
    // boxSizing: 'border-box',
    // backgroundRepeat: 'no-repeat',
    // paddingTop: 0,
    // textAlign: 'left',
    // // font-family: 'Noto Sans','Noto Sans Malayalam','Noto Sans Telugu', sans-serif;
    // minHeight: '70px',
    // marginLeft: '2%',
    // marginRight: 'auto',
    // background: 'white',
  },
  headTag: {
    fontSize: 20,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Materials required:</h1>

      <ul>
        <li>Battery</li>
        <li>Rheostat</li>
        <li>Small resistance (200 Ω)</li>
        <li>Milliammeter</li>
        <li>Voltmeter</li>
        <li>Key</li>
        <li>Zener diode</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <ul>
        <li>Connections are made as shown in the circuit diagram.</li>
      </ul>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={ZenerPro1} />
      </p>

      <ul>
        <li>
          By adjusting the rheostat, voltmeter reading is increased from 0 and
          in each time note the corresponding reading in milliammeter.
        </li>
        <li>
          The experiment is continued till the milliammeter shows a large
          deflection while the voltmeter reading remains a constant, indicating
          the break down voltage.
        </li>
        <li>
          Plot the reverse characteristic curve by taking reverse voltage along
          –ve X-axis and reverse current along –ve Y-axis.
        </li>
        <li>
          The break down voltage Vz is obtained from the graph as shown below.
        </li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure:</h1>

      <ul>
        <li>Select the Zener diode from the drop down list.</li>
        <li>
          To see the circuit diagram, click on the 'Show/hide circuit diagram'
          check box seen inside the simulator window.
        </li>
        <li>
          Connections can be made as seen in the circuit diagram by clicking and
          dragging the mouse from one connecting terminal to the other
          connecting terminal of the devices to be connected.
        </li>
        <li>Drag the key to insert it.</li>
        <li>You can change the rheostat resistance using the slider.</li>
        <li>
          You can notice the corresponding ammeter and voltmeter readings.
        </li>
        <li>You can use the embedded worksheet to enter the values.</li>
        <li>To see the graph, click on the graph icon in the worksheet.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Observations:</h1>

      <p>Least count of voltmeter = ...........V</p>

      <p>Zero error of voltmeter&nbsp; = ............V</p>

      <p>Least count of milli-ammeter&nbsp; = ...........mA</p>

      <p>Zero error of milli-ammeter = ...........mA</p>
      <div >
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td >Trial No.</td>
              <td >Reverse Voltage (V)</td>
              <td >Reverse Current (mA)</td>
            </tr>
            <tr>
              <td >1</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >2</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >3</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >4</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >5</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >6</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >7</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >8</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >9</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >10</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className={classes.headTag}>Calculation:</h1>

      <p>
        Plot the reverse characteristic curve by taking reverse voltage along
        –ve X-axis and reverse current along –ve Y-axis.
      </p>

      <h1 className={classes.headTag}>Result:</h1>

      <ul>
        <li>
          The reverse characteristic curve of the Zener diode is obtained.
        </li>
        <li>The reverse breakdown voltage of the Zener diode, V = ………….V</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Zener Diode. Retrieved 23 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=6&sim=24&cnt=2
        </Typography>
      </div>
    </div>
  );
}
