import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import QuadrilateralThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/Quadrilateral1/quadrilateral-the1.png';
import QuadrilateralThe2 from '../../../../../../../../../assets/Images/Subjects/Maths/Quadrilateral1/quadrilateral-the2.png';

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

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h2 className={classes.secondaryTag}>Objective:</h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            To show that the figure obtained by joining the mid-points of
            consecutive sides of the quadrilateral is a parallelogram.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          Parallelogram:
        </span>
      </h3>

      <ol>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              A parallelogram is a simple quadrilateral with two pairs of
              parallel sides.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              The opposite or facing sides of a parallelogram are of equal
              length.
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Proof:</h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            In quadrilateral ABCD points P, Q, R, S are midpoints of side AB,
            BC, CD and AD respectively.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            src={QuadrilateralThe1}
            width=" 338px;" height=" 187px;"
          />
          <img
            alt=""
            src={QuadrilateralThe2}
            width=" 338px;" height=" 187px; margin-left: 50px; margin-right: 50px;"
          />
        </span>
      </p>

      <h3 className={classes.secondaryTag}>To prove :</h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            PS || QR&nbsp; and SR || PQ. i.e. Quadrilateral PQRS is a
            parallelogram
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <br />
        Proof:
      </h3>

      <ol>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Draw diagonal BD.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              As PS is the midsegment of ▲ ABD, we can say that PS || BD.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              As QR is the midsegment of ▲ BCD, we can say that QR || BD.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              ∵ PS || BD and QR || BD by transitivity, we can say that PS || QR.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Now draw diagonal AC.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              As SR is the midsegment of ▲ ACD, we can say that SR || AC.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              As PQ is the midsegment of ▲ ABC, we can say that PQ || AC.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              ∵ SR || AC and PQ || AC by transitivity, we can say that SR || PQ.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              ∵ PS || QR and SR || PQ, ∴ quadrilateral PQRS is a parallelogram
              (by definition).
            </span>
          </span>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). The quadrilateral formed by the mid-points
          of a quadrilateral. Retrieved 8 April 2021, from
          cdac.olabs.edu.in/?sub=80&brch=21&sim=203&cnt=1
        </Typography>
      </div>
    </div>
  );
}
