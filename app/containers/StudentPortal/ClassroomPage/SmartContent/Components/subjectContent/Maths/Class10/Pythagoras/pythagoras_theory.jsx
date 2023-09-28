import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import PythagorasThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/Pythagoras1/pythagoras-the1.png';
import PythagorasThe2 from '../../../../../../../../../assets/Images/Subjects/Maths/Pythagoras1/pythagoras-the2.png';
import PythagorasThe3 from '../../../../../../../../../assets/Images/Subjects/Maths/Pythagoras1/pythagoras-the3.png';

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
        <strong>Objective:&nbsp;</strong>
      </h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">To verify the Pythagoras Theorem</span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>Pythagoras Theorem</h2>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" Arial, serif;">
            In mathematics, the Pythagorean theorem is a relation in Euclidean
            geometry among the three sides of a right triangle (right-angled
            triangle).
          </span>
        </span>
      </p>

      <p>
        <span fontSize=" 14px;" lineHeight="1.6;" fontFamily="Arial, serif;">
          In terms of areas, it states:
        </span>
        <span fontSize=" 14px;" lineHeight="1.6;" fontFamily="arial, helvetica, sans-serif;">
          <font color="#000000">
            <span lang="en-US">
              {' '}
              In any right-angled triangle, the area of the square whose side is
              the hypotenuse (the side opposite the right angle) is equal to the
              sum of the areas of the squares whose sides are the two legs (the
              two sides that meet at a right angle).
            </span>
          </font>
        </span>
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          height="200"
          src={PythagorasThe1}
          width="244"
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Fig(a) &nbsp; &nbsp;
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={PythagorasThe2}
          width="500px;" height="375px;"
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Fig(b) &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            <font color="#000000">
              <span lang="en-US">
                The theorem can be written as an equation relating the lengths
                of the sides a, b and c, often called the Pythagorean
                equation&nbsp;
              </span>
            </font>
            <font color="#000000">
              &nbsp;
              <span lang="en-US">
                a<sup>2</sup>+b<sup>2</sup>=c<sup>2</sup>.&nbsp;
              </span>
            </font>
            where c represents the length of the hypotenuse, and a and b
            represent the lengths of the other two sides.
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="16px;">
            <strong>Example:</strong>
          </span>
        </span>
      </h2>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          height="300"
          src={PythagorasThe3}
          width="166"
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            Given a right angled triangle ABC, length AB = ?
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            By Pythagoras theorem, we have:
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; AB<sup>2</sup>=BC<sup>2</sup>+CA<sup>2</sup>
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; =(2.5)<sup>2</sup>+(6)
            <sup>2</sup>
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; =42.25
            <br />
            so, &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;AB=6.5m
          </span>
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Pythagoras theorem. Retrieved 7 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=158&cnt=1
        </Typography>
      </div>
    </div>
  );
}
