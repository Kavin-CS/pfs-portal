import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import RightCylinderThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/RightCylinder1/rightcylinder-the1.png';

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
      <h2 className={classes.secondaryTag}>Objective:</h2>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            To make a right circular cylinder of given height and circumference
            of base.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Related Terms:</h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            A cylinder is a geometric solid that is very common in everyday
            life, such as a soup can. If you take the cylinder apart you find it
            has two ends, called bases, which are usually circular.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Right circular cylinder:</h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            <strong>Definition: </strong>A right circular cylinder is a
            three-dimensional object with two congruent circles as parallel
            bases and a lateral surface consisting of a rectangle.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            <strong>Base and side:</strong> The bases of right circular cylinder
            are always congruent and parallel to each other. If you were to
            'unroll' the cylinder you would find the side is actually a
            rectangle when flattened out.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            <strong>Height: </strong>The height <strong>h</strong> is the
            perpendicular distance between the bases.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            <strong>Radius: </strong>The radius <strong>r </strong>of a cylinder
            is the radius of a base.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            <strong>Circumference: </strong>The circumference of a circle is the
            distance around it. Here the circumference is denoted by{' '}
            <strong>l</strong>.
          </span>
        </span>
      </p>

      <p>
        <img
          alt=""
          src={RightCylinderThe1}
          width="312px;"
          height="261px;"
          marginLeft="150px;"
          marginRight="150px;"
        />
      </p>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2016). Right circular cylinder. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=245&cnt=1
        </Typography>
      </div>
    </div>
  );
}
