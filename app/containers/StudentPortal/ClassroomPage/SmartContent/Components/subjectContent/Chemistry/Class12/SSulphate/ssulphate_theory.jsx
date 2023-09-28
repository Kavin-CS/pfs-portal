import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import SSulphateThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SSulphate1/ssulphate-the1.png';
import SSulphateThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SSulphate1/ssulphate-the2.png';
import SSulphateThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SSulphate1/ssulphate-the3.png';
import SSulphateThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SSulphate1/ssulphate-the4.jpg';
import SSulphateThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SSulphate1/ssulphate-the5.png';
import SSulphateThe6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SSulphate1/ssulphate-the6.jpg';


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
        Our objective is to study the reaction rate of the reaction between
        potassium iodate (KIO<sub>3</sub>) and sodium sulphite (Na<sub>2</sub>SO
        <sub>3</sub>) using starch solution as indicator.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        The rate of a chemical reaction may depend on the concentration of one
        or more reactants or it may be independent of the concentration of a
        given reactant. The rate dependance on the reactant concentration is
        expressed in an equation called the Rate Law.
      </p>

      <p>
        For a general reaction of the type,&nbsp;{' '}
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»xA«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»yB«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»C«/mi»«/math»"
          class="Wirisformula"
          src={SSulphateThe1}
          title="Double click to edit"
        />
        , the rate law can be written as,&nbsp;
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Rate«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«msup»«mfenced close=¨]¨ open=¨[¨»«mi mathvariant=¨normal¨»A«/mi»«/mfenced»«mi mathvariant=¨normal¨»x«/mi»«/msup»«msup»«mfenced close=¨]¨ open=¨[¨»«mi mathvariant=¨normal¨»B«/mi»«/mfenced»«mi mathvariant=¨normal¨»y«/mi»«/msup»«/math»"
          class="Wirisformula"
          src={SSulphateThe2}
          title="Double click to edit"
        />
      </p>

      <p>
        Where, K is the rate constant, [A] and [B] are the concentration of the
        reactants, x and y are the exponents that define how the rate depends on
        the concentration of individual reactants. The exponents x and y are
        also referred to as the order of the reaction with respect to a
        particular reactant. The reaction order for each reactant in the rate
        law determines how the rate changes as the concentration of the reactant
        changes. If the order of a reactant is zero, the rate is independent of
        its concentration.
      </p>

      <h2 className={classes.secondaryTag}>Reaction between Potassium Iodate and Sodium Sulphite</h2>

      <p>
        The effect of concentration of the reactant on the rate of a chemical
        reaction can be studied by analysing the reaction between potassium
        iodate and sodium sulphite. In acidic medium, potassium iodate is
        reduced to iodide by sodium sulphite. The reaction takes place through
        the following steps.
      </p>

      <p>
        <strong>Step I :</strong> Sulphite ions react with potassium iodate
        producing iodide ions.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msup»«msub»«mi mathvariant=¨normal¨»IO«/mi»«mn»3«/mn»«/msub»«mo»-«/mo»«/msup»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msup»«msub»«mi mathvariant=¨normal¨»SO«/mi»«mn»3«/mn»«/msub»«mrow»«mn»2«/mn»«mo»-«/mo»«/mrow»«/msup»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«msup»«mi mathvariant=¨normal¨»I«/mi»«mo»-«/mo»«/msup»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msup»«msub»«mi mathvariant=¨normal¨»SO«/mi»«mn»4«/mn»«/msub»«mrow»«mn»2«/mn»«mo»-«/mo»«/mrow»«/msup»«mo»§nbsp;«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo»(«/mo»«mi mathvariant=¨normal¨»Slow«/mi»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={SSulphateThe3}
          title="Double click to edit"
        />
      </p>

      <p>
        <strong>Step II:</strong> Iodide ions formed are oxidized to iodine by
        reaction with more iodate ions.
      </p>

      <p>
        <img
          alt=""
          src={SSulphateThe4}
          
        />
      </p>

      <p>
        <strong>Step III:</strong> Iodine formed in Step II reacts immediately
        with sulphite ions forming iodide ions.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»I«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msup»«msub»«mi mathvariant=¨normal¨»SO«/mi»«mn»3«/mn»«/msub»«mrow»«mn»2«/mn»«mo»-«/mo»«/mrow»«/msup»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«msup»«msub»«mi mathvariant=¨normal¨»SO«/mi»«mn»4«/mn»«/msub»«mrow»«mn»2«/mn»«mo»-«/mo»«/mrow»«/msup»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msup»«mi mathvariant=¨normal¨»I«/mi»«mo»-«/mo»«/msup»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msup»«mi mathvariant=¨normal¨»H«/mi»«mo»+«/mo»«/msup»«mo»§nbsp;«/mo»«mo».«/mo»«mo».«/mo»«mo».«/mo»«mo»(«/mo»«mi mathvariant=¨normal¨»Very«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»fast«/mi»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={SSulphateThe5}
          title="Double click to edit"
        />
      </p>

      <p>
        When sulphite ions are completely consumed, the liberated iodine would
        react with starch solution, to give a blue colour. So this reaction can
        be monitored by adding a known but limited volume of sodium sulphite
        solution and starch solution. This is an example of Iodine Clock
        Reaction, as the rate of reaction is estimated by the time taken for the
        appearance of blue colour. The faster the reaction, the shorter the time
        required for the blue colour to appear. Adding dilute solution of
        potassium iodate, decreases the concentration that decreases the rate of
        reaction. Conversely increasing the concentration of the reactant
        increases the rate of reaction.
      </p>

      <p>
        The following graphs show that the rate of the reaction is directly
        depends on the concentration of potassium iodate.
      </p>

      <p>
        <img
          alt=""
          src={SSulphateThe6}
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the terms, rate law, iodine clock reaction etc.
        </li>
        <li>
          Strudents understand the chemistry behind the reaction between
          potassium iodate and sodium sulphite.
        </li>
        <li>
          Students acquire the skill to perform the experiment in the reals lab,
          once they understand the different steps.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Kinetics Study on the Reaction between
          Potassium iodate and Sodium Sulphite. Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=143&cnt=1
        </Typography>
      </div>
    </div>
  );
}
