import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ACircleThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/ACircle1/acircle-the1.png';
import ACircleThe2 from '../../../../../../../../../assets/Images/Subjects/Maths/ACircle1/acircle-the2.gif';
import ACircleThe3 from '../../../../../../../../../assets/Images/Subjects/Maths/ACircle1/acircle-the3.gif';

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

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h2 className={classes.secondaryTag}>Objective:</h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            To give a suggestive demonstration of the formula that the area of
            the circle is half the product of its circumference and radius.{' '}
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Definition:</h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            <strong>Circle:&nbsp;</strong> It is the set of all points in a
            plane that are at a given distance from a given point, the centre.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            A circle with circumference (C) in black, diameter (D) in cyan,
            radius (R) in red, and centre (O) in magenta is below:
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            src={ACircleThe1}
            width=" 220px;" height= "222px;" marginLeft="100px;" marginRight="100px;"
          />
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Related Terms:</h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <strong>
            C<span fontSize=" 14px;">en</span>ter:
          </strong>{' '}
          A point inside the circle. All points on the circle are equidistant
          (same distance) from the center point.
          <br />
          <strong>Radius:</strong> The radius is the distance from the center to
          any point on the circle. It is half the diameter.
          <br />
          <strong>Chord:</strong> A segment of a straight line joining two
          points on a circle.
          <br />
          <strong>Diameter:</strong> The length of any chord passing through the
          center. It is twice the radius.
          <br />
          <strong>Circumference:</strong> The circumference is the perimeter of
          the circle. It is{' '}
          <img
            alt="2\pi r"
            src={ACircleThe2}
          />
          .<br />
          <strong>Area:</strong> Area of the region enclosed by the circle. It
          is{' '}
          <img
            alt="\pi r^{2}"
            src={ACircleThe3}
          />
          .
        </span>
      </p>

      <h2 className={classes.secondaryTag}>Properties of a circle:</h2>

      <ul>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              The radius perpendicular to a chord bisects the chord.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              The diameter of a circle is the longest chord.
            </span>
          </span>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Area of circle. Retrieved 8 April 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=215&cnt=1
        </Typography>
      </div>
    </div>
  );
}
