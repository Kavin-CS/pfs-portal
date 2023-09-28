import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import OhmResistanceThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/OhmResistance1/ohmresistance-the1.png';
import OhmResistanceThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/OhmResistance1/ohmresistance-the2.png';
import OhmResistanceThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/OhmResistance1/ohmresistance-the3.png';
import OhmResistanceThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/OhmResistance1/ohmresistance-the4.jpg';
import OhmResistanceThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/OhmResistance1/ohmresistance-the5.png';
import OhmResistanceThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/OhmResistance1/ohmresistance-the6.png';

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
      <h1 className={classes.headTag}>
        <h>Our Objective</h>
      </h1>

      <p>
        Our objective is to determine the resistance per centimeter of a given
        wire by plotting a graph of potential difference versus electric
        current.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        According to the Ohm's law, "The electric current flowing through a
        conductor is directly proportional to the potential difference across
        its ends provided the physical conditions (temperature, dimensions,
        pressure) of the conductor remains the same."
      </p>

      <p>
        If I is the current flowing through a conductor and V is the potential
        difference across its ends, then according to Ohm's Law,
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»I«/mi»«mo»§nbsp;«/mo»«mtext»§#8733;«/mtext»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»V«/mi»«mo»§nbsp;«/mo»«mo»[«/mo»«mi mathvariant=¨normal¨»or«/mi»«mo»]«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»V«/mi»«mo»§nbsp;«/mo»«mtext»§#8733;«/mtext»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»I«/mi»«/math»"
          class="Wirisformula"
          src={OhmResistanceThe1}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»V«/mi»«mo»=«/mo»«mi mathvariant=¨normal¨»R«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»I«/mi»«/math»"
          class="Wirisformula"
          src={OhmResistanceThe2}
          title="Double click to edit"
        />
      </p>

      <p>
        where, R is the constant of proportionality. It is known as resistance
        of the conductor, or
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mi mathvariant=¨normal¨»V«/mi»«mi mathvariant=¨normal¨»I«/mi»«/mfrac»«mo»=«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»R«/mi»«mo»§nbsp;«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo»(«/mo»«mn»1«/mn»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={OhmResistanceThe3}
          title="Double click to edit"
        />
      </p>

      <p>
        R depends upon the material, temperature and dimensions of the
        conductor.
      </p>

      <p>
        In S.I. units, the potential difference 'V' is measured in volt and the
        current 'I' in ampere, the resistance 'R' is measured in ohm.
        <img alt="" src={OhmResistanceThe4} />
      </p>

      <p>
        To establish the current-voltage relationship, it is to be shown that
        the ratio V / I remains constant for a given resistance and therefore a
        graph between the potential difference(V) and the current (I) must be a
        straight line.
      </p>

      <p>
        The value of unknown resistance can be calculated using the equation ,
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»R«/mi»«mo»=«/mo»«mfrac»«mi mathvariant=¨normal¨»V«/mi»«mi mathvariant=¨normal¨»I«/mi»«/mfrac»«/math»"
          class="Wirisformula"
          src={OhmResistanceThe5}
          title="Double click to edit"
        />
      </p>

      <p>Here R is a constant.</p>

      <p>To find the length of the resistance wire, l. Then</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mi mathvariant=¨normal¨»R«/mi»«mi mathvariant=¨normal¨»l«/mi»«/mfrac»«mo»§nbsp;«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo»(«/mo»«mn»2«/mn»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={OhmResistanceThe6}
          title="Double click to edit"
        />
        &nbsp;
      </p>

      <p>This gives the resistance per unit cm.</p>

      

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>Students learn Ohm’s law.</li>
        <li>
          Students know the relation between voltage, current and
          resistance.&nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Ohm's Law. Retrieved 25 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=4&sim=99&cnt=1
        </Typography>
      </div>
    </div>
  );
}
