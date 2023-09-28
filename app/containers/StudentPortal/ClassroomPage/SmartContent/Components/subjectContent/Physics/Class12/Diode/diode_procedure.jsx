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
import DiodePro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Diode1/diode-pro1.jpg';
import DiodePro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Diode1/diode-pro2.jpg';
import DiodePro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Diode1/diode-pro3.jpg';


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
      <h1 className={classes.headTag}>Materials Required</h1>

      <ul>
        <li>A p-n junction diode</li>
        <li>3 V battery</li>
        <li>50 V battery</li>
        <li>High resistance rheostat</li>
        <li>0-3 V voltmeter</li>
        <li>0-50 V voltmeter</li>
        <li>0-100 mA ammeter</li>
        <li>0-100 µA ammeter</li>
        <li>One way key</li>
        <li>Connecting wires</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <p>
        <strong>Forward V-I Characteristics :</strong>
      </p>

      <p>
        <strong>
          &nbsp;&nbsp;&nbsp;
          <img alt="" src={DiodePro1} />
        </strong>
      </p>

      <ul>
        <li>Connections are made as per the connection diagram.</li>
        <li>
          Insert the key. Arrange the sliding contact of the rheostat to
          minimum.
        </li>
        <li>
          Now, gently move the rheostat contact to provide a positive bias
          voltage.
        </li>
        <li>Note the voltmeter and milli ammeter readings.</li>
        <li>
          Repeat the process by increasing the forward current in equal steps by
          changing the rheostat slider.
        </li>
        <li>
          It can be noted that, initially the current increase very slowly. For
          a certain value of voltage, it shows a sharp increase. The
          corresponding voltage represents the knee voltage of that diode.
        </li>
        <li>
          Plot a graph with forward voltage along X axis and forward current
          along Y axis. The graph shows the forward V-I characteristics of the
          given p-n junction diode. &nbsp;
        </li>
      </ul>

      

      <p>
        <strong>Reverse V-I Characteristics :</strong>
      </p>

      <p>
        <strong>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <img alt="" src={DiodePro2} />
        </strong>
      </p>

      <ul>
        <li>Make the circuit diagram as shown in the figure.</li>
        <li>
          Insert the key. Arrange the sliding contact of the rheostat to
          maximum.
        </li>
        <li>
          Move the sliding contact of the rheostat to provide a reverse bias
          voltage.Note the voltmeter and
          micro&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ammeter
          readings.
        </li>
        <li>Note the voltmeter and micro ammeter readings.</li>
        <li>
          Repeat the process by changing the reverse voltage in equal steps.
        </li>
        <li>
          The current increases slowly in the beginning and then rapidly when
          the reverse voltage becomes a certain value. This voltage is known as
          the reverse breakdown voltage.
        </li>
        <li>
          Plot a graph with reverse voltage along X axis and reverse current
          along Y axis. The graph shows the reverse V-I characteristics of the
          given p-n junction diode. &nbsp;
        </li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <ul>
        <li>Select the characteristics of diode from the drop down list.</li>
        <li>Select the diode from the drop down list.</li>
        <li>
          To see the circuit diagram, click on the 'Show circuit diagram' check
          box seen inside the simulator window.
        </li>
        <li>
          Connections can be made as seen in the circuit diagram by clicking and
          dragging the mouse from one connecting terminal to the other
          connecting terminal of the devices to be connected.
        </li>
        <li>Drag the key to insert it.</li>
        <li>You can change the rheostat resistance using the slider.</li>
        <li>You can select the room temperature using the slider.</li>
        <li>
          You can notice the corresponding ammeter and voltmeter readings.
        </li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <p>
        <strong>Forward V-I Characteristics :</strong>
      </p>

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
              <td >Sl. No.</td>
              <td>
                <p>
                  Forward bias voltage, V<sub>f</sub>
                </p>

                <p >(V)</p>
              </td>
              <td>
                <p>
                  Forward current, I<sub>f</sub>
                </p>

                <p>(mA)</p>
              </td>
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

      <p>
        <strong>Reverse V-I Characteristics :</strong>
      </p>

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
              <td >Sl. No.</td>
              <td>
                <p>
                  Reverse bias voltage, V<sub>r</sub>&nbsp;
                </p>

                <p>(V)</p>
              </td>
              <td>
                <p>
                  Reverse current, I<sub>r</sub>&nbsp;&nbsp;
                </p>

                <p>(µA)</p>
              </td>
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

      <h1 className={classes.headTag}>Calculations</h1>

      <p>
        For the forward characteristics of the given p-n junction diode, a graph
        is plotted with forward voltage along X axis and forward current along Y
        axis. The forward current shows a sudden increase at certain forward
        voltage, which is known as the{' '}
        <strong>
          <em fontWeight='normal'>knee voltage</em>
        </strong>
        .
      </p>

      <p>
        For the reverse characteristics of the given p-n junction diode, a graph
        is plotted with reverse voltage along X axis and reverse current along Y
        axis. I t is noted that at a certain reverse voltage, the reverse
        current reaches its maximum level. Further increase in voltage does not
        increase this current. It is the{' '}
        <strong>
          <em fontWeight='normal'>reverse saturation current</em>
        </strong>
        . However, with further increase in reverse voltage, the current shows a
        rapid rise at a certain value. It is known as the{' '}
        <em fontWeight='normal'>
          <strong>reverse breakdown voltage</strong>
        </em>
        .&nbsp;
      </p>

      <p>
        <img alt="" src={DiodePro3} />
      </p>

      <h1 className={classes.headTag}>Result</h1>

      <p>
        The forward and reverse characteristics of the given p-n junction diode
        is drawn.
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Diode characteristics. Retrieved 22
          March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=233&cnt=2
        </Typography>
      </div>
    </div>
  );
}
