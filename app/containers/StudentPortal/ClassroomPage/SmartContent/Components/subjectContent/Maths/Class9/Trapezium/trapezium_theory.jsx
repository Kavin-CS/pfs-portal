import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
// import OhmsLaw from '../../../../../../assets/Images/Subjects/Physics/ohm-content.jpg';
import TrapeziumThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/Trapezium1/trapezium-the1.png';
import TrapeziumThe2 from '../../../../../../../../../assets/Images/Subjects/Maths/Trapezium1/trapezium-the2.png';
import TrapeziumThe3 from '../../../../../../../../../assets/Images/Subjects/Maths/Trapezium1/trapezium-the3.png';

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
  mainImg: {
    width: 800,
    height: 335,
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
            To show that the area of a trapezium is equal to half the product of
            its altitude and sum of its parallel sides.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Theory</h3>

      <ol>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Trapezium is a quadrilateral with one pair of opposite sides
              parallel.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              A quadrilateral is a parallelogram if a pair of its opposite sides
              are parallel and equal to each other.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              The parallel sides are called "bases" of the trapezium and the
              other two sides are called the "legs" of trapezium.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              Area of parallelogram = base(b) X height(h)
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Proof:</h2>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            Consider trapezium ABCD. AB and DC are the bases (parallel sides)
            and h is the height of trapezium ABCD.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            height="197"
            src={TrapeziumThe1}
            width="308"
          />
        </span>
      </p>

      <p>&nbsp;</p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            A parallelogram can be formed by creating a copy of trapezium ABCD
            and placing it inverted touching side BC as shown in figure below:
          </span>
        </span>
      </p>

      <p>&nbsp;</p>

      <p marginTop="0.05cm;" marginBottom="0.05cm;" lineHeight="100%;">
        <br />
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            src={TrapeziumThe2}
            width="500px;" height="238px;"
          />
        </span>
      </p>

      <p marginTop="0.05cm;" marginBottom="0.05cm;" lineHeight="100%;">
        <br />
        &nbsp;
      </p>

      <p marginTop="0.05cm;" marginBottom="0.05cm;" lineHeight="100%;">
        &nbsp;
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            We observe that parallelogram ASPD is formed by combining two
            trapeziums ABCD and BSPC.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            ∴ Area of trapezium ABCD&nbsp;&nbsp;&nbsp;&nbsp; = 1/2 X Area of
            parallelogram ASPD
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = ½ X DP X h<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = 1/2 X (DC+CP) X h<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            =1/2 X (b1 + b2) X h<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = ½ X (AB + DC) X h
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            Thus, area of a trapezium is equal to half the product of its
            altitude and sum of its parallel sides.
          </span>
        </span>
      </p>

      <p marginTop="0.05cm;" marginBottom="0.05cm;" lineHeight="100%;">
        &nbsp;
      </p>

      <h3 className={classes.secondaryTag}>Example:-</h3>

      <p marginTop="0.05cm;" marginBottom="0.05cm;" lineHeight="100%;">
        &nbsp;
      </p>

      <p marginTop="0.05cm;" marginBottom="0.05cm;" lineHeight="100%;">
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            Find the area of the following trapezium.
          </span>
        </span>
      </p>

      <p marginTop="0.05cm;" marginBottom="0.05cm;" lineHeight="100%;">
        &nbsp;
      </p>

      <p marginTop="0.05cm;" marginBottom="0.05cm;" lineHeight="100%;">
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;">
            <font color="#000000">
              <font fontSize=" 13pt">
                <img
                  alt=""
                  src={TrapeziumThe3}
                  width="300px;" height="323px;"
                />
              </font>
            </font>
          </span>
        </span>
      </p>

      <p marginTop="0.05cm;" marginBottom="0.05cm;" lineHeight="100%;">
        &nbsp;
      </p>

      <p marginTop="0.05cm;" marginBottom="0.05cm;" lineHeight="100%;">
        &nbsp;
      </p>

      <p marginTop="0.05cm;" marginBottom="0.05cm;" lineHeight="100%;">
        &nbsp;
      </p>

      <p marginTop="0.05cm;" marginBottom="0.05cm;" lineHeight="100%;">
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize=" 14px;" />
          <span fontSize=" 14px;"> </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Solution:-</span>
      </h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">Given,</span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          b1= 5 cm
          <br />
          b2= 11 cm
          <br />
          h= 8 cm
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          Area of trapezium = 1/2(b1+b2) X h
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;&nbsp; &nbsp; =1/2(11+5) X 8
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;&nbsp; &nbsp;{' '}
        </span>
        =64 cm2
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Area of trapezium. Retrieved 8 April 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=183&cnt=1
        </Typography>
      </div>
    </div>
  );
}
