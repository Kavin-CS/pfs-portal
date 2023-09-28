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

import CircumcentrePro1 from '../../../../../../../../../assets/Images/Subjects/Maths/Circumcentre1/circumcentre-pro1.jpg';
import CircumcentrePro2 from '../../../../../../../../../assets/Images/Subjects/Maths/Circumcentre1/circumcentre-pro2.jpg';
import CircumcentrePro3 from '../../../../../../../../../assets/Images/Subjects/Maths/Circumcentre1/circumcentre-pro3.jpg';


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
      <h2 className={classes.secondaryTag}>As performed in the real lab</h2>

      <h3 className={classes.secondaryTag}>Material Required:</h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            Coloured paper, pencil, a pair of scissors, gum.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ol>
        <li>
          <span fontFamily=" arial, helvetica, sans-serif;" fontSize="14px;" lineHeight="1.6;">
            Cut an acute angled triangle from a coloured paper and name it as
            ABC.
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Form the perpendicular bisector EF of AB using paper-folding
              method.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Similarly get the perpendicular bisectors GH and IJ of the sides
              AC and BC respectively.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Repeat the activity for right and obtuse angled triangles.
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>As performed in the simulator</h2>

      <ol>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Select three points A, B and C anywhere on the workbench &nbsp;to
              draw a triangle.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Depending on your points selection acute, obtuse or right angled
              triangle is drawn.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Now, click on each mid-point to draw their respective
              perpendicular bisectors. You can use the scale to figure out mid
              point of each side.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Activity completed successfully. You can see the inference.&nbsp;
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Observations:</h2>

      <ul>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              &nbsp;The students see that the three perpendicular bisectors (the
              three creases obtained) are concurrent.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              &nbsp;For the acute angled triangle, the circumcentre lies inside
              the triangle as shown in Fig(a).
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              &nbsp;For the right angled triangle, the circumcentre is the
              mid-point of the hypotenuse as shown in Fig(b)
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              &nbsp;For the obtuse angled triangle, the circumcentre lies
              outside the triangle as shown in Fig(c).
            </span>
          </span>
        </li>
      </ul>

      <p marginLeft=" 80px;">
        <img
          alt=""
          src={CircumcentrePro1}
          width=" 200px;" height=" 145px;"
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={CircumcentrePro2}
          width=" 200px;" height=" 136px;"
        />
      </p>

      <p marginLeft=" 40px;">
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Fig &nbsp;(a)
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;Fig (b)
      </p>

      <p marginLeft=" 80px;">
        <img
          alt=""
          src={CircumcentrePro3}
          width=" 200px;" height=" 123px;"
        />
      </p>

      <p marginLeft=" 80px;">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Fig &nbsp;(c)
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Circumcentre of a triangle. Retrieved 8
          April 2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=201&cnt=2
        </Typography>
      </div>
    </div>
  );
}
