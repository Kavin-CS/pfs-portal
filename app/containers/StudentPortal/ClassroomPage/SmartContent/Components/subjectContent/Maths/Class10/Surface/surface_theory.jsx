import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import SurfaceImg1 from '../../../../../../../../../assets/Images/Subjects/Maths/surface1.png';
import SurfaceImg2 from '../../../../../../../../../assets/Images/Subjects/Maths/surface2.png';
import SurfaceImg3 from '../../../../../../../../../assets/Images/Subjects/Maths/surface3.png';

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
  surfaceImg: {
    width: 300,
  },
  surfaceImg1: {
    width: 266,
    height: 266,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <div class="divContent">
        <h2 className={classes.secondaryTag}>
          <strong>
            <span>
              <span>Objective:</span>
            </span>
          </strong>
        </h2>
        <p>
          <span>
            <span>
              To give a suggestive demonstration of the formula for the surface
              area of a sphere in terms of its radius.
            </span>
          </span>
        </p>
        <h2 className={classes.secondaryTag}>
          <strong>Related terms</strong>
        </h2>
        <h3>
          <strong>
            <span>
              <span>Sphere:</span>
            </span>
          </strong>
        </h3>
        <p>
          {' '}
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
          <img className={classes.surfaceImg1} src={SurfaceImg1} />
        </p>
        <p>&nbsp;</p>
        <p>
          <span>
            <span>
              A sphere is a perfectly round geometrical and circular object in
              three-dimensional space that resembles the shape of a completely
              round ball. Like a circle, which, in geometrical contexts, is in
              two dimensions, a sphere is the set of points that are all the
              same distance r from a given point in space. This distance r is
              the radius of the sphere, and the given point is the center of the
              sphere. The maximum straight distance through the sphere passes
              through the center and is thus twice the radius; it is the
              diameter.
            </span>
          </span>
        </p>
        <p>&nbsp;</p>
        <h2 className={classes.secondaryTag}>
          <strong>
            <span>
              <span>Surface Area:</span>
            </span>
          </strong>
        </h2>
        <img className={classes.surfaceImg} src={SurfaceImg2} />
        <img className={classes.surfaceImg} src={SurfaceImg3} />

        <p>
          <span>
            <span>
              The surface area of a sphere is: A = 4&nbsp;π r<sup>2</sup>.
            </span>
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span>
            <span>
              The cylinder is twice the length needed to cover the hemisphere.
              Since the thickness of the thread is uniform and the same for both
              the threads,surface areas are proportional to the lengths of the
              threads approximately.
            </span>
          </span>
        </p>
        <p>&nbsp;</p>
      </div>

      <p>&nbsp;</p>

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
