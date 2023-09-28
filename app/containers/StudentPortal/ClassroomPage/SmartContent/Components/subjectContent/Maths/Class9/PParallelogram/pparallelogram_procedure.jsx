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

import PParallelogramPro1 from '../../../../../../../../../assets/Images/Subjects/Maths/PParallelogram1/pparallelogram-pro2.jpg';
import PParallelogramPro2 from '../../../../../../../../../assets/Images/Subjects/Maths/PParallelogram1/pparallelogram-pro1.jpg';
import PParallelogramPro3 from '../../../../../../../../../assets/Images/Subjects/Maths/PParallelogram1/pparallelogram-pro3.jpg';


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
      <h2 className={classes.secondaryTag}>Materials required:</h2>

      <p>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            Chart papers, pencil, compass, scale and a pair of scissors.
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>Property 1: &nbsp;</h2>

      <p>
        <span fontFamily="arial, helvetica, sans-serif;" fontSize="14px;" lineHeight= "1.6;">
          A diagonal of a parallelogram divides it into two congruent triangles.
        </span>
      </p>

      <h3 className={classes.secondaryTag}>As performed in real lab:</h3>

      <p>
        <strong>Procedure:</strong>
      </p>

      <ol>
        <li>
          <span fontFamily="arial, helvetica, sans-serif;" fontSize="14px;" lineHeight= "1.6;">
            Make a parallelogram on a chart paper and cut it.
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Draw diagonal of the parallelogram [Fig(a)].
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Cut along the diagonal and obtain two triangles.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Superimpose one triangle onto the other [Fig(b)]
            </span>
          </span>
        </li>
      </ol>

      <p>
        <img
          alt=""
          src={PParallelogramPro1}
          width=" 267px;" height=" 195px;"
        />
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={PParallelogramPro2}
          width=" 271px;" height=" 105px;"
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Fig (a) &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; Fig (b)
      </p>

      <p>&nbsp;</p>

      <p>
        <img
          alt=""
          src={PParallelogramPro3}
          width=" 492px;" height=" 152px;"
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;Fig (c)
      </p>

      <h3 className={classes.secondaryTag}>As performed in the simulator:</h3>

      <ol>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Select three points A, B and C anywhere on the workbench &nbsp;to
              draw a parallelogram.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Now, click on any of the vertices to draw a diagonal. The diagonal
              divides the parallelogram into two triangles - a green colored
              triangle and blue colored triangle.&nbsp;
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Now, rotate the green triangle appropriately and drag to overlap
              blue triangle.&nbsp;Use rotation controls (r+ and r-) in "Tools"
              to rotate green triangle.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              See the observations and inference.
            </span>
          </span>
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>Observations:</h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            <span lineHeight=" 1.6;">
              Two triangles are congruent to each other.
            </span>
          </span>
        </span>
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>
        Property 2:{' '}
        <span fontSize="16px;">
          <span fontFamily=" arial, helvetica, sans-serif; line-height: 1.2;">
            &nbsp;
          </span>
        </span>
      </h2>

      <p>
        <span fontSize=" 14px; font-family: arial, helvetica, sans-serif; line-height: 1.6;">
          Diagonals of a parallelogram bisect each other.
        </span>
      </p>

      <h3 className={classes.secondaryTag}>As performed in real lab:</h3>

      <p>
        <strong>Procedure:</strong>
      </p>

      <ol>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Draw the parallelogram and its both diagonals.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Cut the four triangles formed. Name them 1, 2, 3 and 4 [Fig(c)].
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Observe that triangle 2 is congruent to triangle 4 and triangle 1
              is congruent to triangle 3 by superimposing them on each other.
            </span>
          </span>
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>
        As performed in the simulator
        <span fontSize="14px;">
          <span fontSize="16px;">:</span>
        </span>
      </h3>

      <ol>
        <li>
          <span fontSize=" 16px; line-height: 25.6000003814697px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <span fontSize="14px;">
                Select three points A, B and C anywhere on the workbench to draw
                a parallelogram.
              </span>
            </span>
          </span>
        </li>
        <li>
          <span fontSize=" 16px; line-height: 25.6000003814697px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <span fontSize="14px;">
                Now, click on any two adjacent vertices to draw two diagonals.
                The diagonals divide the parallelogram into 4 triangles (two
                sets of opposite triangles)
              </span>
            </span>
          </span>
        </li>
        <li>
          <span fontSize=" 16px; line-height: 25.6000003814697px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <span fontSize="14px;">
                Click on "Next" to color the four triangles. One set of opposite
                triangle is colored blue and green, while other is colored brown
                and violet.
              </span>
            </span>
          </span>
        </li>
        <li>
          <span fontSize=" 16px; line-height: 25.6000003814697px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <span fontSize="14px;">
                Now, Rotate and Drag blue triangle over green triangle and brown
                triangle over violet triangle. Use rotation controls (r+ and r-)
                in "Tools" to rotate blue and brown triangles.
              </span>
            </span>
          </span>
        </li>
        <li>
          <span fontSize=" 16px; line-height: 25.6000003814697px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <span fontSize="14px;">
                See observations and inference.
              </span>
            </span>
          </span>
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>Observations:</h3>

      <ul>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Base of triangle 2 = Base of triangle 4
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Base of triangle 1 = Base of triangle 3
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Thus the diagonals bisect each other.
            </span>
          </span>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Properties of parallelogram. Retrieved 8
          April 2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=216&cnt=2
        </Typography>
      </div>
    </div>
  );
}
