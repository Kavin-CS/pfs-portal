import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import PHThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PH1/ph-the1.png';
import PHThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PH1/ph-the2.png';
import PHThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PH1/ph-the3.jpg';
import PHThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PH1/ph-the4.jpg';
import PHThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PH1/ph-the5.png';
import PHThe6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PH1/ph-the6.png';
import PHThe7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PH1/ph-the7.jpg';
import PHThe8 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PH1/ph-the8.jpg';
import PHThe9 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PH1/ph-the9.jpg';
import PHThe10 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PH1/ph-the10.jpg';

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

      <p>Our objective is to determine the pH of the given sample using;</p>

      <ul>
        <li>pH paper&nbsp;</li>
        <li>Universal indicator</li>
      </ul>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        There are millions of chemical substances in the world, some are acids,
        others are bases and some are neutral. &nbsp;
      </p>

      <h2 className={classes.secondaryTag}>Acids and Bases</h2>

      <p>
        Acids are&nbsp; substances that produce free hydrogen ions (H
        <sup>+</sup> ions) when dissolved in water. &nbsp; Bases are substances
        that produce hydroxyl ions (OH<sup>-</sup> ions) when dissolved in
        water. Acidic solutions are rich in hydrogen ions and basic solutions
        are poor in hydrogen ions.
      </p>

      <p>
        Some acids dissociate only partly, releasing very small amounts of H
        <sup>+</sup> ions, and are called weak acids. Others dissociate
        completely, releasing large amounts of H<sup>+</sup> ions, and are
        called strong acids. In the same way, bases that dissociate partly are
        called weak bases and those that dissociate completely are called strong
        bases.
      </p>

      <h2 className={classes.secondaryTag}>pH of a Solution</h2>

      <p>
        The acidic or basic property of substances is measured in terms of pH.
        It is a measurement of the hydrogen ion concentration. pH is defined as
        the negative logarithm (base 10) of hydrogen ion concentration.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»pH«/mi»«mo»=«/mo»«mo»-«/mo»«mi mathvariant=¨normal¨»log«/mi»«mo»[«/mo»«msup»«mi mathvariant=¨normal¨»H«/mi»«mo»+«/mo»«/msup»«mo»]«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»OR«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»pH«/mi»«mo»=«/mo»«mi mathvariant=¨normal¨»log«/mi»«mfrac»«mn»1«/mn»«mfenced close=¨]¨ open=¨[¨»«msup»«mi mathvariant=¨normal¨»H«/mi»«mo»+«/mo»«/msup»«/mfenced»«/mfrac»«/math»"
          class="Wirisformula"
          src={PHThe1}
          title="Double click to edit"
        />
      </p>

      <p>
        If the hydrogen ion concentration is very high, the pH value is very
        low. This is determined using a scale ranging from 0-14 called the pH
        scale. It was introduced by a Danish chemist Soren Peder Lauritz
        Sorensen.
      </p>

      <p>
        Substances with pH lower than 7 are acidic, those with pH equal to 7 are
        neutral and those with pH greater than 7 are basic in nature.
      </p>

      <p>The pH of pure water is 7. i.e.,</p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfenced close=¨§nbsp;¨ open=¨[¨»«mrow»«msup»«mi mathvariant=¨normal¨»H«/mi»«mo»+«/mo»«/msup»«mo»]«/mo»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»[«/mo»«msup»«mi mathvariant=¨normal¨»OH«/mi»«mo»-«/mo»«/msup»«mo»]«/mo»«mo»§nbsp;«/mo»«mo»§#8773;«/mo»«mo»§nbsp;«/mo»«mn»10«/mn»«mo»§nbsp;«/mo»«mo»-«/mo»«mo»§nbsp;«/mo»«mn»7«/mn»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»at«/mi»«mo»§nbsp;«/mo»«msup»«mn»25«/mn»«mi mathvariant=¨normal¨»o«/mi»«/msup»«mi mathvariant=¨normal¨»C«/mi»«mo».«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»So«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»pH«/mi»«mo»§nbsp;«/mo»«mo»§#8773;«/mo»«mo»§nbsp;«/mo»«mn»7«/mn»«/mrow»«/mfenced»«/math»"
          class="Wirisformula"
          src={PHThe2}
          title="Double click to edit"
        />
      </p>

      <p>
        <strong>
          <img alt="" src={PHThe3} />
        </strong>
        <strong>
          <img alt="" src={PHThe4} />
        </strong>
      </p>

      <p>
        <strong>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        </strong>
      </p>

      <h2 className={classes.secondaryTag}>&nbsp;</h2>

      <h2 className={classes.secondaryTag}>pOH of a Solution</h2>

      <p>
        pOH is used to measure the concentration of hydroxyl ions (OH
        <sup>-</sup> ions) or the alkalinity of a solution. pOH is defined as
        the negative logarithm (base 10) of hydroxyl ion concentration.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»pOH«/mi»«mo»=«/mo»«mo»-«/mo»«mi mathvariant=¨normal¨»log«/mi»«mo»[«/mo»«msup»«mi mathvariant=¨normal¨»OH«/mi»«mo»-«/mo»«/msup»«mo»]«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»OR«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»pOH«/mi»«mo»=«/mo»«mi mathvariant=¨normal¨»log«/mi»«mfrac»«mn»1«/mn»«mfenced close=¨]¨ open=¨[¨»«mrow»«mi mathvariant=¨normal¨»O«/mi»«msup»«mi mathvariant=¨normal¨»H«/mi»«mo»-«/mo»«/msup»«/mrow»«/mfenced»«/mfrac»«/math»"
          class="Wirisformula"
          src={PHThe5}
          title="Double click to edit"
        />
      </p>

      <p>pOH is derived from pH and are related by the equation,</p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»pH«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»pOH«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mn»14«/mn»«mo»§nbsp;«/mo»«mo»(«/mo»«mi mathvariant=¨normal¨»at«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»room«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»temperature«/mi»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={PHThe6}
          title="Double click to edit"
        />
      </p>

      <h2 className={classes.secondaryTag}>Measurement of pH</h2>

      <p>
        pH of a solution is measured using pH indicators. pH indicators are
        substances that changes colour when in contact with acidic, basic or
        neutral solutions.
      </p>

      <p>Let us discuss some pH measurement methods.</p>

      <h3 className={classes.secondaryTag}>pH paper</h3>

      <p>
        pH paper is a strip of special paper that is prepared by dipping the
        strip in different chemical compounds and then drying it. It can be used
        to find the approximate pH of any solution. These paper changes colour
        when immersed in acidic or basic solutions. To determine the pH, the pH
        paper is dipped in a given sample solution and the colour developed in
        the paper is compared with the colour chart and the approximate pH of
        the solution can be identified. It is commerically available as test
        papers.
      </p>

      <p>
        <img alt="" src={PHThe7} />
      </p>

      <h3 className={classes.secondaryTag}>Universal Indicator</h3>

      <p>
        Universal indicator is a pH indicator composed of different chemical
        compounds.&nbsp; When the indicator is poured in the sample solution,
        the mixture obtained exhibits a smooth colour change over a pH value
        ranging from 1-14 that indicates the acidic or basic property of the
        solution. It is commercially available as test solutions.&nbsp;
      </p>

      <p>
        <img alt="" src={PHThe8} />
      </p>

      <h3 className={classes.secondaryTag}>pH Meter</h3>

      <p>
        pH meter is an electronic instrument consisting of a special bulb that
        is sensitive to hydrogen ions that are present in the test solution. The
        signal produced by the bulb is amplified and sent to an electronic meter
        connected to the bulb, which measures and display the pH reading. It
        gives more precise values than the pH papers.
      </p>

      <p>
        For very precise measurement, the pH meter should be calibrated before
        each measurement. The calibration should be performed with at least two
        buffer solutions with known pH. For general purposes, buffer solutions
        with pH 4 and pH 10 are used. For more precise measurements, three
        buffer solution calibrations are preferred.
      </p>

      <p>
        After each single measurement, the bulb is rinsed with distilled water
        or deionised water to remove any traces of solution being measured. Then
        the bulb is blotted with a blotting paper to remove remaining water that
        could dilute the sample and alter the reading. When not in use, the bulb
        must be kept wet at all times to avoid dehydration of the pH sensing
        membrane.&nbsp;
      </p>

      <p>
        <img alt="" src={PHThe9} />
      </p>

      <h3 className={classes.secondaryTag}>Red Cabbage Juice</h3>

      <p>
        This is a blue-violet coloured liquid. When it comes in contact with
        acidic substances, it becomes red. When it comes in contact with basic
        substances, it becomes green or even yellow.
      </p>

      <p>
        <img alt="" src={PHThe10} />
      </p>

      <h2 className={classes.secondaryTag}>Applications of pH</h2>

      <ul>
        <li>
          It helps to determine the acidic and basic strength of acids and
          bases.
        </li>
        <li>
          The pH of sea water plays an important role in understanding the
          oceans carbon cycle.
        </li>
      </ul>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the terms like pH, pOH, acidic, basic &amp;
          neutral solutions and univeral indicator.
        </li>
        <li>
          Students acquire the skill to measure the pH of the solution using pH
          paper or universal indicator solution.
        </li>
        <li>
          Students acquired the skill to classify the samples as acidic, basic
          or neutral based on the pH value.
        </li>
        <li>
          Students acquire the skill to measure the concentration of H
          <sup>+</sup> and OH<sup>-</sup> ions present in a solution based on
          the pH value of the solution.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Determination of pH. Retrieved 30 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=7&sim=144&cnt=1
        </Typography>
      </div>
    </div>
  );
}
