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
import SonometerProcedure1 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer1/sono-pro1.png';
import SonometerProcedure2 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer1/sono-pro2.png';
import SonometerProcedure3 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer1/sono-pro3.png';

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
        <li>Sonometer</li>
        <li>Step down transformer</li>
        <li>Horse shoe magnet</li>
        <li>A set of slotted weights</li>
        <li>Weight hanger</li>
        <li>Paper rider</li>
        <li>Bridges</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <ul>
        <li>Place the sonometer on the table.</li>
        <li>
          Attach a weight hanger at the free end of the string which passes over
          the pulley.
        </li>
        <li>
          Stretch the wire by loading a suitable maximum mass on the weight
          hanger.
        </li>
        <li>
          The sonometer wire is connected to the secondary of the step down
          transformer.
        </li>
        <li>
          The horse shoe magnet is mounted at the middle of sonometer bed so as
          to produce a magnetic field perpendicular to the wire.
        </li>
        <li>The opposite poles of the magnet must face each other.</li>
        <li>
          The bridges are placed on either side of the magnet at equal distance
          from the magnet and are close to each other.
        </li>
        <li>
          A light paper rider is placed on the wire between the bridges of the
          sonometer.
        </li>
        <li>The A.C. supply is switched on.</li>
        <li>The wire begins to vibrate.</li>
        <li>
          The length of the wire between the two bridges is adjusted till the
          wire vibrates with maximum amplitude. At this stage, the paper rider
          placed on the wire is thrown off, which shows the condition of
          resonance.
        </li>
        <li>
          The length of the wire between the two bridges is measured. This is
          called the resonating length l.
        </li>
        <li>
          Then calculate the value of (M/l<sup>2</sup>).
        </li>
        <li>
          Repeat the experiment for different loads and the average value of
          (M/l<sup>2</sup>) is found.
        </li>
        <li>
          The linear density of the wire, m, can be calculated using the
          relation, m = πr<sup>2</sup>ρ, where r is the radius of the wire which
          can be measured using the screw gauge.
        </li>
        <li>
          By knowing the linear density, m, of the wire, the frequency of A.C.
          mains supply is calculated using the formula,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={SonometerProcedure1}
        />
      </p>

      <ul>
        <li>
          Draw a graph between mass (M) of the suspended weights and square of
          the resonating length (l<sup>2</sup>) by taking M along X-axis and l
          <sup>2</sup> along Y-axis. The graph should be a straight sloping
          line. The slope of the line gives the value of M/l<sup>2</sup>, which
          is a constant.
        </li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <ul>
        <li>Select the environment from the drop down list.</li>
        <li>Select the material of the wire from the drop down list.</li>
        <li>Select the type of AC supply from the drop down list.</li>
        <li>Select the frequency of AC using the slider.</li>
        <li>Select the diameter of the wire using the slider.</li>
        <li>Select the weight of the slotted weights using the slider.</li>
        <li>Click on the ‘Power on’ to switch on/off the power supply.</li>
        <li>Change the position of bridge A using the slider.</li>
        <li>Change the position of bridge B using the slider.</li>
        <li>Change the position of the magnet using the slider.</li>
        <li>
          Click on the ‘Place the paper rider’ button to replace the paper
          rider.
        </li>
        <li>
          To redo the experiment, click on the ‘Reset’ button.
          <br />
          &nbsp;
        </li>
      </ul>

      <h1 className={classes.headTag}>Observations:</h1>

      <p>
        <strong>
          Find M/l<sup>2</sup>
        </strong>
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
              <td >
                <strong>Trial No.</strong>
              </td>
              <td>
                <p>
                  <strong>Mass suspended</strong>
                </p>

                <p>
                  <strong>M (kg)</strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>Resonating length</strong>
                </p>

                <p>
                  <strong>
                    l (cm = 10<sup>-2</sup> m)
                  </strong>
                </p>
              </td>
              <td >
                <strong>
                  l<sup>2</sup> (m<sup>2</sup>)
                </strong>
              </td>
              <td >
                <strong>
                  M/l<sup>2</sup> (kgm<sup>-2</sup>)
                </strong>
              </td>
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

      <p>Find the diameter of the wire</p>

      <p>
        <strong>1.To find the least count (L.C)</strong>
      </p>

      <p>1 Linear Scale Division, LSD = 1 mm</p>

      <p>Number of full rotations given to screw =4</p>

      <p>Distance moved by the screw = 4mm</p>

      <p>Hence, pitch p = 4mm/4 = 1mm</p>

      <p>Number of divisions on circular scale=100</p>

      <p>Hence, least count, L.C = 1mm/100 = 0.01 mm= 0.001 cm</p>

      <p>
        <strong>2. Zero Error</strong>
      </p>

      <p>(i) zero error = --------------mm</p>

      <p>(ii)&nbsp; zero error = ---------------mm</p>

      <p>(iii) zero error = ----------------mm</p>

      <p>Mean zero error, e = ------------mm</p>

      <p>
        Mean zero correction, c = -e = -------mm&nbsp; &nbsp;
        <br />
        &nbsp;
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
              <td >
                <strong>Trial No.</strong>
              </td>
              <td>
                <p>
                  <strong>PSR</strong>
                </p>

                <p>
                  <strong>&nbsp;X(mm)</strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>HSR</strong>
                </p>

                <p>
                  <strong>&nbsp;&nbsp;&nbsp; a&nbsp;&nbsp;&nbsp; </strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>Corrected HSR</strong>
                </p>

                <p>
                  <strong>a ± c</strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>Corrected</strong>
                </p>

                <p>
                  <strong>HSR X L.C</strong>
                </p>

                <p>
                  <strong>Y (mm)</strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>Total reading </strong>
                </p>

                <p>
                  <strong>X + Y (mm)</strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>Mean Diameter</strong>
                </p>

                <p>
                  <strong>
                    mm (10<sup>-3</sup> m)
                  </strong>
                </p>
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

      <h1 className={classes.headTag}>Calculations:</h1>

      <p>
        The density of the material of the wire, ρ = ………………kg/m<sup>3</sup>
      </p>

      <p>Radius of the wire r = ………..m</p>

      <p>
        Linear density of the wire, m = πr<sup>2</sup>ρ = ………….kg/m
      </p>

      <p>
        Mean (M/l<sup>2</sup>) = …………………. kg/m<sup>2</sup>
      </p>

      <p>Frequency of A.C. main ,&nbsp;&nbsp;&nbsp;</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={SonometerProcedure2}
        />
      </p>

      <p>
        From the graph, M/l<sup>2</sup> = AB/BC = k, a constant.
      </p>

      <p>Therefore, from the graph, the frequency of A.C. main,</p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt=""
          src={SonometerProcedure3}
        />
        &nbsp;&nbsp;
      </p>

      <h1 className={classes.headTag}>Result:</h1>

      <p>The frequency of A.C. mains supply = …………. Hz.</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). AC Sonometer. Retrieved 19 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=6&sim=151&cnt=2
        </Typography>
      </div>
    </div>
  );
}
