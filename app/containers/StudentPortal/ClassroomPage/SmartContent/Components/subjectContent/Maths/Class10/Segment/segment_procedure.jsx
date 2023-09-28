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

import SegmentPro1 from '../../../../../../../../../assets/Images/Subjects/Maths/Segment1/segment-pro1.png';
import SegmentPro2 from '../../../../../../../../../assets/Images/Subjects/Maths/Segment1/segment-pro2.png';

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
      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          As performed in the real lab:
        </span>
      </h2>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          Materials required:
        </span>
      </h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            Coloured papers, pair of scissors, gum, scale, compass, pencil,
            carbon papers or tracing papers.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Procedure:</span>
      </h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            1. Draw a circle of any radius with centre O and cut it.
            <br />
            2. Paste the cutout on a rectangular sheet of paper. [Fig 1(a)].
            <br />
            3. Fold the circle in any way such that a chord is made. Draw the
            line segment AB.
            <br />
            [Fig 1(b)].
            <br />
            4. Take two points P and Q on the circle in the same segment. [Fig
            1(c)].
            <br />
            5. Form a crease joining AP. Draw AP. [Fig 1(d)].
            <br />
            6. Form a crease joining BP. Draw BP. [Fig 1(e)].
            <br />
            7. ∠ APB is formed in the major segment. [Fig 1(f)]
            <br />
            8. Form a crease joining AQ. Draw AQ. [Fig 1(g)]
            <br />
            9. Form a crease joining BQ. Draw BQ. [Fig 1(h)]
            <br />
            10. ∠ APB and ∠ AQB are formed in the major segment. [Fig 1(i)]
            <br />
            11. Make replicas of ∠ APB and ∠ AQB using carbon paper or tracing
            paper.
            <br />
            [Fig 1(j)]
            <br />
            12. Place the cutout of ∠ APB on the cutout of ∠ AQB.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            src={SegmentPro1}
            width="850px;"
            height="614px;"
          />
        </span>
      </p>

      <p marginLeft=" 80px;">
        <br />
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            src={SegmentPro2}
            width="90%;"
            height="550px;"
          />
        </span>
      </p>

      <p marginLeft=" 80px;">&nbsp;</p>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          As performed in the simulator:
        </span>
      </h2>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Procedure:</span>
      </h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            1) Mark a point on the workbench area such that it forms radius for
            the circle with point O as the origin.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            2) Mark two points A and B on circle to draw chord AB.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            3) Mark two points P and Q on the circle&nbsp;in any one of the
            segment to form ∠APB and ∠AQB.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">4) Click on ∠APB to rotate it.</span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            5)&nbsp; Drag ∠APB and place over ∠AQB such that they overlap each
            other.
          </span>
        </span>
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Observations:</span>
      </h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            1. ∠ APB and ∠ AQB are angles in the same segment.
            <br />
            2. ∠ AQB covers ∠ APB exactly. Therefore ∠ APB = ∠ AQB.
          </span>
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Angles in the same segment. Retrieved 7
          April 2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=214&cnt=2
        </Typography>
      </div>
    </div>
  );
}
