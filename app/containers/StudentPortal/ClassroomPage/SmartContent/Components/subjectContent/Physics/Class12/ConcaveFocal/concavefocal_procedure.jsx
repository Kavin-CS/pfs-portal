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
import ConcaveFocalPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/ConcaveFocal1/concavefocal-pro1.png';
import ConcaveFocalPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/ConcaveFocal1/concavefocal-pro2.png';
import ConcaveFocalPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/ConcaveFocal1/concavefocal-pro3.png';
import ConcaveFocalPro4 from '../../../../../../../../../assets/Images/Subjects/Physics/ConcaveFocal1/concavefocal-pro4.png';
import ConcaveFocalPro5 from '../../../../../../../../../assets/Images/Subjects/Physics/ConcaveFocal1/concavefocal-pro5.jpg';
import ConcaveFocalPro6 from '../../../../../../../../../assets/Images/Subjects/Physics/ConcaveFocal1/concavefocal-pro6.jpg';


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
  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Lens in Contact Method</h1>

      <h2 className={classes.secondaryTag}>Materials required:</h2>

      <ul>
        <li>Illuminated wire gauze</li>
        <li>Lens stand</li>
        <li>Screen</li>
        <li>Metre scale</li>
        <li>A convex lens of short focal length</li>
        <li>Concave lens</li>
      </ul>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:</h2>

      <ul>
        <li>
          Keep the given convex lens of known focal length, f<sub>1</sub>, in
          contact with the concave lens whose focal length to be determined.
          This forms the combination of lenses.
        </li>
        <li>
          It is placed between the illuminated wire gauze and the screen at a
          fixed distance away from the wire gauze. It is taken as u cm.
        </li>
        <li>
          The position of the screen is adjusted to get a clear image of the
          wire gauze on the screen.
        </li>
        <li>
          Measure the distance between the combination of lenses and the screen.
          It is taken as v cm.
        </li>
        <li>
          Calculate the focal length of the combination using the formula:
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
        <img alt="" src={ConcaveFocalPro1} />
      </p>

      <ul>
        <li>
          Repeat the experiment by placing the combination of lenses at
          different distances away from the wire gauze.
        </li>
        <li>Then calculate the mean value of F.</li>
        <li>
          Using the values of f<sub>1</sub> and F, the focal length of the given
          concave lens can be calculated using the formula:
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <img alt="" src={ConcaveFocalPro2} />
      </p>

      <h2 className={classes.secondaryTag}>Observations:</h2>

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
              <td rowspan="2">SI No.</td>
              <td colspan="2">
                Distance between the combination of lenses and
              </td>
              <td rowspan="2">
                <p>Focal Length</p>

                <p>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img alt="" src={ConcaveFocalPro3} />
                </p>
              </td>
            </tr>
            <tr>
              <td>Object u (cm)</td>
              <td>Image v (cm)</td>
            </tr>
            <tr>
              <td>1</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>2</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>3</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>4</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>5</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Calculations:</h2>

      <ul>
        <li>Focal length of the combination lens, Mean F = …………cm</li>
        <li>
          Focal length of convex lens, f<sub>1</sub> = ……………cm
        </li>
        <li>Therefore, the focal length of the given concave lens, &nbsp;</li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;
        <img alt="" src={ConcaveFocalPro4} />
      </p>

      <h2 className={classes.secondaryTag}>Results:</h2>

      <p>
        Focal length of the given concave lens by lens in contact method =
        …………cm
      </p>

      <h1 className={classes.headTag}>Lens Out of Contact Method</h1>

      <h2 className={classes.secondaryTag}>Materials required:</h2>

      <ul>
        <li>Illuminated wire gauze</li>
        <li>Two stands</li>
        <li>Screen</li>
        <li>Metre scale</li>
        <li>A convex lens of short focal length</li>
        <li>Concave lens</li>
      </ul>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:</h2>

      <ul>
        <li>The given convex lens is mounted on a stand.</li>
        <li>
          It is placed between the illuminated wire gauze and the screen at a
          fixed distance away from the wire gauze.
        </li>
        <li>
          The position of the screen is adjusted to get a clear image of the
          wire gauze on the screen at I<sub>1</sub>.
        </li>
      </ul>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={ConcaveFocalPro5} />
      </p>

      <ul>
        <li>
          Now, the given concave lens (L) is mounted between the screen and the
          convex lens without any rearrangement.
        </li>
        <li>
          The distance between the screen and the concave lens LI<sub>1</sub> is
          measured as u cm.
        </li>
        <li>
          Now, the screen alone is moved back to obtain a clear image I
          <sub>2</sub> on the screen.
        </li>
        <li>
          The distance between the concave lens and the screen, LI<sub>2</sub>{' '}
          is measured as v cm.
        </li>
      </ul>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={ConcaveFocalPro6} />
      </p>

      <ul>
        <li>
          Using the values of u and v, the focal length of the concave lens is
          calculated using the formula, f= uv/u-v.
        </li>
        <li>
          To repeat the experiment, remove the concave lens and bring the screen
          to the initial position. Then place the concave lens at a different
          position in between the convex lens and screen and record the values
          in the tabular column.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Observations:</h2>

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
              <td rowspan="2">SI No.</td>
              <td colspan="2">Distance between concave lens and</td>
              <td rowspan="2">
                <p>Focal length of concave lens</p>

                <p>f = uv/u-v cm</p>
              </td>
            </tr>
            <tr>
              <td>First image(u cm)</td>
              <td>Second Image (v cm)</td>
            </tr>
            <tr>
              <td>1</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>2</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>3</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>4</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>5</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Calculation:</h2>

      <p>Focal length of concave lens, Mean f = …………….cm</p>

      <h2>Result:</h2>

      <p>
        The focal length of the concave lens by combination method = …………..cm
      </p>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <p>Select the method from the drop down list.</p>

      <p>Select the concave lens from the drop down list.</p>

      <p>
        <strong>Lens in Contact</strong>
      </p>

      <ul>
        <li>
          Select the distance between the lens (combination of convex lens and
          concave lens) and the object (wire gauze) using the slider.
        </li>
        <li>To turn On the wire gauze, click on the ‘Light On’ button.</li>
        <li>
          Adjust the distance between the lens and the screen using the slider
          to get a clear image of the wire gauze on the screen.
        </li>
        <li>Note the value of u and v.</li>
        <li>
          You can calculate the focal length (F) of combination of lenses using
          the formula F = uv/(u+v).
        </li>
        <li>
          The focal length of convex lens (f<sub>1</sub>) is shown inside the
          simulator window.
        </li>
        <li>
          You can calculate the focal length of the concave lens using the
          formula f<sub>2</sub> = (f<sub>1</sub>F/(f<sub>1</sub>-F).
        </li>
        <li>
          You can verify your result by clicking on the ‘Show result’ button.
        </li>
      </ul>

      <p>
        <strong>Lens Out of Contact</strong>
      </p>

      <ul>
        <li>To turn On the wire gauze, click on the ‘Light On’ button.</li>
        <li>
          Adjust the distance between the convex lens and the screen using the
          slider to get a clear image of the wire gauze on the screen.
        </li>
        <li>
          When a clear image is formed, click on the ‘Insert concave lens’
          button to insert the concave lens in between the screen and the convex
          lens.
        </li>
        <li>
          Set the position of the concave lens from the screen using the slider.
          It is taken as u.
        </li>
        <li>
          Adjust the distance between the concave lens and the screen using the
          slider to get a clear image of the wire gauze on the screen. It is
          taken as v.
        </li>
        <li>
          You can calculate the focal length of the concave lens using the
          formula f = uv/(u-v).
        </li>
        <li>
          You can verify your result by clicking on the ‘Show result’ button.
        </li>
      </ul>

      <p>To redo the experiment, click on the ‘Reset’ button.</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Concave Lens - Focal Length. Retrieved
          22 March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=244&cnt=2
        </Typography>
      </div>
    </div>
  );
}
