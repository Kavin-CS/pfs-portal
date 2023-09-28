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
import SpherometerPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-pro1.png';
import SpherometerPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-pro2.jpg';
import SpherometerPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-pro3.png';
import SpherometerPro4 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-pro4.png';
import SpherometerPro5 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-pro5.png';
import SpherometerPro6 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-pro6.png';

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
    fontSize: 15,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Materials Required</h1>

      <ul>
        <li>Spherometer</li>
        <li>Glass strip</li>
        <li>Concave surface</li>
        <li>Plane glass slab</li>
        <li>Glass strip</li>
        <li>A sheet of paper</li>
        <li>A ruler</li>
        <li>Pencil</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <h2 className={classes.secondaryTag}>To find the distance between the legs of the Spherometer</h2>

      <ol>
        <li>
          Raise the central screw of the spherometer and press the spectrometer
          gently on a sheet of paper so as to get the pin pricks of the three
          legs. Mark these pricks as A, B and C.
        </li>
        <li>
          Measure the distance between the pricks by joining the points as to
          form a triangle.
        </li>
        <li>
          Note these distances (AB, BC, and AC) on the paper and take their mean
          as l.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>To find the Least count of the Spherometer</h2>

      <ol>
        <li>
          Note one pitch scale division on the pitch scale or vertical scale.
        </li>
        <li>Take 5 full rotations on the central screw.</li>
        <li>Measure the distance moved by the screw.</li>
        <li>Hence, Pitch = Distance moved /number of full rotations.</li>
        <li>
          Then{' '}
          <img
            align="middle"
            alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Least«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»count«/mi»«mo»=«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»P«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»h«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»T«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»o«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»s«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»r«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/mfrac»«/math»"
            class="Wirisformula"
            src={SpherometerPro1}
            title="Double click to edit"
          />
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>To find the radius curvature of the spherical surface</h2>

      <ol>
        <li>Raise the screw sufficiently upwards.</li>
        <li>
          Place the spherometer on the concave surface so that its three legs
          rest on it.
        </li>
        <li>
          Gently turn the screw downwards till the screw tip just touches the
          concave surface.
        </li>
        <li>
          Note the reading of the circular disc scale which is in line with the
          vertical (pitch) scale. Note this reading as 'a', which will act as
          reference.
        </li>
        <li>
          Remove the spherometer from over the concave surface and place it over
          a large size glass slab.
        </li>
        <li>
          Turn the screw down wards and count the number of complete rotations
          made by the disc (one rotation becomes complete when the reference
          reading crosses past the pitch scale.)
        </li>
        <li>
          Continue till the tip of the screw just touches the plane surface of
          the glass slab.
        </li>
        <li>
          Note the reading of the circular scale which is finally in line with
          the vertical (pitch) scale. Note this reading as 'b'.
        </li>
        <li>
          Find the number of circular (disc) scale division in the last
          incomplete rotation.
        </li>
        <li>Now find total reading using the relation equation 1.</li>
        <li>
          Repeat steps 3 to 9, three times .Record the observation in tabular
          form.
        </li>
        <li>
          Calculate the radius of curvature of the given concave surface using
          the equation 2.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>To find the thickness of the glass plate</h2>

      <ol>
        <li>Raise the screw sufficiently upwards.</li>
        <li>
          Place the spherometer on the glass strip so that it rests between its
          three legs.
        </li>
        <li>
          Repeat the above steps 3 to 9, three times .Record the observation in
          a tabular form.
        </li>
        <li>Find total reading using the relation equation 1.</li>
      </ol>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the&nbsp;
        <a
          href="http://www.olabs.co.in/"
          
          target="_blank"
        >
          Online Labs
        </a>
        )
      </h1>

      <ol>
        <li>
          Click on the object shown on the left hand menu, to measure its
          thickness
        </li>
        <li>
          Tighten the screw by clicking on the respective arrows (left / right)
          on the screw, until it touches the object.
        </li>
        <li>
          Note the reading on pitch scale, the circular disc and note it down as
          the reference variable.
        </li>
        <li>
          Again click on the object on the left hand menu to remove it from
          under the spherometer.
        </li>
        <li>
          Tighten the screw by clicking on the respective arrows (left / right)
          on the screw, until it touches the glass slab.
        </li>
        <li>
          Note down the complete rotations on the pitch scale and note the
          reading on circular disc for fractional rotation.
        </li>
        <li>
          Based on the selected object;
          <ul>
            <li>
              Calculate the radius of curvature if it is the spherical surface
              using the equation 2.
            </li>
            <li>
              calculate the thickness it it is the glass strip using the
              equation 1.
            </li>
          </ul>
        </li>
        <li>Note down the reading in the text box.</li>
        <li>Click on the check button to find if the answer is correct.</li>
        <li>To redo the experiment, click on the 'Reset' button.</li>
      </ol>

      <h1 className={classes.headTag}>Observations</h1>

      <h2 className={classes.secondaryTag}>1.Distance between two legs of the spherometer</h2>

      <p>In&nbsp; triangle ABC marked by the legs of the spherometer</p>

      <p>AB = ------cm</p>

      <p>BC = ------cm</p>

      <p>AC = ------cm</p>

      <p>&nbsp;</p>

      <p>
        <strong>
          <img alt="" hspace="100" src={SpherometerPro2} />
        </strong>
      </p>

      <p>
        Mean value of&nbsp; l is,{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»l«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»B«/mi»«mo»+«/mo»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»C«/mi»«mo»+«/mo»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»c«/mi»«/mrow»«mn»3«/mn»«/mfrac»«/math»"
          class="Wirisformula"
          src={SpherometerPro3}
          title="Double click to edit"
        />
        &nbsp; = ----cm
      </p>

      <h2 className={classes.secondaryTag}>&nbsp;2.Least count of Spherometer</h2>

      <p>1 pitch scale division = 1mm</p>

      <p>Number of full rotations given to screw = 5</p>

      <p>Distance moved by the screw=5mm</p>

      <p>
        Hence pitch,{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»p«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mn»5«/mn»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»m«/mi»«/mrow»«mn»5«/mn»«/mfrac»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mn»1«/mn»«mi mathvariant=¨normal¨»mm«/mi»«/math»"
          class="Wirisformula"
          src={SpherometerPro4}
          title="Double click to edit"
        />
      </p>

      <p>Number of divisions on circular scale = 100</p>

      <p>
        Hence least count=
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»L«/mi»«mo».«/mo»«mi mathvariant=¨normal¨»C«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mn»1«/mn»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»m«/mi»«/mrow»«mn»100«/mn»«/mfrac»«mo»=«/mo»«mo».«/mo»«mn»01«/mn»«mi mathvariant=¨normal¨»mm«/mi»«mo»=«/mo»«mo».«/mo»«mn»001«/mn»«mi mathvariant=¨normal¨»cm«/mi»«/math»"
          class="Wirisformula"
          src={SpherometerPro5}
          title="Double click to edit"
        />
      </p>

      <div>
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td rowspan="2">
                Object placed
              </td>
              <td colspan="2">
                Circular scale reading
              </td>
              <td rowspan="2">
                No of complete rotation on plane glass sheet(n)
              </td>
              <td rowspan="2">
                No of disc scale divisions in incomplete rotation X=(a-b) or
                (100+a)-b
              </td>
              <td rowspan="2">
                Total reading = (n x p) +(x x l.c)mm
              </td>
            </tr>
            <tr>
              <td>On concave surface(initial)</td>
              <td>On plane glass sheet(final)</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td rowspan="5">Glass strip</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td rowspan="5">&nbsp;t =</td>
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
              <td rowspan="5">Concave surface</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td rowspan="5">&nbsp;h =</td>
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

      <h1 className={classes.headTag}>Calculation</h1>

      <p>
        The thickness of the glass plate, t = --------------- mm =
        --------------------m .
      </p>

      <p>Mean value of h = -----------------------mm.</p>

      <p>
        Radius of curvature of the spherical surface&nbsp;{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»R«/mi»«mo»=«/mo»«mfrac»«msup»«mi mathvariant=¨normal¨»l«/mi»«mn»2«/mn»«/msup»«mrow»«mn»6«/mn»«mi mathvariant=¨normal¨»h«/mi»«/mrow»«/mfrac»«mo»+«/mo»«mfrac»«mi mathvariant=¨normal¨»h«/mi»«mn»2«/mn»«/mfrac»«/math»"
          class="Wirisformula"
          src={SpherometerPro6}
          title="Double click to edit"
        />{' '}
        = ---------------cm=................m
      </p>

      <h1 className={classes.headTag}>Result</h1>

      <p>The thickness of glass strip =&nbsp; ------------m</p>

      <p>
        The radius of curvature of the given concavesurface =
        -----------------m&nbsp;
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Spherometer. Retrieved 23 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=168&cnt=2
        </Typography>
      </div>
    </div>
  );
}
