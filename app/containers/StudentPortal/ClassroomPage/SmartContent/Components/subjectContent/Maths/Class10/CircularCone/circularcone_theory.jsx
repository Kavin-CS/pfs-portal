import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import CircularConeThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/CircularCone1/circularcone-the1.png';
import CircularConeThe2 from '../../../../../../../../../assets/Images/Subjects/Maths/CircularCone1/circularcone-the2.png';


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
        <strong>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="16px;">Objective:</span>
          </span>
        </strong>
      </h2>

      <p>
        <span fontSize=" 14px;" fontFamily="arial, helvetica, sans-serif;" lineHeight="1.6;">
          To give a suggestive demonstration of the formula for the volume of a
          right circular cone.
        </span>
      </p>

      

      <h2 className={classes.secondaryTag}>
        <strong>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="16px;">Theory:</span>
          </span>
        </strong>
      </h2>

      <h2 className={classes.secondaryTag}>
        <strong>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="16px;">Related terms</span>
          </span>
        </strong>
      </h2>

      <h3 className={classes.secondaryTag}>
        <strong>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="16px;">Cone:</span>
          </span>
        </strong>
      </h3>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        
        <img
          alt=""
          height="300"
          src={CircularConeThe1}
          width="331"
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            A cone is a three-dimensional geometric shape that tapers smoothly
            from a flat base (usually circular) to a point called the apex or
            vertex. More precisely, it is the solid figure bounded by a base in
            a plane and by a surface (called the lateral surface) formed by the
            locus of all straight line segments joining the apex to the
            perimeter of the base, such that there is a circular cross section.
            The term "cone" sometimes refers just to the surface of this solid
            figure, or just to the lateral surface. The axis of a cone is the
            straight line (if any), passing through the apex, about which the
            base has a rotational symmetry. In common usage in elementary
            geometry, cones are assumed to be right circular, where right means
            that the axis passes through the centre of the base (suitably
            defined) at right angles to its plane, and circular means that the
            base is a circle. Contrasted with right cones are oblique cones, in
            which the axis does not pass perpendicularly through the centre of
            the base.In general, however, the base may be any shape that permits
            a circular cross section of the cone, and the apex may lie anywhere
            (though it is usually assumed that the base is bounded and therefore
            has finite area, and that the apex lies outside the plane of the
            base). The more general conic solid also has an apex and lines
            connecting the apex to all the points on a planar base, which can be
            of any shape. If the result has a circular cross section, it is a
            cone; if it has a polygonal base, it is a pyramid.
          </span>
        </span>
      </p>

      

      <h2 className={classes.secondaryTag}>
        <strong>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="16px;">Volume:</span>
          </span>
        </strong>
      </h2>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <img
          alt=""
          height="300"
          src={CircularConeThe2}
          width="320"
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;
      </p>

      <p>
        <span fontSize="14px;">
          Given the radius and h, the volume of a cone can be found by using the
          formula:
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          Formula:&nbsp;Vcone = 1/3 × b × h. &nbsp;b is the area of the base of
          the cone. Since the base is a circle, area of the base = π × r
          <sup>2</sup>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          Thus, the formula is Vcone = 1/3 × π × r<sup>2</sup> × h &nbsp;Use π =
          3.14
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Volume of right circular cone. Retrieved 7
          April 2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=164&cnt=1
        </Typography>
      </div>
    </div>
  );
}
