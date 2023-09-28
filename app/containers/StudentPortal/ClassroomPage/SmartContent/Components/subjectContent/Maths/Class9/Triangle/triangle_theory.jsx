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
import triangleImg1 from '../../../../../../../../../assets/Images/Subjects/Maths/triangles1.png';
import triangleImg2 from '../../../../../../../../../assets/Images/Subjects/Maths/triangles2.png';
import triangleImg3 from '../../../../../../../../../assets/Images/Subjects/Maths/triangles3.png';
import triangleImg4 from '../../../../../../../../../assets/Images/Subjects/Maths/triangles4.png';
import triangleImg5 from '../../../../../../../../../assets/Images/Subjects/Maths/triangles5.png';

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
      <div class="divContent">
        <h2 className={classes.secondaryTag}>Objective:</h2>

        <p>
          <span>
            <span>
              To show that the area of a triangle is half the product of the
              base and the height.
            </span>
          </span>
        </p>

        <h3 className={classes.mainTag}>Theory:</h3>

        <p>
          <span>
            <span>
              <span>Triangle:</span> A triangle is one of the basic shapes in
              geometry: a polygon with three corners or vertices and three sides
              or edges which are line segments.
            </span>
          </span>
        </p>

        <p>
          <span>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img alt="" src={triangleImg1} />
          </span>
        </p>

        <h3 className={classes.mainTag}>Types of triangles:</h3>

        <p>
          <span>
            <img alt="" className={classes.mainImg} src={triangleImg2} />
          </span>
        </p>

        <p>
          <strong>
            <span>
              <span>Right angled triangle:</span>
            </span>
          </strong>
        </p>

        <p>
          <span>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img alt="" src={triangleImg3} />
          </span>
        </p>

        <p>
          <span>
            <span>
              A right angled triangle has one of its interior angles measuring
              90°. The side opposite to the right angle is the hypotenuse; it is
              the longest side of the triangle. For&nbsp; a right angled
              triangle with sides a, b, c where c is the hypotenuse, a
              <sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>.
            </span>
          </span>
        </p>

        <p>&nbsp;</p>

        <p>
          <strong>
            <span>
              <span>Acute angled triangle:</span>
            </span>
          </strong>
        </p>

        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
          <img alt="" src={triangleImg4} />
        </p>

        <p>
          <span>
            <span>
              A triangle that has all interior angles measuring less than 90° is
              an acute triangle or acute-angled triangle. For&nbsp; an
              acute-angled triangle with sides a, b, c where&nbsp; c is the
              greatest side,&nbsp;&nbsp;{' '}
              <span class="nowrap">
                <i>a</i>
                <sup>2</sup>
                <span class="Apple-converted-space">&nbsp;</span>+
                <span class="Apple-converted-space">&nbsp;</span>
                <i>b</i>
                <sup>2</sup>
                <span class="Apple-converted-space">&nbsp;</span>&gt;
                <span class="Apple-converted-space">&nbsp;</span>
                <i>c</i>
                <sup>2</sup>
              </span>
              .
            </span>
          </span>
        </p>

        <p>&nbsp;</p>

        <p>
          <strong>
            <span>
              <span>Obtuse angled triangle:</span>
            </span>
          </strong>
        </p>

        <p>
          <span>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img alt="" src={triangleImg5} />
          </span>
        </p>

        <p>
          <span>
            <span>
              A triangle that has one interior angle that measures more than 90°
              is an obtuse triangle or obtuse-angled triangle. For&nbsp; an
              obtuse-angled triangle with sides a, b, c where&nbsp; c is the
              greatest side,{' '}
              <span class="nowrap">
                <i>a</i>
                <sup>2</sup>
                <span class="Apple-converted-space">&nbsp;</span>+
                <span class="Apple-converted-space">&nbsp;</span>
                <i>b</i>
                <sup>2</sup>
                <span class="Apple-converted-space">&nbsp;</span>&lt;
                <span class="Apple-converted-space">&nbsp;</span>
                <i>c</i>
                <sup>2</sup>
              </span>
              .
            </span>
          </span>
        </p>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Area of triangle. Retrieved 4 March 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=179&cnt=1
        </Typography>
      </div>
    </div>
  );
}
