import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import TangentsThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/Tangents1/tangents-the1.jpg';

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
      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          <strong>
            <span fontSize="16px;">Objective:</span>
          </strong>
        </span>
      </h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            To verify that the lengths of tangents drawn from an external point
            are equal.
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <strong lineHeight="1.2;" fontSize="13px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="16px;">Theory:</span>
          </span>
        </strong>
      </h2>

      <h3 className={classes.secondaryTag}>
        <strong lineHeight="1.6;">
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Related terms
            </span>
          </span>
        </strong>
      </h3>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <strong>Circle </strong>– Set of all points in a plane that are
              equidistant from a given point called a center of the circle.
              &nbsp;
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <strong>Radius </strong>- The distance from the center to a point
              on the circle is called the radius of the circle. &nbsp;Two
              circles are congruent if they have the same radius.
            </span>
          </span>
        </li>
      </ul>

      

      <h2 className={classes.secondaryTag}>
        <strong>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="16px;">Tangents to a circle:</span>
          </span>
        </strong>
      </h2>

      <p textAlign="center">
        <img
          alt=""
          height="262"
          src={TangentsThe1}
          width="236"
        />
      </p>

      <p>
        <span fontFamily="arial, helvetica, sans-serif;" fontSize="14px;" lineHeight="1.6;">
          A tangent is a line in the plane of a circle that intersects the
          circle in exactly one point.
        </span>
      </p>

      <p>
        <span fontSize="14px" fontFamily="arial, helvetica, sans-serif; line-height: 1.6;">
          Tangent Lines to circles from the subject of several theorems, and
          play an important role in many geometrical constructions and proofs.
          Since the tangent line to a circle at any point P is perpendicular to
          the radius to that point, theorems involving tangent lines often
          involve radial lines and orthogonal circles.
        </span>
      </p>

      <p>
        <span fontSize="14px" fontFamily="arial, helvetica, sans-serif; line-height: 1.6;">
          It is observed that if two segments from the same exterior point are
          tangent to the circle, then they are congruent. If AP and BP are
          tangent to a Circle O then AP = BP.
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Tangents drawn from an external point.
          Retrieved 7 April 2021, from
          cdac.olabs.edu.in/?sub=80&brch=20&sim=171&cnt=1
        </Typography>
      </div>
    </div>
  );
}
