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
import PotentiometerPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/PotentiometerCell/potentio2.jpg'
import PotentiometerPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/PotentiometerCell/comparisonemf_pro1.png'
import PotentiometerPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/PotentiometerCell/comparisonemf_pro2 .png'

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
        <li>Potentiometer</li>
        <li>Daniel cell</li>
        <li>Leclanche cell</li>
        <li>Jockey</li>
        <li>Battery eliminator</li>
        <li>Resistance box</li>
        <li>Galvanometer</li>
        <li>One way key</li>
        <li>Two way key</li>
        <li>Rheostat</li>
        <li>Ammeter</li>
        <li>Connecting wires</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <p>
        <img alt="" src={PotentiometerPro1} />
      </p>

      <ul>
        <li>
          Arrange the required materials on a table and make the connections as
          per the connection diagram.
        </li>
        <li>Tight the plugs of the resistance box.</li>
        <li>Note the reading on the ammeter.</li>
        <li>
          To test the connection, insert plug in the one way key k<sub>1</sub>{' '}
          and also in between the terminals a and c of the two way key.
          Introduce a sufficiently high resistance on the resistance box (R.B).
          Place the jockey at the two end points of the wire. Press the jockey
          at both end of the potentiometer wire and note the deflection in
          galvanometer. If the galvanometer shows opposite deflection, the
          connections are correct.
        </li>
        <li>
          Now, gently slide the jockey along the potentiometer wire and stop
          when null point is obtained.
        </li>
        <li>
          Measure the length l<sub>1</sub> between this point and the end P of
          the potentiometer. It is the balancing length for the cell E
          <sub>1</sub>.
        </li>
        <li>
          Disconnect the cell E<sub>1</sub> by removing the plug from the gap ac
          of the two way key and connect the cell E<sub>2</sub> by inserting
          plug into the gap bc of the two way key.
        </li>
        <li>
          Again slide the jockey along the potentiometer wire to obtain the null
          point. Measure the new balancing length l<sub>2</sub> for the cell E
          <sub>2</sub> based on this point.
        </li>
        <li>
          Make sure that the reading on the ammeter is constant throughout the
          observation.
        </li>
        <li>
          Repeat the experiment by increasing the current by adjusting the
          rheostat and record the observations.
        </li>
        <li>
          Each time, the ratio between the emf’s of the given cells can be
          calculated using the relation,
        </li>
      </ul>

      <p>
        <img
          alt=""
          src={PotentiometerPro2}
        />
      </p>

      <h1 className={classes.headTag}>
        Simulator Procedure (As performed through{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <ul>
        <li>Select the first primary cell form the drop down list.</li>
        <li>Select the second primary cell form the drop down list.</li>
        <li>Select the rheostat resistance using the slider.</li>
        <li>
          In the case of other cells, you can select the emf of the first and
          second cells using the slider.
        </li>
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
          Once all connections are made, click and drag the one way key to
          insert it into the switch.
        </li>
        <li>
          Drag the plug and insert it in the first gap of the two way key.
        </li>
        <li>
          Slide the jockey along the potentiometer wire to obtain the null
          point.
        </li>
        <li>You can see the first balancing length in the popup.</li>
        <li>
          Now drag the plug and insert it in the second gap of the two way key.
        </li>
        <li>
          Slide the jockey along the potentiometer wire to obtain the null
          point.
        </li>
        <li>You can see the second balancing length in the popup.</li>
        <li>
          You can compare the emf values of the two cells using the value of
          first and second resonating lengths.
        </li>
        <li>
          You can repeat the experiment by increasing the current by adjusting
          the rheostat.
        </li>
        <li>
          To verify your result click on the ‘Show result’ check box. &nbsp;
        </li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td rowspan="2">No.</td>
              <td rowspan="2">
                <p>Ammeter reading&nbsp;(A)</p>
              </td>
              <td colspan="2">
                <p>Balancing length when</p>
              </td>
              <td rowspan="2">
                <img
                  alt=""
                  src={PotentiometerPro3}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  E<sub>1</sub>&nbsp;in the circuit,&nbsp;l<sub>1</sub>
                  &nbsp;(cm)
                </p>
              </td>
              <td>
                <p>
                  E<sub>2</sub>&nbsp;in the circuit,&nbsp;l<sub>2&nbsp;</sub>
                  (cm)
                </p>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>2</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>3</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>4</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>5</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>6</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Calculations</h1>

      <p>
        Calculate the ratio of E<sub>1</sub> and E<sub>2</sub> for each set of l
        <sub>1</sub> and l<sub>2</sub>. The mean of the calculated values gives
        the ratio of emf’s of the two given primary cells.
      </p>

      <h1 className={classes.headTag}>Result</h1>

      <p>The emf’s of the two given primary cells are compared.</p>

      <p>
        The ratio of emf’s of the two given primary cells, E<sub>1</sub>/E
        <sub>2 </sub>= ..............
      </p>

      <p>&nbsp;</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). The potentiometer- Comparison of emf.
          Retrieved 18 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=231&cnt=2
        </Typography>
      </div>
    </div>
  );
}
