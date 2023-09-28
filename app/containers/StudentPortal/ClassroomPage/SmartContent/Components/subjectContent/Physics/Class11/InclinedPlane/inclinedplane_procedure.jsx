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
import InclinedPlanePro1 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/inclined-pro1.png';
import InclinedPlanePro2 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/inclined-pro2.png';
import InclinedPlanePro3 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/inclined-pro3.png';
import InclinedPlanePro4 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/inclined-pro4.png';
import InclinedPlanePro5 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/inclined-pro5.png';

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
      <h1 className={classes.headTag}>Materials Required:</h1>

      <ul>
        <li>An inclined plane with a pulley</li>
        <li>A &nbsp;roller</li>
        <li>A pan</li>
        <li>A weight box</li>
        <li>Spring balance</li>
        <li>Spirit level</li>
        <li>Strong thread</li>
        <li>Half meter scale.</li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in" target="_blank">
          Online Labs
        </a>
        )
      </h2>

      <ul>
        <li>
          Choose an appropriate environment from the combo box to perform the
          experiment.
        </li>
        <li>Select a desired angle from the slider, “Angle”.</li>
        <li>
          Increase the loading weights using the slider, “Hanging weight”.
        </li>
        <li>
          Note the total weights added when the roller just starts moving upward
          with uniform velocity.
        </li>
        <li>
          Decrease weights little by little using the same slider and note down
          the total weights when the roller just starts rolling down with
          uniform velocity.
        </li>
        <li>
          To measure the height and length of the inclined plane, click on the
          button, “Show Scale”.&nbsp;
        </li>
        <li>
          A reset button is provided to reset the entire experiment anytime.
        </li>
        <li>
          <h1 className={classes.headTag}>Real Lab Procedure:</h1>
        </li>
      </ul>

      <ol>
        <li>
          Place the apparatus on a table. Make sure that the base of the
          inclined plane is at horizontal surface.
        </li>
        <li>
          Bring the inclined plane to a horizontal position so that the angle of
          inclination is now zero.
        </li>
        <li>
          Find the weight of the roller, m using the spring balance. &nbsp;Then,
          place it on the inclined plane in the middle.
        </li>
        <li>
          Tie one end of a thread to the roller placed on the inclined plane and
          pass it over the pulley.
        </li>
        <li>
          Find the mass of the pan using a beam balance and tie it to the free
          end of the thread.
        </li>
        <li>
          Now, raise the inclined plane and fix it at an angle of 30°. When this
          is done, the roller starts rolling down with acceleration.
        </li>
        <li>
          Add weights and increase them till the roller just starts moving
          upward with uniform velocity only on tapping. Note the mass added in
          the pan and calculate the total mass m1 as sum of mass added in pan
          and mass of the pan .
        </li>
        <li>
          Remove some weights from the pan till the roller just starts moving
          downward with uniform velocity. Note down the mass added in the pan
          and find the total mass m2 as the sum of mass added in pan and mass of
          the pan .
        </li>
        <li>
          The mean value of m1 and m2 multiplied with acceleration due to
          gravity, g gives the downward force, W acting on the roller of mass m.
        </li>
        <li>
          It is proved that, in each case, the downward force acting on the
          body, W is found to be equal to mg sin θ.
        </li>
        <li>
          A graph is drawn with sin θ along X-axis and W along Y-axis and it is
          a straight line.
        </li>
        <li>
          Increase the angle of inclination in steps of 5° each, making it
          35°,40°, 45°, 50°,55° and 60° and repeat steps 6 to 8.
        </li>
        <li>Record the observations</li>
      </ol>

      <h1 className={classes.headTag}>Our Observations:</h1>

     

      <p>
        Observed weight of the roller (w<sub>o</sub>)=.................g
        wt.&nbsp;
      </p>

      <p>
        Observed weight of the pan (p<sub>o</sub>)=......................g
        wt.&nbsp;
      </p>

      <p>&nbsp;</p>

      <p>
        <strong>Table for angle of inclination and weights in pan:</strong>
      </p>

      <div >
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td colspan="1" rowspan="2" >
                Sl no of observations
              </td>
              <td colspan="1" rowspan="2" >
                Angle of inclination&nbsp;
                <img
                  alt=""
                  src={InclinedPlanePro1}
                />
                &nbsp;degrees
              </td>
              <td colspan="1" rowspan="2" >
                <img
                  alt=""
                  src={InclinedPlanePro2}
                />
                &nbsp;degrees
              </td>
              <td colspan="2" rowspan="1" >
                Force acting on roller
              </td>
              <td colspan="1" rowspan="2">
                <img
                  alt=""
                  src={InclinedPlanePro3}
                />
                <p>(g wt)</p>
              </td>
              <td colspan="1" rowspan="2">
                <img
                  alt=""
                  src={InclinedPlanePro4}
                />
                &nbsp; &nbsp;&nbsp;
              </td>
            </tr>
            <tr>
              <td>
                <p>Upward</p>

                <p>W1=m1g</p>

                <p>&nbsp; (gwt)</p>
              </td>
              <td>
                <p>Downward</p>

                <p>W2=m2g</p>

                <p>&nbsp; (g wt)</p>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
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
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
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
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Results:</h1>

      <ul>
        <li>Downward force on the body of weight w is equal to mg sin θ.</li>
        <li>
          Graph between sin θ and W comes to be a straight line. Hence{' '}
          <img
            alt=""
            src={InclinedPlanePro5}
          />
          &nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Inclined Plane. Retrieved 24 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=19&cnt=2
        </Typography>
      </div>
    </div>
  );
}
