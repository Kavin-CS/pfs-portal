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
import ResistorPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-pro1.jpg';
import ResistorPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-pro2.png';
import ResistorPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-pro3.png';
import ResistorPro4 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-pro4.gif';


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
      <h1 className={classes.headTag}>Materials required:</h1>

      <ul>
        <li>Metre bridge (slide wire bridge)</li>
        <li>Battery (Leclanche cell)</li>
        <li>Galvanometer</li>
        <li>Resistance box (0.1 to 10 ohm)</li>
        <li>Jockey</li>
        <li>One way key</li>
        <li>Two resistance wires</li>
        <li>Screw gauge</li>
        <li>Metre scale</li>
        <li>A set square</li>
        <li>Connecting wires</li>
      </ul>

      <h1 className={classes.headTag}>Procedure:</h1>

      <ul>
        <li>
          Make sure you first draw the circuit diagram and arrange the metre
          bridge apparatus.
        </li>
      </ul>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={ResistorPro1} />
      </p>

      <ul>
        <li>
          Connect the resistance wire whose resistance say X is to be determined
          in gap G<sub>1</sub>. Take care of that no part of the wire forms a
          loop and minimum portion of the wire is used for connection.
        </li>
        <li>
          Connect a resistance box of low range in gap G<sub>2</sub>.
        </li>
        <li>Make all other connections as in the circuit diagram.</li>
        <li>Take out some resistance (say 2Ω) from the resistance box.</li>
        <li>Insert the key in plug key to complete the battery circuit.</li>
        <li>
          Touch the jockey gently first at left and then at right end of the
          bridge wire. Note the deflections in the galvanometer. If the
          galvanometer shows deflections in opposite directions, the connections
          are correct. If the deflection is in one side only then there is some
          fault in the circuit, so the connections need to be checked.
        </li>
        <li>
          Allow the jockey to gently move or slide over the wire between A and C
          from left to right till galvanometer gives a null deflection
          (galvanometer reads the value 0)
        </li>
        <li>
          The point where the jockey is touching the wire is null point B.
        </li>
        <li>
          Place jockey in the middle of the wire (between 45cm to 55cm), choose
          an appropriate value of R from the resistance box such that the
          galvanometer shows null deflection.(Pointing 0)
        </li>
        <li>
          Note position of point B and measure the distance from the end where
          the resistance wire is connected to the point B. It is taken as the
          balancing length l<sub>1</sub> (AB)
        </li>
        <li>Also note the length CB (100-l).</li>
        <li>
          Interchange the resistances X and R. i.e, connect X in gap G
          <sub>2</sub> and R in gap G<sub>1</sub>
        </li>
        <li>
          Gently move jockey on the wire to attain null deflection in the
          galvanometer. (Shows zero in the galvanometer.)
        </li>
        <li>
          Note the reading balancing length l<sub>2</sub> (CB) and the length AB
          (100-l).
        </li>
        <li>
          The mean balancing length is calculated. Repeat the experiment with
          different values of known resistance R.
        </li>
        <li>
          Using the formula X=
          <img
            align="middle"
            alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mrow»«mi»R«/mi»«mi»l«/mi»«/mrow»«mrow»«mo»(«/mo»«mn»100«/mn»«mo»-«/mo»«mi»l«/mi»«mo»)«/mo»«/mrow»«/mfrac»«/math»"
            class="Wirisformula"
            src={ResistorPro2}
            title="Double click to edit"
          />{' '}
          , we can find out the unknown resistance.
        </li>
        <li>
          A mean value of the unknown resistance calculated will be considered
          as the value of unknown resistance.
        </li>
        <li>
          Connect two resistances X<sub>1</sub> and X<sub>2</sub> in series and
          repeat the experiment keeping this combination in gap G<sub>1</sub>{' '}
          and vice versa. This gives the resistance of combination, X
          <sub>s</sub> of X<sub>1</sub> and X<sub>2</sub> in series.
        </li>
        <li>
          Connect two resistances X<sub>1</sub> and X<sub>2</sub> in parallel
          and repeat the experiment keeping this combination in gap G
          <sub>1</sub> and vice versa.This gives the resistance of combination,X
          <sub>p</sub> of X<sub>1</sub> and X<sub>2</sub> in parallel.
        </li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        ):
      </h1>

      <h2 className={classes.secondaryTag}>Law of Resistances in Series</h2>

      <ul>
        <li>
          Your simulator will consist of a metre bridge kept on a table,
          battery, resistance box and wires on the side bar menu.
        </li>
        <li>
          You can calculate the resistance of a single wire or serially
          connected wire by selecting from the drop down menu, “Arrangement of
          Resistors”.
        </li>
        <li>
          If you selected, “Single”, then drag the battery and the resistance
          box shown on the side bar menu near to the metre bridge using your
          mouse.
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
          right side, let take it as “BC” which is 100-l cm.
        </li>
        <li>
          Repeat the same procedure with second wire and note down the lengths.
        </li>
        <li>
          For each wire take three readings and calculate its mean
          readings/resistance.
        </li>
        <li>Repeat the same procedures for the series connection.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Law of Resistances in Parallel</h2>

      <ul>
        <li>
          Your simulator will consist of a metre bridge kept on a table,
          battery, resistance box and wires on the side bar menu.
        </li>
        <li>
          You can calculate the resistance of a single wire or serially
          connected wire by selecting from the drop down menu, “Arrangement of
          Resistors”.
        </li>
        <li>
          If you selected, “Single”, then drag the battery and the resistance
          box shown on the side bar menu near to the metre bridge using your
          mouse.
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
          Repeat the same procedures for the parallel connection. (Here, you
          need to drag the wire twice to make a parallel connection).
        </li>
        <li>
          <h1 className={classes.headTag}>Observations:</h1>
        </li>
      </ul>
      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td rowspan="1">
                <p>Unknown resistance</p>
              </td>
              <td rowspan="1">
                Trial No
              </td>
              <td rowspan="1">
                <p>Resistance from the resistance box</p>

                <p>(R ohm)</p>
              </td>
              <td colspan="4" rowspan="1">
                Balancing Length on the side of X
              </td>
              <td rowspan="1">
                <p>(100-l)cm</p>
              </td>
              <td rowspan="1">
                <p>Unknown resistance</p>

                <p>
                  &nbsp;
                  <img
                    align="middle"
                    alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi»X«/mi»«mo»=«/mo»«mfrac»«mrow»«mi»R«/mi»«mi»l«/mi»«/mrow»«mfenced»«mrow»«mn»100«/mn»«mo»-«/mo»«mi»l«/mi»«/mrow»«/mfenced»«/mfrac»«/math»"
                    class="Wirisformula"
                    src={ResistorPro3}
                    title="Double click to edit"
                  />
                </p>
              </td>
              <td rowspan="1">
                <p>Mean Resistance</p>

                <p>(ohm)</p>
              </td>
            </tr>
            <tr>
              <td rowspan="3">
                X<sub>1</sub> only
              </td>
              <td>1</td>
              <td>&nbsp;</td>
              <td colspan="2">
                l<sub>1</sub> (cm)
              </td>
              <td>
                l<sub>2 </sub>(cm)
              </td>
              <td>Mean l (cm)</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td rowspan="3">
                &nbsp;X<sub>1 </sub>=
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>3</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td rowspan="3">
                X<sub>2</sub> only
              </td>
              <td>1</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td rowspan="3">
                &nbsp;X<sub>2 </sub>=
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>3</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td rowspan="3">
                <p>
                  X<sub>1</sub> and X<sub>2</sub>
                </p>

                <p>in series</p>
              </td>
              <td>1</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td rowspan="3">
                &nbsp;X<sub>s </sub>=
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>3</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="1" rowspan="3">
                <p>
                  X<sub>1</sub> and X<sub>2</sub>
                </p>

                <p>in parallel</p>
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td colspan="1" rowspan="3">
                &nbsp;X<sub>p</sub> =
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className={classes.headTag}>Calculation for verification of laws in series</h1>

      <p>
        Experimental value of X<sub>s</sub> = ........... ohm
        <br />
        Theoretical value of X<sub>s </sub>= X<sub>1</sub> + X<sub>2</sub> =
        ........... ohm
      </p>

      <h1 className={classes.headTag}>Calculation for verification of laws in parallel</h1>

      <p>
        Experimental value of X<sub>p</sub> = ........... ohm
        <br />
        Theoretical value of X<sub>p</sub>,
      </p>

      <p>
        &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;{' '}
        <img
          alt="X_{p}=\frac{X_{1}X_{2}}{X_{1}+X_{2}}"
          src={ResistorPro4}
        />{' '}
        ........... ohm
      </p>

      <h1 className={classes.headTag}>Result:</h1>

      <p>
        Experimental value of X<sub>s</sub> =&nbsp; ohm
      </p>

      <p>
        Theoritical value od X<sub>s</sub> =&nbsp;&nbsp; ohm
      </p>

      <p>
        Experimental value of X<sub>p</sub> =&nbsp;&nbsp; ohm
      </p>

      <p>
        Theoritical value of X<sub>p</sub> =&nbsp;&nbsp; ohm
      </p>

      <p>
        The experimental and the theoritical value of X<sub>s</sub> and X
        <sub>p</sub> are found to be the same.Hencew law of resistances in
        series and parallel is verified.
      </p>

      

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Metre bridge- Law of combination of
          resistors. Retrieved 22 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=150&cnt=2
        </Typography>
      </div>
    </div>
  );
}
