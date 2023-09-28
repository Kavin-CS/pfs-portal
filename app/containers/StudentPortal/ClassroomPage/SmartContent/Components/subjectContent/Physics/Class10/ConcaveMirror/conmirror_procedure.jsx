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
import InclinedPlanePro1 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/inclined-pro1.png';
import InclinedPlanePro2 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/inclined-pro2.png';
import InclinedPlanePro3 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/inclined-pro3.png';
import InclinedPlanePro4 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/inclined-pro4.png';
import InclinedPlanePro5 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/inclined-pro5.png';

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
      <h2 className={classes.secondaryTag}>As performed in the lab</h2>

      <p>
        <span>
          <strong>Material Required -</strong>
        </span>
      </p>

      <p>
        <span>
          A concave mirror, a mirror holder, a&nbsp;
          <span>white&nbsp;</span>
          <span>
            screen fixed on a stand or a white wall, an object (candle) and a
            metre scale.
          </span>
        </span>
      </p>

      <p>
        <span>
          <strong>Procedure -&nbsp;</strong>
        </span>
      </p>

      <ol>
        <li>
          <span>
            <span>
              Fix concave mirror to mirror holder and place it on table.Turn the
              face of mirror towards a distant object (a candle in this case).
              The selected object should be visible with your naked eyes.
            </span>
          </span>
        </li>
        <li>
          <span>
            Adjust the position of the screen in such a way that it forms a
            clear image of the candle on the screen.
          </span>
        </li>
        <li>
          <span>
            Measure the distance between the concave mirror and the screen with
            a metre scale. Record your observations in observation table.&nbsp;
          </span>
        </li>
        <li>
          <span>
            Repeat the experiment two or three times and find the mean value of
            the focal length.​
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>As performed in the simulator</h2>

      <ol>
        <li>
          <span>
            Drag the screen by clicking on point <strong>A</strong> of the
            screen till you get a sharp image of the objec
            <span>t.</span>
          </span>
        </li>
        <li>
          <span>
            Measure the distance between the concave mirror and the screen with
            given metre scale.&nbsp;This measured distance is
            <strong> focal length</strong> of concave mirror.
          </span>
        </li>
        <li>
          <span>
            Repeat the process two or three times. Take the mean of the measured
            focal length.
          </span>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To find focal length of a Concave Mirror.
          Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=67&cnt=2
        </Typography>
      </div>
    </div>
  );
}
