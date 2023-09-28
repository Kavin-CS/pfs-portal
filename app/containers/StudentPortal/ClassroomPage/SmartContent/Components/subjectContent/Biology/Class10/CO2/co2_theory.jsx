import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import CO2The1 from '../../../../../../../../../assets/Images/Subjects/Biology/CO21/co2-the1.png';
import CO2The2 from '../../../../../../../../../assets/Images/Subjects/Biology/CO21/co2-the2.png';
import CO2The3 from '../../../../../../../../../assets/Images/Subjects/Biology/CO21/co2-the3.png';
import CO2The4 from '../../../../../../../../../assets/Images/Subjects/Biology/CO21/co2-the4.png';
import CO2The5 from '../../../../../../../../../assets/Images/Subjects/Biology/CO21/co2-the5.png';
import CO2The6 from '../../../../../../../../../assets/Images/Subjects/Biology/CO21/co2-the6.png';

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
        Our objective is to show experimentally that carbon dioxide is given out
        during respiration.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        Respiration is a biochemical process during which simple carbohydrates,
        like glucose, are broken down to release energy. Every cell of a living
        organism- man, animal and plant, respires.
      </p>

      <p>
        Respiration in plants can be studied in moist germinating seeds that
        release carbon dioxide (CO<sub>2</sub>) during respiration. The seeds
        are kept in an air tight conical flask. A small test tube containing
        potassium hydroxide (KOH) solution is placed in the flask. Potassium
        hydroxide absorbs carbon dioxide released by the seeds and a partial
        vacuum is created in the flask as a result. This causes the water level
        in the delivery tube to rise.
      </p>

      <p>
        Respiration in humans can be studied with lime water. Carbon dioxide
        reacts with lime water on respiration to form calcium carbonate (CaCO
        <sub>3</sub>) that turns lime water milky. Freshly prepared lime water
        is taken in a boiling tube and a cork with two glass tubes is inserted
        into the cork. The tip of one of the glass tube dips in the lime water
        and air is blown with full force through this glass tube. The bubbles of
        the air breathed out gradually turn lime water milky, showing that
        carbon dioxide is produced in human respiration.
      </p>

      <h2 className={classes.secondaryTag}>Respiration</h2>

      <p>
        Respiration is the process during which organic food, mainly glucose
        that is present in the cell,&nbsp; breaks down into simpler substances
        and liberates carbon dioxide and energy. The energy released during
        respiration is chemical energy. There are two types of respiration-
        aerobic and anaerobic respiration.
      </p>

      <h3 className={classes.secondaryTag}>Aerobic Respiration</h3>

      <p>
        Aerobic means ‘with air’. This type of respiration requires oxygen, so
        it is called aerobic respiration. During aerobic respiration, complete
        oxidation of carbohydrates takes place. Glucose is broken down by oxygen
        to release energy, while carbon dioxide and water are the by-products of
        the reaction. The released energy is used to make a special energy
        molecule called Adenosine triphosphate (ATP). ATP is where the energy is
        stored for later use by the body. Aerobic respiration occurs in plants
        as well as animals and takes place in the mitochondria.
      </p>

      <p>The word equation for aerobic respiration is:</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Glu«/mi»«mi mathvariant=¨normal¨»cos«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Oxygen«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Carbon«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»dioxide«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Water«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Energy«/mi»«/math»"
          class="Wirisformula"
          src={CO2The1}
          title="Double click to edit"
        />
      </p>

      <p>The chemical equation is:</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»C«/mi»«mn»6«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»12«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»O«/mi»«mn»6«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»6«/mn»«msub»«mi mathvariant=¨normal¨»O«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mn»6«/mn»«msub»«mi mathvariant=¨normal¨»CO«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»6«/mn»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»38«/mn»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»ATP«/mi»«mo»§nbsp;«/mo»«mo»(«/mo»«mi mathvariant=¨normal¨»energy«/mi»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={CO2The2}
          title="Double click to edit"
        />
      </p>

      <h3 className={classes.secondaryTag}>Anaerobic Respiration</h3>

      <p>
        Anaerobic means without air. Sometimes there is not enough oxygen around
        for animals and plants to respire, but they still need energy to
        survive, so they carry out respiration in the absence of oxygen to
        produce the energy they require. As the respiration takes place in the
        absence of oxygen, incomplete oxidation of food occurs and much less
        energy is released. However, carbon dioxide is still produced. This is
        called anaerobic respiration and the process occurs in the cytoplasm.
      </p>

      <p>The word equation for anaerobic respiration in plants is:</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Glu«/mi»«mi mathvariant=¨normal¨»cos«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Ethanol«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Carbon«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»dioxide«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Energy«/mi»«/math»"
          class="Wirisformula"
          src={CO2The3}
          title="Double click to edit"
        />
      </p>

      <p>The chemical equation is:</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»C«/mi»«mn»6«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»12«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»O«/mi»«mn»6«/mn»«/msub»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msub»«mi mathvariant=¨normal¨»C«/mi»«mn»2«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»5«/mn»«/msub»«mi mathvariant=¨normal¨»OH«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msub»«mi mathvariant=¨normal¨»CO«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»ATP«/mi»«mo»§nbsp;«/mo»«mo»(«/mo»«mi mathvariant=¨normal¨»energy«/mi»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={CO2The4}
          title="Double click to edit"
        />
      </p>

      <p>The word equation for anaerobic respiration in animals is:</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Glu«/mi»«mi mathvariant=¨normal¨»cos«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Lactic«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»acid«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Energy«/mi»«/math»"
          class="Wirisformula"
          src={CO2The5}
          title="Double click to edit"
        />
      </p>

      <p>The chemical equation is:</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»C«/mi»«mn»6«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»12«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»O«/mi»«mn»6«/mn»«/msub»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msub»«mi mathvariant=¨normal¨»C«/mi»«mn»3«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»6«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»O«/mi»«mn»3«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»ATP«/mi»«mo»§nbsp;«/mo»«mo»(«/mo»«mi mathvariant=¨normal¨»energy«/mi»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={CO2The6}
          title="Double click to edit"
        />
      </p>

      <h2 className={classes.secondaryTag}>Factors Effecting Respiration</h2>

      <p>
        Here are some of the few factors that affect the rate of respiration.
      </p>

      <ul>
        <li>
          <strong>Temperature</strong>- At a very high temperature, the rate of
          respiration decreases with time and at very low temperature, the
          respiration rate is insignificant. Optimum temperature for respiration
          is 20 - 30<sup>o</sup>C.
        </li>
        <li>
          <strong>Carbon dioxide concentration</strong> - Increase in CO
          <sub>2</sub> concentration and absence of O<sub>2</sub> adversely
          affects the rate of aerobic respiration.
        </li>
        <li>
          <strong>Light-&nbsp;</strong> Light controls respiration by raising
          the temperature of an organism.
        </li>
        <li>
          <strong>Water- </strong>The respiratory rate increases with the
          increase in water content of the respiring organism.
        </li>
      </ul>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol>
        <li>
          Students understand the terms respiration, aerobic and anaerobic
          respiration and ATP.
        </li>
        <li>Students understand the two types of respiration.</li>
        <li>
          Students understand the factors affecting the rate of respiration.
        </li>
        <li>
          Students do the experiment better in the real lab having gone through
          the{' '}
          <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=16&amp;sim=136&amp;cnt=249">
            animation
          </a>{' '}
          and{' '}
          <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=16&amp;sim=136&amp;cnt=4">
            simulation
          </a>
          .
        </li>
      </ol>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Role of Carbon Dioxide during
          Respiration. Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=136&cnt=1
        </Typography>
      </div>
    </div>
  );
}
