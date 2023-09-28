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
import ConvexPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Convex1/conv-pro1.jpg';
import ConvexPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Convex1/conv-pro2.png';


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
      <h1 className={classes.headTag}>Materials Required:</h1>

      <ul>
        <li>Illuminated wire gauze</li>
        <li>Stand</li>
        <li>Screen</li>
        <li>Meter scale</li>
        <li>Convex lens</li>
        <li>Given convex mirror</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <ul>
        <li>
          Place a convex lens on a stand facing the illuminated wire gauze at a
          fixed distance, say 30 cm, away from the wire gauze.
        </li>
        <li>
          Place a screen, at the other side of the lens so that the wire gauze,
          lens and screen are in a straight line.
        </li>
        <li>
          Adjust the position of screen to get a clear image of the wire gauze.
        </li>
        <li>
          Now fix the given convex mirror to another stand and place it in
          between the convex lens and screen with its reflecting face facing the
          wire gauze.
        </li>
        <li>Now place another side by side with the wire gauze.</li>
        <li>
          The position of the convex mirror is adjusted so that a clear image of
          the wire gauze is formed on the screen placed side by side with the
          wire gauze.
        </li>
        <li>
          Measure the distance between the mirror and first screen and take as
          the radius of curvature of the mirror R.
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; <img alt="" src={ConvexPro1} />
      </p>

      <ul>
        <li>The focal length of the mirror is calculated as ,</li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={ConvexPro2}
        />
      </p>

      <ul>
        <li>
          Repeat the experiment by moving the convex lens towards the object by
          2 cm each time and record the values in a tabular column.
        </li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        ):
      </h1>

      <ul>
        <li>Select the mirror from the drop down list.</li>
        <li>
          To insert the convex lens in front of the wire gauze, click on the
          ‘Insert convex lens’ button.
        </li>
        <li>Select the position of the convex lens using the slider.</li>
        <li>To turn on the wire gauze, click on the ‘Light On’ button.</li>
        <li>Adjust the position of the screen using the slider.</li>
        <li>When clear image is formed, you can see a popup.</li>
        <li>
          Now click on ‘Insert convex mirror’ button to insert the convex mirror
          in between the wire gauze and the screen.
        </li>
        <li>
          Adjust the position of the mirror using the slider to get a clear
          image of the wire gauze on the screen placed side by side with the
          wire gauze.
        </li>
        <li>
          You can measure the radius of curvature (R) of the mirror by measuring
          the distance between convex mirror and the screen placed behind the
          mirror.
        </li>
        <li>
          You can calculate the focal length of the mirror using the equation f
          = R/2.
        </li>
        <li>
          You can verify you result by clicking on the ‘Show result’ button.
        </li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Observations:</h1>

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
              <td colspan="2">Distance from lens to</td>
              <td rowspan="2">Radius of curvature, R (cm)</td>
              <td rowspan="2">
                <p>Focal length of the</p>

                <p>Convex Mirror f =R/2</p>
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
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>2</td>
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
            </tr>
            <tr>
              <td>4</td>
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
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Calculation:</h1>

      <p>Focal length of the convex mirror, Mean (f) = ------cm</p>

      <h1 className={classes.headTag}>Result:</h1>

      <p>
        The focal length of the given convex mirror = ……………….cm
        <br />
        &nbsp;
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Convex Mirror - Focal Length. Retrieved
          19 March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=243&cnt=2
        </Typography>
      </div>
    </div>
  );
}
