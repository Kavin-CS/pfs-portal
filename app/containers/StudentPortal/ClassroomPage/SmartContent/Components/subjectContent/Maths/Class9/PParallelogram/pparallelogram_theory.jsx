import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import PParallelogramThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/PParallelogram1/parallelogram-the1.jpg';
import PParallelogramThe2 from '../../../../../../../../../assets/Images/Subjects/Maths/PParallelogram1/parallelogram-the2.jpg';


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
      <h2 className={classes.secondaryTag}>Objective :&nbsp;</h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px; line-height: 16.7999992370605px;">
            To explore similarities and differences in the properties with
            respect to diagonals of the following quadrilaterals- a
            parallelogram, a square, a rectangle and a rhombus.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Definition:</h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            It is a quadrilateral where both pairs of opposite sides are
            parallel. Quadrilateral ABCD is a parallelogram.
          </span>
        </span>
      </p>

      <p>
        <img
          alt=""
          src={PParallelogramThe1}
          width="400px;" height="240px;" marginLeft="100px;" marginRight="100px;"
        />
      </p>

      <h3 className={classes.secondaryTag}>Properties :</h3>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              A diagonal of a parallelogram divides it into two congruent
              triangles (▲ ADB is congruent to ▲ ABC).
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Diagonals of a parallelogram bisect each other.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Opposite sides are congruent (AB = DC).
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Opposite angles are congruent (∠ADC= ∠ABC).
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Consecutive angles are supplementary (∠DAB + ∠ADC = 180°).
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              If one angle is right angle, then all angles are right.
            </span>
          </span>
        </li>
      </ul>

      <p>
        <img
          alt=""
          src={PParallelogramThe2}
          width="400px;" height="240px;" marginLeft="100px;" marginRight="100px;"
        />
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Properties of parallelogram. Retrieved 8
          April 2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=216&cnt=1
        </Typography>
      </div>
    </div>
  );
}
