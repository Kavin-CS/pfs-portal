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
import VerifyOhmPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/VerifyOhm1/verifyohm-pro1.png';
import VerifyOhmPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/VerifyOhm1/verifyohm-pro2.jpg';
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
      <h2 className={classes.headTag}>As performed in the real lab:</h2>

      <h3 className={classes.secondaryTag}>Apparatus:</h3>

      <p>
        <span>
          <span>
            Magnetic bar, a galvanometer, coil and connecting wires.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Procedure:&nbsp;</h3>

      <ol>
        <li>Take a coil of wire having a large number of turns.</li>
        <li>Connect the end of the coil to a galvanometer.</li>
        <li>
          Take a strong bar magnet and move its north pole into the coil and
          observe the changes in the galvanometer needle.
        </li>
        <li>Repeat earlier step with the south pole of the bar magnet.</li>
        <li>
          Now repeat the procedure with the coil having a different number of
          turns and the variation in the deflection of the galvanometer needle.
        </li>
      </ol>

      <h2 className={classes.headTag}>As performed in the simulator:</h2>

      <ol>
        <li>
          <span>
            <span>
              Click on any one magnet from&nbsp;<strong>Bar magnets</strong>
              &nbsp;section.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Drag the bar magnet in/out of the&nbsp;<strong>Coil</strong>
              &nbsp;and observe the deflection of needle in the&nbsp;
              <strong>Galvanometer</strong>.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Repeat the same procedure for other bar magnet.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              For each magnet, observe the direction of deflection and change in
              deflection when we move magnet in/out with varying speeds.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Click on&nbsp;<strong>Next</strong>&nbsp;to continue.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Again, click on any one magnet from
              <strong>&nbsp;Bar magnets&nbsp;</strong>section.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              From the <strong>Number of turns</strong> section select the
              number of turns in the&nbsp;coil.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Drag the bar magnet in/out of the coil and observe the change in
              deflection for different number of turns in&nbsp;
              <strong>Coil</strong>.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Repeat procedure for all options in&nbsp;
              <strong>Number of turns</strong>. After this&nbsp;
              <strong>Observations &amp; Inference</strong>&nbsp;will be
              displayed.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Note the observations and inference.
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.headTag}>Observations &amp; Inference:</h2>

      <h3 className={classes.secondaryTag}>
        <span>
          Observations:
        </span>
      </h3>

      <ol>
        <li>
          <span>
            <span>
              When we move the magnet in or out of the coil, the needle of
              galvanometer gets deflected in different directions.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              When we insert the north pole (N) of bar magnet into the coil, the
              needle gets deflected in negative direction.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              When we insert the south pole (S) of bar magnet into the coil, the
              needle gets deflected in positive direction.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              When we move the bar magnet in or out of the coil with varying
              speed, the speed of deflection changes accordingly.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              As we increase the number of turns in the coil, the deflection
              increases.
            </span>
          </span>
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>
        <span>Inference:</span>
      </h3>

      <ol>
        <li>
          <span>
            <span>
              The deflection of galvanometer needle indicates the presence of
              current in the coil.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              The direction of deflection gives the direction of flow of
              current.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              The speed of deflection gives the rate at which the current is
              induced.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              The deflection in galvanometer changes with the change in number
              of turns in the coil - more the number of turns in the coil
              greater is the deflection.
            </span>
          </span>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Electromagnetic Induction. Retrieved 25
          March 2021, from cdac.olabs.edu.in/?sub=74&brch=9&sim=242&cnt=2
        </Typography>
      </div>
    </div>
  );
}
