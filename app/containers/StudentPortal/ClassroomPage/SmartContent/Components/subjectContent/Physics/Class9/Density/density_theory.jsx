import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import DensityThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-the1.png';
import DensityThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-the2.png';
import DensityThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-the3.png';
import DensityThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-the4.png';
import DensityThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-the5.png';
import DensityThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-the6.png';

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
        To determine the density of a solid (which is denser than water) by
        using a spring balance and a measuring cylinder.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        All matter has mass and volume. Mass and volume are the &nbsp;physical
        properties of matter and may vary with different objects The amount of
        matter contained in an object is called mass.&nbsp;Its measure is
        usually given in grams (g) or kilograms (kg).&nbsp;Volume is the amount
        of space occupied by an object.&nbsp;The units for volume including
        liters (l), meters cubed (m3), and gallons (gal).
      </p>

      <p>
        Consider two different substances such as iron and cotton of same mass.
        It is observed that Iron will occupy less volume as compared to cotton.
        This is due to their differences in density. Density of Iron is more
        than that of cotton.&nbsp;
      </p>

      <p>
        <img
          alt=""
          src={DensityThe1}
        />
      </p>

      <p>&nbsp;</p>

      <p>
        &nbsp;The mass of a unit volume of a substance is called its density.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Density«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»M«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»s«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»V«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/mfrac»«/math»"
          src={DensityThe2}
        />
        &nbsp;
      </p>

      <p>If D is the density of a body of mass M and volume V, then</p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»D«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mi mathvariant=¨normal¨»M«/mi»«mi mathvariant=¨normal¨»V«/mi»«/mfrac»«/math»"
          src={DensityThe3}
        />
      </p>

      <p>In S.I units density is expressed in kg m -3.</p>

      <p>For example,&nbsp; density of water is 1000 kg m-3.</p>

      <p>Density of iron is 8500 kg m-3.&nbsp;</p>

      <p>
        Most of the substances expand on heating and contract on cooling, but
        the mass remaining constant for all cases. The density of most of the
        substances decreases with the increase in temperature and increases with
        decrease in temperature. But water contracts when cooled up to 40C but
        expands when cooled further below&nbsp;40C . Thus the density of water
        is maximum at 40C.
      </p>

      <p>
        <strong>Relative density</strong> of a substance is defined as the ratio
        between the density of the substance to the density of water at
        <em> 40C</em>. Relative density is also known as{' '}
        <strong>specific gravity</strong>. The relative density of a substance
        is a pure number without any unit. It tells how many times a substance
        is heavier than water.
      </p>

      <p>
        Relative density (R.D) of a substance can be calculated by dividing
        density of a substance with the density of water.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Relative«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»density«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»a«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»subs«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»ce«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»y«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»y«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»w«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»r«/mi»«/mrow»«/mfrac»«/math»"
          src={DensityThe4}
        />
        &nbsp;&nbsp;&nbsp;
      </p>

      <p>For example,</p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Relative«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»density«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»iron«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»y«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»I«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»y«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»W«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»r«/mi»«/mrow»«/mfrac»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mn»8500«/mn»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»k«/mi»«mi mathvariant=¨normal¨»g«/mi»«mo»/«/mo»«msup»«mi mathvariant=¨normal¨»m«/mi»«mn»3«/mn»«/msup»«/mrow»«mrow»«mn»1000«/mn»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»k«/mi»«mi mathvariant=¨normal¨»g«/mi»«mo»/«/mo»«msup»«mi mathvariant=¨normal¨»m«/mi»«mn»3«/mn»«/msup»«/mrow»«/mfrac»«/math»"
          src={DensityThe5}
        />
      </p>

      <p>
        Thus, Relative density of iron is{' '}
        <strong>8.5 (No unit is applied)</strong>.
      </p>

      <p>
        Density of a substance can be calculated by multiplying Relative Density
        (R.D.) of the substance with the <em>Density of water</em>.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Density«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»a«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»subs«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»ce«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»R«/mi»«mo».«/mo»«mi mathvariant=¨normal¨»D«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»the«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»subs«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»ce«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»x«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Density«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»water«/mi»«/math»"
          src={DensityThe6}
        />
      </p>

      <p>
        <strong>Spring Balance</strong>:&nbsp; It is a device used for the
        determination of gravitational mass of a body. It works on the principle
        of <strong>Hooks law</strong> of elasticity which states that <em>w</em>
        hen a body is suspended from a vertical spring, the body produces
        extension in the length of the spring<em> </em>proportional to its
        gravitational mass.&nbsp;
      </p>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ol>
        <li>
          The student will understand the concepts of mass, volume and density
          of an object.
        </li>
        <li>
          The student can calculate density of a solid heavier than water by
          measuring its mass and volume.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Determination of Density of Solid.
          Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=2&cnt=9
        </Typography>
      </div>
    </div>
  );
}
