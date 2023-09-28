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
import GalvanometerPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/figureOfMerrit_pro1.png';
import GalvanometerPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/figureOfMerrir_pro2.png';
import GalvanometerPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/figureOfMerrit_pro3.png';
import GalvanometerPro4 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/figureOfMerrit_pro4.png';
import GalvanometerPro5 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/figureOfMerrit_pro5.png';
import GalvanometerPro6 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/figureOfMerrit_pro6.png';
import GalvanometerPro7 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/figureOfMerrit_pro7.png';
import GalvanometerPro8 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/figureOfMerrir_pro8.png';
import GalvanometerPro9 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/figureOfMerrit_pro9.png';

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
        <li>A weston type galvanometer</li>
        <li>A battery or battery eliminator</li>
        <li>Two resistance boxes</li>
        <li>Two one-way keys</li>
        <li>Connecting wires</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <h2>
        <em>Resistance of galvanometer by half deflection method :</em>
      </h2>

      <ul>
        <li>
          Arrange the components on a table and connect them as per the circuit
          diagram.
        </li>
        <li>Make sure that plugs of the resistance boxes are tight.</li>
        <li>
          Take out a high resistance from the resistance box 1 and insert the
          key k<sub>1</sub>.
        </li>
        <li>
          Adjust the resistance from this resistance box to get maximum
          galvanometer deflection.
        </li>
        <li>Note the deflection and record it as θ in the tubular column.</li>
        <li>
          Insert the key k<sub>2 </sub>also, without changing the value on the
          resistance box.
        </li>
        <li>
          Now, adjust the resistance from the low resistance box such that
          galvanometer shows deflection which is exactly half of the previous
          reading.
        </li>
        <li>Record the value of low resistance box.</li>
        <li>
          We can repeat the experiment by changing the value of high resistance
          R and adjusting low resistance S.
        </li>
        <li>
          The resistance of the given galvanometer can be calculated each time
          by using the relation G= RS/(R-S).
        </li>
      </ul>

      <h2>
        <em>Figure of merit of the galvanometer :</em>
      </h2>

      <ul>
        <li>
          Release key k<sub>2</sub> from the connection. Insert key k
          <sub>1</sub>.
        </li>
        <li>
          Adjust the value of R such that the galvanometer shows a certain
          deflection.
        </li>
        <li>Record the observations in a tabular column.</li>
        <li>
          Repeat the experiment by changing the value of R and note the
          galvanometer deflection each time.
        </li>
        <li>
          We can find the figure of merit of the galvanometer by using the
          equation, k= E/(R+G)θ.
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
        <li>Select the ‘Galvanometer’ form the drop down list.</li>
        <li>
          To see the circuit diagram, click on the ‘Show circuit diagram’ check
          box seen inside the simulator window.
        </li>
        <li>
          Connections can be made as seen in the circuit diagram by clicking and
          dragging the mouse from one connecting terminal to the other
          connecting terminal of the devices to be connected.
        </li>
        <li>
          Once all connections are made, click and drag key 1 to insert it into
          the switch.
        </li>
        <li>
          You can select the desired large resistance from the resistance box.
        </li>
        <li>The galvanometer shows a deflection.</li>
        <li>
          Now click and drag key 2 to insert it into the switch without changing
          the value of the resistance.
        </li>
        <li>
          Select the resistance from the small resistance box such that the
          galvanometer shows deflection which is exactly half of the previous
          reading.
        </li>
        <li>To see the result, click on the ‘Show result’ check box.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <h2>
        R<em>esistance of the galvanometer by half deflection method.</em>
      </h2>

      <div >
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td>No.</td>
              <td>
                <p>Resistance, R</p>

                <p>
                  (
                  <img alt="" src={GalvanometerPro1} />)
                </p>
              </td>
              <td>
                <p>Deflection in the</p>

                <p>galvanometer,&nbsp;</p>

                <p>
                  <img alt="" src={GalvanometerPro2} />
                </p>
              </td>
              <td>
                <p>Shunt Resistance, S&nbsp;</p>

                <p>
                  (
                  <img alt="" src={GalvanometerPro3} />)
                </p>
              </td>
              <td>
                <p>Half deflection,</p>

                <p>
                  &nbsp;
                  <img alt="" src={GalvanometerPro4} />
                </p>
              </td>
              <td>
                <p>Galvanometer</p>

                <p>resistance</p>

                <p>
                  <img alt="" src={GalvanometerPro5} />
                </p>

                <p>
                  (
                  <img alt="" src={GalvanometerPro6} />)
                </p>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
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
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
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
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>
        <em>Figure of merit of the galvanometer where E= 2V</em>
      </h2>

      <div >
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td >No.</td>
              <td>
                <p>Resistance,&nbsp;R&nbsp;</p>

                <p>
                  (
                  <img alt="" src={GalvanometerPro7} />)
                </p>
              </td>
              <td>
                <p>
                  Deflection,&nbsp;
                  <img alt="" src={GalvanometerPro8} />
                </p>

                <p>(div.)</p>
              </td>
              <td>
                <p>Figure of Merit,</p>

                <p>
                  &nbsp;
                  <img alt="" src={GalvanometerPro9} />
                </p>

                <p>( Amp/div )</p>
              </td>
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Calculations</h1>

      <p>
        Calculate the value of G in each case and record it in the tabular
        column. The mean of these calculated values will give the resistance of
        the given galvanometer.
      </p>

      <p>
        Calculate the value of k in each case and record it in the tabular
        column. The mean of these calculated values will give the figure of
        merit of the given galvanometer.
      </p>

      <h1 className={classes.headTag}>Results</h1>

      <p>
        The resistance of the given galvanometer, G &nbsp; &nbsp; =--------- Ω
        <br />
        The figure of merit of the given galvanometer, k =---------- Amp / div.
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Figure of Merit of a galvanometer.
          Retrieved 19 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=152&cnt=2
        </Typography>
      </div>
    </div>
  );
}
