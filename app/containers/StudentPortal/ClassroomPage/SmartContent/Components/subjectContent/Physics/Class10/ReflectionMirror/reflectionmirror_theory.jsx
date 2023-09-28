import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ReflectionMirrorThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/ReflectionMirror1/reflectionmirror-the1.gif';
import ReflectionMirrorThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/ReflectionMirror1/reflectionmirror-the2.jpg';
import ReflectionMirrorThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/ReflectionMirror1/reflectionmirror-the3.jpg';
import ReflectionMirrorThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/ReflectionMirror1/reflectionmirror-the4.jpg';
import ReflectionMirrorThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/ReflectionMirror1/reflectionmirror-the5.jpg';
import ReflectionMirrorThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/ReflectionMirror1/reflectionmirror-the6.jpg';
import ReflectionMirrorThe7 from '../../../../../../../../../assets/Images/Subjects/Physics/ReflectionMirror1/reflectionmirror-the7.jpg';

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
          To study reflection in concave mirror and observe image formations for
          different positions of the object.
        </span>
      </p>

      <h2 className={classes.headTag}>Related terms:</h2>

      <ol start="1">
        <li>
          <span>
            <u>Reflection</u>:<strong> </strong>
            <br />
            Whenever light, travelling in one medium, comes in contact
            with&nbsp;surface of another medium, a part of it is returned into
            the first medium. The phenomenon of returning of light into first
            medium is known as reflection of light.
          </span>
        </li>
        <li>
          <span>
            <u>Concave mirror</u>:&nbsp;
            <br />A concave mirror is that spherical mirror in which the
            reflection of light takes place at the concave surface i.e. bent-in
            surface.
          </span>
        </li>
        <li>
          <span>
            <u>Pole</u>:&nbsp;
            <br />
            It is the center of the reflecting surface of the concave mirror
            also called vertex of mirror, generally denoted by letter ‘
            <strong>P</strong>’.
            <br />
            <br />
            <img
              align="middle"
              alt=""
              src={ReflectionMirrorThe1}
              
            />
          </span>
        </li>
        <li>
          <span>
            <u>Center of curvature</u>:&nbsp;
            <br />
            It is the center of that sphere of which the concave mirror forms a
            part, denoted by letter ‘<strong>C</strong>’.
          </span>
        </li>
        <li>
          <u >Principal axis</u>
          :&nbsp;
          <br />
          <span>
            The straight line passing through the center of curvature and pole
            of &nbsp;concave mirror is called its principal axis.
          </span>
        </li>
        <li>
          <span>
            <u>Principal focus</u>:<br />A beam of light incident parallel to
            the principal axis, after reflection from the spherical mirror,
            either actually converges to or appears to diverge from a fixed
            point on the principal axis. The fixed point is called the
            ‘Principal focus’, denoted by letter '<strong>F</strong>'.
          </span>
        </li>
        <li>
          <span>
            <u>Laws of Reflection:</u>
            <br />
            1)&nbsp;&nbsp;&nbsp; The angle of incidence is equal to the angle of
            reflection.
            <br />
            2)&nbsp;&nbsp;&nbsp; The incident ray, the reflected ray and the
            normal at the point of incidence, all lie in the same plane.&nbsp;
          </span>
        </li>
        <li>
          <span>
            <u>Types of images</u>:<br />
            1) &nbsp; &nbsp;<u>Real image</u>:&nbsp;If the reflected rays
            actually meet at a point, then the image formed is real. It can be
            obtained on screen.
            <br />
            2) &nbsp; &nbsp;<u>Virtual Image</u>: If the reflected rays do not
            actually meet at a point but appear to diverge from a point, then
            the image formed is virtual.{' '}
          </span>
        </li>
      </ol>

      <p>
        <strong >
          &nbsp;Images of an object, formed by a concave mirror, when the object
          is placed at various positions:
        </strong>
      </p>

      <table
        align="center"
        border="0"
        cellpadding="1"
        cellspacing="1"
        
      >
        <tbody>
          <tr>
            <td>
              <p>
                <img
                  alt=""
                  src={ReflectionMirrorThe2}
                  
                />
              </p>

              <p>
                When object is at infinity. &nbsp; &nbsp;&nbsp;
              </p>
            </td>
            <td>
              <p>
                <img
                  alt=""
                  src={ReflectionMirrorThe3}
                  
                />
              </p>

              <p>
                When object is beyond centre of curvature('C').
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <img
                  align="middle"
                  alt=""
                  src={ReflectionMirrorThe4}
                  
                />
              </p>

              <p>
                When object is at centre of curvature ('C').
              </p>
            </td>
            <td>
              <p>
                <img
                  alt="Between C and F"
                  src={ReflectionMirrorThe5}
                  
                />
              </p>

              <p>
                When object is between 'C' and 'F'.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <img
                  alt="At F"
                  src={ReflectionMirrorThe6}
                  
                />
              </p>

              <p>When object is at focus 'F'.</p>
            </td>
            <td>
              <p>
                <img
                  alt="Between pole and F"
                  src={ReflectionMirrorThe7}
                  
                />
              </p>

              <p>
                When object is between 'P' and 'F'.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      

      <p>
        <span>
          Image source:
          http://www.tutorvista.com/content/science/science-ii/reflection-light/formation-concave-mirror.php&nbsp;
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To study reflection in concave mirror.
          Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=38&cnt=1
        </Typography>
      </div>
    </div>
  );
}
