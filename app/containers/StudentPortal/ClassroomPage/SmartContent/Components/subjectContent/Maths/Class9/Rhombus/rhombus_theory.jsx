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
import RhombusThe1 from '../../../../../../../../../assets/Images/Subjects/Maths/Rhombus1/rhombus-the1.jpg';
import RhombusThe2 from '../../../../../../../../../assets/Images/Subjects/Maths/Rhombus1/rhombus-the2.gif';
import RhombusThe3 from '../../../../../../../../../assets/Images/Subjects/Maths/Rhombus1/rhombus-the3.gif';
import RhombusThe4 from '../../../../../../../../../assets/Images/Subjects/Maths/Rhombus1/rhombus-the4.gif';
import RhombusThe5 from '../../../../../../../../../assets/Images/Subjects/Maths/Rhombus1/rhombus-the5.gif';
import RhombusThe6 from '../../../../../../../../../assets/Images/Subjects/Maths/Rhombus1/rhombus-the6.gif';
import RhombusThe7 from '../../../../../../../../../assets/Images/Subjects/Maths/Rhombus1/rhombus-the7.jpg';
import RhombusThe8 from '../../../../../../../../../assets/Images/Subjects/Maths/Rhombus1/rhombus-the8.gif';
import RhombusThe9 from '../../../../../../../../../assets/Images/Subjects/Maths/Rhombus1/rhombus-the9.gif';
import RhombusThe10 from '../../../../../../../../../assets/Images/Subjects/Maths/Rhombus1/rhombus-the10.gif';


const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color:'#333',
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
      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Objective</span>
      </h2>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            To show that the area of rhombus is half the product of its
            diagonals.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Theory</h3>

      <ol>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              A rhombus is a simple (non-self-intersecting) quadrilateral whose
              all four sides are of same length.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              If a parallelogram has two consecutive sides congruent, it is a
              rhombus.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              If two triangles are congruent then their areas are equal.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Area of a triangle = 1/2 X base X height
            </span>
          </span>
        </li>
        <li>
          <span fontFamily=" arial, helvetica, sans-serif;" fontSize=" 14px;" lineHeight=" 1.6;">
            Area of a rectangle = Length X Breadth
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>
        <span lineHeight=" 1.2;" color=" rgb(51, 51, 51);">Proof</span>
      </h2>

      <h2 className={classes.secondaryTag}>
        <img 
          alt=""
          height="236"
          src={RhombusThe1}
          fontFamily=" arial, helvetica, sans-serif;" color=" rgb(0, 0, 0);" orphans="2;" widows="2;" fontSize=" 13px;" lineHeight=" 1.6;"
          width="250"
        />
      </h2>

      <p>
        <span fontFamily=" arial, helvetica, sans-serif;" fontSize=" 14px;" lineHeight=" 1.6;">
          In above figure EHGF is rhombus with diagonal HF (length d
        </span>
        <sub fontFamily=" arial, helvetica, sans-serif;">1)</sub>
        <span fontFamily=" arial, helvetica, sans-serif;" fontSize=" 14px;" lineHeight=" 1.6;">
          {' '}
          and diagonal EG (length d
        </span>
        <sub fontFamily=" arial, helvetica, sans-serif;">2)</sub>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            Area of rhombus EHGF = Area of triangle EFH + Area of triangle FHG
          </span>
          <br />
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
          <img
            alt="\small = \frac{1}{2} \times EO \times HF + \frac{1}{2} \times HF \times OG"
            src={RhombusThe2}
          />
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;{' '}
          <img
            alt="\small =\frac{1}{2} \times (\frac{d2}{2}) \times d1+\frac{1}{2} \times (\frac{d2}{2}) \times d1"
            src={RhombusThe3}
          />
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
          <img
            alt="\small =\frac{(d1\times d2)}{4}+\frac{(d1\times d2)}{4}"
            src={RhombusThe4}
          />
          <br />
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
          <img
            alt="\small =\frac{2(d1 \times d2))}{4}"
            src={RhombusThe5}
          />
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
          <img
            alt="\small =\frac{d1 \times d2}{2}"
            src={RhombusThe6}
          />
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp; ={' '}
          <span fontSize="14px;">
            half of the product of the diagonals
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Example</span>
      </h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            Find the area of the following rhombus.
          </span>
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            height="148"
            src={RhombusThe7}
            width="250"
          />
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Solution:</span>
      </h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            In the given figure,{' '}
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            PR = d<sub>1</sub>= 24 cm.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            SQ = d<sub>2 </sub>
          </span>
          = 18 cm.
        </span>
      </p>

      <p>
        &nbsp;
        <img
          alt="\small \boldsymbol{A}\left ( PQRS \right ) = \frac{1}{2}\times d1 \times d2"
          src={RhombusThe8}
        />
      </p>

      <p marginLeft=" 40px;">
        <img
          alt="\small = \frac{1}{2}\times 24 \times 18"
          src={RhombusThe9}
          lineHeight=" 1.6;"
        />
      </p>

      <p marginLeft=" 40px;">
        <img
          alt="\small = 216"
          src={RhombusThe10}
        />
      </p>

      <p>
        <span fontFamily=" arial, helvetica, sans-serif;" fontSize=" 14px;" lineHeight=" 1.6;">
          So, the area of the rhombus PQRS is 216 cm
        </span>
        <sup fontFamily=" arial, helvetica, sans-serif;">2</sup>
        <span fontFamily=" arial, helvetica, sans-serif;" fontSize=" 14px;" lineHeight=" 1.6;">
          .
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Area of rhombus. Retrieved 8 April 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=169&cnt=1
        </Typography>
      </div>
    </div>
  );
}
