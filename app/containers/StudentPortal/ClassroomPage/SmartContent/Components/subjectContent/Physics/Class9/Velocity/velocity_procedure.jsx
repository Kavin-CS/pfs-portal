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
import VelocityPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Velocity1/velocity-pro1.png';
import VelocityPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Velocity1/velocity-pro2.png';
import VelocityPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Velocity1/velocity-pro3.jpg';


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
      <h1 className={classes.headTag}>Materials Required:</h1>

      <p>
        <img alt="" src={VelocityPro1} />
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <h2 className={classes.secondaryTag}>For Transverse Waves</h2>

      <ol>
        <li>
          Take a slinky and place it lengthwise on the smooth surface of the
          table.
        </li>
        <li>Tie one end of the slinky with the fixed hook.</li>
        <li>
          Hold the free end of the slinky and stretch it (1 to 3 m depending
          upon the nature of slinky).
        </li>
        <li>
          Move your hand periodically and uniformly at right angles to the
          length of the slinky.
        </li>
        <li>
          Observe the&nbsp; propagation of the wave through the slinky and
          observe&nbsp; the formation of crests and troughs.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>For Longitudinal Waves</h2>

      <ol start="6" type="1">
        <li>
          Compress the free end of the slinky periodically and observe the
          slinky.
        </li>
      </ol>

      <p>
        <strong>
          Did you see an alternate compressions and rarefactions passing through
          the slinky?
        </strong>
      </p>

      <ol start="7" type="1">
        <li>
          Measure the wavelength by measuring the distance between two
          consecutive troughs (T and T) or two crests (C and C) in case of
          transverse wave. In case of longitudinal wave, λ is equal to distance
          between two consecutive compressions (C and C) or rarefactions (R and
          R).
        </li>
        <li>
          Note the time as pulse (wave) passes through slinky for a particular
          distance from which we can find out the velocity of the wave.
        </li>
      </ol>

      <p>&nbsp;</p>

      <p>
        <img alt="" src={VelocityPro2} />
      </p>

      <h2 className={classes.secondaryTag}>What are your observations?</h2>

      <ol>
        <li>
          On jerking the free end of a slinky at a right angle to its length,
          there is formation of crests and troughs, along the slinky from free
          end toward its fixed end.
        </li>
        <li>
          When regular compressions are given at the free end of the slinky,
          there is movement of wave from free end towards its fixed end. The
          movement of the wave is associated with the formation of compression
          and rarefactions.
        </li>
      </ol>

      <h1 className={classes.headTag}>Calculations:</h1>

      <p>
        1.&nbsp;&nbsp;&nbsp; &nbsp;Wavelength (λ) = the distance covered by one
        complete rarefaction and one complete compression.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        = The distance between two consecutive crests or troughs
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        = ................ cm.
        <br />
        &nbsp;
        <br />
        2.&nbsp;&nbsp;&nbsp; The time taken in completing one wavelength (λ) ,T
        =............... second.
        <br />
        &nbsp;
        <br />
        3.&nbsp;&nbsp;&nbsp; The velocity of a pulse (wave) along slinky (v)
      </p>

      <p>
        <br />
        &nbsp; <img alt="" src={VelocityPro3} />
      </p>

      <h1 className={classes.headTag}>Simulator Procedure:</h1>

      <ol start="1" type="1">
        <li>
          The simulation can be performed in two different wave types
          –Transverse and longitudinal. &nbsp;Select your desired wave from the
          drop down box of ‘Select wave type’.
        </li>
        <li>
          Select the desired length and pulse speed of the slinky using
          respective slider.
        </li>
        <li>Now, click on the start button to do the experiment.</li>
        <li>A wave or pulse is generated in the slinky</li>
        <li>
          While moving the pulse through the slinky, a particular position of
          the wave is noted and the timer is started..
        </li>
        <li>Stop the timer when the pulse reaches the specified distance.</li>
        <li>Note the distance travelled and its corresponding time.</li>
        <li>Calculate the velocity of pulse propagated through the slinky.</li>
      </ol>

      <h1 className={classes.headTag}>Observations:&nbsp;</h1>

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
              <td>Length of slinky (cm)</td>
              <td>Distance travelled by the pulse (cm )</td>
              <td>Distance travelled by the pulse (m)</td>
              <td>Time (s) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
              <td>Velocity = Distance/time (m/s)</td>
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

      <h1 className={classes.headTag}>Result:&nbsp;</h1>

      <p>
        The velocity of a pulse (wave) propagated through a stretched slinky
        =………………..m/s
      </p>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ol start="1" type="1">
        <li>
          The slinky should have appropriate length, elasticity and flexibility.
        </li>
        <li>One end of the slinky should be fixed properly.</li>
        <li>The top of the table should be smooth.</li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Velocity of a Pulse Propagated Through a
          Slinky. Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=93&cnt=2
        </Typography>
      </div>
    </div>
  );
}
