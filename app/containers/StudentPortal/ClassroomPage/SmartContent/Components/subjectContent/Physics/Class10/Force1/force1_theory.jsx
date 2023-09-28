import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import ForceThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Force11/force-the1.png';
import ForceThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Force11/force-the2.png';

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
      <h2 className={classes.headTag}>Objective:</h2>

      <p>
        <span>
          <span>
            To study the force on a current-carrying straight conductor in a
            magnetic field and to verify that the motion of the conductor is
            according to Fleming’s left-hand rule.
          </span>
        </span>
      </p>

      <h2 className={classes.headTag}>Theory:</h2>

      <p>
        <span>
          A current carrying conductor placed in a magnetic field experiences a
          force. If the direction of the field and that of current are mutually
          perpendicular to each other, then the force acting on the conductor
          will be perpendicular to both and that can be determined using the
          Fleming’s left-hand rule. When current establishes in the conductor,
          it gets displaced which verifies the existence of a force on the
          conductor. &nbsp;
        </span>
      </p>

      <p>
        <img alt="" src={ForceThe1} />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Fig. (1)
        -&nbsp;&nbsp;A current-carrying rod, AB, experiences a force
        perpendicular to its length and the magnetic field
      </p>

      <p>
        <span>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; Source: NCERT class X lab manual &nbsp;
        </span>
      </p>

      <h2 className={classes.headTag}>Fleming's Left Hand Rule:</h2>

      <p>
        <img alt="" src={ForceThe2} />
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Fig. (2)
        -&nbsp;&nbsp;Fleming’s left hand rule.
      </p>

      <p>
        <span>
          &nbsp; &nbsp; &nbsp;{' '}
          <span>Source: NCERT class X lab manual &nbsp;</span>
        </span>
      </p>

      <p>
        <span>
          Hold the thumb and the first two fingers of your left hand mutually at
          right angles to each other as shown in Fig. (2). Then if the
          Forefinger points in the direction of the Field, and the second finger
          in the direction of the Current, the thumb will point in the direction
          of Force.
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Force on a current carrying conductor in a
          magnetic field. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=241&cnt=1
        </Typography>
      </div>
    </div>
  );
}
