import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ParallelogramThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Parallelogram1/parallelogram-the1.jpg';
import ParallelogramThe10 from '../../../../../../../../../assets/Images/Subjects/Physics/Parallelogram1/parallelogram-the10.png';
import ParallelogramThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Parallelogram1/parallelogram-the2.png';
import ParallelogramThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Parallelogram1/parallelogram-the3.png';
import ParallelogramThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Parallelogram1/parallelogram-the4.jpg';
import ParallelogramThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/Parallelogram1/parallelogram-the5.png';
import ParallelogramThe7 from '../../../../../../../../../assets/Images/Subjects/Physics/Parallelogram1/parallelogram-the6.png';
import ParallelogramThe8 from '../../../../../../../../../assets/Images/Subjects/Physics/Parallelogram1/parallelogram-the7.png';
import ParallelogramThe9 from '../../../../../../../../../assets/Images/Subjects/Physics/Parallelogram1/parallelogram-the8.png';

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
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Objective</h1>

      <p>
        Our objective is to find the weight of a given body using the
        Parallelogram Law of Vectors.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>What does the Parallelogram Law of Vectors state?</h2>

      <p>
        <img alt="" src={ParallelogramThe1} />
      </p>

      <p>
        If&nbsp; two vectors acting simultaneously on a particle are represented
        in magnitude and direction by the two adjacent sides of a parallelogram
        drawn from a point, then their resultant is completely represented in
        magnitude and direction by the diagonal of that parallelogram drawn from
        that point.
      </p>

      <h2 className={classes.secondaryTag}>Parallelogram Law of Vectors explained</h2>

      <p>
        Let two vectors P and Q act simultaneously on a particle O&nbsp;at an
        angle&nbsp;
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»§#952;«/mi»«/math»"
          class="Wirisformula"
          src={ParallelogramThe10}
          title="Double click to edit"
        />
        . They are represented in magnitude and direction by the adjacent sides
        OA&nbsp;and OB of a parallelogram OACB&nbsp;drawn from a point O.Then
        the diagonal OC passing through O, will represent the resultant R in
        magnitude and direction.
      </p>

      <p>
        On a Gravesand's apparatus, if the body of unknown weight (say S) is
        suspended from the middle hanger and balancing weights P&nbsp;and Q are
        suspended from othe two hangers then,
      </p>

      <p>
        &nbsp;
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mover accent=¨true¨»«mi mathvariant=¨normal¨»R«/mi»«mo»§#8594;«/mo»«/mover»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mover accent=¨true¨»«mi mathvariant=¨normal¨»P«/mi»«mo»§#8594;«/mo»«/mover»«mo»§nbsp;«/mo»«mo»+«/mo»«mover accent=¨true¨»«mi mathvariant=¨normal¨»Q«/mi»«mrow»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«/mrow»«/mover»«/math»"
          class="Wirisformula"
          src={ParallelogramThe3}
          title="Double click to edit"
        />
      </p>

      <p>or</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»R«/mi»«mo»=«/mo»«msqrt»«mrow»«msup»«mi mathvariant=¨normal¨»P«/mi»«mn»2«/mn»«/msup»«mo»§nbsp;«/mo»«mo»+«/mo»«msup»«mi mathvariant=¨normal¨»Q«/mi»«mn»2«/mn»«/msup»«mo»+«/mo»«mn»2«/mn»«mi mathvariant=¨normal¨»P«/mi»«mi mathvariant=¨normal¨»Q«/mi»«mi mathvariant=¨normal¨»cos«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»§#920;«/mi»«/mrow»«/msqrt»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»(«/mo»«mn»1«/mn»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={ParallelogramThe4}
          title="Double click to edit"
        />
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </p>

      <p>The unknown weight can be calculated from the equation (1).</p>

      <p>
        On a Gravesand's apparatus, if the body of unknown weight (say S) is
        suspended from the middle hanger and balancing weights
      </p>

      <p>
        <img alt="" src={ParallelogramThe5} />
      </p>

      <p>&nbsp;</p>

      <p>P and Q are suspended from the other two hangers then,</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mover accent=¨true¨»«mi mathvariant=¨normal¨»P«/mi»«mo»§#8594;«/mo»«/mover»«mo»+«/mo»«mover accent=¨true¨»«mi mathvariant=¨normal¨»Q«/mi»«mo»§#8594;«/mo»«/mover»«mo»+«/mo»«mover accent=¨true¨»«mi mathvariant=¨normal¨»S«/mi»«mo»§#8594;«/mo»«/mover»«mo»=«/mo»«mn»0«/mn»«/math»"
          class="Wirisformula"
          src={ParallelogramThe6}
          title="Double click to edit"
        />
      </p>

      <p>
        Now construct a parallelogram OACB by assuming a scale (say 1cm=50 gwt)
        corresponding to the weights P and Q. The diagonal of the parallelogram
        OC will give the resultant vector. The weight of the unknown body,
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»S«/mi»«mo»=«/mo»«mi mathvariant=¨normal¨»OC«/mi»«mo»§nbsp;«/mo»«mo»§#215;«/mo»«mi mathvariant=¨normal¨»Scale«/mi»«mo»§nbsp;«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»(«/mo»«mn»2«/mn»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={ParallelogramThe7}
          title="Double click to edit"
        />
      </p>

      <p>
        If W is the actual weight of the body, then the percentage error in the
        experiment can be calculated using the equation,
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Percentage«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»error«/mi»«mo»=«/mo»«mfrac»«mfenced»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»w«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mo»-«/mo»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»w«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»t«/mi»«/mrow»«/mfenced»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»w«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»t«/mi»«/mrow»«/mfrac»«mo»§#215;«/mo»«mo»§nbsp;«/mo»«mn»100«/mn»«mo»§nbsp;«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»(«/mo»«mn»3«/mn»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={ParallelogramThe8}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Percentage«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»error«/mi»«mo»=«/mo»«mfrac»«mfenced»«mrow»«mi mathvariant=¨normal¨»W«/mi»«mo»-«/mo»«mi mathvariant=¨normal¨»S«/mi»«/mrow»«/mfenced»«mi mathvariant=¨normal¨»W«/mi»«/mfrac»«mo»§#215;«/mo»«mn»100«/mn»«/math»"
          class="Wirisformula"
          src={ParallelogramThe9}
          title="Double click to edit"
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>Students learn what is parallelogram law of vectors.</li>
        <li>They become familiar with the Gravesands apparatus.</li>
        <li>
          Students are able to find the unknown weight of an object using the
          parallelogram law of vectors.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Parallelogram Law of Vectors.. Retrieved
          23 March 2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=20&cnt=1
        </Typography>
      </div>
    </div>
  );
}
