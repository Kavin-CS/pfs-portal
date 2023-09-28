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
import AmmeterPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Ammeter1/galvanometerAmmeter_pro1.png';
import AmmeterPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Ammeter1/galvanometrAmmeter_pro2.png';
import AmmeterPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Ammeter1/galvanometer_ammeter_pro3.jpg';
import AmmeterPro4 from '../../../../../../../../../assets/Images/Subjects/Physics/Ammeter1/galvanometer_ammeter_pro4.png';
import AmmeterPro5 from '../../../../../../../../../assets/Images/Subjects/Physics/Ammeter1/galvanometr_ammeter_pro5.png';
import AmmeterPro6 from '../../../../../../../../../assets/Images/Subjects/Physics/Ammeter1/galvanometer_ammetr_pro6.png';
import AmmeterPro7 from '../../../../../../../../../assets/Images/Subjects/Physics/Ammeter1/galvanometer_ammeter_pro7.png';
import AmmeterPro8 from '../../../../../../../../../assets/Images/Subjects/Physics/Ammeter1/galvanometer_ammeter_pro8.png';

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
        <li>Galvanometer</li>
        <li>Cell</li>
        <li>Rheostat</li>
        <li>Ammeter of desired range</li>
        <li>Resistance wire</li>
        <li>Key</li>
        <li>Screw gauge</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <ul>
        <li>
          The shunt resistance required to convert the galvanometer into ammeter
          of range I is calculated using the formula,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img alt="" src={AmmeterPro1} />
      </p>

      <p>
        G- the resistance of the galvanometer.
        <br />
        I- the range of desired ammeter
        <br />
        Ig = nk, the current required for full scale deflection in the
        galvanometer,
        <br />
        where, n- total number of divisions in the galvanometer
        <br />
        k- the figure of merit of the galvanometer.
        <br />
        Then, the length of the wire required for shunt can be calculated using
        the formula,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={AmmeterPro2} />
        <br />
        Where, ρ- the resistivity of material of the wire
        <br />
        r- the radius of the wire, which can be measured using a screw gauge.
      </p>

      <ul>
        <li>Cut the resistance wire at a length of (l+2) cm.</li>
        <li>
          Make two marks near the ends of the wire so that the distance between
          the marks is exactly l cm.
        </li>
        <li>
          The wire is now connected to the terminals of the galvanometer so that
          the marks are just outside the terminals of the galvanometer.
        </li>
        <li>
          The galvanometer with the shunt connected across its terminals is the
          converted ammeter of the desired range.
        </li>
        <li>Connections are made as shown in the circuit diagram.</li>
      </ul>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={AmmeterPro3} />
      </p>

      <ul>
        <li>
          The galvanometer with shunt resistance is connected in series to a
          battery through an ammeter, key and rheostat.
        </li>
        <li>Insert the key.</li>
        <li>
          Adjust the rheostat and set the current reading I of the given ammeter
          at a particular value.
        </li>
        <li>
          The reading of the galvanometer Ig’ is noted. Now, the current through
          the converted ammeter is calculated using the relation,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp;
        <img alt="" src={AmmeterPro4} />
      </p>

      <ul>
        <li>The error of the converted ammeter is calculated as I – I’.</li>
        <li>Repeat the experiment by changing the rheostat resistance.</li>
        <li>
          A graph can be drawn with (I – I’) along Y-axis and I’ along X-axis.
          This is called the correction graph.
        </li>
        <li>
          Thus, the converted ammeter is verified with an ammeter of the same
          range and a correction graph is obtained.
        </li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        ):
      </h1>

      <ul>
        <li>Select the ammeter range (I) from the drop down list.</li>
        <li>Select the galvanometer resistance (G) from the drop down list.</li>
        <li>
          Select the galvanometer range (n-total number of divisions on the
          galvanometer) from the drop down list.
        </li>
        <li>The cell voltage is fixed as 2V.</li>
        <li>Select the material of the wire from the drop down list.</li>
        <li>
          The radius of platinum wire is fixed as 0.1 mm and others is 0.2 mm.
        </li>
        <li>
          Enter the calculated value of shunt resistance (S), rounded for two
          digits, in the text box.
        </li>
        <li>Click on the ‘Submit’ button to verify your value.</li>
        <li>
          If the value is correct, enter the length (l) of the wire required for
          shunt, rounded for two digits, in the text box.
        </li>
        <li>Click on the ‘Submit’ button to verify your value.</li>
        <li>
          If the value is correct, click on the ‘Proceed’ button to go to the
          experiment.
        </li>
        <li>
          To see the circuit diagram, click on the 'Show/hide circuit diagram'
          check box seen inside the simulator window.
        </li>
        <li>
          Connections can be made as seen in the circuit diagram by clicking and
          dragging the mouse from one connecting terminal to the other
          connecting terminal of the devices to be connected.
        </li>
        <li>To insert the key, click on the ‘Insert key’ button.</li>
        <li>You can change the rheostat resistance using the slider.</li>
        <li>
          You can notice the corresponding ammeter and voltmeter readings.
        </li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Observations:</h1>

      <p>
        Resistance of the galvanometer, G = ............ohms
        <br />
        Figure of merit of the galvanometer, k = ............... amp./div.
        <br />
        Number of divisions in the galvanometer scale, n = ................
        <br />
        Current for full scale deflection, Ig = nk =............amp.
      </p>

      <p>Desired range of the converted ammeter (I) ---------mA</p>

      <p>Shunt resistance,</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img alt="" src={AmmeterPro5} />
      </p>

      <div >
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td >Trial No.</td>
              <td >Ammeter I in amps</td>
              <td >Galvanometer readin (Ig')</td>
              <td>
                <p>Current through the converted ammeter</p>

                <p>
                  <img alt="" src={AmmeterPro6} />
                </p>
              </td>
              <td>
                <p>Error of the converted ammeter</p>

                <p>&nbsp;(I - I')</p>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Calculations:</h1>

      <p>Shunt resistance,</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img alt="" src={AmmeterPro7} />
      </p>

      <p>
        Radius of the wire, r = --------cm = ------- X 10<sup>-2</sup> m.
      </p>

      <p>Resistivity of the material of the wire, ρ = --------------Ωm</p>

      <p>
        Length of the wire required for shunt can be calculated using the
        formula,
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
        <img alt="" src={AmmeterPro8} />
      </p>

      <h1 className={classes.headTag}>Result:</h1>

      <p>
        The given galvanometer is converted into an ammeter of range 0 to ………….A
        by connecting a shunt resistance of …………ohms.
      </p>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Conversion of Galvanometer to Ammeter.
          Retrieved 19 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=26&cnt=2
        </Typography>
      </div>
    </div>
  );
}
