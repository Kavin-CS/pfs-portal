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
import RefractiveIndexPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro1.png';
import RefractiveIndexPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro2.png';
import RefractiveIndexPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro3.png';
import RefractiveIndexPro4 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro4.png';
import RefractiveIndexPro5 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro5.png';
import RefractiveIndexPro6 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro6.png';
import RefractiveIndexPro7 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro7.png';
import RefractiveIndexPro8 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro8.png';
import RefractiveIndexPro9 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro9.png';
import RefractiveIndexPro10 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro10.png';
import RefractiveIndexPro11 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro11.png';
import RefractiveIndexPro12 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro12.png';
import RefractiveIndexPro13 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro13.png';
import RefractiveIndexPro14 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro14.png';
import RefractiveIndexPro15 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-pro15.png';

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
  }
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Materials required:</h1>

      <ul>
        <li>The given convex lens</li>
        <li>The given liquid- water</li>
        <li>Plane mirror</li>
        <li>Retort stand</li>
        <li>Pointer</li>
        <li>Mercury</li>
        <li>Meter scale</li>
        <li>China dish</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <h2 className={classes.secondaryTag}>To find the focal length of the convex lens:</h2>

      <ul>
        <li>
          The plane mirror is placed horizontally on the base of the retort
          stand with its reflecting surface upwards.
        </li>
        <li>The given convex lens is placed over the plane mirror.</li>
        <li>
          The pointer is arranged horizontally on the clamp of the retort stand,
          vertically above the lens.
        </li>
        <li>
          Looking from above, the height of the pointer is adjusted such that
          the inverted image of the pointer is obtained.
        </li>
        <li>
          The height is further adjusted so that the image coincides with tip of
          the pointer without parallax. The image and object will be of the same
          size.
        </li>
        <li>
          The distance of the pointer from the top (y<sub>1</sub>) and bottom (y
          <sub>2</sub>) of the lens are measured. The average of these values
          gives the focal length of the f<sub>1</sub> of the convex lens.
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={RefractiveIndexPro1}
        />
      </p>

      <h2 className={classes.secondaryTag}>
        To determine the focal length of the combination of convex lens and
        liquid lens:
      </h2>

      <ul>
        <li>
          Remove the lens and place a few drops of the given liquid on the plane
          mirror.
        </li>
        <li>
          The lens is then placed over the liquid with its marked face in
          contact with the liquid.
        </li>
        <li>
          A plano-concave liquid lens is thus formed between the convex lens and
          the plane mirror.
        </li>
        <li>
          The pointer adjustment for coincidence is done and the distance from
          the top (y<sub>1</sub>) and bottom (y<sub>2</sub>) of the lens are
          measured.
        </li>
        <li>
          The average of the two values gives the focal length of the
          combination, F.
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={RefractiveIndexPro2}
        />
      </p>

      <ul>
        <li>
          Then calculate the focal length of the liquid lens using the formula,
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt=""
          src={RefractiveIndexPro3}
        />
        <br />
        To determine the radii of curvature of the lens:
      </h2>

      <ul>
        <li>
          The convex lens is floated in mercury and taken in a china dish with
          its marked face in contact with mercury.
        </li>
        <li>
          The pointer adjustment for coincidence is done and the distance from
          the top, d<sub>1</sub>&nbsp; of the lens is measured.
        </li>
        <li>
          The distance d of the pointer from the centre of the lens is
          calculated using the formula,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={RefractiveIndexPro4}
        />
      </p>

      <ul>
        <li>
          Where y<sub>2</sub> - y<sub>1</sub> is the thickness of the lens.
        </li>
        <li>
          Then calculate the radius of curvature of the lens using the formula,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <img
          alt=""
          src={RefractiveIndexPro5}
        />
      </p>

      <ul>
        <li>
          So the refractive index of the given liquid can be calculated used
          using the formula,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={RefractiveIndexPro6}
        />
      </p>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <p>Select the convex lens from the drop down list.</p>

      <p>Select the method from the drop down list.</p>

      <p>
        <strong>Without Liquid</strong>
      </p>

      <ul>
        <li>
          Select the distance of the pointer from the bottom of the lens using
          the slider (Object pointer).
        </li>
        <li>You can see that the size of the image varies with distance.</li>
        <li>
          Adjust the pointer so that the image coincides with the tip of the
          object without parallax. At this stage, the image and object will be
          of the same size.
        </li>
        <li>
          You can see the zoomed view of the object (left) and image (right) on
          the right side.
        </li>
        <li>
          You can view the object and image from different angles of view (left,
          centre and right) using the slider.
        </li>
        <li>
          Measure the height of the pointer from the bottom of the lens. It is
          taken as y<sub>2</sub> cm.
        </li>
        <li>The thickness of the lens is t cm.</li>
        <li>
          You can calculate the distance of the pointer from the top of the lens
          (y<sub>1</sub>) using the equation, y<sub>1</sub> = (y<sub>2</sub> -t)
          cm.
        </li>
        <li>
          You can calculate the focal length (f<sub>1</sub>) of the convex lens
          using the equation,
        </li>
      </ul>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt=""
          src={RefractiveIndexPro7}
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
      </p>

      <ul>
        <li>
          You can verify your result by clicking on the “Show result’ button.
        </li>
      </ul>

      <p>
        <strong>With Liquid</strong>
      </p>

      <ul>
        <li>Select the liquid from the drop down list.</li>
        <li>
          Select the distance of the pointer from the bottom of the lens using
          the slider (Object pointer).
        </li>
        <li>
          You can see that the size of the image varies with the distance.
        </li>
        <li>
          Adjust the pointer so that the image coincides with the tip of the
          object without parallax. At this stage, the image and object will be
          of the same size.
        </li>
        <li>
          You can see the zoomed view of the object (left) and image (right) on
          the right side.
        </li>
        <li>
          You can view the object and image from different angles of view (left,
          centre and right) using the slider.
        </li>
        <li>
          Measure the height of the pointer from the bottom of the lens. It is
          taken as y<sub>2</sub> cm.
        </li>
        <li>The thickness of the lens is fixed as t cm.</li>
        <li>
          You can calculate the distance of the pointer from the top of the lens
          (y<sub>1</sub>) using the equation, y<sub>1</sub> = (y<sub>2</sub> -t)
          cm.
        </li>
        <li>
          You can calculate the focal length (F) of the convex lens using the
          equation,
        </li>
      </ul>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt=""
          src={RefractiveIndexPro8}
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </p>

      <ul>
        <li>
          You can calculate the focal length of the liquid lens (f<sub>2</sub>)
          using the equation,
        </li>
      </ul>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt=""
          src={RefractiveIndexPro9}
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
      </p>

      <ul>
        <li>The radius of curvature of the lens is R cm.</li>
        <li>
          You can calculate the refractive index of the liquid using the
          equation,
        </li>
      </ul>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt=""
          src={RefractiveIndexPro10}
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
      </p>

      <ul>
        <li>
          You can verify your results by clicking on the ‘Show result’ button.
        </li>
      </ul>

      <p>To redo the experiment, click the ‘Reset’ button.</p>

      <h1 className={classes.headTag}>
        Observations:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h1>

      <div >
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td rowspan="3" >
                Lens used
              </td>
              <td colspan="6" >
                Distance of the pointer from
              </td>
              <td rowspan="3" >
                <img
                  alt=""
                  src={RefractiveIndexPro11}
                />
                <p>
                  cm = 10<sup>-2</sup> m
                </p>
              </td>
            </tr>
            <tr>
              <td colspan="3" >
                Top of the lens
              </td>
              <td colspan="3" >
                Bottom of the lens
              </td>
            </tr>
            <tr>
              <td >
                <p>&nbsp;&nbsp;&nbsp; Trial</p>

                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;
                </p>
              </td>
              <td >
                <p>&nbsp;&nbsp;&nbsp; Trial</p>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp;</p>
              </td>
              <td >
                <p>
                  Mean y<sub>1</sub>
                </p>

                <p>(cm)</p>
              </td>
              <td >
                <p>&nbsp;&nbsp;&nbsp; Trial</p>

                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;
                </p>
              </td>
              <td >
                <p>&nbsp;&nbsp;&nbsp; Trial</p>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp;</p>
              </td>
              <td >
                <p>
                  Mean y<sub>2</sub>
                </p>

                <p>(cm)</p>
              </td>
            </tr>
            <tr>
              <td >
                <p>Convex lens on plane mirror</p>
              </td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td>
                f<sub>1</sub> =
              </td>
            </tr>
            <tr>
              <td >
                <p>Combination</p>

                <p>(Convex lens + Liquid lens)</p>
              </td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td>F =</td>
            </tr>
            <tr>
              <td >
                <p>Convex lens floated on Hg</p>
              </td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td>
                d<sub>1</sub> =
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Calculations:</h1>

      <p>Focal length of the liquid lens,&nbsp;</p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img
          alt=""
          src={RefractiveIndexPro12}
        />
        &nbsp;= ----------cm
      </p>

      <p>The distance of the pointer from the centre of the lens</p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt=""
          src={RefractiveIndexPro13}
        />
        &nbsp;= ---------------cm
      </p>

      <p>Radius of curvature of the lens,&nbsp;&nbsp;</p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt=""
          src={RefractiveIndexPro14}
          
        />
        &nbsp;= -----------cm
        <br />
        Refractive index of given liquid,&nbsp;
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{' '}
        <img
          alt=""
          src={RefractiveIndexPro15}
        />
        &nbsp;= --------------
      </p>

      <h1 className={classes.headTag}>Result:</h1>

      <p>
        The refractive index of the given liquid by liquid lens arrangement =
        ----------------
      </p>

      

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Refractive Index of a Liquid. Retrieved
          22 March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=247&cnt=2
        </Typography>
      </div>
    </div>
  );
}
