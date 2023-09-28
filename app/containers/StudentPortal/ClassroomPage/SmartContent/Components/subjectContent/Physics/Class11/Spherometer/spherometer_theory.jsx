import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import SpherometerThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-the1.jpg';
import SpherometerThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-the2.png';
import SpherometerThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-the3.png';
import SpherometerThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-the4.jpg';
import SpherometerThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-the5.png';
import SpherometerThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-the6.jpg';
import SpherometerThe7 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-the7.png';
import SpherometerThe8 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-the8.png';
import SpherometerThe9 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-the9.png';
import SpherometerThe10 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-the10.png';
import SpherometerThe11 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-the11.png';
import SpherometerThe12 from '../../../../../../../../../assets/Images/Subjects/Physics/Spherometer1/spherometer-the12.png';

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

      <p>Our objectives are;</p>

      <ul>
        <li>
          To determine the thickness of a glass plate using a spherometer.
        </li>
        <li>
          &nbsp;To determine the radius of curvature of a given spherical
          surface using a spherometer.
        </li>
      </ul>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        A spherometer works on the principle of the micrometer screw. It is used
        to measure either very small thickness of flat materials like glass or
        the radius of curvature of a spherical surface thus getting its name.
      </p>

      <p>
        <img alt="" src={SpherometerThe1} />
      </p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>Parts of a Spherometer</h2>

      <p>
        A spherometer consists of a metallic tripod framework supported
        on&nbsp;three fixed legs of equal lengths. A screw passes through the
        centre of the tripod&nbsp;frame, parallel to the three legs.
        A&nbsp;largeP)circular disc graduated with 100 equal parts is attached
        to the top of the screw. A small vertical scale known as the Pitch scale
        (P) with the scale reading divided into millimeters is fixed at one end
        of the tripod frame.
      </p>

      <h2 className={classes.secondaryTag}>Thickness of a Glass Strip</h2>

      <p>The thickness of a glass strip&nbsp; can be represented by;</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»t«/mi»«mo»=«/mo»«mo»(«/mo»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mo»§#215;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»P«/mi»«mo»)«/mo»«mo»+«/mo»«mo»(«/mo»«mi mathvariant=¨normal¨»x«/mi»«mo»§nbsp;«/mo»«mo»§#215;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»L«/mi»«mo».«/mo»«mi mathvariant=¨normal¨»C«/mi»«mo»)«/mo»«mo»§nbsp;«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo»(«/mo»«mn»1«/mn»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={SpherometerThe2}
          title="Double click to edit"
        />
      </p>

      <p>
        Where, 'n' is the number of complete rotation made by the circular
        disc.&nbsp;
      </p>

      <p>
        'P' is the pitch, which is the distance moved by the middle screw per
        revolution.
      </p>

      <p>
        'x' is the number of additional circular scale divisions in excess of
        complete rotations.
      </p>

      <p>'L.C' is the least count of spherometer.</p>

      <h2 className={classes.secondaryTag}>Least Count of the Spherometer</h2>

      <p>
        The pitch of the screw needs to be measured first.&nbsp; Find the value
        of 1 division on the pitch scale. Then bring the zero of the circular
        scale opposite to the pitch scale and rotate the screw by 'n' complete
        rotations. Note the distance 'd' moved by the screw on the pitch scale.
        The pitch of the screw is given by;
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»p«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»n«/mi»«/mfrac»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»mm«/mi»«/math»"
          class="Wirisformula"
          src={SpherometerThe3}
          title="Double click to edit"
        />
      </p>

      <p>
        If there are N divisions in the circular scale on the circumference of
        the disc then;
      </p>

      <p>
        <img alt="" src={SpherometerThe4} />
      </p>

      <h2 className={classes.secondaryTag}>Measuring the Radius of Curvature of the Concave Surface</h2>

      <p>
        Let the figure represent the vertical section of the sphere of which the
        given surface forms a part, the vertical section passes through one of
        the outer legs 'A', the central screw 'G' and the centre of the sphere
        'O'.The third leg 'C' is not visible.
      </p>

      <p>
        Let{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»GH«/mi»«mo»=«/mo»«mi mathvariant=¨normal¨»h«/mi»«/math»"
          class="Wirisformula"
          src={SpherometerThe5}
          title="Double click to edit"
        />
        , the height of central screw above the plane ABC, which is measured by
        the spherometer (h is called Sagitta.)
      </p>

      <p>
        <img alt="" src={SpherometerThe6} />
      </p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>

      <p>
        Let&nbsp;{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»AH«/mi»«mo»=«/mo»«mi mathvariant=¨normal¨»a«/mi»«/math»"
          class="Wirisformula"
          src={SpherometerThe7}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»GH«/mi»«mo»§nbsp;«/mo»«mo»(«/mo»«mi mathvariant=¨normal¨»AH«/mi»«msup»«mo»)«/mo»«mn»2«/mn»«/msup»«mo»=«/mo»«mi mathvariant=¨normal¨»GH«/mi»«mo»§nbsp;«/mo»«mo»§#215;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»HE«/mi»«/math»"
          class="Wirisformula"
          src={SpherometerThe8}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mtable columnalign=¨left¨ rowspacing=¨0¨»«mtr»«mtd»«mi mathvariant=¨normal¨»or«/mi»«mo»§nbsp;«/mo»«msup»«mi mathvariant=¨normal¨»a«/mi»«mn»2«/mn»«/msup»«mo»=«/mo»«mi mathvariant=¨normal¨»h«/mi»«mfenced»«mrow»«mn»2«/mn»«mi mathvariant=¨normal¨»R«/mi»«mo»-«/mo»«mi mathvariant=¨normal¨»h«/mi»«/mrow»«/mfenced»«/mtd»«/mtr»«mtr»«mtd»«mi mathvariant=¨normal¨»or«/mi»«mo»§nbsp;«/mo»«mn»2«/mn»«mi mathvariant=¨normal¨»R«/mi»«mo»-«/mo»«mi mathvariant=¨normal¨»h«/mi»«mo»=«/mo»«mfrac»«msup»«mi mathvariant=¨normal¨»a«/mi»«mn»2«/mn»«/msup»«mi mathvariant=¨normal¨»h«/mi»«/mfrac»«/mtd»«/mtr»«mtr»«mtd»«mi mathvariant=¨normal¨»or«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»R«/mi»«mo»=«/mo»«mfrac»«msup»«mi mathvariant=¨normal¨»a«/mi»«mn»2«/mn»«/msup»«mrow»«mn»2«/mn»«mi mathvariant=¨normal¨»h«/mi»«/mrow»«/mfrac»«mo»+«/mo»«mfrac»«mi mathvariant=¨normal¨»h«/mi»«mn»2«/mn»«/mfrac»«/mtd»«/mtr»«/mtable»«/math»"
          class="Wirisformula"
          src={SpherometerThe9}
          title="Double click to edit"
        />
      </p>

      <p>
        But{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»a«/mi»«mo»=«/mo»«mfrac»«mi mathvariant=¨normal¨»l«/mi»«msqrt»«mn»3«/mn»«/msqrt»«/mfrac»«/math»"
          class="Wirisformula"
          src={SpherometerThe10}
          title="Double click to edit"
        />
      </p>

      <p>where 'l' is the distance between&nbsp; any of the two legs.</p>

      <p>
        Therefore,&nbsp;{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»R«/mi»«mo»=«/mo»«mfrac»«msup»«mi mathvariant=¨normal¨»l«/mi»«mn»2«/mn»«/msup»«mrow»«mn»6«/mn»«mi mathvariant=¨normal¨»h«/mi»«/mrow»«/mfrac»«mo»+«/mo»«mfrac»«mi mathvariant=¨normal¨»h«/mi»«mn»2«/mn»«/mfrac»«mo»§nbsp;«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo»(«/mo»«mn»2«/mn»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={SpherometerThe11}
          title="Double click to edit"
        />
      </p>

      <p>
        Since,{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msup»«mi mathvariant=¨normal¨»a«/mi»«mn»2«/mn»«/msup»«mo»=«/mo»«mfrac»«msup»«mi mathvariant=¨normal¨»l«/mi»«mn»2«/mn»«/msup»«mn»3«/mn»«/mfrac»«/math»"
          class="Wirisformula"
          src={SpherometerThe12}
          title="Double click to edit"
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>Students know the working of a spherometer.</li>
        <li>Students know the least count of spherometer.</li>
        <li>
          They know the equations for thickness of glass plate and radius of
          curvature of the concave surface.&nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Spherometer. Retrieved 23 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=168&cnt=1
        </Typography>
      </div>
    </div>
  );
}
