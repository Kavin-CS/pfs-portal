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
import ParallelogramPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Parallelogram1/parallelogram-pro1.jpg';
import ParallelogramPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Parallelogram1/parallelogram-pro2.png';
import ParallelogramPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Parallelogram1/parallelogram-pro3.png';

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
        <li>Parallelogram Law of Forces apparatus (Gravesand's apparatus)</li>
        <li>Plumb line</li>
        <li>Two hangers with slotted weights</li>
        <li>A body (a wooden block) whose weight is to be determined</li>
        <li>Thin strong thread</li>
        <li>White drawing paper sheet</li>
        <li>Drawing pins</li>
        <li>Mirror strip</li>
        <li>Sharp pencil</li>
        <li>Half meter scale</li>
        <li>Set squares</li>
        <li>Protractor&nbsp;</li>
      </ul>

      <h1>
        <img alt="" src={ParallelogramPro1} />
      </h1>

      <p>&nbsp;</p>

      <h1 className={classes.headTag}>Real&nbsp;Lab Procedure&nbsp;</h1>

      <ul>
        <li>
          Set up the Gravesand's apparatus and ensure its board is
          vertical.&nbsp; This can be tested using the plumb line. Test if the
          pulleys (let us name them - P1 and Q1) are frictionless. If you feel
          any friction, oil them.
        </li>
        <li>
          Fix the white drawing paper sheet to the board using the drawing pins.
        </li>
        <li>
          Take three pieces of strong threads and tie one end of all three
          together to make a knot. (Let us name this knotted end - O). This knot
          becomes the junction of the three threads.
        </li>
        <li>
          From the other ends of the two threads, tie a weight hanger with the
          same slotted weights in each; we will name these weights as P and Q.
        </li>
        <li>
          From the end of third thread tie the given body, which is the wooden
          block, which we will name as S.
        </li>
        <li>
          Pass the threads with weights P and Q over the pulleys and let the
          third thread with the block S, stay vertical in the middle of the
          board.
        </li>
        <li>
          The weights P, Q and the wooden block S acts as the three forces along
          the three threads. At the junction O, the forces are in equilibrium.
        </li>
        <li>
          Now adjust the weights P and Q (forces) such that the junction O stays
          in equilibrium slightly below the middle of the paper.
        </li>
        <li>
          See that all the weights hang freely and that none of them touch the
          board or the table.
        </li>
        <li>
          Mark the position of junction O on the paper using a sharp pencil.
        </li>
        <li>Slightly disturb the weights P and Q and then leave them.</li>
        <li>
          Once settled, note the position of junction O. &nbsp;Make sure that
          this point is very close to the earlier position.
        </li>
        <li>
          &nbsp;Take the mirror strip and keeping it lengthwise under each
          thread, mark the position of the ends of the image of the thread in
          the mirror, covering the image by the thread. These new positions are
          P1, P2 for the thread with the weight P, and Q1 and Q2 for the thread
          with the weight Q and S1, S2 for the thread with the weight S.
        </li>
        <li>
          Remove the paper from the board and with the help of the half metre
          scale draw lines through the points P1 and P2 to represent P, through
          points Q1 and Q2 to represent Q and through points S1 and S2 to
          represent S. These lines must meet at point O.
        </li>
        <li>
          Assuming a scale of 1cm = 50 g, mark OA = 3 cm and OB =3 cm to
          represent P=150g and Q= 150g.
        </li>
        <li>
          Complete parallelogram OACB using the set squares and join OC. This
          represents the resultant vector R which corresponds to the weight S.
        </li>
        <li>
          Measure OC and multiply it by the scale (50 g) to get the value of the
          unknown weight (S).
        </li>
        <li>For different sets of observation, change P and Q suitably.</li>
        <li>
          We can find the weight of the wooden block (R) using the equation (1).
        </li>
        <li>
          Take the mean of the two values to get the actual weight of the body.
        </li>
        <li>
          To find the percentage error in the experiment, measure the actual
          weight of the body using a spring balance.
        </li>
        <li>Calculate the percentage error using equation (3).</li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/">Online Labs</a>)
      </h1>

      <ul>
        <li>Click on any of the object to select it.</li>
        <li>
          You can change the hanging weights both on the right and left side,
          using the slider.
        </li>
        <li>
          Click on the show parallelogram button that gives you the
          parallelogram based on the weights on the left and right.
        </li>
        <li>
          Click on the show protractor button and measure the angle AOB using
          the protractor.
        </li>
        <li>
          Use the show scale button to use the scale to take the diagonal length
          of the parallelogram.
        </li>
        <li>
          Calculate the value of the unknown mass using equation (1) and the
          value of OD x 20gm using equation (2)and find its mean value.
        </li>
        <li>
          Enter the unknown weight (mean value) of the object in the text box
          provided to check your answer.&nbsp;
        </li>
      </ul>

      <h1 className={classes.headTag}>Observations&nbsp;</h1>

      <h4 className={classes.secondaryTag}>To find the actual weight of the unknown mass, W</h4>

      <p>Least count of spring balance = _________g&nbsp;</p>

      <p>Zero error of spring balance = ________g&nbsp;</p>

      <p>Weight of unknown body by spring balance = ________g&nbsp;</p>

      <h4 className={classes.secondaryTag}>
        To find the weight of the unknown mass using parallelogram law of
        vectors
      </h4>

      <p>
        <strong>Scale</strong>. Let&nbsp; 50 g=1 cm
      </p>

      <table
        align="center"
        border="1"
        cellpadding="0"
        cellspacing="0"
        class="responsive_table"
      >
        <tbody>
          <tr>
            <td rowspan="2">
              <p>No:of obs</p>
            </td>
            <td colspan="2">
              <p>Forces</p>
            </td>
            <td colspan="2">Valuesof</td>
            <td colspan="3">
              <p>Slides</p>
            </td>
            <td rowspan="2">
              <p>Resultant force R (g wt)</p>
            </td>
            <td rowspan="2">
              <p>&nbsp;Unknown weight S (g wt)</p>
            </td>
            <td rowspan="2">
              <p>Weight&nbsp; by spring balance (g wt)</p>
            </td>
            <td rowspan="2">
              <p>
                Error
                <br />
                (g wt)
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>P (g wt)</p>
            </td>
            <td>
              <p>Q (g wt)</p>
            </td>
            <td>
              <img
                align="middle"
                alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi»§#952;«/mi»«/math»"
                class="Wirisformula"
                src={ParallelogramPro2}
                title="Double click to edit"
              />
            </td>
            <td>
              cos&nbsp;
              <img
                align="middle"
                alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»§#952;«/mi»«/math»"
                class="Wirisformula"
                src={ParallelogramPro3}
                title="Double click to edit"
              />
            </td>
            <td>
              <p>OA (cm)</p>
            </td>
            <td>
              <p>OB (cm)</p>
            </td>
            <td>
              <p>OC (cm)</p>
            </td>
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
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>

      <h1 className={classes.headTag}>Calculation</h1>

      <p>Mean value of unknown weight S = ---------- gwt.</p>

      <p>Mean value of unknown weight, R =---------gwt</p>

      <p>Unknown weight = (S+R)/2 = ------------gwt= ---------------kgwt</p>

      <p>Percentage error = ---------</p>

      <h1 className={classes.headTag}>Result</h1>

      <p>The unknown weight of given body = ------------------ kgwt .</p>

      <p>
        The result shows the error is within limits of the experiment
        error.&nbsp;
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Parallelogram Law of Vectors.. Retrieved
          23 March 2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=20&cnt=2
        </Typography>
      </div>
    </div>
  );
}
