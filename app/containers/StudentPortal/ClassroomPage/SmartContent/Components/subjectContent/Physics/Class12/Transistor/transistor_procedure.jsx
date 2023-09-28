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
import TransistorPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Transistor1/trans-pro1.jpg';
import TransistorPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Transistor1/trans-pro2.jpg';
import TransistorPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Transistor1/trans-pro3.jpg';

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
      <h1 className={classes.headTag}>Material required:</h1>

      <ul>
        <li>Rheostat</li>
        <li>Voltmeter</li>
        <li>Ammeter</li>
        <li>Battery</li>
        <li>One way key</li>
        <li>Transistor</li>
        <li>Bread board</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <ul>
        <li>Connections are made as shown in the circuit diagram.</li>
      </ul>

      <p>
        &nbsp;&nbsp; &nbsp;
        <img alt="" src={TransistorPro1} />
      </p>

      <ul>
        <li>
          The rheostat Rh<sub>1</sub> is used to vary base voltage (input
          voltage) V<sub>BE</sub> and it is read from voltmeter V<sub>1</sub>.
          The base current (input current) I<sub>B</sub> is measured using a
          microammeter (µA). The collector voltage (output voltage) V
          <sub>CE</sub> is varied using the rheostat Rh<sub>2</sub> and readings
          are noted from voltmeter V<sub>2</sub>. The collector current (output
          current) I<sub>C</sub> is measured by the milliammeter (mA).
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Input Characteristics</h2>

      <ul>
        <li>
          The collector voltage V<sub>CE</sub> is kept constant (eg. 1V) by
          adjusting the rheostat Rh<sub>2</sub>.
        </li>
        <li>
          The base voltage V<sub>BE</sub> is varied from zero by adjusting the
          rheostat Rh<sub>1</sub>.
        </li>
        <li>
          The base current I<sub>B</sub> is noted in each step.
        </li>
        <li>
          A graph is drawn with V<sub>BE</sub> along X-axis and I<sub>B</sub>{' '}
          along Y-axis.
        </li>
        <li>
          The experiment is repeated with V<sub>CE</sub> kept constant say 2V,
          3V, 4V etc. and corresponding graphs are plotted.&nbsp;
        </li>
      </ul>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={TransistorPro2} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <h2 className={classes.secondaryTag}>Output characteristics</h2>

      <ul>
        <li>
          The base current I<sub>B</sub> is kept constant (eg. 20µA) by
          adjusting the rheostat Rh<sub>1</sub>.
        </li>
        <li>
          Now the collector voltage is increased by adjusting the rheostat Rh
          <sub>2</sub>.
        </li>
        <li>
          The corresponding collector current I<sub>C</sub> is noted.
        </li>
        <li>
          A graph is drawn with V<sub>CE</sub> along X-axis and I<sub>C</sub>{' '}
          along Y-axis.
        </li>
        <li>
          The experiment is repeated with keeping IB constant, say 40µA, 60µA,
          80µA etc and similar graphs are plotted.
        </li>
      </ul>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={TransistorPro3} />
      </p>

      <h1 className={classes.headTag}>Observations:</h1>

      <h2 className={classes.secondaryTag}>Input characteristics</h2>

      <div>
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          name="responsive_table"
        >
          <tbody>
            <tr>
              <td rowspan="2">
                V<sub>CE</sub> (1V)
              </td>
              <td>
                V<sub>BE</sub> (V)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                I<sub>B</sub> (μA)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                V<sub>CE</sub> (2V)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                V<sub>CE </sub>(3V)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                V<sub>CE</sub> (4 V)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Output characteristics</h2>

      <div>
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td rowspan="2">
                I<sub>B </sub>(μA)
              </td>
              <td>
                V<sub>CE</sub> (V)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                I<sub>C</sub> (mA)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                I<sub>B</sub> (μA)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                I<sub>B</sub> (μA)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                I<sub>B</sub> (μA)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Results:</h1>

      <p>
        The graphs shows the input and output characteristics of a transistor.
        <br />
        &nbsp;
        <br />
        &nbsp;
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Transistor characteristics. Retrieved 23
          March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=234&cnt=2
        </Typography>
      </div>
    </div>
  );
}
