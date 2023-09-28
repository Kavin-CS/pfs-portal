import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import CircleCylinderThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/CircleCylinder1/circlecylinder-the1.jpg';


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
          To give a suggestive demonstration of the formula for the volume of a
          right circular cylinder in terms of its height and radius of the base
          circle.
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          Related Terms:
        </span>
      </h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          A cylinder is a geometric solid that is very common in everyday life,
          such as a soup can. If you take the cylinder apart you find it has two
          ends, called bases, which are usually circular.
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <em fontWeight="normal">
          <span fontFamily="arial,helvetica,sans-serif;">
            Right circular cylinder:{' '}
          </span>
        </em>
      </h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <strong>Definition:</strong> A right circular cylinder is a
          three-dimensional object with two congruent circles as parallel bases
          and a lateral surface consisting of a rectangle.
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <strong>Base and side:</strong> The bases of right circular cylinder
          are always congruent and parallel to each other. If you were to
          'unroll' the cylinder you would find the side is actually a rectangle
          when flattened out.
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <strong>Height:</strong> The height <strong>h </strong>is the
          perpendicular distance between the bases.
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <strong>Radius:</strong> The radius<strong> r</strong> of a cylinder
          is the radius of a base.
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <strong>Axis:</strong> A line joining the center of each base.
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          Volume of right circular cylinder =
          <strong>
            {' '}
            πr<sup>2</sup>h
          </strong>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span id="cke_bm_660E" display="none;">
              &nbsp;
            </span>
          </span>
        </span>
      </p>

      <p>
        <strong>
          <img
            alt=""
            src={CircleCylinderThe1}
            width="202px;" height="200px;" marginLeft="150px;" marginRight="150px;"
          />
        </strong>
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <p lang="en-US" marginTop="0.49cm;" marginBottom="0.49cm">
        &nbsp;
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Volume of right circular cylinder.
          Retrieved 7 April 2021, from
          cdac.olabs.edu.in/?sub=80&brch=20&sim=163&cnt=1
        </Typography>
      </div>
    </div>
  );
}
