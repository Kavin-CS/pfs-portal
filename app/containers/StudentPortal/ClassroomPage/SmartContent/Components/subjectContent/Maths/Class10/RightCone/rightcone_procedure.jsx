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

import RightConePro1 from '../../../../../../../../../assets/Images/Subjects/Maths/RightCone1/rightcone-pro1.png';
import RightConePro2 from '../../../../../../../../../assets/Images/Subjects/Maths/RightCone1/rightcone-pro2.png';

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
          <span fontFamily=" arial,helvetica,sans-serif;">
            Chart paper, a pair of scissors, gum, scale.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ol>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Draw a circle with radius equal to the slant height
              <strong>
                {' '}
                <em fontWeight="normal">l</em>
              </strong>
              . [Fig (a)].
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Mark a sector AOB such that arc length A × B equals the given base
              circumference of the cone. [Fig (a)].
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Cut the sector AOB and gently fold, bringing the 2 radii OA and OB
              together.[Fig (b)].
            </span>
          </span>
        </li>
      </ol>

      <p>
        <img
          alt=""
          src={RightConePro1}
          width="185px;"
          height="200px;"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt=""
          src={RightConePro2}
          width="199px;"
          height="200px;"
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        [Fig
        (a)]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        [Fig (b)]
      </p>

      <h2 className={classes.secondaryTag}>As performed in simulator:</h2>

      <ol>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Create a circle by providing radius.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Click on button "Draw Circle" to draw Circle.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Click on the circle to mark sector AOB.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Now, click on sector AOB to take it out from circle.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Now, click on sector AOB to fold and form a right circular cone.
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Observations:</h2>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              When the radii of the sector are joined, a cone is formed.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              The radius(
              <strong>
                <em fontWeight="normal">r</em>
              </strong>
              ) of the circle becomes the slant length(
              <strong>
                <em fontWeight="normal">l</em>
              </strong>
              ) of the cone.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              The arc length(AOB) becomes the circumference({' '}
              <strong>
                <em fontWeight="normal">2πr</em>
              </strong>
              ) of the base of the cone.
            </span>
          </span>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2016). Right circular cone. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=248&cnt=2
        </Typography>
      </div>
    </div>
  );
}
