import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import Segment1 from '../../../../../../../../../assets/Images/Subjects/Maths/Segment1/segment-the1.jpg';
import Segment2 from '../../../../../../../../../assets/Images/Subjects/Maths/Segment1/segment-the2.jpg';
import Segment3 from '../../../../../../../../../assets/Images/Subjects/Maths/Segment1/segment-the3.jpg';

const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    textAlign: 'left',
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
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

  headName: {
    fontSize: 18,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Objective:</span>
      </h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            <span lineHeight="1.6;">
              To verify that the angles in the same segment of a circle are
              equal.
            </span>
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          Basic Concepts and Facts:
        </span>
      </h2>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            Segments of a Circle :
          </span>
        </span>
      </p>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              A chord of a circle divides the circle into two regions,called the
              segments of the circle.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              The minor segment is the region bounded by the chord and the minor
              arc intercepted by the chord.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              The major segment is the region bounded by the chord and the major
              arc intercepted by the chord.
            </span>
          </span>
        </li>
      </ul>

      <p marginLeft=" 40px;">
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            src={Segment1}
            width=" 276px;"
            height="224px;"
            marginLeft="130px;"
            marginRight="130px;"
          />
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          Angles in Different Segments :
        </span>
        <br />
        &nbsp;
      </h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            In the following diagram, ∠APB is in the major segment and ∠AQB is
            in the minor segment. So,&nbsp;&nbsp; we say that ∠APB and ∠AQB are
            in different segments.
          </span>
        </span>
      </p>

      <p marginLeft=" 200px;">
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            height="220"
            src={Segment2}
            width="200"
          />
          &nbsp;
        </span>
      </p>

      <p marginLeft=" 40px;">&nbsp;</p>

      <h2 className={classes.secondaryTag}>
        <br />
        <span fontFamily="arial,helvetica,sans-serif;">
          Angles in the Same Segment :
        </span>
      </h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            In the following diagram, ∠PRQ and ∠PSQ are in the major segment.
            So, we say that ∠PRQ&nbsp; and ∠PSQ are in the same segment.
          </span>
        </span>
      </p>

      <p marginLeft=" 240px;">
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            height="167"
            src={Segment3}
            width="179"
          />
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Angles in the same segment. Retrieved 7
          April 2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=214&cnt=1
        </Typography>
      </div>
    </div>
  );
}
