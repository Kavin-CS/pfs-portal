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
import midPoint1 from '../../../../../../../../../assets/Images/Subjects/Maths/midProcedure1.jpg';
import midPoint2 from '../../../../../../../../../assets/Images/Subjects/Maths/midProcedure2.jpg';
import midPoint3 from '../../../../../../../../../assets/Images/Subjects/Maths/midProcedure3.jpg';

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
  header: {
    fontSize: 20,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div className={classes.divContent}>
      <h2>Pre-requisite knowledge:</h2>

      <p>
        Two lines are parallel if for a transversal cutting them, the
        corresponding angles are equal.
      </p>

      <p>
        <img
          alt=""
          src={midPoint1}
        />
      </p>

      <h2>
        <span>Procedure</span>:
      </h2>

      <h2>
        <span>As performed in the real lab:</span>
      </h2>

      <h3>
        <span>Materials Required:</span>
      </h3>

      <p>
        <span>
          <span>
            Colored papers, sketch pens, geometry box, a pair of scissors,
            fevicol and eraser.
          </span>
        </span>
      </p>

      <h3>
        <span>Procedure:</span>
      </h3>

      <ol>
        <li>
          <span>
            <span>Form a sheet of paper.</span>
          </span>
        </li>
        <li>
          <span>
            <span>Cut a ▲ABC.</span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Find Mid-points P and Q of AB and AC respectively by paper
              folding.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>Join P and Q by folding and making a crease PQ.</span>
          </span>
        </li>
        <li>
          <span>
            <span>Cut ▲APQ.</span>
          </span>
        </li>
        <li>
          <span>
            <span>Superimpose AQ over QC so that QP falls along CB.</span>
          </span>
        </li>
      </ol>

      <p>&nbsp;</p>

      <h2>
        <span>As performed in the simulator:</span>
      </h2>

      <h3>
        <span>Procedure:</span>
      </h3>

      <ol>
        <li>
          <span>
            <span>
              Create ▲ABC by providing length of each side AB,BC and AC in
              dimension box.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Mark mid-point of each line AB,BC,AC as P,Q,R respectively.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>Now join PQ and QR.</span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Click on cut triangle button to get replicate triangle of APQ.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>Drag this replica and place it at ▲ QRC.</span>
          </span>
        </li>
      </ol>

      <p align="JUSTIFY">
        &nbsp;
        <img
          alt=""
          src={midPoint2}
        />
      </p>

      <h2 align="JUSTIFY">
        <span>Observation</span>
        <span lang="en-US">
          <b>:</b>
        </span>
      </h2>

      <ol>
        <li align="JUSTIFY">
          <span lang="en-US">Line PQ || Line</span>
          <span lang="en-US">
            <b> </b>
          </span>
          <span lang="en-US">BC&nbsp;</span>
        </li>
        <li align="JUSTIFY">
          <span lang="en-US">PQ=RC</span>
        </li>
        <li align="JUSTIFY">
          <span lang="en-US">
            <img
              alt="small PQ = frac{1}{2}	imes BC"
              src={midPoint3}
            />
          </span>
        </li>
      </ol>

      <h2>
        <span>Result:</span>
      </h2>

      <p>
        <span>
          <span>
            “The line segment connecting the midpoints of&nbsp; two sides of a
            triangle is parallel to the third side and is congruent to one half
            of the third side.&nbsp;”
          </span>
        </span>
      </p>

      <p align="JUSTIFY">&nbsp;</p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2016). Volume of a sphere. Retrieved 28 February
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=165&cnt=750
        </Typography>
      </div>
    </div>
  );
}
