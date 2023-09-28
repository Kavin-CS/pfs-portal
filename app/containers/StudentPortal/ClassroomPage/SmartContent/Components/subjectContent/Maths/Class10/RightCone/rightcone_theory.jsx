import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import RightConeThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/RightCone1/rightcone-the1.png';

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
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            To make a cone of given slant length{' '}
            <em fontWeight="normal">
              <strong>l</strong>
            </em>{' '}
            and base circumference.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Thoery:</h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            A cone is a solid that has a circular base and a single vertex,
            called apex. If the vertex is exactly over the center of the base
            circle, it is called a right cone, else it is called an oblique
            cone.{' '}
          </span>
        </span>
      </p>

      <p>
        <img
          alt=""
          src={RightConeThe1}
          width="211px;"
          height="212px;"
          marginLeft="150px;"
          marginRight="150px;"
        />
      </p>

      <h3 className={classes.secondaryTag}>Related Terms:</h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            <strong>
              Height (<em fontWeight="normal">h</em>):
            </strong>
            The distance from the apex of a cone to the base. Formally, the
            shortest line segment between the apex of a cone and the base.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            <strong>
              Radius (<em fontWeight="normal">r</em>):{' '}
            </strong>
            It is the radius of the base.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            <strong>
              Slant Height (<em fontWeight="normal">l</em>):{' '}
            </strong>
            The diagonal distance from the apex of a right circular cone to the
            base.
          </span>
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2016). Right circular cone. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=248&cnt=1
        </Typography>
      </div>
    </div>
  );
}
