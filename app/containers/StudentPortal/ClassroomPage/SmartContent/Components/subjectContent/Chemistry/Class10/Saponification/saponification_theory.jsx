import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import SaponificationThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Saponification1/saponification-the1.png';
import SaponificationThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Saponification1/saponification-the2.png';
import SaponificationThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Saponification1/saponification-the3.png';
import SaponificationThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Saponification1/saponification-the4.png';
import SaponificationThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Saponification1/saponification-the5.png';
import SaponificationThe6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Saponification1/saponification-the6.png';
import SaponificationThe7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Saponification1/saponification-the7.png';
import SaponificationThe8 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Saponification1/saponification-the8.png';
import SaponificationThe9 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Saponification1/saponification-the9.png';
import SaponificationThe10 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Saponification1/saponification-the10.png';

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
  theoryImg: {
    width: 840,
    height: 410,
  },
  theoryImg1: {
    width: 510,
    height: 220,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Our Objective</h1>

      <p>To study the saponification reaction for preparation of soap.</p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        Soaps and detergents are essential to personal and public health. They
        safely remove germs, soils and other contaminants and help us to stay
        healthy and make our surroundings more pleasant.&nbsp;&nbsp; Soaps are
        made from fats and oils or their fatty acids.
      </p>

      <h2 className={classes.secondaryTag}>
        <img alt="" src={SaponificationThe1} />
      </h2>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>What are fatty acids?</h2>

      <p>
        Fatty acids are merely carboxylic acids consisting of a long hydrocarbon
        chain at one end and a carboxyl group (-COOH) at the other end. They are
        generally represented as RCOOH. They are an important component of
        plants, animals and other microorganisms. They are found in various
        parts of the body, such as cell membranes, the nervous system and as
        lung surfactant.
        <br />
        There are two groups of fatty acids: saturated fatty acids and
        unsaturated fatty acids.
      </p>

      <p>
        <strong>Saturated fatty acids:</strong>Fatty acids contain carbon-carbon
        single bonds called saturated fatty acids.
        <br />
        Examples: stearic acid (C<sub>17</sub>H<sub>35</sub>COOH) &amp; palmitic
        acid (C<sub>15</sub>H<sub>31</sub>COOH)
      </p>

      <p>
        <img alt="" src={SaponificationThe2} />
      </p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>

      <p>
        <strong>Unsaturated fatty acids:</strong>Unsaturated fatty acids contain
        one or more double bonds between carbon atoms.
        <br />
        Example: Oleic acid (C<sub>17</sub>H<sub>33</sub>COOH)
      </p>

      <p>
        <img alt="" src={SaponificationThe3} />
      </p>

      <p>
        If the fatty acid has a single carbon-carbon double bond in the
        molecule, it is known as a mono-unsaturated fatty acid. Oleic acid is a{' '}
        <strong>mono-unsaturated fatty acid.</strong>
      </p>

      <p>
        If a fatty acid has two or more carbon-carbon double bonds in the
        molecule, it is known as <strong>poly-unsaturated fatty acid. </strong>
      </p>

      <p>
        Linoleic acid (CH<sub>3</sub>(CH<sub>2</sub>)4CH=CHCH<sub>2</sub>
        CH=CH(CH<sub>2</sub>)7COOH)&nbsp; is a poly-unsaturated fatty acid. It
        contains two double bonds.
      </p>

      <p>
        Long chain fatty acids always exist as triglycerides and are found in
        fats and oils. Triglycerides are esters of fatty acids and are formed by
        combining fatty acids with glycerol.
      </p>

      <p>
        <img alt="" src={SaponificationThe4} />
      </p>

      <p>&nbsp;</p>

      <p>
        Glycerol has three alcohol functional groups (-OH group) and fatty acids
        have the carboxyl group (-COOH group).&nbsp; Since glycerol has three
        –OH groups, three fatty acids must react with one glycerol molecule to
        make three ester functional groups and form triesters of glycerol or
        triglyceride. During this process three molecules of water are
        eliminated. The three fatty acids may or may not be identical.
      </p>

      <p>
        <img alt="" src={SaponificationThe5} />
      </p>

      <p>
        <img alt="" src={SaponificationThe6} />
        &nbsp;
      </p>

      <p>
        The long chain fatty acids can be of either plant origin (linseed oil,
        castor oil, soya bean, coconut oil) or animal origin (tallow from cattle
        and sheep). In general, fats/oils from plant origin are high in
        unsaturated and low in saturated fatty acids. Fats/oils from animal
        source are high in saturated and low in unsaturated fatty acids.
      </p>

      <h2 className={classes.secondaryTag}>SOAP</h2>

      <p>
        Soaps are sodium or potassium salts of long chain fatty acids. When
        triglycerides in fat/oil react with aqueous NaOH or KOH, they are
        converted into soap and glycerol. This is called alkaline hydrolysis of
        esters. Since this reaction leads to the formation of soap, it is called
        the <strong>Saponification </strong>process.
      </p>

      <p>
        <img alt="" src={SaponificationThe7} />
      </p>

      <p>
        <img alt="" src={SaponificationThe8} />
      </p>

      <p>
        The soap molecule has two parts: a polar group (-COO<sup>-</sup>Na
        <sup>+</sup>) and a non-polar group (R-hydrocarbon part). The polar
        group is called the head and the non-polar group is called the tail.
        Thus, the soap molecule has a polar head and a non-polar hydrocarbon
        tail. The polar head is hydrophilic in nature (water loving) and the
        non-polar tail is hydrophobic (water repelling) in nature.
      </p>

      <p>
        <img alt="" src={SaponificationThe9} />
      </p>

      <p>
        The saponification&nbsp; reaction is exothermic in nature, because heat
        is liberated during the process. The soap formed remains in suspension
        form in the mixture. Soap is precipitated as a solid from the suspension
        by adding common salt to the suspension. This process is called{' '}
        <strong>Salting out of Soap.</strong>
      </p>

      <h2 className={classes.secondaryTag}>Types of Soap</h2>

      <p>
        Depending upon the nature of alkali used in the production of soap, they
        are classified into two types.
      </p>

      <p>
        The sodium salt of long chain fatty acid is known as hard soap. It is
        difficult to dissolve in water. It is used as laundry soap.
      </p>

      <p>
        The potassium salt of long chain fatty acid is known as soft soap, as it
        produces more lather. It is used as toilet soap and shaving soap.
      </p>

      <ul>
        <li>Hard soap&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li>Soft soap</li>
      </ul>

      <p>In aqueous solution, soap ionises to form alkali ions.</p>

      <p>
        <img alt="" src={SaponificationThe10} />
      </p>

      <p>
        Since soaps have free alkali ions, they are alkaline in nature. Hence,
        the soap solutions are slippery to the touch.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the terms: soap, saponification, salting out, hard
          soap and soft soap.
        </li>
        <li>
          Students identify the materials which are required for the preparation
          of soap.
        </li>
        <li>
          Students understand the use of common salt in saponification process.
        </li>
        <li>
          Students understand the alkalies required for the preparation of hard
          and soft soaps.
        </li>
        <li>Students understand the procedure of saponification process.</li>
        <li>
          Students acquire the skill to perform the preparation of soap in a
          real lab.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Saponification-The process of Making
          Soap. Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=119&cnt=1
        </Typography>
      </div>
    </div>
  );
}
