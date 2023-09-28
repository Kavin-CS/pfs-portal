import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import PressureThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Pressure1/pressure-the1.gif';
import PressureThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Pressure1/pressure-the2.png';
import PressureThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Pressure1/pressure-the3.png';
import PressureThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Pressure1/pressure-the4.png';
import PressureThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Pressure1/pressure-the5.png';


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
        To observe and compare the pressure exerted by a solid iron cuboid on
        sand while resting on its three different faces and to calculate the
        pressure exerted in the three cases.&nbsp;
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        <img alt="" src={PressureThe1} />
      </p>

      <p>
        To study and compare the pressure exerted by a solid iron cuboid on
        sand, we need to find its mass and weight.
      </p>

      <h2 className={classes.secondaryTag}>Can you define the Mass of an object?</h2>

      <p>
        The mass of an object is a fundamental property of the object; a
        numerical measure of its inertia; a fundamental measure of the amount of
        matter in the object. The usual symbol for mass is 'm' and its SI unit
        is kilogram.
      </p>

      <p>
        In everyday usage, mass is often referred to as&nbsp;weight, the units
        of which are often taken to be kilograms.&nbsp;In scientific use, weight
        is the gravitational force acting on a given body, while mass is an
        intrinsic property of this body.
      </p>

      <p>
        On the surface of the Earth, the weight&nbsp;W&nbsp;of an object is
        related to its mass&nbsp;m&nbsp;by&nbsp;W = m.
      </p>

      <h2 className={classes.secondaryTag}>Having defined Mass, what about the Weight of an object?</h2>

      <p>
        In science, the weight of an object is the force on the object due to
        gravity. Its magnitude (a scalar quantity), often denoted by W, is the
        product of the mass m of the object and the magnitude of the local
        gravitational acceleration g. Thus, W = mg. Since the weight is a force,
        its SI unit is Newton.
        <br />
        <br />
        Simply stated, weight is the force acting vertically downward. The
        weight of an object is the force with which it is attracted towards the
        earth, that is:
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»F«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»x«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»g«/mi»«/math»"
          class="Wirisformula"
          src={PressureThe2}
          title="Double click to edit"
        />
      </p>

      <p>
        For an object in free fall, when gravity is the only force acting on it,
        the expression for weight follows Newton's Second Law.
      </p>

      <p>W = F, thus:</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»W«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»x«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»g«/mi»«/math»"
          class="Wirisformula"
          src={PressureThe3}
          title="Double click to edit"
        />
      </p>

      <p>
        Here&nbsp;‘g’ is the&nbsp;Earth's gravitational field strength, equal to
        about&nbsp;9.81&nbsp;m s<sup>−2</sup>.
      </p>

      <p>
        An object's weight depends on its environment, while its mass does
        not.&nbsp;The SI unit of weight is the same as that of force, that is,
        Newton (N).The force acting on an object perpendicular to the surface is
        called thrust. The effect of thrust depends on the area on which it
        acts. Thus:
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Thrust«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»F«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»x«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»g«/mi»«/math»"
          class="Wirisformula"
          src={PressureThe4}
          title="Double click to edit"
        />
      </p>

      <p>The thrust on unit area is called pressure. Thus:</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Pressure«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»T«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»t«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»a«/mi»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={PressureThe5}
          title="Double click to edit"
        />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <p>
        SI unit of pressure is N/m<sup>2</sup> or Nm<sup>-2 </sup>(
        <em>Newton per square metre</em>).
      </p>

      <p>
        In honour of scientist<strong>Blaise Pascal</strong>, the SI unit of
        pressure is called <em>pascal</em>, denoted by <strong>Pa</strong>.
      </p>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ol start="1" type="1">
        <li>
          The depression in sand is greater when the solid iron cuboid is placed
          on its least surface area.
        </li>
        <li>
          The pressure exerted by the smallest surface area is greater than the
          other surfaces with larger areas.
        </li>
        <li>
          Thus, the students understood the theories of force, area pressure,
          depression and their dependence on each other.&nbsp;
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Pressure Exerted by a Solid Iron Cuboid
          on Sand. Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=71&cnt=1
        </Typography>
      </div>
    </div>
  );
}
