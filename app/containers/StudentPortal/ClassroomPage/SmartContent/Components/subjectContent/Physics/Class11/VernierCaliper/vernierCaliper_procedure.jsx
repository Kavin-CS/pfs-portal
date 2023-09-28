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
import VernierImg from '../../../../../../../../../assets/Images/Subjects/Physics/VernierCalliperImg.jpg';

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
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div className={classes.divContent}>
      <div class="divContent">
        <h1 className={classes.headTag}>Materials Required&nbsp;</h1>

        <ul>
          <li>Vernier callipers.</li>
          <li>A spherical body ( it can be a pendulum bob)</li>
          <li>A cylinder.</li>
          <li>A small rectangular metallic block of known mass</li>
          <li>A beaker or a calorimeter.&nbsp;</li>
        </ul>

        <h1 className={classes.headTag}>The Procedure</h1>

        <p>
          &nbsp;
          <img alt="VernierImg" src={VernierImg} />
        </p>

        <ol>
          <li>
            We'll first determine the vernier constant (VC), which is the least
            count (L.C) of the vernier calliper and record it stepwise as in the
            equation, L.C = 1 MSD - 1 VSD.
          </li>
          <li>
            Now, bring the movable jaw in close contact with the fixed jaw and
            find the zero error. Do this three times and record the values. If
            there is no zero error, then record 'zero error nil'.
          </li>
          <li>
            Open the jaws of the Vernier Calliper and place the sphere or
            cylinder between the two jaws and adjust the movable jaw, such that
            it gently grips the body without any undue pressure on it. That
            done, tighten the screw attached to the Vernier scale.
          </li>
          <li>
            Note the position of the zero mark of the Vernier scale on the main
            scale. Record the main scale reading just before the zero mark of
            the vernier scale. This reading (N) is called main scale reading
            (MSR).
          </li>
          <li>
            Note the number (n) of the Vernier scale division which coincides
            with the division of the main scale.
          </li>
          <li>
            You'll have to repeat steps 5 and 6 after rotating the body by 90
            <sup>o</sup> for measuring the diameter in a perpendicular
            direction.
          </li>
          <li>
            Repeat steps 4 to 7 for three different positions and record the
            observations.
          </li>
          <li>
            Now find total reading using the equation, TR = MSR+VSR = N+(n x
            L.C)&nbsp; and apply the zero correction.
          </li>
          <li>
            Take the mean of the different values of the diameter and show that
            in the result with the proper unit.
          </li>
        </ol>

        <p>
          <strong>Note:</strong>
        </p>

        <ul>
          <li>
            To measure the internal diameter of a calorimeter or beaker, place
            the beaker upside down over the internal jaws of the vernier
            calipers.Then repeat the steps 4 to 8.
          </li>
          <li>
            To find the ‘Depth’ of the beaker, move the metallic strip till it
            touches the bottom of the beaker.Then repeat steps 4 to 8.
          </li>
        </ul>

        <h1 className={classes.headTag}>
          Simulator Procedure (as performed through the{' '}
          <a href="http://www.olabs.co.in/" target="_blank">
            Online Labs
          </a>
          )
        </h1>

        <ol>
          <li>Select the object to measure by clicking on it.</li>
          <li>The object is placed between the jaws of the vernier caliper.</li>
          <li>Drag the movable jaw so that it touches the object.</li>
          <li>
            Based on the object selected, select the physical dimension to be
            measured.
          </li>
          <li>
            Note the MSR and VSR value that exactly coincides with the main
            scale.
          </li>
          <li>Calculate the dimension using the equation 2.</li>
          <li>Enter the reading in the ‘Enter Reading’ text box.</li>
          <li>
            Click on the ‘Check’ button to find if the reading entered is
            correct.
          </li>
          <li>
            If the object selected is the ‘Beaker’;
            <ul>
              <li>
                To find ‘Internal Diameter’ drag the mouse to move the jaw of
                the vernier scale away from the jaw of the main scale till the
                jaw&nbsp; touches the opposite inner wall of the beaker.
              </li>
              <li>
                To find the ‘Depth’ of the beaker, drag the jaw of the vernier
                scale away from the jaw of the main scale till the metallic
                strip touches the bottom of the beaker.
              </li>
              <li>Enter the reading in the ‘Enter Reading’ text box.</li>
              <li>
                Click on the ‘Check’ button to find if the reading entered is
                correct.
              </li>
            </ul>
          </li>
          <li>
            Click on the 'Reset' button to reset and perform the experiment once
            again.
          </li>
        </ol>

        <h1 className={classes.headTag}>Our Observations&nbsp;</h1>

        <ul>
          <li>
            <strong>
              Determination of Vernier constant (Least Count ) of the vernier
              callipers:
            </strong>
            <br />1 M.S.D. = 1 mm
            <br />
            10 V.S.D.= 9 M.S.D.
            <br />1 V.S.D.= 9/10 M.S.D. = 0.9 mm.
            <br />
            Vernier Constant, V.C.= 1 M.S.D.-1 V.S.D. = (1-0.9)&nbsp;mm = 0.1 mm
            = 0.01cm.
            <br />
            &nbsp;
          </li>
          <li>
            <strong>Zero error</strong>
            <br />
            (i).........cm,&nbsp;&nbsp;
            <br />
            (ii).........cm, &nbsp;
            <br />
            (iii)...........cm.
            <br />
            Mean zero error (e)=..........cm.
            <br />
            Mean zero correction (c) = -e=.........cm.
          </li>
        </ul>

        <div>
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="responsive_table"
          >
            <tbody>
              <tr>
                <td>Dimension to be measured</td>
                <td>Sl No</td>
                <td>
                  <p>Main Scale Reading</p>

                  <p>MSR cm</p>
                </td>
                <td>
                  <p>Vernier Scale Reading</p>

                  <p>VSR cm</p>
                </td>
                <td>
                  <p>VSR x L.C</p>

                  <p>cm</p>
                </td>
                <td>
                  <p>Toatl Reading</p>

                  <p>MSR + (V S R x L.C)</p>

                  <p>cm</p>
                </td>
                <td>
                  <p>Mean</p>

                  <p>cm</p>

                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td rowspan="3">Diameter of the bob</td>
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
                <td rowspan="3">Diameter of the cylinder</td>
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
                <td rowspan="3">Length of thye cylinder</td>
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
                <td rowspan="2">Length of the block</td>
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
                <td rowspan="2">Breadth of the block</td>
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
                <td rowspan="2">Thickness of the block</td>
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
                <td rowspan="2">Internal diameter of the beaker</td>
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
                <td rowspan="2">Internal depth of the beaker</td>
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

        <h1 className={classes.headTag}>Calculations&nbsp;</h1>

        <p>Mean corrected diameter------------cm</p>

        <p>Mean corrected length of the block, l=............cm</p>

        <p>Mean corrected breadth of the block,&nbsp; b= .......cm</p>

        <p>Mean corrected thickness of the block,&nbsp; h= .........cm</p>

        <p>Mean corrected internal diameter,D=................cm</p>

        <p>Mean correcteddepth,d=........cm&nbsp;</p>

        <h1 className={classes.headTag}>The Result</h1>

        <p>
          &nbsp;The volume of the beaker / calorimeter is ...........m
          <sup>3</sup>.
        </p>

        <p>
          Volume of Sphere=.......................... m<sup>3</sup>
        </p>

        <p>
          Volume of block is ................................m<sup>3</sup>
        </p>

        <p>
          The volume of the&nbsp; beaker / calorimeter is ...........cm
          <sup>3</sup>. &nbsp;
        </p>

        <h1 className={classes.headTag}>Materials Required&nbsp;</h1>

        <ul>
          <li>Vernier callipers.</li>
          <li>A spherical body ( it can be a pendulum bob)</li>
          <li>A cylinder.</li>
          <li>A small rectangular metallic block of known mass</li>
          <li>A beaker or a calorimeter.&nbsp;</li>
        </ul>

        <h1 className={classes.headTag}>The Procedure</h1>

        <ol>
          <li>
            We'll first determine the vernier constant (VC), which is the least
            count (L.C) of the vernier calliper and record it stepwise as in the
            equation, L.C = 1 MSD - 1 VSD.
          </li>
          <li>
            Now, bring the movable jaw in close contact with the fixed jaw and
            find the zero error. Do this three times and record the values. If
            there is no zero error, then record 'zero error nil'.
          </li>
          <li>
            Open the jaws of the Vernier Calliper and place the sphere or
            cylinder between the two jaws and adjust the movable jaw, such that
            it gently grips the body without any undue pressure on it. That
            done, tighten the screw attached to the Vernier scale.
          </li>
          <li>
            Note the position of the zero mark of the Vernier scale on the main
            scale. Record the main scale reading just before the zero mark of
            the vernier scale. This reading (N) is called main scale reading
            (MSR).
          </li>
          <li>
            Note the number (n) of the Vernier scale division which coincides
            with the division of the main scale.
          </li>
          <li>
            You'll have to repeat steps 5 and 6 after rotating the body by 90
            <sup>o</sup> for measuring the diameter in a perpendicular
            direction.
          </li>
          <li>
            Repeat steps 4 to 7 for three different positions and record the
            observations.
          </li>
          <li>
            Now find total reading using the equation, TR = MSR+VSR = N+(n x
            L.C)&nbsp; and apply the zero correction.
          </li>
          <li>
            Take the mean of the different values of the diameter and show that
            in the result with the proper unit.
          </li>
        </ol>

        <p>
          <strong>Note:</strong>
        </p>

        <ul>
          <li>
            To measure the internal diameter of a calorimeter or beaker, place
            the beaker upside down over the internal jaws of the vernier
            calipers.Then repeat the steps 4 to 8.
          </li>
          <li>
            To find the ‘Depth’ of the beaker, move the metallic strip till it
            touches the bottom of the beaker.Then repeat steps 4 to 8.
          </li>
        </ul>

        <h1 className={classes.headTag}>
          Simulator Procedure (as performed through the{' '}
          <a href="http://www.olabs.co.in/" target="_blank">
            Online Labs
          </a>
          )
        </h1>

        <ul>
          <li>Select the object to measure by clicking on it.</li>
          <li>The object is placed between the jaws of the vernier caliper.</li>
          <li>Drag the movable jaw so that it touches the object.</li>
          <li>
            Based on the object selected, select the physical dimension to be
            measured.
          </li>
          <li>
            Note the MSR and VSR value that exactly coincides with the main
            scale.
          </li>
          <li>Calculate the dimension using the equation 2.</li>
          <li>Enter the reading in the ‘Enter Reading’ text box.</li>
          <li>
            Click on the ‘Check’ button to find if the reading entered is
            correct.
          </li>
          <li>
            If the object selected is the ‘Beaker’;
            <ul>
              <li>
                To find ‘Internal Diameter’ drag the mouse to move the jaw of
                the vernier scale away from the jaw of the main scale till the
                jaw&nbsp; touches the opposite inner wall of the beaker.
              </li>
              <li>
                To find the ‘Depth’ of the beaker, drag the jaw of the vernier
                scale away from the jaw of the main scale till the metallic
                strip touches the bottom of the beaker.
              </li>
              <li>Enter the reading in the ‘Enter Reading’ text box.</li>
              <li>
                Click on the ‘Check’ button to find if the reading entered is
                correct.
              </li>
            </ul>
          </li>
          <li>
            Click on the 'Reset' button to reset and perform the experiment once
            again.
          </li>
        </ul>

        <h1 className={classes.headTag}>Our Observations&nbsp;</h1>

        <ul>
          <li>
            <strong>
              Determination of Vernier constant (Least Count ) of the vernier
              callipers:
            </strong>
            <br />1 M.S.D. = 1 mm
            <br />
            10 V.S.D.= 9 M.S.D.
            <br />1 V.S.D.= 9/10 M.S.D. = 0.9 mm.
            <br />
            Vernier Constant, V.C.= 1 M.S.D.-1 V.S.D. = (1-0.9)&nbsp;mm = 0.1 mm
            = 0.01cm.
            <br />
            &nbsp;
          </li>
          <li>
            <strong>Zero error</strong>
            <br />
            (i).........cm,&nbsp;&nbsp;
            <br />
            (ii).........cm, &nbsp;
            <br />
            (iii)...........cm.
            <br />
            Mean zero error (e)=..........cm.
            <br />
            Mean zero correction (c) = -e=.........cm.
          </li>
        </ul>

        <div>
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="responsive_table"
          >
            <tbody>
              <tr>
                <td>Dimension to be measured</td>
                <td>Sl No</td>
                <td>
                  <p>Main Scale Reading</p>

                  <p>MSR cm</p>
                </td>
                <td>
                  <p>Vernier Scale Reading</p>

                  <p>VSR cm</p>
                </td>
                <td>
                  <p>VSR x L.C</p>

                  <p>cm</p>
                </td>
                <td>
                  <p>Toatl Reading</p>

                  <p>MSR + (V S R x L.C)</p>

                  <p>cm</p>
                </td>
                <td>
                  <p>Mean</p>

                  <p>cm</p>

                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td rowspan="3">Diameter of the bob</td>
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
                <td rowspan="3">Diameter of the cylinder</td>
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
                <td rowspan="3">Length of the cylinder</td>
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
                <td rowspan="2">Length of the block</td>
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
                <td rowspan="2">Breadth of the block</td>
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
                <td rowspan="2">Thickness of the block</td>
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
                <td rowspan="2">Internal diameter of the beaker</td>
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
                <td rowspan="2">Internal depth of the beaker</td>
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

        <h1 className={classes.headTag}>Calculations&nbsp;</h1>

        <p>Mean corrected diameter------------cm</p>

        <p>Mean corrected length of the block, l=............cm</p>

        <p>Mean corrected breadth of the block,&nbsp; b= .......cm</p>

        <p>Mean corrected thickness of the block,&nbsp; h= .........cm</p>

        <p>Mean corrected internal diameter,D=................cm</p>

        <p>Mean correcteddepth,d=........cm&nbsp;</p>

        <h1 className={classes.headTag}>The Result</h1>

        <p>
          &nbsp;The volume of the beaker / calorimeter is ...........m
          <sup>3</sup>.
        </p>

        <p>
          Volume of Sphere=.......................... m<sup>3</sup>
        </p>

        <p>
          Volume of block is ................................m<sup>3</sup>
        </p>

        <p>
          The volume of the&nbsp; beaker / calorimeter is ...........cm
          <sup>3</sup>. &nbsp;
        </p>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Vernier Calipers. Retrieved 2 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=16&cnt=391
        </Typography>
      </div>
    </div>
  );
}
