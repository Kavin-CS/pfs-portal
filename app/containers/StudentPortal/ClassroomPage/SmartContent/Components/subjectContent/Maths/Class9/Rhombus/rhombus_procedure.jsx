import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import RhombusPro1 from '../../../../../../../../../assets/Images/Subjects/Maths/Rhombus1/rhombus-pro1.png';


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

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span lineHeight=" 1.6;">As performed in the real lab:</span>
        </span>
      </h2>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span lineHeight=" 1.6;">Materials Required:</span>
        </span>
      </h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            <span lineHeight=" 1.6;">
              Coloured papers, sketch pens, geometry box, a pair of scissors,
              fevicol and eraser.
            </span>
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Procedure:</span>
      </h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span lineHeight=" 1.6;">
            1.
            <span fontSize="14px;">
              Draw □ ABCD with length d<sub>2</sub> and breadth d<sub>1</sub>{' '}
              units on a coloured&nbsp; paper.
            </span>
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif; line-height: 1.6;">
            2. Mark points E, F, G and H as midpoints of the sides AD, DC, CB
            and BA respectively of sides of the □ ABCD.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            3. Join HF and EG. Mark their intersection as point O. Fold the
            rectangle ABCD along EG and HF dividing the&nbsp;□ ABCD into four
            congruent rectangles, namely OEAH, OEDF, OFCG and OGBH.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif; line-height: 1.6;">
            4. Divide each of the four rectangles into two congruent triangles
            by drawing their respective diagonals.
          </span>
        </span>
      </p>

      <p>&nbsp;</p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            src={RhombusPro1}
            width=" 400px;"
            height="268px;"
          />
        </span>
      </p>

      <h2>&nbsp;</h2>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          As performed in the simulator:
        </span>
      </h2>

      <ol>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Provide dimensions of a rectangle i.e. length and breadth in the
              input box to draw the rectangle.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Mark midpoint of each side of the rectangle by clicking on the
              midpoint of each side.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Connect midpoints of opposite sides.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Connect midpoints of adjacent sides&nbsp;to form a rhombus.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Cut four triangles that are in the corner of rectangle ABCD using
              "Cut Traingle" button.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Place each triangle to the position mentioned in "Instructions".
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Observation:</span>
      </h2>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            1. As the small rectangles are congruent, their diagonals EH, HG,
            GF, FE are equal. Thus EHGF is a rhombus.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            2. In the rectangle AHOE, triangles AHE and EHO are congruent and
            hence equal in area.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            3. Thus area of the right triangle EOH is half the area of the
            rectangle AEOH and similarly, the area of right triangles HOG, GOF,
            FOE are half the area of the rectangles HBGO, OGCF and FOED
            respectively.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            4. Thus the area of rhombus EFGH = &nbsp;(1/2 X Area of rectangle
            AEOH) + (1/2 X Area of rectangle HBGO) +&nbsp;(1/2 X Area of
            rectangle OGCF) +&nbsp;(1/2 X Area of rectangle FOED)
          </span>
        </span>
      </p>

      <p marginLeft=" 200px;">
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            = 1/2 X ( Area of rectangle AEOH + Area of rectangle HBGO + Area of
            rectangle OGCF + Area of rectangle FOED)
          </span>
        </span>
      </p>

      <p marginLeft=" 200px;">
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            = 1/2 x Area of rectangle ABCD
          </span>
        </span>
      </p>

      <p marginLeft=" 200px;">
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">= 1/2 x d1 x d2</span>
        </span>
      </p>

      <p marginLeft=" 200px;">
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">= 1/2 X HF X EG</span>
        </span>
      </p>

      <p marginLeft=" 200px;">
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            = 1/2 x product of diagonals of rhombus EFGH
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Result:</span>
      </h2>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            Area of rhombus is half the product of its diagonals.
          </span>
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Area of rhombus. Retrieved 8 April 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=169&cnt=2
        </Typography>
      </div>
    </div>
  );
}
