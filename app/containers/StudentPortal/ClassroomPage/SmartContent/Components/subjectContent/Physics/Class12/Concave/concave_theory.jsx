import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import ConcaveThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Concave1/con-the1.jpg';
import ConcaveThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Concave1/con-the2.jpg';
import ConcaveThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Concave1/con-the3.jpg';
import ConcaveThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Concave1/con-the4.jpg';
import ConcaveThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Concave1/con-the5.jpg';
import ConcaveThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/Concave1/con-the6.png';
import ConcaveThe7 from '../../../../../../../../../assets/Images/Subjects/Physics/Concave1/con-the7.png';
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
      <h1 className={classes.headTag}>Objective</h1>

      <p>To find the focal length of the given concave mirror by&nbsp;</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(i)&nbsp;&nbsp;by
        u-v method &nbsp;&nbsp;
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(ii)&nbsp;from u
        - v graph
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(iii)&nbsp;from
        &nbsp; 1/u - 1/(v ) graph
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>
        <strong>Spherical mirrors</strong>
      </h2>

      <p>
        It is a mirror which has the shape of a piece cut out of a spherical
        surface. Two types of spherical mirrors are;
      </p>

      <ul>
        <li>
          <em>
            <strong>Concave mirror:</strong>
          </em>{' '}
          Its inner concave surface reflects, and has polished outer surface.
        </li>
        <li>
          <strong>
            <em>Convex mirror:</em>
          </strong>{' '}
          Its outer convex surface reflects, and has polished inner surface.
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img alt="" src={ConcaveThe1} />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img alt="" src={ConcaveThe2} />
      </p>

      <p>&nbsp;</p>

      <p>
        <strong>Different terms associated with spherical mirrors are;</strong>
      </p>

      <p>&nbsp;</p>

      <p>
        <em>
          <strong>Pole (P):</strong>
        </em>{' '}
        The centre of the spherical mirror.
      </p>

      <p>
        <strong>
          <em>Centre of curvature (C):</em>
        </strong>{' '}
        The centre of the sphere, of which the mirror is a part.
      </p>

      <p>
        <em>
          <strong>Principal focus (F):</strong>
        </em>{' '}
        The point on the principal axis, on which all parallel rays meet after
        reflection.
      </p>

      <p>
        <em>
          <strong>Radius of curvature (R):</strong>
        </em>{' '}
        The distance between pole and centre of curvature.
      </p>

      <p>
        <em>
          <strong>Focal length (f):</strong>
        </em>{' '}
        The distance between pole and principal focus.
      </p>

      <p>&nbsp;</p>

      <p>
        <img alt="" src={ConcaveThe3} />
      </p>

      <h2 className={classes.secondaryTag}>&nbsp;</h2>

      <h2 className={classes.secondaryTag}>
        <strong>Concave Mirror</strong>
      </h2>

      <p>
        Concave mirrors have the reflecting surface that bulges inward. They are
        also called converging mirrors because it converges all parallel beam of
        light incident on it. Unlike a flat mirror, concave mirrors can form
        real images that are projected out in front of the mirror at the place
        where the light focuses. Concave mirrors can be used in satellite
        dishes, vehicle headlights, astronomical telescopes and many more areas.
      </p>

      <p>
        <img alt="" src={ConcaveThe4} />
        &nbsp; &nbsp;
        <img alt="" src={ConcaveThe5} />
      </p>

      <h2 className={classes.secondaryTag}>
        <em>
          <strong>Mirror Formula</strong>
        </em>
      </h2>

      <p>
        The equation connecting the distance between mirror and object (u),
        distance between mirror and image (v), and the focal length of the
        mirror (f) is called mirror formula.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <img alt="" src={ConcaveThe6} />
      </p>

      <p>Or ; The focal length of the concave mirror,</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <img alt="" src={ConcaveThe7} />
      </p>

      <p>&nbsp;</p>

      <p>
        <strong>Focal length by graphical method</strong>
      </p>

      <p>
        <strong>From u-v graph :</strong>
      </p>

      <p>
        We can measure the focal length of the given concave mirror graphically
        by plotting graph between u and v. For this, plot a graph with u along X
        axis and v along Y axis by taking same scale for drawing the X and Y
        axes. A curve is obtained. The point at which the bisector meets the
        curve gives the radius of curvature (R).
      </p>

      <p>
        Now focal length can be calculated from the relation,{' '}
        <strong>R = 2f.</strong>
      </p>

      <p>
        <strong>From 1/u – 1/v graph :</strong>
      </p>

      <p>
        We can also measure the focal length by plotting graph between 1/-u and
        1/v. Plot a graph with 1/u along X axis and 1/v along Y axis by taking
        same scale for drawing the X and Y axes. The graph is a straight line
        intercepting the axes at A and B.&nbsp;
      </p>

      <p>
        The focal length can be calculated by using the relations,{' '}
        <strong>OA=OB= 1/f.</strong>
      </p>

      <h1 className={classes.headTag}>
        <br />
        Learning Outcomes
      </h1>

      <ul>
        <li>
          Students understand different types of mirrors and their image
          properties.
        </li>
        <li>Students learn and apply the mirror formula.</li>
        <li>
          Students understand the different terms associated with spherical
          mirrors.
        </li>
        <li>Students recall the applications of concave mirror.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). The Concave mirror - u-v method.
          Retrieved 19 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=230&cnt=1
        </Typography>
      </div>
    </div>
  );
}
