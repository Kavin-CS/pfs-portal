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

import SphereImg from '../../../../../../../../../assets/Images/Subjects/Maths/sphereTheory.png';

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
      <div class="divContent">
        <h2 className={classes.secondaryTag}>
          <strong>
            <span>
              <span>﻿Objective:</span>
            </span>
          </strong>
        </h2>

        <p>
          <span>
            <span>
              &nbsp;To give a suggestive demonstration of the formula for the
              volume of a sphere in terms of its radius.
            </span>
          </span>
        </p>

        <p>&nbsp;</p>

        <h2 className={classes.secondaryTag}>
          <span>
            <strong>
              <span>Related terms</span>
            </strong>
          </span>
        </h2>

        <h3 className={classes.headName}>
          <u>
            <span>
              <strong>Sphere:</strong>
            </span>
          </u>
        </h3>

        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
          <img alt="" src={SphereImg} />
        </p>

        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          <img alt="" src="/userfiles/2/image/cdacsc1(1).png" />
        </p>

        <p>
          <span>
            <span>
              A&nbsp;sphere is a perfectly
              round&nbsp;geometrical&nbsp;and&nbsp;circular
              object&nbsp;in&nbsp;three-dimensional space&nbsp;that resembles
              the shape of a completely round&nbsp;ball.&nbsp;
            </span>
          </span>
        </p>

        <h3 className={classes.headName}>
          <u>Diameter:&nbsp;</u>&nbsp;
        </h3>

        <p>
          <span>
            <span>
              A Diameter is&nbsp;a straight line passing through the center of a
              circle or&nbsp;sphere&nbsp;and meeting the circumference or
              surface at each end.&nbsp;
            </span>
          </span>
        </p>

        <h3 className={classes.headName}>
          <u>Radius: </u>&nbsp;
        </h3>

        <p>
          <span>
            <span>
              Radius&nbsp;of a sphere is a line segment between the center and a
              point on the circle or&nbsp;sphere.&nbsp;
            </span>
          </span>
        </p>

        <h3 className={classes.headName}>
          <span>
            <span>
              <u>Volume:</u>{' '}
            </span>
          </span>
        </h3>

        <p>
          <span>
            <span>
              <span>
                The&nbsp;volume&nbsp;of
                the&nbsp;sphere&nbsp;is&nbsp;defined&nbsp;as&nbsp;
              </span>
            </span>
          </span>
          <span>:</span>
          <strong> V = ⁴⁄₃πr³</strong>
          <span>.</span>
        </p>

        <p>
          <span>
            In this equation, <strong>"V"</strong> represents volume and
            <strong> "r" </strong>represents the radius of the sphere.
          </span>
        </p>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Volume of a sphere. Retrieved 28 February
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=165&cnt=1
        </Typography>
      </div>
    </div>
  );
}
