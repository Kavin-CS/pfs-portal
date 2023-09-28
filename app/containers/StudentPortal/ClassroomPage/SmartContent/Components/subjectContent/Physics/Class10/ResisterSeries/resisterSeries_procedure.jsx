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
import ResisterParellelProcedure from '../../../../../../../../../assets/Images/Subjects/Physics/EquivalentResistance.png';
import ResisterParellelProcedure2 from '../../../../../../../../../assets/Images/Subjects/Physics/resistanceSeries2.gif';

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
    fontSize: 20,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div className={classes.divContent}>
      <h1 className={classes.headTag}>Materials Required:&nbsp;</h1>

      <p>
        <img align="middle" alt="" src={ResisterParellelProcedure} />
      </p>

      <h1 className={classes.headTag}>Procedure:&nbsp;</h1>

      <h2 className={classes.secondaryTag}>
        As performed in the real lab:&nbsp;
      </h2>

      <ol start="1" type="1">
        <li>Make a circuit as shown in the figure.</li>
        <li>Ensure that all the connections are tight.</li>
        <li>
          Check whether the connections are correct by removing some resistance
          from the resistance box and close the plug key ‘K’.
        </li>
        <li>
          Press the jockey at the left extreme of the metre bridge. Mark the
          direction of the deflection on the galvanometer. Again press the
          jockey at right extreme of the metre bridge and mark the direction of
          the deflection again. If the directions of the deflections are in
          opposite direction, then the connections are correct, otherwise check
          the connections.
        </li>
        <li>
          The balancing point is obtained by sliding the jockey along the wire
          and when there is no deflection in the galvanometer.
        </li>
        <li>
          Take at least three sets of observations by moving the jockey from
          both the end of the bridge for each wire and also when it is serially
          connected.
        </li>
        <li>Record your observations.</li>
        <li>
          Find its resistance of this combination as mentioned in the below
          observation table.&nbsp;
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>As performed in the simulator:</h2>

      <p>
        <img alt="" src={ResisterParellelProcedure2} />
      </p>

      <ol start="1" type="1">
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
          say “AB” which is<em> l </em>cm.
        </li>
        <li>
          Repeat the same by moving the jockey from the right end to the left
          and note down the length of the wire from the balanced position on the
          right side, let take it as “BC” which is <em>100-l</em> cm.
        </li>
        <li>
          Repeat the same procedure with second wire and note down the lengths.
        </li>
        <li>
          For each wire take three readings and calculate its mean
          readings/resistance.
        </li>
        <li>Repeat the same procedures for the series connection.</li>
      </ol>

      <h1 className={classes.headTag}>Observations:&nbsp;</h1>

      <p>
        <strong>Table for Length (l) and Unknown Resistance (X)</strong>&nbsp;
      </p>

      <div>
        <table
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td valign="center">
                <strong>Resistance coil </strong>
              </td>
              <td valign="center">
                <strong>Serial No. of Obs. </strong>
              </td>
              <td valign="center">
                <strong>
                  Resistance from the resistance box R (ohm)&nbsp;
                </strong>
              </td>
              <td>
                <strong>Length</strong>
                <br />
                <br />
                <br />
                <br />
                <strong>(cm)</strong>
                <br />
                &nbsp;
              </td>
              <td>
                <strong>Length</strong>
                <br />
                <br />
                <br />
                <br />
                <strong>(cm)</strong>
                <br />
                &nbsp;
              </td>
              <td>
                <strong>Resistance</strong>
                <br />
                <br />
                <strong>(ohm)</strong>
              </td>
              <td valign="center">
                <strong>Mean resistance (ohm)</strong>
              </td>
            </tr>
            <tr>
              <td>
                &nbsp;r<sub>1</sub> only
              </td>
              <td>
                1.
                <br />
                2.
                <br />
                3.
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                &nbsp; r<sub>1</sub> =...........
              </td>
            </tr>
            <tr>
              <td>
                &nbsp;r<sub>2</sub> only
              </td>
              <td>
                1.
                <br />
                2.
                <br />
                3.
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                &nbsp; r<sub>2</sub> =...........
              </td>
            </tr>
            <tr>
              <td>
                r<sub>1</sub> and r<sub>2 </sub>in series
              </td>
              <td>
                1.
                <br />
                2.
                <br />
                3.
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                &nbsp; R<sub>s</sub> =...........
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Calculations:</h1>

      <ul>
        <li>
          Calculation for r<sub>1</sub> only, r<sub>2</sub> only, r<sub>1</sub>{' '}
          and r<sub>2</sub> in series
          <br />
          &nbsp;
        </li>
        <li>
          Calculation for verification of laws in series
          <br />
          <br />
          Experimental value of R<sub>s</sub>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;&nbsp; = ........... ohm
          <br />
          Theoretical value of R<sub>s</sub> &nbsp; &nbsp; &nbsp; = &nbsp; r
          <sub>1</sub> +&nbsp;r<sub>2</sub> = ........... ohm
          <br />
          Difference (if any) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; = ........... ohm
        </li>
      </ul>

      <h1 className={classes.headTag}>Result:&nbsp;</h1>

      <p>
        Within the limits of experimental error, experimental and theoretical
        values of R<sub>s</sub> are same. Hence, law of resistance in series is
        verified.&nbsp;
      </p>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Equivalent Resistance of Resistors
          (Series). Retrieved 3 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=4&sim=40&cnt=122
        </Typography>
      </div>
    </div>
  );
}
