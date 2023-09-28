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
    <div className={classes.divContent}>
      <div class="divContent">
        <h2 className={classes.secondaryTag}>
          <strong>
            <span>
              <span>As performed in the real lab:</span>
            </span>
          </strong>
        </h2>

        <h2 className={classes.secondaryTag}>
          <strong>
            <span>
              <span>Materials required:</span>
            </span>
          </strong>
        </h2>

        <p>
          <span>
            Hollow sphere cut into two hemispheres, a cylinder with both base
            diameter and height equal to the diameter of the sphere
          </span>
        </p>

        <h2 className={classes.secondaryTag}>
          <span>Procedure:</span>
        </h2>

        <p>
          <span>
            1. Take a roll of a jute thread and wind it closely on the surface
            of the hemisphere completely.&nbsp;
          </span>
        </p>

        <p>
          <span>
            <span>
              2. Take another roll of jute thread and wind it completely along
              the curved surface of the cylinder.&nbsp;
            </span>
          </span>
        </p>

        <p>
          <span>
            <span>3. Compare the length of the two threads.</span>
          </span>
        </p>

        <p>&nbsp;</p>

        <h2 className={classes.secondaryTag}>
          <strong>
            <span>
              <span>As performed in the simulator:</span>
            </span>
          </strong>
        </h2>

        <p>
          <span>
            <span>
              1.Check the two checkboxes in the toolbox to generate hemisphere
              and cylinder.
            </span>
          </span>
        </p>

        <p>
          <span>
            <span>2.Now, click on "Next".</span>
          </span>
        </p>

        <p>
          <span>
            <span>
              3.Drag these jute threads of length L over these figures to wind
              them completely.
            </span>
          </span>
        </p>

        <p>
          <span>
            <span>
              4.Now, we will compare the length of two threads used to wind
              hemisphere and cylinder.
            </span>
          </span>
        </p>

        <p>
          <span>
            <span>5.Proceed with the "Next" for derivation.</span>
          </span>
        </p>

        <p>&nbsp;</p>

        <h2 className={classes.secondaryTag}>
          <strong>
            <span>
              <span>Observations:</span>
            </span>
          </strong>
        </h2>

        <p>
          <span>
            <span>
              1. Students observe that the length of the thread used to cover
              the curved surface of the cylinder is twice the length needed to
              cover the hemisphere.
            </span>
          </span>
        </p>

        <p>
          <span>
            <span>
              2. Since the thickness of the thread is uniform and the same for
              both the threads, surface areas are proportional to the lengths of
              the threads approximately.
            </span>
          </span>
        </p>

        <p>
          <span>
            <span>
              3. Hence surface area of the hemisphere = half the surface area of
              the cylinder{' '}
            </span>
          </span>
        </p>

        <p>
          <span>
            <span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; =1/2 × 2 π&nbsp;r h{' '}
            </span>
          </span>
        </p>

        <p>
          <span>
            <span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;= π r h{' '}
            </span>
          </span>
        </p>

        <p>
          <span>
            <span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;= π r × 2 r &nbsp;
              ( h = 2r){' '}
            </span>
          </span>
        </p>

        <p>
          <span>
            <span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;= 2 π r<sup>2</sup>{' '}
            </span>
          </span>
        </p>

        <p>
          <span>
            <span>
              Therefore, surface area of a sphere = 4 π&nbsp;r<sup>2</sup>
            </span>
          </span>
        </p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). The Potentiometer-Internal resistance of
          a cell. Retrieved 25 February 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=147&cnt=2
        </Typography>
      </div>
    </div>
  );
}
