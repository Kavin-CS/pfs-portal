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

import BelljarImg from '../../../../../../../../../assets/Images/Subjects/Physics/belljar1.png';
import BelljarImg2 from '../../../../../../../../../assets/Images/Subjects/Physics/belljar2.png';

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
  bellJarTable: {
    width: '100%',
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div className={classes.divContent}>
      <div class="divContent">
        <h1 className={classes.headTag}>Materials Required:</h1>

        <p>
          <img alt="" src={BelljarImg} />
        </p>

        <h1 className={classes.headTag}>&nbsp;The Procedure:</h1>

        <p>
          <img alt="" src={BelljarImg2} />
        </p>

        <h2 className={classes.secondaryTag}>
          &nbsp;&nbsp; (a) As performed in a real lab:&nbsp;
        </h2>

        <ol>
          <li>Arrange the apparatus as shown in the figure.</li>
          <li>
            Connect the electric bell and the vacuum pump to the air tight glass
            bell jar.
          </li>
          <li>Insert key to complete the circuit.</li>
          <li>
            Reduce the air pressure inside the chamber by pumping out the air
            through the vacuum pump.
          </li>
          <li>
            As the air in the jar is being pumped out, the sound becomes
            fainter, although it is the same current that is passing through the
            bell.
          </li>
          <li>
            On reducing the air pressure further, the intensity of the sound
            reduces and stops.
          </li>
        </ol>

        <h2 className={classes.headTag}>
          &nbsp;&nbsp; (b) As performed using the simulator:
        </h2>

        <ol>
          <li>Click on the ‘Power on’ button to insert key in the circuit.</li>
          <li>
            The hammer hits the gong constantly and the sound of the electric
            bell is heard.
          </li>
          <li>
            Decrease the air pressure from 1 atm by moving the ‘air pressure’
            slider.
          </li>
          <li>
            Listen to the intensity of sound heard from the bell jar, observe
            the hitting of the hammer on the gong and put a tick mark on the
            appropriate place in the observation column.
          </li>
        </ol>

        <h1 className={classes.headTag}>Observations:</h1>

        <div>
          <table
            align="center"
            border="1"
            class="responsive_table"
            className={classes.bellJarTable}
          >
            <tbody>
              <tr>
                <td height="30;" rowspan="2" width="100;">
                  Air Pressure
                  <br />
                  (atm)
                </td>
                <td colspan="6" height="30;" width="30;">
                  Intensity of Sound
                </td>
              </tr>
              <tr>
                <td height="30;">Very High</td>
                <td height="30;">High</td>
                <td height="30;">Low</td>
                <td height="30;">Very Low</td>
                <td height="30;">Very Feeble</td>
                <td height="30;">No Sound</td>
              </tr>
              <tr>
                <td height="30;">1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td height="30;">0.8</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td height="30;">0.6</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td height="30;">0.4</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td height="30;">0.1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td height="30;">0.01</td>
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
          We have observed that as the pressure inside the bell jar decreases,
          the intensity of sound heard from the jar gradually decreases and
          stops. However,&nbsp; the bell is still continuing to ring.
        </p>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Bell Jar Experiment. Retrieved 3 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=1&sim=83&cnt=142
        </Typography>
      </div>
    </div>
  );
}
