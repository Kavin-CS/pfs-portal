import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import AParallelogramThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/AParallelogram1/parallelogram-the1.png';
import AParallelogramThe2 from '../../../../../../../../../assets/Images/Subjects/Maths/AParallelogram1/parallelogram-the2.jpg';


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
  mainImg: {
    width: 800,
    height: 335,
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
            To show that the area of parallelogram is product of its base and
            height.
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>Theory:</h2>

      <p>
        A parallelogram&nbsp;is a&nbsp;simple&nbsp;quadrilateral&nbsp;with two
        pairs of&nbsp;parallel&nbsp;sides.
      </p>

      <p>
        <img
          alt=""
          src={AParallelogramThe1}
          width="253px;" height="152px;"
        />
      </p>

      <h3 className={classes.secondaryTag}>Properties:</h3>

      <ol>
        <li>
          The opposite or facing sides of a parallelogram are of equal length.
        </li>
        <li>The opposite angles of a parallelogram are of equal measure.</li>
        <li>
          Opposite sides of a parallelogram are parallel (by definition) and so
          will never intersect.
        </li>
        <li>
          The area of a parallelogram is twice the area of a triangle created by
          one of its diagonals.
        </li>
        <li>Area of the parallelogram = base x height.</li>
      </ol>

      <h3 className={classes.secondaryTag}>Example:</h3>

      <p>
        <img
          alt=""
          height="168"
          src={AParallelogramThe2}
          width="200"
        />
        <br />
        Find the area of parallelogram ABCD with base 24 m and height 17 m.
      </p>

      <h3 className={classes.secondaryTag}>Solution :</h3>

      <p>
        &nbsp;Area of the parallelogram = base x height
        <br />
        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =24 X 17
        <br />
        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =408
        <br />
        &nbsp;∴ The area of&nbsp;parallelogram ABCD is 408 m<sup>2</sup>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Area of parallelogram. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=178&cnt=1
        </Typography>
      </div>
    </div>
  );
}
