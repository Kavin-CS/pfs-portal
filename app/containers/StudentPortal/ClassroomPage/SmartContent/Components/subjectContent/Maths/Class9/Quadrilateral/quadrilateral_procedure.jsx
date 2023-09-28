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

import QuadrilateralPro1 from '../../../../../../../../../assets/Images/Subjects/Maths/Quadrilateral1/quadrilateral-pro1.png';
import QuadrilateralPro2 from '../../../../../../../../../assets/Images/Subjects/Maths/Quadrilateral1/quadrilateral-pro2.jpg';


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
      <h2 className={classes.secondaryTag}>As performed in the real lab:</h2>

      <h3 className={classes.secondaryTag}>Materials required:</h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            Colored papers, a pair of scissors, gum.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            1. Cut off quadrilateral ABCD (Fig a) of paper with prescribed
            dimensions.
            <br />
            2. Mark the mid-points P,Q,R and S of the side AB,BC,CD,and AD
            respectively by folding the sides.
            <br />
            3. Cut off the quadrilateral PQRS.
            <br />
            4. Now cut the quadrilateral PQRS along the diagonal PR into two
            triangles PQR and PSR.
            <br />
            5. Superimpose the ▲ PSR on ▲ PQR such that PS falls on QR.(Fig b)
            <br />
            6. The ▲PQR covers the ▲PSR exactly.
            <br />
            7. Thus SP=QR and RS=PQ
            <br />
            8. Therefore,&nbsp;quadrilateral&nbsp;PQRS is a parallelogram.
          </span>
        </span>
      </p>

      <p>&nbsp;</p>

      <p marginLeft=" 120px;">
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            src={QuadrilateralPro1}
            width=" 400px;" height=" 217px;"
          />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
          <img
            alt=""
            src={QuadrilateralPro2}
            width=" 400px;" height=" 200px;"
          />
        </span>
      </p>

      <p>&nbsp;</p>

      

      <h2 className={classes.secondaryTag}>As performed in the simulator:</h2>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            1. Form a quadrilateral ABCD by clicking on any 4 points in
            workbench area.
            <br />
            2. Mark mid-point of each line AB, BC, CD, AD as P, Q, R, S
            respectively.
            <br />
            3. Click and join midpoints of each side&nbsp;to form quadrilateral
            PQRS.
            <br />
            4. Click on quadrilateral PQRS to separate it from quadrilateral
            ABCD.
            <br />
            5. Click on point P and point R to draw diagonal PR.
            <br />
            6. Click on ▲PRQ and ▲&nbsp;PRS respectively to fill them with
            distinct colors.
            <br />
            7. Click on "Cut Triangle" button to cut triangle PQR from
            quadrilateral PQRS.
            <br />
            8. ▲ PQR is draggable so you can drag it to any position in
            workbench area.
            <br />
            9. Rotate ▲ PQR using "Rotate Anti Clockwise" and "Rotate Clockwise"
            buttons.
            <br />
            10. Next step is to place triangle PQR over triangle PRS such that
            both of them overlap each
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; other.
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>Observation:</h2>

      <ul>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">The ▲PQR overlaps ▲PSR.</span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">Thus SP=QR and RS=PQ.</span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              Therefore, quadrilateral PQRS is a parallelogram.
            </span>
          </span>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). The quadrilateral formed by the mid-points
          of a quadrilateral. Retrieved 8 April 2021, from
          cdac.olabs.edu.in/?sub=80&brch=21&sim=203&cnt=2
        </Typography>
      </div>
    </div>
  );
}
