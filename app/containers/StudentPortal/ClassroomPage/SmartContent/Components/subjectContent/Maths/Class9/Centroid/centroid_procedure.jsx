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

import CentroidPro1 from '../../../../../../../../../assets/Images/Subjects/Maths/Centroid1/centroid-pro1.jpg';
import CentroidPro2 from '../../../../../../../../../assets/Images/Subjects/Maths/Centroid1/centroid-pro2.jpg';
import CentroidPro3 from '../../../../../../../../../assets/Images/Subjects/Maths/Centroid1/centroid-pro3.jpg';
import CentroidPro4 from '../../../../../../../../../assets/Images/Subjects/Maths/Centroid1/centroid-pro4.png';
import CentroidPro5 from '../../../../../../../../../assets/Images/Subjects/Maths/Centroid1/centroid-pro5.png';
import CentroidPro6 from '../../../../../../../../../assets/Images/Subjects/Maths/Centroid1/centroid-pro6.png';

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

      <h3 className={classes.secondaryTag}>Materials required:</h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            Coloured paper, pencil, a pair of scissors, gum.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ol>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              From a sheet of paper, cut out three types of triangle:
              acute-angled triangle, right-angled triangle and obtuse-angle
              triangle.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              For an acute-angled triangle, find the mid-points of the sides by
              bringing the corresponding two vertices together. Make three folds
              such that each Joins a vertex to the mid-point of the opposite
              side. [Fig (a)]
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              Repeat the same activity for a right-angled triangle and an
              obtuse-angled triangle. [Fig (b) and Fig (c)]
            </span>
          </span>
        </li>
      </ol>

      <p>
        <img
          alt=""
          src={CentroidPro1}
          width=" 200px;" height=" 138px;"
        />
        <img
          alt=""
          src={CentroidPro2}
          width=" 128px;" height=" 160px;"
        />
        <img
          alt=""
          src={CentroidPro3}
          width=" 260px;" height=" 150px;"
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        Acute-angled(a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Right-angled(b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Obtuse-angled(c)
      </p>

      <h2 className={classes.secondaryTag}>As performed in the simulator:</h2>

      <ol>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Create a triangle ABC by providing three points A, B and C over
              the workbench.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Draw the mid-points of each line segment.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Click on each mid-points to draw their respective bisector lines.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              You can see, Centroid lies inside the triangle for all acute
              angled, obtuse angled &amp; right angled triangle.
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Observations:</h2>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              The students observe that the three medians of a triangle concur.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              They also observe that the centroid of an acute, obtuse or right
              angled triangle always lies inside the triangle.
            </span>
          </span>
        </li>
      </ul>

      <p>
        <img
          alt=""
          src={CentroidPro4}
          width=" 200px;" height=" 170px;"
        />{' '}
        <img
          alt=""
          src={CentroidPro5}
          width=" 200px;" height=" 170px;"
        />{' '}
        <img
          alt=""
          src={CentroidPro6}
          width=" 200px;" height=" 170px;"
        />
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Centroid of a triangle. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=189&cnt=2
        </Typography>
      </div>
    </div>
  );
}
