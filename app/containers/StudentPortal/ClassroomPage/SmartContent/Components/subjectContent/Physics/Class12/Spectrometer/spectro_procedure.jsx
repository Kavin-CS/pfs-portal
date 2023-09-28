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
import SpectrometermeterPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Spectrometer1/spectro-pro1.png';
import SpectrometermeterPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Spectrometer1/spectro-pro2.png';
import SpectrometermeterPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Spectrometer1/spectro-pro3.png';


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
      <h1 className={classes.headTag}>Materials required:</h1>

      <ul>
        <li>Glass prism</li>
        <li>Drawing board</li>
        <li>Paper</li>
        <li>Pins</li>
        <li>Scale</li>
        <li>Pencil</li>
        <li>Protractor</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <ul>
        <li>A paper is fixed on the drawing board placed on the table.</li>
        <li>Place the given glass prism on the center of the paper.</li>
        <li>
          Using the pencil, mark the outline ABC of the prism on the paper.
        </li>
        <li>
          Remove the prism, and using the scale and pencil, normal N1O is drawn
          to the face AB at the point L.
        </li>
        <li>Using the protractor, measure an angle 30° from the normal.</li>
        <li>
          Another line KL is drawn at L making the angle 30° (angle of incidence
          i) with the normal N<sub>1</sub>O.
        </li>
        <li>
          Two pins R<sub>1</sub> and R<sub>2</sub> are fixed on this line.
        </li>
        <li>The prism is replaced on the outline ABC.</li>
        <li>
          Viewing the pins from the face AC of the prism, two other pins R
          <sub>3</sub> and R<sub>4</sub> are fixed so that R<sub>1</sub>, R
          <sub>2</sub>, R<sub>3</sub> and R<sub>4</sub> are in a line.
        </li>
        <li>Remove the pins.</li>
        <li>
          A line NM is drawn to meet on the face AC through the marks of R
          <sub>3</sub> and R<sub>4</sub>.
        </li>
        <li>The line LM is joined.</li>
        <li>
          The line KL is extended to get the LQ and NM is extended to get the
          line MP. These two lines meet at P.
        </li>
        <li>
          Using the protractor, measure the angle QPM. This is the angle of
          deviation d.
        </li>
        <li>
          Repeat the experiment for different values of angle of incidence (i)
          and the corresponding angle of deviations are measured.
        </li>
        <li>
          Draw a graph with angle of incidence (i) along the X-axis and angle of
          deviation (d) along the Y – axis.
        </li>
        <li>
          The angle of deviation corresponding to the lowest bend of the curve
          is the angle of minimum deviation (D).
        </li>
        <li>
          Angle of the prism A is directly measured from the outline of the
          prism using the protractor.
        </li>
        <li>
          Calculate the refractive index of the material of the prism using the
          formula,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={SpectrometermeterPro1}
        />
      </p>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <ul>
        <li>Select the prism from the drop down list.</li>
        <li>Change the angle of incidence using the slider.</li>
        <li>
          For each angle of incidence (i), you will get corresponding angle of
          deviation (d), angle of refraction on the side AB (r1) angle of
          refraction on the side AC(r2) and angle of emergence (e).
        </li>
        <li>
          Click on the ‘Show/Hide protractor’ button to measure the angle using
          protractor.
        </li>
        <li>
          Click on the centre cross mark on the protractor to drag the
          protractor.
        </li>
        <li>
          Click on the rotate icon on the protractor to rotate the protractor.
        </li>
        <li>
          Click on the close icon on the protractor to close the protractor.
        </li>
        <li>You can use the embedded worksheet to enter the values.</li>
        <li>To see the graph, click on the graph icon in the worksheet.</li>
        <li>From the graph you will get minimum angle of deviation D.</li>
        <li>
          You can calculate the refractive index of the material of the prism
          using the equation,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
        <img
          alt=""
          src={SpectrometermeterPro2}
        />
      </p>

      <ul>
        <li>
          You can verify your result by clicking on the ‘Show result’ button.
        </li>
        <li>To redo the experiment, click the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Observations:</h1>

      <div >
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td >Trial No.</td>
              <td >Angle of Incidence (i)</td>
              <td >Angle of Deviation (d)</td>
            </tr>
            <tr>
              <td >1</td>
              <td >30</td>
              <td >&nbsp;</td>
            </tr>
            <tr>
              <td >2</td>
              <td >35</td>
              <td >&nbsp;</td>
            </tr>
            <tr>
              <td >3</td>
              <td >40</td>
              <td >&nbsp;</td>
            </tr>
            <tr>
              <td >4</td>
              <td >45</td>
              <td >&nbsp;</td>
            </tr>
            <tr>
              <td >5</td>
              <td >50</td>
              <td >&nbsp;</td>
            </tr>
            <tr>
              <td >6</td>
              <td >55</td>
              <td >&nbsp;</td>
            </tr>
            <tr>
              <td >7</td>
              <td >60</td>
              <td >&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Calculations:</h1>

      <ul>
        <li>Angle of prism (A) = 60°.</li>
        <li>From graph, angle of minimum deviation D = ------------°</li>
        <li>Refractive index of the material of the prism,</li>
      </ul>

      <h1 className={classes.headTag}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;{' '}
        <img
          alt=""
          src={SpectrometermeterPro3}
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <br />
        Results:
      </h1>

      <ul>
        <li>
          A graph showing the variation of angle of deviation with the angle of
          incidence is plotted.
        </li>
        <li>Angle of minimum deviation, D = --------°</li>
        <li>Refractive index of material of the prism, n = ------------</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Refraction through a Prism. Retrieved 22
          March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=246&cnt=2
        </Typography>
      </div>
    </div>
  );
}
