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
import BoilingProcedure from '../../../../../../../../../assets/Images/Subjects/Chemistry/boilingProcedure.jpg';

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
      <div class="divContent">
        <h1 className={classes.headTag}>Materials Required</h1>

        <p>
          <img alt="" src={BoilingProcedure} />
        </p>

        <h1 className={classes.headTag}>The Procedure</h1>

        <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

        <ul>
          <li>
            First fill two-thirds of the small test tube with the given liquid
            whose boiling point needs to be determined.
          </li>
          <li>
            Fix this test tube to the thermometer with a rubber band in such a
            way that the bottom of the tube is at the middle of the thermometer
            bulb. The rubber band should be fixed near the mouth of the tube so
            that it remains outside the acid bath.
          </li>
          <li>
            Fill half of the beaker with Con. sulphuric acid and place it over a
            wire gauze placed over a tripod stand.
          </li>
          <li>
            Clamp the thermometer carrying the test tube to an iron stand
            through a cork. Lower the thermometer along with the tube into the
            acid bath.
          </li>
          <li>
            Adjust the thermometer so its bulb is well under the acid and the
            open end of the tube with the rubber band is sufficiently outside
            the acid bath.
          </li>
          <li>
            Take the capillary tube and seal at it about 1 cm from one end by
            heating it in flame and giving it a slight twist.
          </li>
          <li>
            Place the capillary tube in the test tube containing the&nbsp; given
            liquid so that the sealed part of it stands in the liquid.
          </li>
          <li>
            Start heating the acid bath slowly and stir the bath gently. Keep an
            eye on the liquid and the test tube and also on the thread of the
            mercury in the thermometer.
          </li>
          <li>
            At first a bubble or two will be seen escaping at the end of the
            capillary tube dipped in the liquid, but soon a rapid and continuous
            stream of air bubbles escapes from it.&nbsp; At this stage the
            vapour pressure of the liquid just exceeds the atmospheric pressure.
          </li>
          <li>
            Note the temperature (t<sub>1</sub>) when continuous stream of
            bubbles starts coming out.
          </li>
          <li>
            Remove from the flame and note the temperature (t<sub>2</sub>) when
            the evolution of bubbles from the end of the capillary tube just
            stops.
          </li>
          <li>
            The mean of these two temperatures gives the boiling point of the
            liquid.
          </li>
          <li>
            Allow the temperature to fall by 10<sup>o</sup>C and repeat the
            heating and again note the boiling point.
          </li>
        </ul>

        <h2 className={classes.secondaryTag}>
          Simulator Procedure (as performed through the{' '}
          <a href="http://www.olabs.co.in/" target="_blank">
            Online Labs
          </a>
          )
        </h2>

        <ul>
          <li>
            You can select the compound from the ‘Select the unknown compound’
            drop down list.
          </li>
          <li>To start the experiment, click on the ‘Start’ button.</li>
          <li>The temperature begins to rise.</li>
          <li>
            Note the temperature ‘t<sub>1</sub>’ at which a continuous stream of
            air bubbles appear from the end of the capillary tube.
          </li>
          <li>
            Now turn off the burner by clicking on the ‘Knob’ of the burner.
          </li>
          <li>
            Note the temperature ‘t<sub>2</sub>’ at which the air bubbles
            completely disappear.
          </li>
          <li>Enter the values in the respective text boxes.</li>
          <li>The boiling point of the compound is shown in the text box.</li>
          <li>
            You can select the actual compound from the ‘Select the actual
            compound’ drop down list.
          </li>
          <li>
            You can verify your result by clicking on the ‘Show chart’ button.
          </li>
          <li>To redo the experiment, click on the ‘Reset’ button.&nbsp;</li>
        </ul>

        <h1 className={classes.headTag}>Observations</h1>

        <p>Record your observations in the table given below.</p>

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
                <td colspan="2">Note the temperature when;</td>
                <td rowspan="2">
                  Boiling Point of the given organic liquid (t<sub>1</sub> + t
                  <sub>2</sub> / 2 (<sup>o</sup>C)
                </td>
              </tr>
              <tr>
                <td>
                  Rapid and continuous evolution of gas bubbles occurs t
                  <sub>1</sub>(<sup>0</sup>C)
                </td>
                <td>
                  The evolution of gas bubbles just stops t<sub>2</sub> (
                  <sup>0</sup>C) (after removing from the flame)
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h1 className={classes.headTag}>Inference</h1>

        <p>
          The boiling point of the given organic liquid = ... <sup>o</sup>C.
        </p>

        <h1 className={classes.headTag}>Precautions</h1>

        <ul>
          <li>
            If on placing the sealed capillary tube in the test tube, the liquid
            is seen rising in the capillary tube, it indicates that the
            capillary tube is not properly sealed. Reject this capillary tube
            and use a new one.
          </li>
          <li>
            The seal point of the capillary tube should be well within the
            liquid.
          </li>
          <li>
            The acid bath must be heated very slowly and the acid is stirred to
            ensure uniform heating.&nbsp;
          </li>
        </ul>
      </div>

      <p>&nbsp;</p>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Boiling Point of an Organic Compound.
          Retrieved 2 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=111&cnt=481
        </Typography>
      </div>
    </div>
  );
}
