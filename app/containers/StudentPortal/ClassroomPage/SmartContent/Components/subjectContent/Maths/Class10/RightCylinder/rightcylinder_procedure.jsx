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

import RightCylinderPro1 from '../../../../../../../../../assets/Images/Subjects/Maths/RightCylinder1/rightcylinder-pro1.png';
import RightCylinderPro2 from '../../../../../../../../../assets/Images/Subjects/Maths/RightCylinder1/rightcylinder-pro2.png';

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
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
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
      <h2 className={classes.secondaryTag}>As performed in the real lab:</h2>

      <h3 className={classes.secondaryTag}>Materials Required:</h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            Colored papers, a pair of scissors, gum.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Cut a rectangular sheet of paper of length <strong>l</strong> =
              given circumference of base of cylinder, breadth{' '}
              <strong>b</strong> = given height. [Fig (a)].
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Gently curve the paper so that the two (shorter) sides come
              together.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Join the edges together by cello tape.[Fig (b)].
            </span>
          </span>
        </li>
      </ul>

      <p>
        <img alt="" src={RightCylinderPro1} width="250px;" height="140px;" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={RightCylinderPro2} width="179px;" height="150px;" />
      </p>

      <p>
        <span fontSize="14px;">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Fig (a) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;Fig (b)
        </span>
      </p>

      <h2 className={classes.secondaryTag}>As performed in the simulator:</h2>

      <ul>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              Create rectangle by providing length and breadth.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              Click on button "Draw Rectangle" to draw rectangle.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              Click on the rectangular sheet to fold and create a right circular
              cylinder .
            </span>
          </span>
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Observation:</h2>

      <ul>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              The rectangle transforms into a cylinder.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              The height of the cylinder is <strong>b</strong>.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              The circumference of the base circle is <strong>l</strong>.
            </span>
          </span>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2016). Right circular cylinder. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=245&cnt=2
        </Typography>
      </div>
    </div>
  );
}
