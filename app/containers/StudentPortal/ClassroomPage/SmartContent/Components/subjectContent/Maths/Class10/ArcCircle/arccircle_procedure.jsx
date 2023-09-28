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

import ArcCirclePro1 from '../../../../../../../../../assets/Images/Subjects/Maths/ArcCircle1/arccircle-pro1.jpg';
import ArcCirclePro2 from '../../../../../../../../../assets/Images/Subjects/Maths/ArcCircle1/arccircle-pro2.jpg';

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
      <h2 className={classes.secondaryTag}>As performed in real lab:</h2>

      <h3 className={classes.secondaryTag}>Material Required</h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            Colored papers, a pair of scissors, gum, compass, pencil, ruler,
            carbon paper or tracing paper.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ol>
        <li textAlign="left;">
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Draw circle of any radius and cut it using scissor.
            </span>
          </span>
        </li>
        <li textAlign="left;">
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Take a rectangular sheet of paper and paste circle on it.
            </span>
          </span>
        </li>
        <li textAlign="left;">
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Take two points A and B on circle and draw AO and BO, O is centre
              of circle.
            </span>
          </span>
        </li>
        <li textAlign="left;">
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Take another point P on remaining part of the circle and draw AP
              and BP using ruler and pencil.
            </span>
          </span>
        </li>
        <li textAlign="left;">
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Make two replicas of ∠APB and paste these replicas adjacent to
              each other on ∠AOB.
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>As performed in the simulator:</h2>

      <ol>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Mark a point on the workbench area such that it forms radius for
              the circle with point O as the origin and length of the radius
              must be in between 2 to 5 cm.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Mark any two points (A, B) on circle such that considerable
              distance is maintained between two points.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Mark point P in remaining part of the circle to form ∠APB.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Click on ∠APB to create replica.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Click on both colored angles to rotate.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Place both replica adjacent to each other on centre O .
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag} marginLeft="0.64cm;" textIndent="-0.64cm;" marginBottom="0cm;">
        Observations
      </h2>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              The student will observe that two replicas of ∠APB completely
              covers ∠AOB.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <span fontSize="14px;">
                <span fontFamily="arial,helvetica,sans-serif;">
                  ∠AOB=2*∠APB.
                </span>
              </span>
            </span>
          </span>
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Process of Execution</h2>

      <p marginLeft="1.91cm;" textIndent="-0.32cm;" marginBottom="0cm">
        &nbsp;
        <img alt="" src={ArcCirclePro1} />
      </p>

      <p marginBottom="0cm">
        <img
          alt=""
          src={ArcCirclePro2}
          marginLeft="300px;" marginRight="300px;" height="193px;" width="200px;"
        />
        &nbsp;
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Angle at the centre of a circle by an arc.
          Retrieved 7 April 2021, from
          cdac.olabs.edu.in/?sub=80&brch=20&sim=162&cnt=2
        </Typography>
      </div>
    </div>
  );
}
