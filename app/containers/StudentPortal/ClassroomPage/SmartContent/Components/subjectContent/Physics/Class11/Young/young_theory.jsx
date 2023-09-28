import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import YoungThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Young1/young-the1.jpg';
import YoungThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Young1/young-the2.png';
import YoungThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Young1/young-the3.png';
import YoungThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Young1/young-the4.png';
import YoungThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Young1/young-the5.png';
import YoungThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/Young1/young-the6.png';

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
      <h1 className={classes.headTag}>Our Objective</h1>

      <p>
        Our aim is to determine the Young’s modulus of elasticity of the
        material of a given wire using Searle’s apparatus.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>Before we move ahead, do you know what a Searle’s apparatus is?</h2>

      <p>
        Searle’s apparatus consists of two metal frames F1 and F2. Each frame
        has a torsion head at the upper side and a hook at the lower side. These
        frames are suspended from two wires AB and CD of same material, length
        and cross-section. The upper ends of the wires are screwed tightly in
        two torsion heads fixed in the same rigid support. A spirit level rests
        horizontally with &nbsp;one end hinged in the frame F2. The other end of
        the spirit level rests on the tip of a spherometer screw, fitted in the
        frame F1. The spherometer screw can be rotated up and down along a
        vertical pitch scale marked in millimeters. The two frames are kept
        together by cross bars E1 and E2.&nbsp;
      </p>

      <p>
        <img
          align="middle"
          alt=""
          src={YoungThe1}
        />
      </p>

      <h2 className={classes.secondaryTag}>
        Do you know Searle’s apparatus works on the principle of Hooke’s
        law?&nbsp;
      </h2>

      <p>
        Hooke’s law can be expressed in terms of stress and strain. Stress is
        the force on a unit area within a material that develops as a result of
        the externally applied force. Strain is the relative deformation
        produced by stress.&nbsp;
      </p>

      <h2 className={classes.secondaryTag}>Define Hooke’s Law</h2>

      <p>
        Hooke’s Law states that within the limit of elasticity, stress applied
        is directly proportional to strain produced. That is, the extension
        produced in a wire is directly proportional to the load attached to
        it.&nbsp;
      </p>

      <p>&nbsp;</p>

      <p>
        If a wire of length<strong> L</strong> and radius <strong>r</strong> be
        loaded by a weight <strong>Mg</strong> and if{' '}
        <strong>
          <em fontWeight='normal'>l</em>
        </strong>{' '}
        is the extension produced,
      </p>

      <p>
        Then, normal stress =
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mrow»«mi»M«/mi»«mi»g«/mi»«/mrow»«mrow»«mi»§#960;«/mi»«msup»«mi»r«/mi»«mn»2«/mn»«/msup»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={YoungThe2}
          title="Double click to edit"
        />
        ---------------(1)
      </p>

      <p>
        And Longitudinal strain=
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mi»l«/mi»«mi»L«/mi»«/mfrac»«/math»"
          class="Wirisformula"
          src={YoungThe3}
          title="Double click to edit"
        />
        -----------------(2)
      </p>

      <h2 className={classes.secondaryTag}>Hence, Young’s modulus</h2>

      <p>
        <strong>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; Y
        </strong>
        =
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mrow»«mi»N«/mi»«mi»o«/mi»«mi»r«/mi»«mi»m«/mi»«mi»a«/mi»«mi»l«/mi»«mo»§nbsp;«/mo»«mi»S«/mi»«mi»t«/mi»«mi»r«/mi»«mi»e«/mi»«mi»s«/mi»«mi»s«/mi»«/mrow»«mrow»«mi»L«/mi»«mi»o«/mi»«mi»n«/mi»«mi»g«/mi»«mi»i«/mi»«mi»t«/mi»«mi»u«/mi»«mi»d«/mi»«mi»i«/mi»«mi»n«/mi»«mi»a«/mi»«mi»l«/mi»«mo»§nbsp;«/mo»«mi»s«/mi»«mi»t«/mi»«mi»r«/mi»«mi»a«/mi»«mi»i«/mi»«mi»n«/mi»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={YoungThe4}
          title="Double click to edit"
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi»Y«/mi»«mo»=«/mo»«mfrac»«mrow»«mi»M«/mi»«mi»g«/mi»«mo»/«/mo»«mi»§#960;«/mi»«msup»«mi»r«/mi»«mn»2«/mn»«/msup»«/mrow»«mrow»«mi»l«/mi»«mo»/«/mo»«mi»L«/mi»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={YoungThe5}
          title="Double click to edit"
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi»Y«/mi»«mo»=«/mo»«mfrac»«mrow»«mi»M«/mi»«mi»g«/mi»«mi»L«/mi»«/mrow»«mrow»«mi»§#960;«/mi»«msup»«mi»r«/mi»«mn»2«/mn»«/msup»«mi»l«/mi»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={YoungThe6}
          title="Double click to edit"
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; Where, &nbsp;&nbsp;
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;L – Length of the
        wire
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;l- Extension for
        a load M<br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;r- Radius of the
        wire
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; g- Acceleration due to
        gravity
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; M- Mass added in the
        hanger
      </p>

      <h2 className={classes.secondaryTag}>
        Now, let’s learn how to determine Young’s modulus using Searle’s
        apparatus .
      </h2>

      

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Young's Modulus. Retrieved 24 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=155&cnt=1
        </Typography>
      </div>
    </div>
  );
}
