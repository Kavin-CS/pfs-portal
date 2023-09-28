import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import InclinedPlaneThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/incline-the1.jpg';
import InclinedPlaneThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/incline-the2.png';
import InclinedPlaneThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/incline-the3.png';
import InclinedPlaneThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/incline-the4.png';
import InclinedPlaneThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/incline-the5.jpg';
import InclinedPlaneThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/incline-the6.png';
import InclinedPlaneThe7 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/incline-the7.png';
import InclinedPlaneThe8 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/incline-the8.png';
import InclinedPlaneThe9 from '../../../../../../../../../assets/Images/Subjects/Physics/InclinedPlane1/incline-the9.png';

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
      <h1 className={classes.headTag}>Objective:</h1>

      <ol>
        <li>
          To find the downward force along an inclined plane, acting on a roller
          due to the gravitational pull of the earth.
        </li>
        <li>
          To study its relationship with the angle of inclination θ by plotting
          a graph between applied force and sin θ.
        </li>
      </ol>

      <h1 className={classes.headTag}>Theory:</h1>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The inclined plane
        consists of a smooth plane hinged to a base so that it can be set at any
        desired angle. Consider a heavy metal roller connected to a scale pan by
        a light extensible string passing over a frictionless pulley resting on
        the plane as shown in the figure given below.
      </p>

      <p>
        <img alt="" src={InclinedPlaneThe1} />
      </p>

      <p>
        If a body of mass (say m) is placed over an inclined plane, that is
        inclined at an angle{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi»§#952;«/mi»«/math»"
          class="Wirisformula"
          src={InclinedPlaneThe2}
          title="Double click to edit"
        />{' '}
        with the horizontal, its weight mg acts vertically downward. The
        component mg cos
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi»§#952;«/mi»«/math»"
          class="Wirisformula"
          src={InclinedPlaneThe3}
          title="Double click to edit"
        />{' '}
        of the weight acts normally downward on the plane balances the upward
        normal reaction (say R) of the inclined plane. The component mg sin
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi»§#952;«/mi»«/math»"
          class="Wirisformula"
          src={InclinedPlaneThe4}
          title="Double click to edit"
        />
        &nbsp; of the weight acting parallel to the inclined plane downwards,
        produces motion in the body. <img alt="" src={InclinedPlaneThe5} />
      </p>

      <p>
        If total weight W1=m1g moves the body up and total weight W2 = m2g makes
        the body move down,&nbsp;
      </p>

      <p>
        Then the downward force acting on the body along the inclined plane,
      </p>

      <p>
        <img alt="" src={InclinedPlaneThe6} />
        &nbsp; which must be equal to&nbsp;
        <img alt="" src={InclinedPlaneThe7} />
      </p>

      <p>
        ie;&nbsp;
        <img alt="" src={InclinedPlaneThe8} />
        &nbsp; --------------(1)
      </p>

      <p>
        For a constant mass,m&nbsp;&nbsp;
        <img alt="" src={InclinedPlaneThe9} />
      </p>

      <p>
        Thus, a graph between sin θ along X-axis and W along Y-axis must be a
        straight line.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>
          &nbsp;&nbsp; &nbsp;Students understand the working of an inclined
          plane.
        </li>
        <li>
          &nbsp;&nbsp; &nbsp;Students understand idea of normal reaction and
          downward force acting on an inclined plane.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Inclined Plane. Retrieved 24 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=19&cnt=1
        </Typography>
      </div>
    </div>
  );
}
