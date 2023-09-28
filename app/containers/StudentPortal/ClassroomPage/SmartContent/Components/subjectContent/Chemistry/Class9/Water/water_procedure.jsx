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
import WaterPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Water1/water-pro1.png';

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
    <div class="divContent">
      <h1 className={classes.headTag}>Materials Required:</h1>

      <p>
        <img
          align="middle"
          alt=""
          src={WaterPro1}
        />
      </p>

      <ul type="disc" />

      <h1 className={classes.headTag}>The Procedure:</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:</h2>

      <ul type="disc">
        <li>
          Take about 25ml of distilled water in a boiling tube and add 2-3 small
          pieces of pumice stone.
        </li>
        <li>
          Close the mouth of the boiling tube with a rubber cork that has two
          bores and clamp it with the stand.
        </li>
        <li>
          Introduce a thermometer (temperature range -10 to 110°C) in one bore
          of the cork of the boiling tube. Keep the bulb of the
          thermometer&nbsp; about 3-5 cm above the surface of the water.
        </li>
        <li>
          Then introduce one end of a delivery tube in the second bore of the
          cork.
        </li>
        <li>
          Place a 250ml beaker below the second end of the delivery tube to
          collect the condensed water.
        </li>
        <li>Heat the boiling tube gently, preferably by rotating the flame.</li>
        <li>
          Note the temperature (t<sub>1</sub>) when the water starts boiling.
        </li>
        <li>
          Continue to heat the water till the temperature becomes constant, and
          the water remains boiling. Note the constant temperature (t
          <sub>2</sub>).
        </li>
        <li>Record your observations in tabular form.</li>
      </ul>

      <p>
        <strong>Note: </strong>Pieces of pumice stone are added to water before
        heating to avoid bumping of liquid when the temperature rises. When
        water boils it releases energy as bubbles. If the bubbles do not form,
        the water can super heat and possibly explode. This could happen if the
        container is very clean and there is no means for the formation of
        bubbles. Adding pieces of rough stone gives lots of surface area for
        bubbles to form and release the energy gradually.
      </p>

      <h2 className={classes.secondaryTag}>Simulator Procedure:</h2>

      <ul>
        <li>
          You can select the different conditions from ‘Boiling point of water’
          drop down list.
        </li>
        <li>
          You can select the pressure/impure sample from ‘Select the
          pressure/impure samples’ drop down list.
        </li>
        <li>
          To put pumice stones into the test tube containing water, drag the
          spatula towards the test tube.
        </li>
        <li>To close the test tube, drag the double bored cork towards it.</li>
        <li>
          To insert the thermometer through one hole of the cork, drag the
          thermometer towards the test tube.
        </li>
        <li>
          To insert the delivery tube through the other hole of the cork, drag
          the delivery tube towards the test tube.
        </li>
        <li>To turn on the burner, click on the knob of the burner.</li>
        <li>
          You can see the zoomed view of the thermometer by clicking on the
          ‘Show zoom’ check box.
        </li>
        <li>
          You can see the temperature variation on the left side menu , at a
          particular temperature the water starts boiling and this constant
          temperature is the boiling point.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the ‘<strong>HELP</strong>’ button to
        see the instructions.
      </p>

      <h1 className={classes.headTag}>Observations:</h1>

      <p>Record observations in the table given below:&nbsp;</p>

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
              <td colspan="2" textAlign="center;" valign="top">
                <strong>Temperature when the water</strong>
              </td>
              <td valign="top" width="138">
                <strong>Boiling point of water</strong>
              </td>
            </tr>
            <tr>
              <td textAlign="center;" valign="top" width="170">
                <strong>
                  Starts boiling&nbsp;&nbsp;t<sub>1</sub> (in °C)
                </strong>
              </td>
              <td valign="top" width="330">
                <strong>
                  Continue to boil (Stationary temperature) t<sub>2</sub> (in
                  °C)
                </strong>
              </td>
              <td valign="top" width="138">
                <strong>
                  (t<sub>1</sub> + t<sub>2</sub>)/2 (in °C)
                </strong>
              </td>
            </tr>
            <tr>
              <td valign="top" width="170">
                &nbsp;
              </td>
              <td valign="top" width="330">
                &nbsp;
              </td>
              <td valign="top" width="138">
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Inference:</h1>

      <p>The boiling point of water =_______°C</p>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ol>
        <li>
          The bulb of the thermometer should be kept about 4-5 cm above the
          surface of water.
        </li>
        <li>
          Pieces of pumice stone should be added to water before heating to
          avoid bumping.
        </li>
        <li>Heating of water should be done by rotating the flame.</li>
        <li>
          Note temperature by keeping your eyes in line with the level of
          mercury.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Boiling Point of Water. Retrieved 3
          April 2021, from amrita.olabs.edu.in/?sub=73&brch=2&sim=29&cnt=2
        </Typography>
      </div>
    </div>
  );
}
