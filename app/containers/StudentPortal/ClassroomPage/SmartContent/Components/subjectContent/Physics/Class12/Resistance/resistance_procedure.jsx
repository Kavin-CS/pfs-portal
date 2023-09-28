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
import ResistancePro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-pro1.jpg';
import ResistancePro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-pro2.png';
import ResistancePro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-pro3.png';
import ResistancePro4 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-pro4.png';
import ResistancePro5 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-pro5.png';
import ResistancePro6 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-pro6.png';
import ResistancePro7 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-pro7.png';
import ResistancePro8 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-pro8.png';


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
  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>
        &nbsp;Materials required:
        <img alt="" src={ResistancePro1} />
      </h1>

      <ul>
        <li>&nbsp;&nbsp;&nbsp; Metre bridge (slide wire bridge)</li>
        <li>&nbsp; &nbsp; Leclanche cell or Battery eliminator</li>
        <li>&nbsp;&nbsp;&nbsp; Galvanometer</li>
        <li>&nbsp;&nbsp;&nbsp; Resistance box&nbsp;</li>
        <li>&nbsp;&nbsp;&nbsp; Jockey&nbsp;&nbsp;</li>
        <li>&nbsp;&nbsp;&nbsp; One way key</li>
        <li>&nbsp;&nbsp;&nbsp; A resistance wire</li>
        <li>&nbsp;&nbsp;&nbsp; Screw gauge</li>
        <li>&nbsp;&nbsp;&nbsp; Metre scale</li>
        <li>&nbsp;&nbsp;&nbsp; Connecting wires</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <ul>
        <li>
          Arrange the required materials on a table and make the connections as
          per the connections diagram.
        </li>
        <li>
          Connect the resistance wire in the left gap (between c &amp; d) and
          resistance box in the right gap.
        </li>
        <li>
          Introduce some resistance in the circuit by taking out some resistance
          from the resistance box.
        </li>
        <li>
          Plug the key. Bring the jockey in contact with the end A first, and
          then with C. &nbsp;Note the deflection on the galvanometer.
        </li>
        <li>
          If the galvanometer deflects in the opposite direction, the
          connections are right and the null point is in between A and C.
        </li>
        <li>
          If not so, change the resistance in the resistance box and repeat the
          process so that the null point is somewhere between A and C.
        </li>
        <li>
          If the galvanometer deflected towards a single side, then check the
          connection.
        </li>
        <li>
          Now, slide the jockey slowly over the wire starting from one and (say,
          A) and note the galvanometer deflection. Continue the process till the
          balancing point is reached.
        </li>
        <li>
          Balancing point is the point at which the galvanometer shows zero
          deflection. Now, note the position of the jockey from end A. Take it
          as the balancing length (l) using the metre scale.
        </li>
        <li>
          Repeat the process for different values of R. The balancing length is
          measured &nbsp;each time.
        </li>
        <li>
          Now, interchange the position of resistance wire and resistance box in
          gaps AB and CD.
        </li>
        <li>
          Repeat the above steps to find the balancing length, for the same
          values of R.
        </li>
        <li>
          We can calculate the unknown resistance of the resistance wire by
          using the relation,
        </li>
      </ul>

      <p>
        ​
        <img
          alt=""
          src={ResistancePro2}
        />
      </p>

      <ul>
        <li>
          Measure the diameter of the given resistance wire using a screw gauge.
          Hence, its radius(r) can be found.
        </li>
        <li>Also measure the length (L) of the wire using a metre scale.</li>
        <li>
          From the measured values, the specific resistance (resistivity) of the
          given resistance wire can be calculated using the relation,&nbsp;
        </li>
      </ul>

      <p>
        <img
          alt=""
          src={ResistancePro3}
        />
      </p>

      <ul>
        <li>
          <h1 className={classes.headTag}>
            Simulator Procedure (as performed through the{' '}
            <a href="http://amrita.olabs.co.in/" target="_blank">
              Online Labs
            </a>
            ):
          </h1>
        </li>
        <li>
          Your simulator will consist of a metre bridge kept on a table,
          battery, resistance box and wires on the side bar menu.
        </li>
        <li>
          Click on the battery and the resistance box shown on the side bar menu
          to place them near to the metre bridge.
        </li>
        <li>Drag one of the wires to the right gap of the metre bridge.</li>
        <li>Now the button, “Start experiment” will be enabled.</li>
        <li>
          Now you can select your desired resistance from the resistance box
          just by clicking on the box and then choosing the resistance from the
          pop-window, “Select Resistance”. Now close the pop-window.
        </li>
        <li>Click on the enabled button and "Insert Key”.</li>
        <li>
          Now you can move the jockey from one left end to right either by
          moving the jockey with your mouse or by moving the slider, “Jockey
          Position”.
        </li>
        <li>
          Simultaneously check the readings of the galvanometer, once the needle
          reaches the zero reading, stop moving the jockey and note down the
          length of the wire from the balanced position on the left side, let
          say “AB” which is l cm.
        </li>
        <li>
          Repeat the same by moving the jockey from the right end to the left
          and note down the length of the wire from the balanced position on the
          right side, let take it as “BC” which is (100-l) cm.
        </li>
        <li>
          Repeat the same procedure with second wire and note down the lengths.
        </li>
        <li>
          For each wire take three readings and calculate its mean
          readings/resistance.
        </li>
        <li>
          You can calculate the unknown resistance of the resistance wire by
          using the relation,
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={ResistancePro4}
        />
      </p>

      <ul>
        <li>
          If L is the length and r is the readius of the wire, the specific
          resistance (resistivity) of the given resistance wire can be
          calculated using the relation, &nbsp;
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={ResistancePro8}
        />
      </p>

      <h1 className={classes.headTag}>Observations:</h1>

      <h2 className={classes.secondaryTag}>
        <strong>
          <em>To find the resistance of the given wire:</em>
        </strong>
      </h2>

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
                No.
              </td>
              <td rowspan="2" >
                Resistance, R (Ω)
              </td>
              <td colspan="3" >
                Reistance wire in left gap
              </td>
              <td colspan="3" >
                Resistance wire in the rigth gap
              </td>
              <td rowspan="2" >
                Mean,&nbsp;
                <img
                  alt=""
                  src={ResistancePro5}
                />
                &nbsp;(Ω)
              </td>
            </tr>
            <tr>
              <td >Balancing length, AB =l (cm)</td>
              <td >Length, BC =(100-l) (cm)</td>
              <td >
                <img
                  alt=""
                  src={ResistancePro6}
                />
                (Ω)
              </td>
              <td >
                Balancing length, A'B' = l' (cm)
              </td>
              <td >Length, B'C' =(100-l') (cm)</td>
              <td >
                <img
                  alt=""
                  src={ResistancePro7}
                />
                &nbsp;(Ω)
              </td>
            </tr>
            <tr>
              <td >1</td>
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
              <td >2</td>
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
              <td >3</td>
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
              <td >4</td>
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
              <td >5</td>
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

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Mean resistance, X =
        .................. Ω
      </p>

      <h2 className={classes.secondaryTag}>
        <strong>
          <em>To find the diameter of the given wire:</em>
        </strong>
      </h2>

      <p>
        Least count of the screw gauge (LC)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        =…….. mm
      </p>

      <p>Zero correction of the screw gauge (Z)&nbsp;&nbsp; = ……. mm</p>

      <p>&nbsp;</p>

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
              <td >No.</td>
              <td >PSR (mm)</td>
              <td >Observed HSR, (a) (mm)</td>
              <td >Corrected HSR, (a+Z) (mm)</td>
              <td >Corrected HSRx LC (mm)</td>
              <td >
                Total Reading, d = PSR+ (Corrected HSRx L&nbsp;C ) (mm)
              </td>
            </tr>
            <tr>
              <td >1</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
              <td >&nbsp;</td>
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
      </div>

      <h4 className={classes.secondaryTag}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Mean, d =………mm
      </h4>

      <h1 className={classes.headTag}>Calculations</h1>

      <p>
        Diameter of the wire, d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        =………...mm
      </p>

      <p>
        Radius of the wire,
        r&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; =
        d/2
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp; =……......mm
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp; = ………..10<sup>-3</sup> m
      </p>

      <p>
        Length of the wire,
        L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        = ............cm
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        = ............10<sup>-2</sup> m
      </p>

      <p>Resistance of the wire, X &nbsp; &nbsp;&nbsp; = ............. Ω</p>

      <p>
        Resistivity ( specific resistance) of the
        wire,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={ResistancePro8}
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        = ............Ω m
      </p>

      <h1 className={classes.headTag}>Result</h1>

      <p>
        The unknown resistance of the given resistance wire, X &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; = ............ Ω<br />
        The specific resistance (resistivity) of the given resistance wire,
        ρ&nbsp; = ……...... Ω m
      </p>


      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Metre Bridge-Resistance of a wire.
          Retrieved 22 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=146&cnt=2
        </Typography>
      </div>
    </div>
  );
}
