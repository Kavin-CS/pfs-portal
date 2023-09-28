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

import IncentrePro1 from '../../../../../../../../../assets/Images/Subjects/Maths/Incentre1/incentre-pro1.png';
import IncentrePro2 from '../../../../../../../../../assets/Images/Subjects/Maths/Incentre1/incentre-pro2.jpg';
import IncentrePro3 from '../../../../../../../../../assets/Images/Subjects/Maths/Incentre1/incentre-pro3.jpg';

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
      <h2 className={classes.secondaryTag}>As performed in real lab:</h2>

      <h3 className={classes.secondaryTag}>Material required:</h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial, helvetica, sans-serif;" lineHeight="1.6;">
            Coloured papers, fevicol and a pair of scissors.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            1. Cut an acute angled triangle from a colored paper and name it as
            ABC.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            2. Fold along the vertex A of the triangle in such a way that the
            side AB lies along AC.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            3. The crease thus formed is the angle bisector of angle A.
            Similarly, get the angle bisectors of angle B and C. &nbsp; [Fig
            (a)].
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            4. Repeat the same activity for a obtuse angled triangle and right
            angled triangle. [Fig (b) and &nbsp;(c)].
          </span>
        </span>
      </p>

      <h2>&nbsp;</h2>

      <h2 className={classes.secondaryTag}>As performed in the simulator:</h2>

      <p>
        <strong>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="16px;">​</span>
          </span>
        </strong>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="16px;">
            <span fontSize="14px;">
              1.Select three points A, B and C anywhere on the workbench
              &nbsp;to draw a triangle.
            </span>
          </span>
        </span>
      </p>

      <p>
        <span fontSize=" 14px;" fontFamily="arial, helvetica, sans-serif;" lineHeight="1.6;">
          2. Depending on your points selection acute, obtuse or right angled
          triangle is drawn.
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="16px;">
            <span fontSize="14px;">
              3.&nbsp;Now, click on each vertex of the triangle to draw its
              angle bisector. You can use the protractor to measure the angles .
            </span>
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="16px;">
            <span fontSize="14px;">
              4.Activity completed successfully. You can see the inference
              below.
            </span>
          </span>
        </span>
      </p>

      <p marginLeft=" 80px;">
        <img
          alt=""
          src={IncentrePro1}
          width=" 200px;" height=" 180px;"
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;{' '}
        <img
          alt=""
          src={IncentrePro2}
          width=" 279px;" height=" 180px;"
        />
      </p>

      <p marginLeft=" 40px;">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;Fig (a) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; Fig (b) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;
      </p>

      <p marginLeft=" 80px;">
        <img
          alt=""
          src={IncentrePro3}
          width=" 200px;" height=" 170px;"
        />
      </p>

      <p marginLeft=" 80px;">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp; Fig (c)
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>&nbsp;Observations:</h2>

      <ul>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              &nbsp;We see that the three angle bisectors are concurrent and the
              point is called the incentre (O).
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              &nbsp;We observe that the incentre of an acute, an obtuse and
              right angled triangle always lies inside the&nbsp; triangle.
            </span>
          </span>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Incentre of a triangle. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=202&cnt=2
        </Typography>
      </div>
    </div>
  );
}
