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
import BoylePro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Boyle1/boyle-pro1.png';
import BoylePro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Boyle1/boyle-pro2.jpg';


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
    fontSize: 18,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Materials Required</h1>

      <ul>
        <li>Quill tube</li>
        <li>Stand</li>
        <li>Metre scale</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>Arrange the quill tube horizontally on a stand.</li>
        <li>The length of the air column is measured using a metre scale.</li>
        <li>
          Vertical heights at the two ends of mercury thread from the table are
          also measured using a metre scale.
        </li>
        <li>
          The difference between them gives the vertical height ‘h’ of the
          mercury thread. Here h=0. So pressure inside the tube is also H, which
          is the atmospheric pressure.ie; 76 cm of Hg
        </li>
        <li>
          The quill tube is then placed in a slanting position with the open end
          upwards.
        </li>
        <li>
          The length of the air column is measured and the vertical height, h of
          Mercury is noted. Now the pressure inside the tube, P=H + h.
        </li>
        <li>
          Quill tube is then placed in different positions, such as: vertical
          position with open end upwards and with open end downwards, slanting
          position with open end downwards and measure its corresponding length
          of the air column l and vertical height h.&nbsp;
        </li>
        <li>Now P×l&nbsp; is calculated in each case.</li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure – (As performed through the{' '}
        <a href="http://amrita.olabs.co.in" target="_blank">
          Online labs
        </a>
        )
      </h1>

      <ul>
        <li>
          Use the ‘Mercury column length (cm)’ slider to change the length of
          the mercury column.
        </li>
        <li>
          Use the ‘Air column length (cm)’ slider to change the length of the
          air column.
        </li>
        <li>The atmospheric pressure (H) is already shown in the window.</li>
        <li>
          We can change the position of the quill tube by dragging it in
          different directions.
        </li>
        <li>
          Click on the ‘Show Scale’ button to see the 50 cm scale for taking
          measurements.
        </li>
        <li>
          We can click the arrows on the scale to rotate the scale. &nbsp;Also,
          click and drag the scale to move it to different positions.
        </li>
        <li>
          Now, take the readings and calculations are done as per the
          observation column.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

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
              <td rowspan="2" >
                Sl No.
              </td>
              <td rowspan="2" >
                Position of the tube
              </td>
              <td colspan="2" >
                Height of Hg thread from table to
              </td>
              <td rowspan="2" >
                Vertical height, h = h<sub>2 </sub>- h<sub>1</sub>&nbsp; (cm)
              </td>
              <td rowspan="2" >
                <p>
                  Pressure, &nbsp;P = H
                  <img
                    alt=""
                    src={BoylePro1}
                  />
                  h (cm)
                </p>
              </td>
              <td rowspan="2">
                Length of air column, l (cm)
              </td>
              <td rowspan="2" >
                P×l (cm<sup>2</sup>)
              </td>
            </tr>
            <tr>
              <td >
                Lower end, h<sub>1 </sub>(cm)
              </td>
              <td >
                Upper end, h<sub>2</sub> (cm)
              </td>
            </tr>
            <tr>
              <td >1</td>
              <td >
                Vertical&nbsp;(open end up)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >2</td>
              <td >
                Slanting&nbsp;(open end up)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >3</td>
              <td >Horizontal</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >4</td>
              <td >
                Slanting&nbsp;(open end down)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td >5</td>
              <td >
                Vertical&nbsp;(open end down)
              </td>
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

      <h1 className={classes.headTag}>Calculations</h1>

      <ul>
        <li>Calculate P&nbsp;× l in each case.</li>
        <li>
          Plot a graph between Pressure and reciprocal of length, taking
          pressure (P) along X axis and reciprocal length (1/l) along Y axis.
        </li>
      </ul>

      <p>
        <img alt="" src={BoylePro2} />
      </p>

      <h1 className={classes.headTag}>Result</h1>

      <p>
        From the tabular column, it is found that; P&nbsp;× l is a constant.
      </p>

      <p>
        The graph between reciprocal of length and pressure is a straight line,
        which shows that pressure of the given mass of gas is inversely
        proportional to length of air column.
      </p>

      <p>
        It indicates the inverse proportionality of pressure and volume of a
        given mass of gas, hence verifies Boyle’s law.
      </p>

     

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Boyle's Law. Retrieved 24 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=226&cnt=2
        </Typography>
      </div>
    </div>
  );
}
