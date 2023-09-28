import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import CircumcentreThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/Circumcentre1/circumcentre-the1.jpg';
import CircumcentreThe2 from '../../../../../../../../../assets/Images/Subjects/Maths/Circumcentre1/circumcentre-the2.jpg';
import CircumcentreThe3 from '../../../../../../../../../assets/Images/Subjects/Maths/Circumcentre1/circumcentre-the3.jpg';

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
        <span fontSize=" 14px;" fontFamily= "arial, helvetica, sans-serif; " lineHeight=" 1.6;">
          To illustrate that perpendicular bisectors of the sides of a triangle
          concur at a point(called the circumcentre) and it falls inside for an
          acute-angled triangle, on the hypotenuse of right-angled triangle and
          outside for an obtuse-angled triangle.
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Definition</h3>

      <p>
        <span fontSize=" 13px; " lineHeight=" 1.6;">
          <span fontSize="14px;">
            <strong>Circumcentre </strong>of a triangle is the point of
            intersection of all the three perpendicular bisectors of the
            triangle. It is where the "perpendicular bisectors" (lines that are
            at right angles to the midpoint of each side) meet. The circumcentre
            of a triangle is equidistant from its vertices and the distance of
            the circumcentre from each of the three vertices are called
            circum-radius of the triangle.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Properties:</h3>

      <ol>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              All vertices of triangle are equidistant from circumcentre.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Circumcentre is also the center of circumcircle.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              For acute angled triangle it lies inside the triangle (see
              fig(a)).
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              For obtuse angled triangle it lies outside the triangle&nbsp;(see
              fig(c)).
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              For right angled triangle it lies at the mid-point of hypotenuse
              (see fig(b)).
            </span>
          </span>
        </li>
      </ol>

      <p marginLeft="80px;">
        <br />
        <img
          alt=""
          src={CircumcentreThe1}
          width="200px;" height="145px;"
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;{' '}
        <img
          alt=""
          src={CircumcentreThe2}
          width="200px;" height="136px;"
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Fig (a) &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; Fig (b)
      </p>

      <p marginLeft="80px;">
        <img
          alt=""
          src={CircumcentreThe3}
          width="200px;" height="123px;"
        />
      </p>

      <p marginLeft="80px;">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Fig (c)
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Circumcentre of a triangle. Retrieved 8
          April 2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=201&cnt=1
        </Typography>
      </div>
    </div>
  );
}
