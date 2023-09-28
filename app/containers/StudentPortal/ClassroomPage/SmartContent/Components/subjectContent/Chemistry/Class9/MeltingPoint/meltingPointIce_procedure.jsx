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
import MeltingIce from '../../../../../../../../../assets/Images/Subjects/Chemistry/MeltingIce.png';

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
    <div className={classes.divContent}>
      <h1 className={classes.headTag}>Materials Required:</h1>

      <p>
        <img alt="" src={MeltingIce} />
      </p>

      <h1 className={classes.headTag}>The Procedure:</h1>

      <h2 className={classes.secondaryTag }>Real Lab Procedure:</h2>

      <ul>
        <li>
          Take some ice cubes and dry them using a filter paper and quickly put
          them in a beaker.
        </li>
        <li>Place the beaker over a wire gauze kept over a tripod stand.</li>
        <li>
          Suspend a thermometer (temperature range -10 to 110°C) with the help
          of a clamp stand so that its bulb remains in the middle of the ice
          cubes.
        </li>
        <li>
          Ice cubes are moderately heated by a gas burner and stirred
          continuously using a glass rod.
        </li>
        <li>
          Note the temperature (t<sub>1</sub>) when the ice starts melting.
        </li>
        <li>Continue heating the ice.</li>
        <li>
          Note the temperature (t<sub>2</sub>) when the ice has melted
          completely.
        </li>
        <li>Record your observations in tabular form.</li>
      </ul>

      <h2 className={classes.secondaryTag }>Simulator Procedure:</h2>

      <ul>
        <li>
          You can select different pressures from ‘Select the pressure’ drop
          down list. (The zoomed view of the thermometer can be seen on the
          right side.)
        </li>
        <li>
          To put ice cubes into the beaker, drag the watch glass towards the
          beaker.
        </li>
        <li>
          You can see that the temperature level on the thermometer suddenly
          drops.
        </li>
        <li>To turn on the burner, click on the knob of the burner.</li>
        <li>To stir the ice cubes in the beaker, click on the stirrer.</li>
        <li>
          When ice starts melting, you can see the temperature t<sub>1</sub>°C,
          on the left hand side box.
        </li>
        <li>Continue stirring with the stirrer.</li>
        <li>
          When ice has completely melted, you can see the temperature t
          <sub>2</sub>°C on the left hand side box.
        </li>
        <li>
          You can calculate the melting point of ice using the equation given
          under ‘Result’ .
        </li>
        <li>
          You can verify your result by entering the value on the check box
          under ‘Result’ .
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the ‘<strong>HELP</strong>’ button to
        see the instructions.
      </p>

      <h1 className={classes.headTag}>Observations:</h1>

      <p>Record your observations in the table given below:&nbsp;</p>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td colspan="2" valign="top">
                Temperature when the ice
              </td>
              <td valign="top" width="181">
                Melting point of ice
              </td>
            </tr>
            <tr>
              <td valign="top" width="184">
                Starts melting&nbsp;&nbsp;&nbsp;t<sub>1</sub> (°C)
              </td>
              <td valign="top" width="196">
                Completely melted&nbsp;&nbsp; t<sub>2</sub> (°C)
              </td>
              <td valign="top" width="181">
                (t<sub>1</sub> + t<sub>2</sub>)/2 (°C)
              </td>
            </tr>
            <tr>
              <td valign="top" width="184">
                &nbsp;
              </td>
              <td valign="top" width="196">
                &nbsp;
              </td>
              <td valign="top" width="181">
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Inference:</h1>

      <p>The melting point of ice =__________°C</p>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ol>
        <li>
          The bulb of the thermometer should be kept surrounded with ice cubes.
        </li>
        <li>
          Ice should be stirred regularly to keep a uniform temperature
          throughout.
        </li>
        <li>
          Note temperature by keeping your eyes in line with the level of
          mercury.
        </li>
      </ol>

      <p>&nbsp;</p>
      <div className={classes.wrap}>
        <h1 className={classes.headTag} className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Melting Point of Ice. Retrieved 3 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=2&sim=30&cnt=1
        </Typography>
      </div>
    </div>
  );
}
