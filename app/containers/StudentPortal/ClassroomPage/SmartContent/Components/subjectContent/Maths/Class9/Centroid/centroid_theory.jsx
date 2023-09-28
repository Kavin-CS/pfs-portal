import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import CentroidThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/Centroid1/centroid-the1.jpg';
import CentroidThe2 from '../../../../../../../../../assets/Images/Subjects/Maths/Centroid1/centroid-the2.jpg';
import CentroidThe3 from '../../../../../../../../../assets/Images/Subjects/Maths/Centroid1/centroid-the3.jpg';

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
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            To illustrate that the medians of a triangle concur at a point
            (called the centroid), which always lies inside the triangle.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Theory:</h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            A <span class="style7">centroid</span> of a triangle is the point
            where the three medians of the triangle meet. A{' '}
            <span class="style7">median</span> of a triangle is a line segment
            from one vertex to the mid-point on the opposite side of the
            triangle.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            The centroid is also called the center of gravity of the triangle.
            If you have a triangle plate, try to balance the plate on your
            finger. Once you have found the point where it will balance, that is
            the centroid of that triangle.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Properties of the centroid:</h3>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              It is always located inside the triangle.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              The centroid divides each&nbsp;median in a ratio of 2:1. In other
              words, the centroid will always be 2/3 of the way along any given
              median.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              In below images, c is centroid for triangles(a, b &amp; c).
            </span>
          </span>
        </li>
      </ul>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            <img
              alt=""
              src={CentroidThe1}
              width=" 200px;" height=" 138px;"
            />
            <img
              alt=""
              src={CentroidThe2}
              width=" 200px;" height=" 150px;"
            />
            <img
              alt=""
              src={CentroidThe3}
              width=" 200px;" height=" 150px;"
            />
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Acute-angled(a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Right-angled(b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Obtuse-angled(c)
          </span>
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Centroid of a triangle. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=189&cnt=1
        </Typography>
      </div>
    </div>
  );
}
