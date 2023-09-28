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
      <h1 className={classes.headTag}>Materials required:</h1>

      <ol>
        <li>Two glass tubes of 3 ft. in length and 2 inches in diameter.</li>
        <li>Vertical reflector (say a polished wooden drawing board).</li>
        <li>Sounding body (Galton's whistle or clock).</li>
      </ol>

      <h1 className={classes.headTag}>Procedure:&nbsp;</h1>

      <h2 className={classes.secondaryTag}>As done in a real lab</h2>

      <ul type="1">
        <li>
          Arrange two glass tubes; AB and CD each horizontally at some angle in
          front of a vertical reflector R1R2 (a polished wooden drawing board).{' '}
          <img alt="" />
        </li>
        <li>
          At the mouth A, of the tube AB, place a sounding body (a tuning fork
          or a clock).
        </li>
        <li>
          Adjust the inclination of the tube CD with respect to the reflector
          R1R2 so that the sound is distinctly and loudly heard when the ear is
          placed at D.
        </li>
        <li>Mark the portion of tube AB and CD.</li>
        <li>
          Draw a dotted line from the centre of diameter of tube AB and CD and
          extend up to reflector board. Draw a normal.
        </li>
        <li>
          Measure the angle between the sound waves coming from the tube AB and
          the normal (<em fontWeight='normal'>ie.&nbsp;</em>the <em fontWeight='normal'>angle of incidence</em> of sound
          waves)
        </li>
        <li>∠AON called angle of incidence, ∠i.&nbsp;</li>
        <li>
          Then measure the angle of reflection, ie., angle between normal and
          the central line drawn from the tube CD, when the sound is distinctly
          and loudly audible. This is the <em fontWeight='normal'>angle of reflection </em>of sound
          wave,∠r, ie. ∠DON
        </li>
      </ul>

      <ul type="1" />

      <h2 className={classes.secondaryTag}>As done using the simulator</h2>

      <ul type="1">
        <li>
          Select the ‘Show Protractor’ button to show the protractor.&nbsp; The
          protractor can be rotated by clicking over the two way arrow mark
          shown on the protractor and dragging it.
        </li>
        <li>
          The speaker icon depicts that the simulation involves sound which
          ensure that&nbsp; you must use an audio device (head phone or
          speakers).
        </li>
        <li>
          Now move the lower end of Tube 1 to the left at an angle of 20
          <sup>o</sup> on the protractor.
        </li>
        <li>
          Then position the tuning fork at the mouth of Tube 1.&nbsp; This can
          be done by dragging the tuning fork with the mouse.
        </li>
        <li>You can hear the sound waves passing through Tube 1.</li>
        <li>
          Now move the lower end of Tube 2 towards the right to catch the sound
          waves passing through Tube 1.
        </li>
        <li>
          Once you get the maximum sound through Tube 2, fix the tube at that
          angle.
        </li>
        <li>
          Note down the Angle of Incidence and Angle of Reflection.&nbsp; You
          will notice that both are the same ie., 20<sup>o</sup>.
        </li>
        <li>
          Repeat the same by moving Tube 1 to the left at angles 40<sup>o</sup>,
          60<sup>o</sup> and 80<sup>o</sup> and note down the angles at which
          the maximum sound is obtained through Tube 2.
        </li>
      </ul>

      <p>
        <strong>Note:</strong>
      </p>

      <ul>
        <li>
          The ‘Hide Tubes’ button can be used to hide the tubes so that you can
          take accurate readings.
        </li>
        <li>The ‘Hide Waves’ button can be used to hide the waves.</li>
      </ul>

      <h1 className={classes.headTag}>Observations:</h1>

      <table
        border="0"
        cellpadding="1"
        cellspacing="0"
        class="responsive_table"
        height="77"
        width="548"
      >
        <tbody />
        <tbody>
          <tr>
            <td>Sl. No</td>
            <td>
              Angle of incidence&nbsp;&nbsp;&nbsp; ∠i = ∠AON
            </td>
            <td>
              &nbsp;&nbsp; Angle of reflection&nbsp;&nbsp; ∠r = ∠DON
            </td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp; 1</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp; 2</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp; 3</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>

      <ol>
        <li>
          The tubes carrying sound waves, the normal to the vertical reflector
          and the reflected wave are in the same plane.
        </li>
        <li>
          Measure the angle of incidence and angle of reflection and record the
          observations in a table as given below:
        </li>
      </ol>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From the
        above observations, we can conclude that angle of incidence ∠i = angle
        of reflection∠r.
      </p>

      <h1 className={classes.headTag}>Inference:</h1>

      <ol>
        <li>
          &nbsp;Since the tubes are normal to the vertical reflector, and the
          reflected wave lie on one and the same plane, the First Law is
          verified.
        </li>
        <li>
          The angles of incidence and the angle of reflection of sound are found
          to be equal, which verifies the Second Law.
        </li>
      </ol>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ul type="1">
        <li>
          The inner surface of the metallic tube should be highly polished.
        </li>
        <li>Metal plate should be highly polished.</li>
        <li>
          The tuning fork should be close to the tube, but it should not touch
          the tube.
        </li>
        <li>
          There should be complete silence in the laboratory so that sound from
          other sources does not interfere.
        </li>
        <li>
          The ends of metallic tubes should project out at least 1cm from the
          edge of the table top.<small>&nbsp; </small>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Laws of Reflection of Sound. Retrieved
          26 March 2021, from amrita.olabs.edu.in/?sub=1&brch=1&sim=1&cnt=19
        </Typography>
      </div>
    </div>
  );
}
