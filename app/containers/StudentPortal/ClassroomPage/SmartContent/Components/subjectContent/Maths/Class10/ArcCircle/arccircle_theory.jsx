import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';


import ArcCircleThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/ArcCircle1/arccircle-the1.jpg';
import ArcCircleThe2 from '../../../../../../../../../assets/Images/Subjects/Maths/ArcCircle1/arccircle-the2.jpg';
import ArcCircleThe3 from '../../../../../../../../../assets/Images/Subjects/Maths/ArcCircle1/arccircle-the3.png';

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

  headName: {
    fontSize: 18,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <p textAlign="justify" />

      <h2 className={classes.secondaryTag} marginLeft="0.64cm" textIndent="-0.64cm" marginBottom="0cm" textAlign="justify">
        Objective:
      </h2>

      <p>
        <span fontSize="14px">
          <span fontFamily="arial,helvetica,sans-serif;">
            To verify that the angle subtended by an arc at the centre of a
            circle is twice the angle subtended by the same arc at any other
            point on the remaining part of the circle.
          </span>
        </span>
      </p>

      <p marginLeft="0.64cm" textIndent="-0.64cm" marginBottom="0cm" textAlign="justify">
        &nbsp;
      </p>

      <p marginLeft="0.64cm" textIndent="-0.64cm" marginBottom="0cm" textAlign="justify">
        <img
          alt=""
          height="284"
          hspace="100"
          src={ArcCircleThe1}
          width="284"
        />
      </p>

      <p marginLeft="0.64cm" textIndent="-0.64cm" marginBottom="0cm" textAlign="justify">
        &nbsp;
      </p>

      <p marginLeft="0.64cm" textIndent="-0.64cm" marginBottom="0cm" textAlign="justify" />

      <h3 className={classes.secondaryTag} textAlign="justify">Circles</h3>

      <ul>
        <li>
          <span fontSize="14px">
            <span fontFamily="arial,helvetica,sans-serif;">
              A circle is a set of points which are all a certain distance from
              a fixed point known as the centre.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px">
            <span fontFamily="arial,helvetica,sans-serif;">
              A line joining the centre of a circle to any of the points on the
              circle is known as a radius.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px">
            <span fontFamily="arial,helvetica,sans-serif;">
              The circumference of a circle is the length of the circle. The
              circumference of a circle = 2 × π × the radius.
            </span>
          </span>
        </li>
      </ul>

      

      <p textAlign="justify">
        <img
          alt=""
          height="273"
          hspace="100"
          src={ArcCircleThe2}
          width="573"
        />
      </p>

      <p textAlign="justify">&nbsp;</p>

      <p textAlign="justify" />

      <h2 className={classes.secondaryTag}>Terminology</h2>

      <p textAlign="justify">
        <span fontSize="14px">
          <span fontFamily="arial,helvetica,sans-serif;">
            The following is a recap of terms that are regularly used when
            referring to circles.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px">
          <span fontFamily="arial,helvetica,sans-serif;">
            <strong>Arc:</strong> An arc is a part of the circumference of a
            circle.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px">
          <span fontFamily="arial,helvetica,sans-serif;">
            <strong>Chord:</strong> A chord is a straight line joining the ends
            of an arc.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px">
          <span fontFamily="arial,helvetica,sans-serif;">
            <strong>Radius:</strong> A radius, r, is any straight line from the
            centre of the circle to a point on the circumference.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px">
          <span fontFamily="arial,helvetica,sans-serif;">
            <strong>Segment:</strong> A segment is the part of the circle that
            is cut off by a chord. A chord divides a circle into two
            segments.&nbsp;{' '}
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px">
          <span fontFamily="arial,helvetica,sans-serif;">
            <strong>Angle Subtended:</strong> In geometry, an angle subtended by
            an arc, line, or other curve is one whose two rays pass through the
            endpoints of the arc.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <img
          alt=""
          src={ArcCircleThe3}
          width="220px;" height="220px;" marginLeft= "150px;" marginRight="150px;"
        />
      </h3>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Angle at the centre of a circle by an arc.
          Retrieved 7 April 2021, from
          cdac.olabs.edu.in/?sub=80&brch=20&sim=162&cnt=1
        </Typography>
      </div>
    </div>
  );
}
