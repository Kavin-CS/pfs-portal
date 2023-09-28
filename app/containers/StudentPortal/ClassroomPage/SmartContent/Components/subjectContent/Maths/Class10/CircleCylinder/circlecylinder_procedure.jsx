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

import CircleCylinderPro1 from '../../../../../../../../../assets/Images/Subjects/Maths/CircleCylinder1/circlecylinder-pro1.jpg';
import CircleCylinderPro2 from '../../../../../../../../../assets/Images/Subjects/Maths/CircleCylinder1/circlecylinder-pro2.jpg';

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
      <h2 className={classes.secondaryTag}>As performed in real lab:</h2>

      <h3 className={classes.secondaryTag}>Materials required:</h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            &nbsp;Thermocol, plastic clay.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Make a cylinder of any dimensions using plastic clay. Let its
              height be <strong>h</strong> and radius of base circle{' '}
              <strong>r</strong>.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Cut the cylinder into 8 sectorial sections as shown in figure.
              [Fig a]
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Place the segments alternately as shown in figure. [Fig b]
            </span>
          </span>
        </li>
      </ul>

      <p>
        &nbsp;
        <img
          alt=""
          src={CircleCylinderPro1}
          width="200px;" height="198px;"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt=""
          src={CircleCylinderPro2}
          width="300px;" height="250px;"
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Figure
        (a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Figure (b)
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>As performed in simulator:</h2>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Create right circular cylinder by providing radius for the base
              and height of the cylinder.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Click on button "Draw Cylinder" to draw cylinder.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Click on the cylinder to mark eight sectorial parts on it.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Click on each sectorial part to color them differently.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Click on the cylinder to cut apart the eight sectorial parts.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Click on each sectorial part sequentially from left. This will
              join all sectorial parts to form a cuboid.
            </span>
          </span>
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Observations:</h2>

      <ul>
        <li>
          The segments approximately form a solid cuboid of height ‘h’, breadth
          'r' and length 'П r'.
        </li>
        <li>
          The volume of cuboid = length x breadth x height = l x b x h. =&nbsp;
          Пr X r X h = Пr<sup>2</sup>h
        </li>
        <li>
          Hence, Volume of the cylinder =&nbsp; Пr<sup>2</sup>h
        </li>
      </ul>

      <p
        lang="en-US"
        marginLeft="1.91cm;" textIndent="-0.32cm;" marginBottom="0.35cm"
      >
        
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Volume of right circular cylinder.
          Retrieved 7 April 2021, from
          cdac.olabs.edu.in/?sub=80&brch=20&sim=163&cnt=2
        </Typography>
      </div>
    </div>
  );
}
