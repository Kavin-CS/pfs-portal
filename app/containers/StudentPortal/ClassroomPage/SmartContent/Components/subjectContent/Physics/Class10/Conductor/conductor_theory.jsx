import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ConductorThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Conductor1/conductor-the1.png';

const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    textAlign: 'left',
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
  },
  OhmsLawImg: {
    width: '350px',
    height: '210px',
  },
  headTag: {
    fontSize: 20,
  },
  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h2 className={classes.headTag}>
        <strong>Objective:&nbsp;</strong>
      </h2>

      <p>
        <span>
          To observe the magnetic field lines around current carrying conductor.
        </span>
      </p>

      <h2 className={classes.headTag}>
        <strong>Theory:</strong>
      </h2>

      <ol>
        <li>
          <span>
            <span>
              <strong>
                Magnetic effect of electric current
              </strong>
              <span>
                {' '}
                is one of the major effects of electric current in use, without
                the applications of which we cannot have motors in the existing
                world.{' '}
              </span>
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              <span>
                A current carrying conductor creates a magnetic field around it,
                which can be comprehended by using magnetic lines of force or
                magnetic field lines.{' '}
              </span>
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              <span>
                The nature of the magnetic field lines around a straight current
                carrying conductor is concentric circles with centre at the axis
                of the conductor.{' '}
              </span>
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              <span>
                The strength of the magnetic field created depends on the
                current through the conductor.
              </span>
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              The direction of the magnetic field lines of force around a
              conductor is given by the{' '}
              <strong>Maxwell’s right hand grip rule</strong> or{' '}
              <strong>the right handed corkscrew rule</strong>.​ ​Imagine that
              you are holding a current-carrying straight conductor in your
              right hand such that the thumb points towards the direction of
              current. Then your fingers will wrap around the conductor in the
              direction of the field lines of the magnetic field​ (See Fig.1)​.
              This is known as <strong>right hand thumb rule</strong>.
            </span>
          </span>
        </li>
      </ol>

      <p>&nbsp;</p>

      <p>
        <img
          align="middle"
          alt=""
          src={ConductorThe1}
          
        />
      </p>

      <p>Fig 1 - Right hand thumb rule.</p>

      

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Magnetic field lines around current
          carrying conductor. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=90&cnt=1
        </Typography>
      </div>
    </div>
  );
}
