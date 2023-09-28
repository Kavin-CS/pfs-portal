import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import IncentreThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/Incentre1/incentre-the1.png';


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
          <span fontSize="14px;">
            To illustrate that the internal bisectors of the angles of a
            triangle concur at a point (called the incentre), which always lies
            inside the triangle.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Related terms</h3>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              <strong>Incentre</strong>-&nbsp;Incentre of a triangle is defined
              as the point of intersection of the internal bisectors of a
              triangle. By internal bisectors, we mean the angle bisectors of
              interior angles of a triangle. Since there are three interior
              angles in a triangle, there must be three internal bisectors. The
              intersection point of all three internal bisectors is known as
              incentre of a circle.{' '}
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              <strong>Incircle-</strong> &nbsp;In&nbsp;geometry,
              the&nbsp;incircle&nbsp;or&nbsp;inscribed circle&nbsp;of
              a&nbsp;triangle&nbsp;is the largest&nbsp;circle&nbsp;contained in
              the triangle; it touches (is tangent&nbsp;to) the three sides. The
              center of the incircle is called the triangle's&nbsp;incentre.
            </span>
          </span>
        </li>
      </ul>

      <p marginLeft=" 80px;">
        <img
          alt=""
          src={IncentreThe1}
          width=" 250px;" height="169px;"
        />
      </p>

      <h2 className={classes.secondaryTag}>
        <br />
        Properties:
      </h2>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              The incentre is one of the triangle's points of concurrency formed
              by the intersection&nbsp;of the triangle's three angle bisectors.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              These three angle bisectors are always concurrent and always meet
              in the&nbsp;triangle's interior (unlike the orthocenter which may
              or may not intersect in the interior). The incentre is the center
              of the incircle. The incentre is the one point in the triangle
              whose distances to the sides are equal.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              If the triangle is obtuse, then the incentre is located in the
              triangle's interior.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              If the triangle is acute, then the incentre is also located in the
              triangle's&nbsp;interior.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              If the triangle is right, then the incentre is also located in the
              triangle's&nbsp;interior.
            </span>
          </span>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Incentre of a triangle. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=202&cnt=1
        </Typography>
      </div>
    </div>
  );
}
