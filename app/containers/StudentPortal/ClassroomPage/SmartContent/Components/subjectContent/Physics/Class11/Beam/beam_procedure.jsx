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
import BeamPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Beam1/beam-pro1.png';
import BeamPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Beam1/beam-pro2.png';
import BeamPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Beam1/beam-pro3.png';


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
      <h1 className={classes.headTag}>Materials required:</h1>

      <ul>
        <li>&nbsp; &nbsp; Beam balance</li>
        <li>&nbsp;&nbsp; &nbsp;Box of weights</li>
        <li>&nbsp;&nbsp; &nbsp;A rectangular wooden block</li>
        <li>&nbsp; &nbsp; Pendulum bob</li>
      </ul>

      <h1 className={classes.headTag}>Procedure:</h1>

      <p>
        <strong>How does a beam balance work?</strong>
      </p>

      <p>
        The leveling screws at the base are adjusted to make the pillar
        vertical. The beam is gently raised by turning the handle. If the
        pointer does not oscillate almost equally on either side of the central
        division of the scale, adjust the nuts suitably at the ends of the
        beam.&nbsp;
      </p>

      <p>
        Before determining the mass of the body one needs to calibrate the beam
        balance.
      </p>

      <h2 className={classes.secondaryTag}>
        1.&nbsp;&nbsp; &nbsp;To find the zero resting point (R<sub>0</sub>)
      </h2>

      <p>
        The balance is released and the pointer is allowed to oscillate freely.
        Three or five successive readings (three to the left and two to the
        right on the scale against which the pointer turns back during
        oscillations) are taken. These readings are called the turning points.
        The average turning point on the left and the average turning point on
        the right are separately calculated. The mean of these averages gives
        the zero resting point ( R<sub>0</sub>).
      </p>

      <p>The method of calculation is given below.</p>

      <div >
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td colspan="2" >
                Turning Points (T.P)
              </td>
            </tr>
            <tr>
              <td >Left</td>
              <td >Right</td>
            </tr>
            <tr>
              <td >
                <p>X1</p>

                <p>X2</p>

                <p>X3</p>
              </td>
              <td >
                <p>Y1</p>

                <p>Y2</p>
              </td>
            </tr>
            <tr>
              <td>Mean T.P</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >
                <img
                  alt=""
                  src={BeamPro1}
                  
                />
                ​
              </td>
              <td >
                <img
                  alt=""
                  src={BeamPro2}
                />
                ​
              </td>
            </tr>
            <tr>
              <td colspan="2" >
                Resting Point ,
                <img
                  alt=""
                  src={BeamPro3}
                />
                ​
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>2.&nbsp;&nbsp; &nbsp;To find the sensibility of the balance (S)</h2>

      <p>
        <br />
        For finding the sensibility, 10 mg weight is placed in the right pan and
        the resting point (R1) is determined as before. Then the sensibility S
        is calculated using the equation (2) explained in the 'Theory' tab. .
      </p>

      <h2>&nbsp;Now let’s find out the mass of the body (M)&nbsp; &nbsp;</h2>

      <p>
        The balance is arrested by turning the handle. The given body is placed
        in the left pan and it is counter balanced by a known mass (W) in the
        right pan. The resting point (R) is determined. The correct mass of the
        body can be calculated using the relation (1) explained in the the
        'Theory' tab.
      </p>

      <p>
        <em>
          Note: The pointer of the beam balance always rests near the pan having
          less weight.
        </em>
      </p>

      <h1 className={classes.headTag}>Simulation Procedure :</h1>

      <p>For Sensibility Checking</p>

      <ul>
        <li>Release the knob.</li>
        <li>
          Note three consecutive turning points (three at left and two at
          right).
        </li>
        <li>Arrest the knob.</li>
        <li>Click on open door.</li>
        <li>Place 10 mg in the right pan of the balance.</li>
        <li>Click on close door button.</li>
        <li>Now release the knob.</li>
        <li>
          Note three consecutive turning points(three &nbsp;at left and two at
          right ).
        </li>
      </ul>

      <p>After sensibility calculation,</p>

      <ul>
        <li>Click on the open door button.</li>
        <li>Click on 10 mg to remove it from the balance.</li>
        <li>Select an object by a single click on bob/wooden block.</li>
        <li>
          The object would counter balanced by selecting weights given on a
          single click.
        </li>
        <li>Click on close door button.</li>
        <li>Release the knob to note the turning points as before.</li>
        <li>
          Repeat the steps for adding more weights or reduce weights to counter
          poise the weight in the left pan.
        </li>
        <li>Click on the show result button to view the result.</li>
        <li>
          A reset button is also provided to reset the entire the simulation.
        </li>
      </ul>

      <p>
        <strong>Note</strong>: The pointer of the Beam balance always rest near
        the pan having lesser weight.
      </p>

      <h1 className={classes.headTag}>Observations:</h1>

      <p>To find the weight of the body&nbsp;</p>

      <div >
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td colspan="2" rowspan="1">
                Loads in Pan
              </td>
              <td colspan="2" rowspan="1">
                Turning Points
              </td>
              <td colspan="2" rowspan="1">
                Mean Turning Points
              </td>
              <td>Resting Point</td>
            </tr>
            <tr>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
              <td>Right</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Nil</td>
              <td>Nil</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                R<sub>0</sub>=
              </td>
            </tr>
            <tr>
              <td>Nil</td>
              <td>10 mg</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                R<sub>1</sub>=
              </td>
            </tr>
            <tr>
              <td>
                <p>Given&nbsp;</p>

                <p>Body</p>
              </td>
              <td>W=----g</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>R=</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>&nbsp;</p>

      <h1 className={classes.headTag}>Calculations</h1>

      <p>
        <br />
        1.&nbsp;&nbsp; &nbsp;Sensibility, &nbsp;
        =................................................g / div
        <br />
        2.&nbsp;&nbsp; &nbsp;Correct mass of the body, &nbsp; &nbsp;=
        ............................g&nbsp;
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; =………………kg
      </p>

      <h1 className={classes.headTag}>Result</h1>

      <p>
        <br />
        The mass of the body = ………...............……kg
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Beam Balance. Retrieved 23 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=185&cnt=2
        </Typography>
      </div>
    </div>
  );
}
