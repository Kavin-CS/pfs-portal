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

import TrapeziumPro1 from '../../../../../../../../../assets/Images/Subjects/Maths/Trapezium1/trapezium-pro1.png';
import TrapeziumPro2 from '../../../../../../../../../assets/Images/Subjects/Maths/Trapezium1/trapezium-pro2.png';
import TrapeziumPro3 from '../../../../../../../../../assets/Images/Subjects/Maths/Trapezium1/trapezium-pro3.png';

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
          As performed in the real lab:
        </span>
      </h2>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          Materials Required:
        </span>
      </h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            Coloured paper, a pair of scissors, gum.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <br />
        <span fontFamily="arial,helvetica,sans-serif;">Procedure:</span>
      </h3>

      <ol>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Take two sheets of coloured paper.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Cut two identical trapeziums ABCD and PQRS as shown in figure.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Paste them together along PS with AD.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              It will forms parallelogram.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Calculate area of trapezium.
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>
        <img
          alt=""
          src={TrapeziumPro1}
          width="600px" height=" 182px;"
        />
      </h2>

      <p>
        <img
          alt=""
          src={TrapeziumPro2}
          width="600px" height=" 214px;"
        />
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
              Create a Trapezium ABCD by providing length of 2 bases (parallel
              sides) and height
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Don't give both base value same otherwise it will form rectangle
              rather than Trapezium.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Click on a Trapezium ABCD to create a Trapezium PQRS
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Click twice on PQRS to rotate PQRS in 180 degree.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Drag trapezium PQRS and place at appropriate p
            </span>
          </span>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              osition such that it will forms a parallelogram.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Place trapezium PQRS such that leg BC of trapezium ABCD will touch
              leg RQ of trapezium PQR.
            </span>
          </span>
        </li>
      </ol>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            src={TrapeziumPro3}
            marginLeft=" 50px;" marginRight="50px;" width="500px;" height="238px;"
          />
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          Observation:
        </span>
      </h2>

      <ol>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Parallelogram ASPD is formed by combining two trapezium ABCD And
              BSPC.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Area of Trapezium ABCD = 1/2 X Area of parallelogram DASP
            </span>
          </span>
        </li>
      </ol>

      <p marginLeft=" 200px;">
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            &nbsp;=1/2 X (DC+CP) X h<br />
            &nbsp;=1/2 X (b1 + b2) X h
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <br />
        <span fontFamily="arial,helvetica,sans-serif;">Result:</span>
      </h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            The area of trapezium is half the product of its altitude and sum of
            its parallel sides.
          </span>
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Area of trapezium. Retrieved 8 April 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=183&cnt=2
        </Typography>
      </div>
    </div>
  );
}
