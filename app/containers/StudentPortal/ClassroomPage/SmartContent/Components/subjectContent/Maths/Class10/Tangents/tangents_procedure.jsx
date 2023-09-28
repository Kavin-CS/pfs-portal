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

import TangentsPro1 from '../../../../../../../../../assets/Images/Subjects/Maths/Tangents1/tangents-pro1.jpg';
import TangentsPro2 from '../../../../../../../../../assets/Images/Subjects/Maths/Tangents1/tangents-pro2.jpg';

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
      <h2 className={classes.secondaryTag}>
        <strong lineHeight="1.2;" fontSize="13px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="16px;">As performed in real lab:</span>
          </span>
        </strong>
      </h2>

      <h3 className={classes.secondaryTag}>
        <strong lineHeight="1.6;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="16px;">Materials Required:</span>
          </span>
        </strong>
      </h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="16px;">
            colored paper, pair of scissors, ruler, sketch pen, compass, pencil.
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>Procedure:</h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            1.Draw a circle of any radius on a coloured paper and cut it. Let O
            be its centre.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            2.Paste the cutout on a rectangular sheet of paper.[Fig 10(a)]
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">3.Take any point P outside the circle.</span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            4.From P fold the paper in such a way that it just touches the
            circle to get a tangent
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            5.PA (A is the point of contact). [Fig 10(b)]. Join PA.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            6.Repeat step 4 to get another tangent PB to the circle (B is the
            point of contact).
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">7.[Fig 10(c)]. Join PB.</span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            8.Join the centre of the circle O to P, A and B. [Fig 10(d &amp; e)]
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            9.Fold the paper along OP. [Fig 10(f)] What do you observe?
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="16px;">
            <strong>&nbsp;Workflow:</strong>
          </span>
        </span>
      </h2>

      <p marginLeft="40px;">
        <strong>
          <img
            alt=""
            src={TangentsPro1}
            width="500px;"
            height="500px;"
          />
        </strong>
      </p>

      <p>
        <strong>
          <img
            alt=""
            src={TangentsPro2}
            marginLeft="20px;"
            marginRight="20px;"
            width="500px;"
            height="500px;"
          />
        </strong>
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>
        <strong>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="16px;">As performed in the simulator:</span>
          </span>
        </strong>
      </h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">1.First draw a circle with centre O.</span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">2.Take any point P outside the circle.</span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">3.Click on point P to draw two tangents.</span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            4.Click on point O to draw two perpendicular points
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            5.Click on triangle AOP to draw its&nbsp; image.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            6.Drag the&nbsp; image of triangle AOP over triangle BOP.
          </span>
        </span>
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="16px;">
            <strong>Obsevation:</strong>
          </span>
        </span>
      </h2>

      <h3 className={classes.secondaryTag}>
        <strong>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="16px;">&nbsp;Students will observe that:</span>
          </span>
        </strong>
      </h3>

      <ul>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              &nbsp;OPA and OPB completely cover each other.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              &nbsp;Length of tangent PA = Length of tangent PB.
            </span>
          </span>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Tangents drawn from an external point.
          Retrieved 7 April 2021, from
          cdac.olabs.edu.in/?sub=80&brch=20&sim=171&cnt=2
        </Typography>
      </div>
    </div>
  );
}
