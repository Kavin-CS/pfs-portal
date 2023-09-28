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
import PendulumPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-pro1.png';
import PendulumPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-pro2.png';
import PendulumPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-pro3.png';
import PendulumPro4 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-pro4.jpg';
import PendulumPro5 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-pro5.png';
import PendulumPro6 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-pro6.png';
import PendulumPro7 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-pro7.png';
import PendulumPro8 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-pro8.png';
import PendulumPro9 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-pro9.png';
import PendulumPro10 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-pro10.png';
import PendulumPro11 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-pro11.png';

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
        <li>A clamp with stand</li>
        <li>A split cork</li>
        <li>A Cotton Thread (about 2 meters long)</li>
        <li>A bob</li>
        <li>Vernier calliper</li>
        <li>Stop /watch</li>
        <li>Metre scale.&nbsp;</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure&nbsp;</h1>

      <ol>
        <li>
          Find the vernier constant and zero error of the vernier calipers and
          record it.
        </li>
        <li>
          Determine the mean diameter of the simple pendulum bob using the
          vernier calipers.
        </li>
        <li>Find the mean radius of the bob and represent it using ‘r’.</li>
        <li>
          Attach a string to the bob. The length of the pendulum, l is adjusted
          by measuring a length of (l-r) from the top of the bob.
        </li>
        <li>
          Put ink marks M1,M2 and M3 on the thread at distance of 50cm,60cm and
          70cm from the C.G of the bob .
        </li>
        <li>
          Pass the thread through the splited cork with the 50 cm mark at the
          bottom of the cork and tighten the two cork pieces between the clamp.
        </li>
        <li>
          Fix the clamp in a stand kept on the table such that the height that
          the bob is just 2 cm above the laboratory floor.
        </li>
        <li>
          Mark a point A on the floor just below the position of the bob at
          rest.
        </li>
        <li>
          The equilibrium position of the pendulum is indicated by drawing a
          vertical line with a chalk on the edge of the table, just behind the
          string.
        </li>
        <li>
          Find the least count and the zero error of the stop watch. Bring its
          hands to the zero position.
        </li>
        <li>
          Move bob using the hand at an angle not more than 45<sup>0</sup> and
          leave it. See that the bob returns over the line without spinning.
        </li>
        <li>
          The stop watch is started when the pendulum crosses the equilibrium
          position to any one side.
        </li>
        <li>
          When it passes the equilibrium position in the same direction the next
          time it has completed one oscillation.
        </li>
        <li>
          Just when the 20th oscillation is complete, count 20 and at once stop
          the stop watch.
        </li>
        <li>
          Note the total time taken for twenty oscillations from the position of
          both the hands of the watch.
        </li>
        <li>
          As we need two observations for the same length, repeat steps 12 to 15
          one more time.
        </li>
        <li>
          Repeat the experiment for lengths 60cm, 70cm, 80cm, 90 cm, 100cm, 110
          cm, 120cm and 130cm.
        </li>
        <li>
          In each case{' '}
          <img
            align="middle"
            alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mi mathvariant=¨normal¨»l«/mi»«msup»«mi mathvariant=¨normal¨»T«/mi»«mn»2«/mn»«/msup»«/mfrac»«/math»"
            class="Wirisformula"
            src={PendulumPro1}
            title="Double click to edit"
          />
          &nbsp; &nbsp;is calculated. In all cases it is found that{' '}
          <img
            align="middle"
            alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mi mathvariant=¨normal¨»l«/mi»«msup»«mi mathvariant=¨normal¨»T«/mi»«mn»2«/mn»«/msup»«/mfrac»«/math»"
            class="Wirisformula"
            src={PendulumPro2}
            title="Double click to edit"
          />{' '}
          is a constant.
        </li>
        <li>
          The mean value of{' '}
          <img
            align="middle"
            alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mi mathvariant=¨normal¨»l«/mi»«msup»«mi mathvariant=¨normal¨»T«/mi»«mn»2«/mn»«/msup»«/mfrac»«/math»"
            class="Wirisformula"
            src={PendulumPro3}
            title="Double click to edit"
          />
          &nbsp; is calculated and then the acceleration due to gravity is
          calculated using the relation (2).
        </li>
      </ol>

      <h2 className={classes.secondaryTag}> 
        To draw the l-T<sup>2</sup> graph
      </h2>

      <p>
        The experiment is preformed as explained above. A graph is drawn with l
        along X axis and T<sup>2</sup> along Y axis. The graph is a straight
        line, as shown in the figure.
      </p>

      <p>
        &nbsp;
        <img alt="" src={PendulumPro4} />
        &nbsp;
      </p>

      <p>
        <strong>To find the length of the second’s pendulum</strong>
      </p>

      <p>
        A second’s pendulum is one for which the period of oscillation is 2
        seconds. From the graph the length l corresponding to T<sup>2</sup>=4 s
        <sup>2</sup> is determined. This gives the length of the second’s
        pendulum.
      </p>

      <p>
        <strong>
          To find the length of the pendulum whose period is 1.5 seconds
        </strong>
      </p>

      <p>
        The length l corresponding to T<sup>2</sup> =1.5<sup>2</sup>=2.25 is
        determined from the graph.
      </p>

      <p>
        <strong>To find the period (T) for a length 105cm</strong>
      </p>

      <p>
        T<sup>2</sup> corresponding to l=105 cm is determined from the graph.
        The square root of this gives T, the period of the pendulum for a length
        105 cm.
      </p>

      <p>
        <strong>From the graph</strong>
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mi mathvariant=¨normal¨»l«/mi»«msup»«mi mathvariant=¨normal¨»T«/mi»«mn»2«/mn»«/msup»«/mfrac»«mo»=«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»B«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»C«/mi»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={PendulumPro5}
          title="Double click to edit"
        />
        &nbsp;= ------cm/s<sup>2</sup>
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»g«/mi»«mo»=«/mo»«mn»4«/mn»«mo»§nbsp;«/mo»«msup»«mi mathvariant=¨normal¨»§#960;«/mi»«mn»2«/mn»«/msup»«mfenced»«mfrac»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»B«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»C«/mi»«/mrow»«/mfrac»«/mfenced»«/math»"
          class="Wirisformula"
          src={PendulumPro6}
          title="Double click to edit"
        />
      </p>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/">Online Labs</a>)
      </h1>

      <ol>
        <li>
          Select the environment to perform the experiment from the 'Select
          Environment' drop down list.
        </li>
        <li>
          Select the shape of the bob of the pendulum from the 'Select Shape'
          drop down list.
        </li>
        <li>
          Select the material of the bob from the 'Select Material' drop down
          list.
        </li>
        <li>
          Select the type of the wire to be used from the 'Select Wire' drop
          down list.
        </li>
        <li>
          Use the 'Change Length' slider to change the length of the pendulum.
        </li>
        <li>
          Use the 'Change Dimension' slider to change the dimension of the bob
          used.
        </li>
        <li>Now release the bob.</li>
        <li>
          Clicking on the 'Show Protractor' button helps us to ensure that the
          angle of swing does not exceeds 45<sup>0</sup>.
        </li>
        <li>
          Now click on 'Play /Pause' button to start the stopwatch. We can
          alternatively click on the the 'Start' or 'Stop' button on the
          stopwatch.
        </li>
        <li>The time for twenty oscillations is noted.</li>
        <li>
          Now the real lab procedure from steps 12 to 18 can be followed to
          complete the observations for finding the acceleration due to gravity.
        </li>
        <li>
          Clicking on the 'Answer' button displays the acceleration due to
          gravity for the corresponding environment.&nbsp;
        </li>
      </ol>

      <h1 className={classes.headTag}>Observations</h1>

      <p>
        <strong>To find the diameter of the bob</strong>
      </p>

      <p>1 M S D = 1mm</p>

      <p>10 V S D =9 M S D</p>

      <p>1 V S D=9/10 M S D=0.9 mm</p>

      <p>
        Vernier Constant, V.C.= 1 M.S.D.-1 V.S.D. = (1-0.9) mm = 0.1 mm =
        0.01cm.
      </p>

      <p>
        <strong>Zero error of vernier callipers(e)</strong>
      </p>

      <ol>
        <li>e=..............cm</li>
        <li>e=..............cm</li>
        <li>e=..............cm</li>
      </ol>

      <p>
        <strong>Mean zero error</strong>
      </p>

      <p>e =.......cm</p>

      <p>
        <strong>Mean zero correction</strong>
      </p>

      <p>c = -e = ......cm&nbsp;&nbsp;</p>

      <div >
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td>SL No</td>
              <td>
                <p>Main Scale Reading</p>

                <p>MSR(cm)</p>
              </td>
              <td>
                <p>Vernier scale Reading&nbsp;</p>

                <p>VSR(dvs)</p>
              </td>
              <td>
                <p>(VSRxL.C)</p>

                <p>(cm)</p>
              </td>
              <td>
                <p>Diameter of the bob,D=MSR+(VSRx L.C)+c(zero correction)</p>

                <p>(cm)</p>
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
            <tr>
              <td colspan="4">
                &nbsp;&nbsp; Mean Diameter,D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Mean Diameter of the Bob, D= ……………cm</p>

      <p>Mean radius of the bob, r =D/2 = .........cm</p>

      <p>Least count of stop watch =..........s</p>

      <p>Zero error of stop watch =...........s</p>

      <p>Zero correction of stop watch =...........s</p>

      <p>
        Table for length (
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»l«/mi»«/math»"
          class="Wirisformula"
          src={PendulumPro7}
          title="Double click to edit"
        />
        ) and time (T)
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
              <td rowspan="2" >
                Sl No
              </td>
              <td rowspan="2" >
                (l-r)cm
              </td>
              <td rowspan="2">
                <p>Length of the pendulum</p>

                <p>l (cm)</p>
              </td>
              <td colspan="3" >
                &nbsp; Time for 20 oscillations
              </td>
              <td rowspan="2">
                <p>&nbsp;Time Period</p>

                <p>
                  <img
                    align="middle"
                    alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»T«/mi»«mo»=«/mo»«mfrac»«mi mathvariant=¨normal¨»t«/mi»«mn»20«/mn»«/mfrac»«mo»(«/mo»«mi mathvariant=¨normal¨»s«/mi»«mo»)«/mo»«/math»"
                    class="Wirisformula"
                    src={PendulumPro8}
                    title="Double click to edit"
                  />
                </p>
              </td>
              <td rowspan="2">
                <p>
                  &nbsp;T<sup>2</sup>
                </p>

                <p>(s)</p>
              </td>
              <td rowspan="2" >
                <img
                  align="middle"
                  alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mi mathvariant=¨normal¨»l«/mi»«msup»«mi mathvariant=¨normal¨»T«/mi»«mn»2«/mn»«/msup»«/mfrac»«mo»(«/mo»«mi mathvariant=¨normal¨»m«/mi»«mo»/«/mo»«msup»«mi mathvariant=¨normal¨»s«/mi»«mn»2«/mn»«/msup»«mo»)«/mo»«/math»"
                  class="Wirisformula"
                  src={PendulumPro9}
                  title="Double click to edit"
                />
              </td>
            </tr>
            <tr>
              <td >t1(s)</td>
              <td >t2(s)</td>
              <td>
                <p>Mean</p>

                <p>t(s)</p>
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
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      

      <h1 className={classes.headTag}>Calculations</h1>

      <p>
        Mean value of .=…………..ms<sup>-2</sup>
      </p>

      <p>
        The acceleration due to gravity,{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»g«/mi»«mo»=«/mo»«mn»4«/mn»«msup»«mi mathvariant=¨normal¨»§#960;«/mi»«mn»2«/mn»«/msup»«mfenced»«mfrac»«mi mathvariant=¨normal¨»l«/mi»«msup»«mi mathvariant=¨normal¨»T«/mi»«mn»2«/mn»«/msup»«/mfrac»«/mfenced»«/math»"
          class="Wirisformula"
          src={PendulumPro10}
          title="Double click to edit"
        />
      </p>

      <p>
        g = …………m/s<sup>2</sup>
      </p>

      <p>Acceleration due to gravity from graph</p>

      <p>Value or l = AB = -----cm</p>

      <p>
        Value for T<sup>2&nbsp;</sup>= BC = -----------cm
      </p>

      <p>AB / BC = ………..</p>

      <p>
        Acceleration due to gravity,{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»g«/mi»«mo»=«/mo»«mn»4«/mn»«msup»«mi mathvariant=¨normal¨»§#960;«/mi»«mn»2«/mn»«/msup»«mfenced»«mfrac»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»B«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»C«/mi»«/mrow»«/mfrac»«/mfenced»«/math»"
          class="Wirisformula"
          src={PendulumPro11}
          title="Double click to edit"
        />
      </p>

      <p>
        g=---------m/s<sup>2</sup>&nbsp;
      </p>

      <h1 className={classes.headTag}>Result</h1>

      <ol>
        <li>
          &nbsp;Acceleration due to gravity (g) at the place
          <ul>
            <li>
              By calculation =………….ms<sup>-2</sup>
            </li>
            <li>
              From the graph =………….ms<sup>-2</sup>
            </li>
            <li>
              Mean g =………….ms<sup>-2</sup>
            </li>
          </ul>
        </li>
        <li>Length of the seconds pendulum =………….m</li>
        <li>Length of the pendulum whose period is 1.5 s=……..m</li>
        <li>Period of the pendulum of length 105 cm=…….s&nbsp;</li>
      </ol>

      

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Simple pendulum. Retrieved 23 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=159&cnt=2
        </Typography>
      </div>
    </div>
  );
}
