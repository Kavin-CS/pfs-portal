import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
// import OhmsLaw from '../../../../../../assets/Images/Subjects/Physics/ocontent.jpg';
import midPoint from '../../../../../../../../../assets/Images/Subjects/Maths/midPoint.jpg';

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
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <div class="divContent">
        <h2 className={classes.secondaryTag}>Objective:</h2>

        <p>
          <span>
            <span>
              <span>To verify the mid-point theorem for a triangle.</span>
            </span>
          </span>
        </p>

        <h3 className={classes.mainTag}>
          <span>Theorem :</span>
        </h3>

        <p>
          <span>
            <span>
              The line segment connecting the midpoints of&nbsp; two sides of a
              triangle is parallel to the third side and is congruent to one
              half of the third side.
            </span>
          </span>
        </p>

        <h3 className={classes.mainTag}>Basic concepts and facts</h3>

        <p>
          <span>
            <span>
              <strong>1.Parallel Lines:</strong>
              <br />
              Two lines are parallel if they do not meet at any point.
              <br />
              <strong>2.Congruent Triangles:</strong>
              <br />
              Two triangles are congruent if their corresponding angles and
              corresponding sides are equal.
              <br />
              <strong>3.Similar triangles:</strong>
              <br />
              Two triangles are similar if their corresponding angles equal and
              their corresponding sides are in proportion.
            </span>
          </span>
          <br />
          &nbsp;
        </p>

        <h2 className={classes.secondaryTag}>
          Proof of theorem:
          <br />
          &nbsp;
          <img alt="" src={midPoint} />
          <br />
          &nbsp;&nbsp;&nbsp;
        </h2>

        <h3 className={classes.mainTag}>Given in the figure A :</h3>

        <p>
          <span>
            <span>AP=PB, AQ=QC.</span>
          </span>
        </p>

        <h3 className={classes.mainTag}>
          <br />
          To prove:
        </h3>

        <p>
          <span>
            <span>PQ || BC and PQ=1/2 BC</span>
          </span>
        </p>

        <h3 className={classes.mainTag}>
          <br />
          Plan:
        </h3>

        <p>
          <span>
            <span>To prove ▲ APQ ≅ ▲ QRC</span>
          </span>
        </p>

        <h3 className={classes.mainTag}>
          <br />
          Proof steps:
        </h3>

        <ol>
          <li>
            <span>
              <span>
                <span>AQ=QC [midpoint]</span>
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                ∠ APQ = ∠QRC [Corresponding angles for parallel lines cut by an
                transversal].
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                ∠PBR=∠QRC=∠APQ [Corresponding angles for parallel lines cut by
                an transversal].
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                ∠RQC=∠PAQ [When 2 pairs of corresponding angles are congruent in
                a triangle, the third pair is also congruent.]
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>Therefore , ▲APQ ≅ ▲QRC</span>
            </span>
          </li>
          <li>
            <span>
              <span>AP=QR=PB and PQ=BR=RC.</span>
            </span>
          </li>
        </ol>

        <p>
          <span>
            <span>
              Since midpoints are unique, and the lines connecting points are
              unique, the proposition is proven.
            </span>
          </span>
        </p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Mid-point theorem. Retrieved 4 March 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=181&cnt=4
        </Typography>
      </div>
    </div>
  );
}
