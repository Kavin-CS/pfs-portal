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
import ViscosityPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Viscosity1/viscosity-pro1.png';
import ViscosityPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Viscosity1/viscosity-pro2.png';
import ViscosityPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Viscosity1/viscosity-pro3.png';
import ViscosityPro4 from '../../../../../../../../../assets/Images/Subjects/Physics/Viscosity1/viscosity-pro4.png';
import ViscosityPro5 from '../../../../../../../../../assets/Images/Subjects/Physics/Viscosity1/viscosity-pro5.png';
import ViscosityPro6 from '../../../../../../../../../assets/Images/Subjects/Physics/Viscosity1/viscosity-pro6.jpg';
import ViscosityPro7 from '../../../../../../../../../assets/Images/Subjects/Physics/Viscosity1/viscosity-pro7.png';
import ViscosityPro8 from '../../../../../../../../../assets/Images/Subjects/Physics/Viscosity1/viscosity-pro8.png';

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
        <li>A long cylindrical glass jar</li>
        <li>Transparent viscous fluid</li>
        <li>Metre scale</li>
        <li>Spherical ball</li>
        <li>Screw gauge</li>
        <li>Vernier calipers</li>
        <li>Stop clock</li>
        <li>Thread</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>
          Find the least count and zero correction of the given screw
          guage.&nbsp;
        </li>
        <li>
          Find the diameter (d) of the ball using the screw gauge. Now, the
          radius(r) of ball can be calculated as ; r = d/2
        </li>
        <li>Clean the glass jar and fill it with the viscous fluid.</li>
        <li>Place a meter scale vertically beside the jar.</li>
        <li>
          Measure the inner diameter of the jar using a vernier calipers. Hence
          the inner radius of the jar R can be found.
        </li>
        <li>
          Mark two reference points A and B on the jar using two threads. The
          marking A is made well below the free surface of liquid, so that by
          the time when the ball reaches A, it would have acquired terminal
          velocity v.
        </li>
        <li>
          Adjust the position the thread B so that the distance between A and B
          is 60cm.
        </li>
        <li>
          The ball of known diameter is dropped gently in the liquid. It falls
          down in the liquid with accelerated velocity for about one-third of
          the height. Then it falls with uniform terminal velocity.
        </li>
        <li>
          When the ball crosses the point A, start the stop watch and the time
          taken by the ball to reach the point B is noted.
        </li>
        <li>
          If the distance moved by the ball is d and the time taken to travel is
          t, then velocity,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
        <img
          alt=""
          src={ViscosityPro1}
          
        />
      </p>

      <ul>
        <li>
          Calculate the terminal velocity of the ball, v using the relation,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={ViscosityPro2}
          s
        />
      </p>

      <ul>
        <li>
          Now, the coefficient of viscosity of the liquid can be calculated by
          using the formula,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={ViscosityPro3}
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;
      </p>

      <ul>
        <li>
          Now, repeat the experiment by changing the diameter of the ball.
          Calculate the value of r<sup>2</sup>/ v&nbsp;in each time.
        </li>
        <li>
          Plot a graph with r<sup>2 </sup>along X axis and terminal velocity
          along Y axis. We can calculate the coefficient of viscosity of the
          liquid by using the slope of the graph.
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;ie;&nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <img
          alt=""
          src={ViscosityPro4}
        />
      </p>

      <h1 className={classes.headTag}>Simulator Procedure (As performed through Online labs)</h1>

      <ul>
        <li>
          Select the environment to perform the experiment from the 'Select the
          Environment' drop down list.&nbsp;
        </li>
        <li>
          Select the liquid for which the coefficient of viscosity is to be
          measured, from the 'Select Viscous Liquid' drop down list.
        </li>
        <li>
          Use the ‘Select jar diameter’ slider to change the diameter of the
          glass jar.
        </li>
        <li>
          Use the ‘Select ball diameter’ slider to change the diameter of the
          glass ball.
        </li>
        <li>
          Change the distance between A and B by dragging the corresponding
          arrows.
        </li>
        <li>
          Drag the glass ball towards the jar and drop it into the liquid in the
          jar.
        </li>
        <li>
          The stop watch runs automatically as the ball reaches the point A, and
          stops as it leaves the point B.
        </li>
        <li>The time shown in the stop watch is noted.</li>
        <li>
          Now, calculations are done as per the observation column and the
          coefficient of viscosity of the selected liquid can be found out.
        </li>
        <li>
          Enable the ‘Show result’ checkbox to view the coefficient of viscosity
          of the selected liquid.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <h2 className={classes.secondaryTag}>
        To find the inner diameter of the glass jar using vernier callipers:
      </h2>

      <p>
        Value of one main scale division&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp; &nbsp;= ……mm
      </p>

      <p>
        Number of divisions on the vernier &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;=
        …….
      </p>

      <p>
        Least count (L.C.) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;= …….. mm
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        = ......... cm
      </p>

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
              <td >Sl.No.</td>
              <td >M.S.R. (cm)</td>
              <td >V.S.R. (div.)</td>
              <td >V.S.R. ×L.C. (cm)</td>
              <td >
                Total reading = M.S.R.+V.S.R.×L.C. (cm)
              </td>
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
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp; Mean diameter of the glass jar, D = .............. cm
      </p>

      <h2 className={classes.secondaryTag}>To find the diameter of the sphere using screw gauge:</h2>

      <p>
        Pitch of the screw gauge&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        = .......... mm
      </p>

      <p>
        Number of divisions on the circular scale&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp; = ...........
      </p>

      <p>
        Least count of the screw gauge (L.C.)&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =............ mm
      </p>

      <p>
        Zero correction of the screw gauge
        (z)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; =
        …….... mm
      </p>

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
              <td >Glass spshere No.</td>
              <td >P.S.R. (mm)</td>
              <td >Observed H.S.R. (a) (div.)</td>
              <td >Corrected H.S.R. (a+z) (div)</td>
              <td >Corrected H.S.R.×L.C. (mm)</td>
              <td >
                Total reading = P.S.R.+(Corrected H.S.R.×L.C.) (d) (mm)
              </td>
              <td >
                Radius of the glass ball,&nbsp;&nbsp; r=d/2 (×10<sup>-3</sup> m)
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

      <h2 className={classes.secondaryTag}>To find the terminal velocity of the sphere :</h2>

      <p>
        Density of the liquid, ρ
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        = ………..kg/m<sup>3</sup>
      </p>

      <p>
        Density of the sphere,
        σ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        = ……….kg/m<sup>3</sup>
      </p>

      <p>
        Distance travelled by the sphere,
        s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = ………. 10
        <sup>-2</sup> m
      </p>

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
              <td >Glass sphere No.</td>
              <td >
                Radius of glass sphere,
                r&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (×10<sup>-3</sup> m)
              </td>
              <td >
                Time taken to travel the distance s, t (s)
              </td>
              <td >Velocity, v' = s/t (m/s)</td>
              <td>
                Terminal velocity, v = v' [1+(2.4r/R)]&nbsp; (m/s)<p>&nbsp;</p>
              </td>
              <td >
                r<sup>2</sup>/ v (m s)
              </td>
            </tr>
            <tr>
              <td>1</td>
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
            </tr>
            <tr>
              <td>3</td>
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
            </tr>
            <tr>
              <td>5</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>

        <div>
          <h1 className={classes.headTag}>Calculations</h1>

          <p>
            Radius of the sphere, r
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
            d/2
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            =.......... mm
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = .........×10<sup>-3</sup> m
          </p>

          <p>
            Inner radius of the glass jar,
            R&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = D/2
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            =........... cm
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            =........... ×10<sup>-2</sup> m
          </p>

          <p>
            Coefficient of
            viscosity,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>

          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            <img
              alt=""
              src={ViscosityPro5}
            />
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = ............. Nsm<sup>-2</sup>
          </p>

          <h3 className={classes.secondaryTag}>Square of radius versus Terminal velocity Graph :</h3>

          <p>
            <img alt="" src={ViscosityPro6} />
          </p>

          <p>Slope of the graph,</p>

          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            <img
              alt=""
              src={ViscosityPro7}
            />
          </p>

          <p>Coefficient of viscosity,</p>

          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;
            <img
              alt=""
              src={ViscosityPro8}
            />
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = ............... Nsm<sup>-2</sup>
          </p>

          <h1 className={classes.headTag}>Result</h1>

          <p>The coefficient of viscosity of the given liquid, η</p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp; By calculation, = .................Nsm
            <sup>-2</sup>
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp; From graph,&nbsp;&nbsp;&nbsp;&nbsp; =
            .................Nsm<sup>-2</sup>
          </p>

          
        </div>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Viscosity of a liquid - Stoke's method.
          Retrieved 24 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=5&sim=225&cnt=2
        </Typography>
      </div>
    </div>
  );
}
