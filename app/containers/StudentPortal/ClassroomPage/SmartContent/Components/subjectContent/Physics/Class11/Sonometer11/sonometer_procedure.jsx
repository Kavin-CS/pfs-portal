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
import Sonometer1Pro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer111/sonometer1-pro1.jpg';
import Sonometer1Pro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer111/sonometer1-pro2.jpg';


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
    fontSize: 17,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Materials Required</h1>

      <ul>
        <li>A sonometer</li>
        <li>A set of tuning forks of known frequency</li>
        <li>0.5kg weight hanger</li>
        <li>Some 0.5kg slotted weights</li>
        <li>Rubber pad</li>
        <li>Paper rider</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <h2 className={classes.secondaryTag}>To find the relation between frequency and length</h2>

      <ul>
        <li>Place the sonometer on the table.</li>
        <li>
          Make sure that the pulley is frictionless. If you feel any friction,
          oil them.
        </li>
        <li>
          Stretch the wire by placing a suitable maximum load on the weight
          hanger.
        </li>
        <li>
          Move the wooden bridges outward, so that the length of wire between
          the bridges is maximum.
        </li>
        <li>
          Take a tuning fork of known frequency. Make it vibrate by strike its
          prong with a rubber pad. Bring it near the ear.
        </li>
        <li>Pluck the sonometer wire and leave it to vibrate.&nbsp;</li>
        <li>
          Compare the sounds produced by tuning fork and sonometer wire. (Sound
          which has low pitch has less frequency).
        </li>
        <li>
          Gently adjust the bridges for decreasing the length of wire, till the
          two sounds appear alike.
        </li>
        <li>Put an inverted V shaped paper rider on the middle of the wire.</li>
        <li>
          Vibrate the tuning fork and touch the lower end of its handle with
          sonometer board. The wire vibrates due to resonance and the paper
          rider falls.
        </li>
        <li>
          Measure the length of wire between the bridges using a meter scale. It
          is the resonant length and record it in the ‘length decreasing’
          column.
        </li>
        <li>
          Now, bring the bridges closer and then slowly increase the length of
          the wire till the paper rider falls.
        </li>
        <li>
          Measure the length of wire and record it in ‘length increasing’
          column.
        </li>
        <li>
          Repeat the above steps with tuning forks of other frequencies, and
          find resonant length each time.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>To find the relation between length and tension</h2>

      <ul>
        <li>Select a tuning fork of known frequency</li>
        <li>Set the load in the weight hanger as maximum.</li>
        <li>
          Repeat the steps in the previous section to find out the resonant
          length.
        </li>
        <li>
          Now, remove 0.5kg weight from the weight hanger and find resonant
          length with same tuning fork.
        </li>
        <li>
          Repeat the experiment by removing slotted weights one by one in equal
          steps of 0.5kg.
        </li>
        <li>Record the observations each time.</li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <ul>
        <li>Select the environment from the drop down list.</li>
        <li>Select the material of the wire from the drop down list.</li>
        <li>Select the diameter of the wire using the slider.</li>
        <li>Select the weight of the slotted weights using the slider.</li>
        <li>Select the frequency of the tuning fork using the slider.</li>
        <li>
          Click on the ‘Hit tuning fork’ button to start/stop the vibration of
          tuning fork and touch it with the sonometer board.
        </li>
        <li>Change the position of bridge A using the slider.</li>
        <li>Change the position of bridge B using the slider.</li>
        <li>
          Click on the ‘Place the paper rider’ button to place the paper rider
          back.
        </li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <h2 className={classes.secondaryTag}>To find the relation between frequency and length</h2>

      <p>Constant tension on the wire, T= .........kg</p>

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
                Sl No.
              </td>
              <td rowspan="2">
                Frequency of tuning fork used, f (Hz)
              </td>
              <td colspan="3">
                Resonant length of wire
              </td>
              <td rowspan="2">
                <p>
                  1/<em> </em>l
                </p>

                <p>
                  (cm<sup>-1</sup>)
                </p>
              </td>
            </tr>
            <tr>
              <td>
                Length increasing l<sub>1</sub>(cm)
              </td>
              <td>
                <p>
                  Length decrasing l<sub>2</sub> (cm)&nbsp;
                </p>
              </td>
              <td>
                Mean&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                l <em>= </em>(l<sub>1</sub> +l<sub>2</sub>) / 2
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

      <h2 className={classes.secondaryTag}>To find the relation between length and tension</h2>

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
                Sl No.
              </td>
              <td rowspan="2">
                Load, M (kg)
              </td>
              <td rowspan="2">
                Tension, T=Mg (N)
              </td>
              <td colspan="3" rowspan="1">
                Resonant length of wire
              </td>
              <td rowspan="2">
                <p>
                  l<sup> 2</sup>
                  <sup> </sup>
                </p>

                <p>
                  (cm<sup>2</sup>)
                </p>
              </td>
              <td rowspan="2">
                <p>
                  l<sup> 2 </sup>/ T
                </p>

                <p>
                  (cm<sup>2 </sup>/ N)
                </p>
              </td>
            </tr>
            <tr>
              <td>
                Length increasing l<sub>1</sub>(cm)
              </td>
              <td>
                Length decrasing l<sub>2</sub> (cm)
              </td>
              <td>
                Mean &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; l = (l<sub>1</sub>{' '}
                +l<sub>2</sub>) / 2
              </td>
            </tr>
            <tr>
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

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Mean, l<sup>2</sup> / T =.................. cm<sup>2</sup> / N
      </p>

      <h1 className={classes.headTag}>Calculations</h1>

      <h2 className={classes.secondaryTag}>To find the relation between frequency and length</h2>

      <ul>
        <li>Find mean resonant length, l</li>
        <li>Calculate 1/l in each case.</li>
        <li>
          Plot a graph between frequency and reciprocal of length, taking
          frequency along X axis and reciprocal length along Y axis.
        </li>
      </ul>

      <p>
        <img alt="" src={Sonometer1Pro1} />
      </p>

      <h2 className={classes.secondaryTag}>To find the relation between length and tension</h2>

      <ul>
        <li>
          Find square of resonant length (l<sup>2</sup>) each time.
        </li>
        <li>
          Calculate corresponding l<sup>2</sup>/T value.
        </li>
        <li>
          Plot a graph between square of length and tension, taking tension
          along X axis and square of length along Y axis.
        </li>
      </ul>

      <p>
        <img alt="" src={Sonometer1Pro2} />
      </p>

      <h1 className={classes.headTag}>Results</h1>

      <p>
        The frequency V/s reciprocal of length graph is a straight line, which
        indicates that, frequency is inversely proportional to resonant length.
      </p>

      <p>
        From the tabular column, it is found that; l<sup>2</sup>/T is a
        constant. The graph between square of length and tension is a straight
        line, which shows that tension is directly proportional to square of
        resonant length.
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Sonometer. Retrieved 24 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=5&sim=227&cnt=2
        </Typography>
      </div>
    </div>
  );
}
