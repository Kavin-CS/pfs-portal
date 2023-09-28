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
import ConcavePro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Concave1/con-pro1.png';
import ConcavePro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Concave1/con-pro2.png';
import ConcavePro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Concave1/con-pro3.jpg';
import ConcavePro4 from '../../../../../../../../../assets/Images/Subjects/Physics/Concave1/con-pro4.jpg';
import ConcavePro5 from '../../../../../../../../../assets/Images/Subjects/Physics/Concave1/con-pro5.png';
import ConcavePro6 from '../../../../../../../../../assets/Images/Subjects/Physics/Concave1/con-pro6.png';

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
      <h1 className={classes.headTag}>Materials Required</h1>

      <ul>
        <li>Concave mirror</li>
        <li>Stand</li>
        <li>Screen</li>
        <li>Illuminated wire gauze.</li>
        <li>Metre scale</li>
      </ul>

      <h1 className={classes.headTag}>Real lab Procedure</h1>

      <h2 className={classes.secondaryTag}>By distant object method :</h2>

      <ul>
        <li>
          Fix the given concave mirror on the stand and place it on a table,
          facing towards a distant object.
        </li>
        <li>
          Arrange the screen on the table so that the image of the distant
          object is obtained on it.
        </li>
        <li>
          Measure the distance between mirror and screen using a metre scale. It
          can be taken as the focal length (f) of the mirror.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>By u-v method :&nbsp;</h2>

      <ul>
        <li>
          Using the focal length obtained by distant object method set the
          values of u (distance between mirror and object) ranging from 1.5f to
          2.5f. Divide the range into a number of equal steps.
        </li>
        <li>
          Place the mirror in front of an illuminated wire gauze. It acts as the
          object.
        </li>
        <li>
          Now, fix the mirror at the distance u (which is obtained as 1.5f) from
          the wire gauze.
        </li>
        <li>
          Place the screen on the table facing the mirror in such a way that the
          reflected image lies on the screen.
        </li>
        <li>
          We can adjust the position of the screen to get the clear image of the
          wire gauze.
        </li>
        <li>
          Keeping the distance between object and mirror fixed, adjust the
          position of screen in order to get the clear image of the object.
        </li>
        <li>
          Measure the distance between mirror and wire gauze, as well as mirror
          and screen. Take these values as u and v respectively.
        </li>
        <li>Record the values of u and v in a tabular column.</li>
        <li>
          Calculate the focal length of the given concave mirror by using the
          relation, f = uv/(u+v).
        </li>
        <li>
          Repeat the experiment for different values of u (up to 2.5f) and in
          each time, measure v and record it in the tabular column.
        </li>
        <li>Calculate the focal length (f) of the concave mirror each time.</li>
        <li>
          Calculate the mean of all focal lengths to get the correct focal
          length of the given concave mirror.
        </li>
        <li>
          The focal length of the mirror can also be measured graphically by
          plotting graphs between u &amp; v, and 1/u &amp; 1/v.
        </li>
        <li>
          We can repeat the experiment with concave mirrors of different focal
          lengths.
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
        <li>Select the focal length using the slider.</li>
        <li>
          Click on the ‘Light On/Off’ button to turn On/Off the wire gauze.
        </li>
        <li>
          Select the distance between the mirror and the object (u) using the
          slider.
        </li>
        <li>
          Change the distance between the mirror and the screen (v) suing the
          slider to get a clear image of the wire gauze on the screen.
        </li>
        <li>
          You can calculate the focal length of the mirror using the equation,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
        <img alt="" src={ConcavePro1}  />
      </p>

      <ul>
        <li>
          You can verify your result by clicking on the ‘Show result’ button.
        </li>
        <li>To redo the experiment, click the ‘Reset’ button.</li>
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
              <td colspan="2">
                <p>Distance between the mirror and</p>
              </td>
              <td rowspan="2">
                <p>1/u</p>

                <p>
                  (cm<sup>-1</sup>)
                </p>
              </td>
              <td rowspan="2">
                <p>1/v</p>

                <p>
                  (cm<sup>-1</sup>)
                </p>
              </td>
              <td rowspan="2">
                <p>
                  <img
                    alt=""
                    src={ConcavePro2}
                    
                  />
                  &nbsp;
                </p>

                <p>(cm)</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Object, u</p>

                <p>(cm)</p>
              </td>
              <td>
                <p>Image, v</p>

                <p>(cm)</p>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>2</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>3</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>4</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>5</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp; Mean, f = ………. cm
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; = ………. ×10<sup>-2</sup> m
      </p>

      <h1 className={classes.headTag}>Calculations:</h1>

      <p>
        Calculate the value of focal length (f) each time and find its mean.
      </p>

      <p>
        Plot a graph with u along X axis and v along Y axis by taking same scale
        for drawing the X and Y axes. Draw the bisector OA and join OC and OB.
        Thus, <strong>OC=OB= 2f</strong>. Calculate the focal length from this.
      </p>

      <p>
        Plot a graph with 1/u along X axis and 1/v along Y axis by taking same
        scale for drawing the X and Y axes. The graph is a straight line
        intercepting the axes at A and B. Then <strong>OA=OB= 1/f.</strong>{' '}
        Calculate the focal length from this.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img alt="" src={ConcavePro4}  />
        &nbsp; &nbsp;&nbsp;
        <img alt="" src={ConcavePro3} />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <strong>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;u -v Graph &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1/u - 1/v Graph &nbsp;
        </strong>
      </p>

      <p>From u-v graph,</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; OB =….....….cm
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; OC = ...……..cm
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;
        <img alt="" src={ConcavePro5}  />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;= &nbsp;........... cm
      </p>

      <p>From 1/u – 1/v graph,</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;OA =…………cm
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;OB =…...…... cm
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp;
        <img alt="" src={ConcavePro6}  />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; = ............ cm
      </p>

      

      <h1 className={classes.headTag}>Results</h1>

      <p>The focal length of the given concave mirror, f&nbsp;</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;By u-v method &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;= ……..×10<sup>-2</sup> m
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;From u-v graph &nbsp; &nbsp; &nbsp; &nbsp; =
        .……..×10<sup>-2</sup> m
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;From 1/u- 1/v graph &nbsp; = ……...×10
        <sup>-2 </sup>m
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). The Concave mirror - u-v method.
          Retrieved 19 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=230&cnt=2
        </Typography>
      </div>

      <p>&nbsp;</p>
    </div>
  );
}
