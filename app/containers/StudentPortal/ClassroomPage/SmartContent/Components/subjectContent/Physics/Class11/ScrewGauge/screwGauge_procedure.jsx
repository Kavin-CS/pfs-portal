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
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
  },
  headTag:{
    fontSize: 20
  }
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div className={classes.divContent}>
      <div class="divContent">
        <h1 className={classes.headTag}>Materials Required</h1>

        <ul>
          <li>Screw gauge</li>
          <li>Wire</li>
          <li>A sheet of paper</li>
          <li>An irregular lamina</li>
          <li>A centimetre graph paper</li>
          <li>A pointed pencil</li>
        </ul>

        <h1 className={classes.headTag}>Real lab Procedure&nbsp;</h1>

        <ul>
          <li>
            Determine the pitch and least count of the screw gauge using the
            equations (1) and (2) respectively..
          </li>
          <li>
            Bring the anvil and screw in contact with each other and find the
            zero error. Do it three times and record them. If there is no zero
            error, then record ‘zero error nil’.
          </li>
          <li>
            Move the screw away from the anvil and place the lead shot and move
            the screw towards the anvil using the ratchet head. Stop when the
            ratchet slips without moving the screw.
          </li>
          <li>
            Note the number of divisions on the pitch scale that is visible and
            uncovered by the edge of the cap. The reading N is called the pitch
            scale reading(PSR)
          </li>
          <li>
            Note the number (n) of the division of the circular scale lying over
            the reference line.
          </li>
          <li>
            Repeat steps 4 and 5 after rotating the lead shot by 900 for
            measuring the diameter in a perpendicular direction. Record the
            observations in the tabular column.
          </li>
          <li>
            Find total reading using the equation 3 and apply zero correction in
            each case.
          </li>
          <li>Take the mean of different values.</li>
        </ul>

        <p>
          Note: Place the other objects like, wire, glass plate etc between the
          screw and the anvil and follow the above procedure to find the
          measurement.
        </p>

        <h1 className={classes.headTag}>
          Simulator Procedure (as performed through the{' '}
          <a href="http://www.olabs.co.in" target="_blank">
            Online Labs
          </a>
          )
        </h1>

        <ol>
          <li>
            We can select the least count of the screw gauge from the 'Select
            screw gauge' drop down list.
          </li>
          <li>
            The object of our choice can be chosen from the 'Select object' drop
            down list.
          </li>
          <li>
            Click on the object to place it between the screw and the anvil to
            find its measurement.&nbsp; To remove the object, click the object
            on the left menu once more.
          </li>
          <li>
            Click on the arrows seen on the screw head to tighten it till the
            screw touches the object.
          </li>
          <li>Note the PSR and HSR values.</li>
          <li>
            Find the total reading and enter the value in the text box provided.
          </li>
          <li>Click on the check button to verify the answer.</li>
          <li>The 'Reset' button can be used to redo the experiment.</li>
        </ol>

        <h1 className={classes.headTag}>Observations</h1>

        <h3>1.&nbsp;Determination of Least Count of the Screw Gauge</h3>

        <p>1 Linear Scale Division, LSD = 1 mm</p>

        <p>Number of full rotations given to screw =4</p>

        <p>Distance moved by the screw = 4mm</p>

        <p>Hence , pitch </p>

        <p>Number of divisions on circular scale=100</p>

        <h3>2. Zero Error</h3>

        <p>(i) zero error = --------------mm</p>

        <p>(ii)&nbsp; zero error = ---------------mm</p>

        <p>(iii) zero error = ----------------mm</p>

        <p>Mean zero error, e= ------------mm</p>

        <p>Mean zero correction , c= -e = -------mm&nbsp;&nbsp;&nbsp;</p>

        <div>
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="responsive_table"
          >
            <tbody>
              <tr>
                <td rowspan="2">Object Placed</td>
                <td rowspan="2">Pitch Scale Reading (N) mm</td>
                <td colspan="2">HeadScale&nbsp; Reading</td>
                <td colspan="2">Total Reading</td>
              </tr>
              <tr>
                <td>No of circular divisions on reference line(n)</td>
                <td>Value [n x L.C]mm</td>
                <td>
                  Observed D<sub>0</sub>=N+n mm
                </td>
                <td>
                  Corrected D=D<sub>0</sub> + c mm
                </td>
              </tr>
              <tr>
                <td rowspan="5">
                  &nbsp;
                  <br />
                  &nbsp;L ead shot
                </td>
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
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td rowspan="5">
                  &nbsp;
                  <br />
                  Wire
                </td>
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
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td rowspan="4">Glass Plate</td>
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
              <tr>
                <td rowspan="4">Irregular Lamina</td>
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

        <h1 className={classes.headTag}>Calculations&nbsp;</h1>

        <p>Mean Diameter of the lead shot=----------cm</p>

        <p>Mean Diameter of the wire=---------cm</p>

        <p>Mean length of the wire=----------cm</p>

        <p>Volume of the wire, </p>

        <p>Thickness of the glass plate=--------cm</p>

        <p>Thickness of irregular lamina=--------cm</p>

        <p>
          Area, A= -----------------------cm<sup>2</sup>
        </p>

        <p>
          Volume of irregular lamina, V= A x t =------------cm<sup>3</sup>
          &nbsp;&nbsp;
        </p>

        <h1 className={classes.headTag}>Result</h1>

        <p>&nbsp;Diameter of the lead shot=----------cm</p>

        <p>
          The volume of the given wire is ---- cm<sup>3</sup>
        </p>

        <p>The thickness of given sheet is ------- ---cm</p>

        <p>
          The volume of given lamina is<em> = ....... </em>cm<sup>3</sup>&nbsp;
        </p>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Ohm's law and resistance. Retrieved 25
          February 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=22&cnt=2
        </Typography>
      </div>
    </div>
  );
}
