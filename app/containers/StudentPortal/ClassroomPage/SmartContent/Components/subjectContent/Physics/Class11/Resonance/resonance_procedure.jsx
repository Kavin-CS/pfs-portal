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
import ResonancePro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-pro1.png';
import ResonancePro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-pro2.png';
import ResonancePro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-pro3.png';
import ResonancePro4 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-pro4.png';


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
      <h1 className={classes.headTag}>Materials Required</h1>

      <ul>
        <li>Resonance column apparatus</li>
        <li>Tuning forks of known frequency</li>
        <li>Rubber hammer</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>
          The inner tube of the resonance column is lowered to minimum so that
          the length of air column inside the tube is very small.
        </li>
        <li>
          Take a tuning fork of known frequency and striking it with a rubber
          hammer. The tuning fork now produces longitudinal waves with a
          frequency equal to the natural frequency of the tuning fork.
        </li>
        <li>
          Place the vibrating tuning fork horizontally above the tube. Sound
          waves are passes down to the tube and reflect back at the water
          surface.
        </li>
        <li>
          Now, raise the tube and the tuning fork until a maximum sound is
          heard.
        </li>
        <li>
          Measure the length of air column at that position. This is taken as
          the first resonant length, l<sub>1</sub>.
        </li>
        <li>
          Then raise the tube approximately about three times the first resonant
          length.
        </li>
        <li>
          Excite the tuning fork again and place it on the mouth of the tube.
        </li>
        <li>Change the height of the tube until the maximum sound is heard.</li>
        <li>
          Measure the length of air column at that position. This is taken as
          the second resonant length, l<sub>2</sub>.
        </li>
        <li>
          We can now calculate the velocity of sound in air at room temperature
          by using the relation,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={ResonancePro1}
        />
      </p>

      <ul>
        <li>
          Repeat the experiment with tuning forks of different frequencies and
          in each time, calculate the value of v.
        </li>
        <li>
          The mean of the calculated values will give the velocity of sound in
          air at room temperature.
        </li>
        <li>
          By using the value of v, we can calculate the velocity of sound in air
          at 00C as,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={ResonancePro2}
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Where, &nbsp;v<sub>0</sub> - velocity
        of sound in air at 0<sup>0</sup>C.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;v &nbsp;- velocity of sound in air at temperature t.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;t &nbsp;- Room temperature.
      </p>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <ul>
        <li>Select the surrounding from the drop down list.</li>
        <li>Select the surrounding temperature using the slider.</li>
        <li>Select the diameter of the tube using the slider.</li>
        <li>Select the frequency of the tuning fork using the slider.</li>
        <li>Click on the ‘Hit tuning fork’ button to start/stop vibration.</li>
        <li>Click on the ‘Sound On’ button to hear the sound.</li>
        <li>
          Drag the inner tube/Change the slider to adjust the height of the air
          column
        </li>
        <li>Drag the apparatus to move it down.</li>
        <li>Click on the zoom in icon to view the zoomed area.</li>
        <li>Click on the ‘Show result’ button to see the result.</li>
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
              <td rowspan="2">
                No.
              </td>
              <td rowspan="2">
                Frequency of tuning fork, ν (Hz)
              </td>
              <td colspan="3">
                First resonating length, l<sub>1</sub> (cm)
              </td>
              <td colspan="3">
                Second resonating length, l<sub>2</sub> (cm)
              </td>
              <td rowspan="2">
                <p>
                  l<sub>2</sub>-l<sub>1</sub> (×10<sup>-2</sup> cm)
                </p>
              </td>
              <td rowspan="2">
                <p>
                  Velocity,{' '}
                  <img
                    alt=""
                    src={ResonancePro3}
                  />
                  &nbsp;(m/s)
                </p>
              </td>
            </tr>
            <tr>
              <td >1</td>
              <td >2</td>
              <td >Mean</td>
              <td >1</td>
              <td >2</td>
              <td >Mean</td>
            </tr>
            <tr>
              <td>1</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>2</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>3</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>4</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>5</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
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

      <h1 className={classes.headTag}>Calculations</h1>

      <p>
        Room temperature, t &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;= .............&nbsp;<sup>0</sup>C
      </p>

      <p>Velocity of sound in air at room temperature, v = ………... m/s</p>

      <p>
        Velocity of sound in air at 0<sup>0</sup>C, &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
        <img
          alt=""
          src={ResonancePro4}
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;= ............. m/s
      </p>

      <h1 className={classes.headTag}>Result</h1>

      <p>Velocity of sound in air at room temperature, v =……....... m/s</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Resonance Column. Retrieved 24 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=36&cnt=2
        </Typography>
      </div>
    </div>
  );
}
