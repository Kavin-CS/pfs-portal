import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import HPeroxideThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/HPeroxide1/hperoxide-the1.png';
import HPeroxideThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/HPeroxide1/hperoxide-the2.png';
import HPeroxideThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/HPeroxide1/hperoxide-the3.png';
import HPeroxideThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/HPeroxide1/hperoxide-the4.png';
import HPeroxideThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/HPeroxide1/hperoxide-the5.png';
import HPeroxideThe6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/HPeroxide1/hperoxide-the6.png';
import HPeroxideThe7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/HPeroxide1/hperoxide-the7.png';
import HPeroxideThe8 from '../../../../../../../../../assets/Images/Subjects/Chemistry/HPeroxide1/hperoxide-the8.png';

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
        Our objective is to study the reaction rate of the reaction of iodide
        ions with hydrogen peroxide at different concentrations of iodide ions.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What is Chemical Kinetics?</h2>

      <p>
        The branch of chemistry that deals with the&nbsp;study of reaction rates
        and their mechanisms is called chemical kinetics. Kinetic studies also
        helps to describe the conditions by which the reaction rate can be
        altered. Factors such as temperature, concentration, pressure and
        catalyst affect the rate of a chemical reaction.
      </p>

      <p>
        Some reactions, such as ionic reactions, occur very quickly. For
        example, precipitation of silver chloride occurs very quickly when
        aqueous solutions of silver nitrate and sodium chloride are mixed. On
        the other hand, some reactions occur very slowly, such as the rusting of
        iron in the presence of air and moisture.
      </p>

      <h2 className={classes.secondaryTag}>What does the change in the concentration of a reactant mean?</h2>

      <p>
        The speed of a reaction or the rate of a reaction is defined as the
        change in concentration of a reactant or product in unit time. It can be
        expressed as, the rate of decrease in concentration of any one of the
        reactants or the rate of increase in concentration of anyone of the
        products.
      </p>

      <p>Consider the reaction,</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»R«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»P«/mi»«/math»"
          class="Wirisformula"
          src={HPeroxideThe1}
          title="Double click to edit"
        />
      </p>

      <p>
        Assuming that the volume of the system remains constant, one mole of the
        reactant produces one mole of the product. If [R<sub>1</sub>] and [P
        <sub>1</sub>] are the concentrations of R and P respectively at time t
        <sub>1</sub> and [R<sub>2</sub>] and [P<sub>2</sub>] are the
        concentrations of R and P respectively at time t<sub>2</sub>, then,
      </p>

      <p>
        &nbsp;
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mtable columnalign=¨left¨ rowspacing=¨0¨»«mtr»«mtd»«mi mathvariant=¨normal¨»The«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»decrease«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»in«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»the«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»concentration«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»the«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»reac«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»,«/mo»«mo»§nbsp;«/mo»«mo»§#9651;«/mo»«mi mathvariant=¨normal¨»R«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»R«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»-«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»R«/mi»«mn»1«/mn»«/msub»«/mtd»«/mtr»«mtr»«mtd»«mi mathvariant=¨normal¨»The«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»increase«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»in«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»the«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»concentration«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»the«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»product«/mi»«mo»,«/mo»«mo»§nbsp;«/mo»«mo»§#9651;«/mo»«mi mathvariant=¨normal¨»P«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»P«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»-«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»P«/mi»«mn»1«/mn»«/msub»«/mtd»«/mtr»«mtr»«mtd»«mi mathvariant=¨normal¨»Time«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»taken«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»for«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»the«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»reaction«/mi»«mo»,«/mo»«mo»§nbsp;«/mo»«mo»§#9651;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»t«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»-«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»t«/mi»«mn»1«/mn»«/msub»«/mtd»«/mtr»«/mtable»«/math»"
          class="Wirisformula"
          src={HPeroxideThe2}
          title="Double click to edit"
        />
      </p>

      <p>
        &nbsp;
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Rate«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»disappearance«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»R«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»R«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»T«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»k«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«/mrow»«/mfrac»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mo»-«/mo»«mfrac»«mrow»«mo»§#9651;«/mo»«mi mathvariant=¨normal¨»R«/mi»«/mrow»«mrow»«mo»§#9651;«/mo»«mi mathvariant=¨normal¨»t«/mi»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={HPeroxideThe3}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Rate«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»appearance«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»P«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»I«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»P«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»T«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»k«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«/mrow»«/mfrac»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mo»+«/mo»«mfrac»«mrow»«mo»§#9651;«/mo»«mi mathvariant=¨normal¨»P«/mi»«/mrow»«mrow»«mo»§#9651;«/mo»«mi mathvariant=¨normal¨»t«/mi»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={HPeroxideThe4}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Therefore«/mi»«mo»,«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»the«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»rate«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»the«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»reaction«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mo»-«/mo»«mfrac»«mrow»«mo»§#9651;«/mo»«mi mathvariant=¨normal¨»R«/mi»«/mrow»«mrow»«mo»§#9651;«/mo»«mi mathvariant=¨normal¨»t«/mi»«/mrow»«/mfrac»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mo»+«/mo»«mfrac»«mrow»«mo»§#9651;«/mo»«mi mathvariant=¨normal¨»P«/mi»«/mrow»«mrow»«mo»§#9651;«/mo»«mi mathvariant=¨normal¨»t«/mi»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={HPeroxideThe5}
          title="Double click to edit"
        />
      </p>

      <h2 className={classes.secondaryTag}>
        Dependence of the reactant concentration on the rate of the chemical
        reaction
      </h2>

      <p>
        Let us understand the dependence of the reactant concentration on the
        rate of chemical reaction by studying the reaction between iodide ions
        and sodium thiosulphate in the presence of hydrogen peroxide.
      </p>

      <p>
        Hydrogen peroxide is an oxidising agent that oxidises iodide ions to
        iodine in acidic medium.
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»O«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msup»«mi mathvariant=¨normal¨»I«/mi»«mo»-«/mo»«/msup»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msup»«mi mathvariant=¨normal¨»H«/mi»«mo»+«/mo»«/msup»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»I«/mi»«mn»2«/mn»«/msub»«/math»"
          class="Wirisformula"
          src={HPeroxideThe6}
          title="Double click to edit"
        />
      </p>

      <p>
        The reaction is monitored by adding a known volume of sodium
        thiosulphate solution and starch solution to the reaction mixture. The
        liberated iodine reacts with sodium thiosulphate and reduces to iodide
        ions.
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»I«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msub»«mi mathvariant=¨normal¨»S«/mi»«mn»2«/mn»«/msub»«msup»«msub»«mi mathvariant=¨normal¨»O«/mi»«mn»3«/mn»«/msub»«mrow»«mn»2«/mn»«mo»-«/mo»«/mrow»«/msup»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»S«/mi»«mn»4«/mn»«/msub»«msup»«msub»«mi mathvariant=¨normal¨»O«/mi»«mn»6«/mn»«/msub»«mrow»«mn»2«/mn»«mo»-«/mo»«/mrow»«/msup»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msup»«mi mathvariant=¨normal¨»I«/mi»«mo»-«/mo»«/msup»«/math»"
          class="Wirisformula"
          src={HPeroxideThe7}
          title="Double click to edit"
        />
      </p>

      <p>
        When thiosulphate ions are completely consumed, the liberated iodine
        reacts with starch solution and gives a blue colour.
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»I«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Starch«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Blue«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Complex«/mi»«/math»"
          class="Wirisformula"
          src={HPeroxideThe8}
          title="Double click to edit"
        />
      </p>

      <p>
        The time elapsed before the appearance of blue colour, gives an idea
        about the rate of the reaction.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the terms chemical kinetics and rate of reaction.
        </li>
        <li>
          Students understand the effect of concentration of the reactant on the
          rate of a chemical reaction.
        </li>
        <li>
          Once students understand the concept of the experiment and the
          different steps involved, they can perform the experiment in the real
          lab more accurately and quickly.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Kinetics Study on the Reaction between
          Iodide Ions and Hydrogen Peroxide. Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=117&cnt=1
        </Typography>
      </div>
    </div>
  );
}
