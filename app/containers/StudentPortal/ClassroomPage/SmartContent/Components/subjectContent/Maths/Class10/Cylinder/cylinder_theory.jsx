import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import CylinderThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/Cylinder1/cylinder-the1.jpg';
import CylinderThe2 from '../../../../../../../../../assets/Images/Subjects/Maths/Cylinder1/cylinder-the2.jpg';


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

      <ol>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              To determine the area of a given cylinder.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              To obtain the formula for the lateral surface area of a right
              circular cylinder in terms of the radius(r) of its base and height
              (h).
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Theory:</span>
      </h2>

      <h3 className={classes.secondaryTag}>
        <strong>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">Right circular cylinder:</span>
          </span>
        </strong>
      </h3>

      <p>
        <span fontSize="14px;">
          <span fontSize="14px;">
            <strong>Definition</strong>:
            <span fontFamily="arial,helvetica,sans-serif;"> </span>
          </span>
          <span fontFamily="arial,helvetica,sans-serif;">
            A right circular cylinder is a three-dimensional object with two
            congruent circles as parallel bases and a lateral surface consisting
            of a rectangle.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            <strong>Base and side:</strong> The bases of right circular cylinder
            are always congruent and parallel to each other. If you were to
            'unroll' the cylinder you would find the side is actually a
            rectangle when flattened out.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            <strong>Height:</strong> The height <strong>h</strong> is the
            perpendicular distance between the bases.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            <strong>Radius:</strong> The radius <strong>r</strong> of a cylinder
            is the radius of a base.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            <img
              alt=""
              src={CylinderThe1}
              width="290px;" height="287px;"
            />
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          Surface area of a cylinder :
        </span>
      </h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            To find the surface area of a cylinder add curved (lateral) surface
            area and area of both bases.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            <strong>Area of both bases</strong> - Each base is a circle so the
            area of each base is <strong>πr²</strong>, where <strong>r</strong>{' '}
            is the radius of the base. There are two bases so their combined
            surface area is <strong>2 X πr²</strong>.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            <strong>Curved Surface Area</strong> - As mentioned above the
            surface area of the cylinder opens to form a rectangular region.
            Breadth of this rectangle in height of the cylinder i.e{' '}
            <strong>h</strong> and Length of the rectangle is circumference of
            the base of the cylinder i.e. <strong>2πr</strong>. Hence area of
            curved surface area - <strong>2πr X h</strong>
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            Total surface area of cylinder = curved surface area (c) + 2 (area
            of base circle)
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = 2.π.r.h + 2.π.r²
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = 2.π.r (h + r)
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            src={CylinderThe2}
            width="426px;" height="157px;"
          />
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Surface area of a cylinder. Retrieved 7
          April 2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=161&cnt=1
        </Typography>
      </div>
    </div>
  );
}
