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
import SpringPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Spring1/spring-pro1.png';
import SpringPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Spring1/spring-pro2.png';
import SpringPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Spring1/spring-pro3.jpg';
import SpringPro4 from '../../../../../../../../../assets/Images/Subjects/Physics/Spring1/spring-pro4.png';

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
      <h1 className={classes.headTag}>Materials required</h1>

      <ul>
        <li>&nbsp;&nbsp; &nbsp;A spring</li>
        <li>&nbsp;&nbsp; &nbsp;A rigid support</li>
        <li>&nbsp;&nbsp; &nbsp;Weight hanger</li>
        <li>&nbsp;&nbsp; &nbsp;50g or 20 g slotted weights</li>
        <li>&nbsp;&nbsp; &nbsp;A vertical wooden scale</li>
        <li>&nbsp;&nbsp; &nbsp;A fine pointer</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ol>
        <li>
          The helical spring is suspended vertically from a rigid support.A
          pointer is attached horizontally at the free end of the spring.
        </li>
        <li>
          A metre scale is kept vertically in such a way that the tip of the
          pointer is over the divisions of the scale, but does not touch the
          scale.
        </li>
        <li>
          A dead weight, w0 gwt is suspended by the weight hanger to keep the
          spring vertical. The reading of the pointer on the metre scale is
          noted.
        </li>
        <li>
          Now, gently add a suitable load of 50 g slotted weights to the hanger
          and the reading of the pointer is noted.
        </li>
        <li>
          The weights are added one by one till the maximum load is reached. In
          each case, the reading of the pointer is noted.
        </li>
        <li>
          The weights are then removed one by one and the reading of the pointer
          is noted in each case of unloading.
        </li>
        <li>
          The average of the readings for each load during loading and unloading
          is calculated in each case.&nbsp;&nbsp; &nbsp;Let z0, z1, z2,
          z3…etc.., be the average readings of the pointer for the loads w0,
          (w0+50), (w0+100), (w0+150) etc.
        </li>
        <li>
          From this, extension, l (in m) for the loads (w0+50), (w0+100),
          (w0+150) &nbsp; etc. , are calculated as (z1-z0), (z2-z0), (z3-z0)
          respectively.
        </li>
        <li>
          In each case, k =mg/l is calculated. The average value of k gives the
          spring constant in N/m.
        </li>
        <li>
          A graph is drawn with load M in kg wt along X axis and extension, l in
          metre along the Y axis. The graph is a straight line. The reciprocal
          of the slope of the graph is determined. It gives spring constant in
          kg wt/m. The spring constant in N/m is obtained by multiplying this
          with g=9.8 m/s<sup>2</sup>.
        </li>
      </ol>

      <h1 className={classes.headTag}>Simulator Procedure&nbsp;(As performed through the Online labs)</h1>

      <ul>
        <li>
          Select the spring for which the spring constant is to be measured,
          from the 'Select Spring’ drop down list.
        </li>
        <li>
          Select the environment to perform the experiment from the 'Choose
          Environment' drop down list.&nbsp;
        </li>
        <li>
          Use the ‘Change hanging mass’ slider to change the mass attached at
          the end of the spring.
        </li>
        <li>
          The spring elongates or compresses according to the addition or
          removal of mass attached at its end.
        </li>
        <li>
          The elongation or compression of the spring is noted in the scale by
          using the position of the pointer attached at the end of the spring.
          &nbsp;
        </li>
        <li>
          Now, calculations are done as per the observation column and the
          spring constant of the selected spring can be found out.
        </li>
        <li>
          Enable the ‘Show result’ checkbox to view the spring constant of the
          selected spring.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <h1 className={classes.headTag}>Observations:</h1>

      <h2 className={classes.secondaryTag}>Table for load and extension:&nbsp;</h2>

      <div>
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td colspan="1" rowspan="3">
                Serial No of Obs.
              </td>
              <td colspan="1" rowspan="3">
                Load on hanger(W) =<br />
                applied force (F)(kg wt)
              </td>
              <td colspan="1" rowspan="3">
                Tension= Mg (N)
              </td>
            </tr>
            <tr>
              <td colspan="3">Reading of position of pointer tip</td>
              <td colspan="1" rowspan="2">
                <p>Extension l=</p>

                <p>
                  z x 10-<sup>2 </sup>(m)
                </p>
              </td>
              <td colspan="1" rowspan="2">
                <img
                  alt=""
                  src={SpringPro1}
                />
                N/m
              </td>
            </tr>
            <tr>
              <td>Loading X(cm)</td>
              <td>Unloading Y(cm)</td>
              <td>
                Mean,
                <img
                  alt=""
                  src={SpringPro2}
                />
                &nbsp;(cm)
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td paddingLeft={5}>
                <p>Dead load(W0)</p>
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td paddingLeft={5}>(W0+ .05)</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td paddingLeft={5}>(W0+.1)</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td paddingLeft={5}>(W0+.15)</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td paddingLeft={5}>(W0+.2)</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td paddingLeft={5}>(W0+.25)</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td paddingLeft={5}>(W0+.3)</td>
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

      <p>Mean k=…………N/m.</p>

      <h2 className={classes.secondaryTag}>
        <em fontWeight="normal">
          Spring constant, k from load extension graph
        </em>
      </h2>

      <p>
        <img alt="" src={SpringPro3} />
      </p>

      <p>
        AB=---------kg wt
        <br />
        BC=---------m
        <br />
        &nbsp;
        <img
          alt=""
          src={SpringPro4}
        />
        &nbsp; = &nbsp;---------Nm-1
      </p>

      <h1 className={classes.headTag}>Result</h1>

      <p>
        &nbsp;By calculation, the force constant of the given spring =
        .............N/m.&nbsp;
        <br />
        From load-extension graph, the force constant of the given spring
        =……….N/m
      </p>

      

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Helical Spring. Retrieved 24 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=197&cnt=2
        </Typography>
      </div>
    </div>
  );
}
