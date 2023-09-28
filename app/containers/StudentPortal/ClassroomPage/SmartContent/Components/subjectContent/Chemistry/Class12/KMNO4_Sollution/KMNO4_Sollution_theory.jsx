import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import Molecular1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/molecular1.png'
import Ionic1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ionic1.png'
import BalanceEqu1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/balancedEqu1.png'
import BalanceEqu11 from '../../../../../../../../../assets/Images/Subjects/Chemistry/balancedEqu11.png'
import Molecular2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/molecular2.png'
import Ionic2  from '../../../../../../../../../assets/Images/Subjects/Chemistry/ionic2.png'
import BalanceEqu2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/balancedEqu2.png'
import BalanceEqu22 from '../../../../../../../../../assets/Images/Subjects/Chemistry/balancedEqu22.png'


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
        Our objective is to determine the strength of KMnO<sub>4 </sub>solution
        by titrating it against a standard solution of;
      </p>

      <ul>
        <li>Oxalic acid</li>
        <li>Ferrous ammonium sulphate (Mohr’s salt)</li>
      </ul>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What is Titration?</h2>

      <p>
        Titration is a common laboratory method of qualitative chemical analysis
        that can be used to determine the unknown concentration of a solution
        (analyte). The basis of this process is the reaction between the analyte
        and a solution of unknown concentration (standard solution). The analyte
        is taken in a conical flask using a pipette and the solution of known
        concentration is taken in a calibrated burette (titrant).
      </p>

      <h2 className={classes.secondaryTag}>
        Some Important Terms in Titration
      </h2>

      <h3>1. Standard solution</h3>

      <p>
        A solution whose concentration is known, is called a standard solution.
        The substance used to prepare a standard solution is called the primary
        standard. Oxalic acid and sodium carbonate are some examples.
      </p>

      <h3>2. Concentration of a solution</h3>

      <p>
        Concentration of a solution is defined as the amount of a solute present
        in a definite volume of the solvent. Concentration of a solution can be
        expressed in different ways.
      </p>

      <ul>
        <li>
          Normality: Normality of a solution is defined as the number of gram
          equivalent of solute per litre of the solution. It is denoted by ‘N’.
        </li>
      </ul>

      <ul>
        <li>
          Molarity: Molarity of a solution is defined as the number of gram
          moles of the solute per litre of the solution. It is denoted by ‘M’.
        </li>
      </ul>

      <h3>3. End point of a titration</h3>

      <p>
        The endpoint of a titration is the point at which the reaction between
        the titrant and the analyte becomes complete. Generally the endpoint of
        a titration is determined using indicators. In some cases, either the
        reactant or the product can serve as the indicator. A best example is
        the redox titration using potassium permanganate.
      </p>

      <p>Titrations can be classified as:</p>

      <ul>
        <li>Acid-Base Titrations or Acidimetry and Alkalimetry</li>
        <li>Oxidation-Reduction Titrations or Redox Titrations</li>
        <li>Precipitation Titrations</li>
        <li>Complexometric Titrations</li>
      </ul>

      <p>We will learn about Redox titrations.</p>

      <h2 className={classes.secondaryTag}>
        Oxidation-Reduction Titrations or Redox Titrations
      </h2>

      <p>
        The titration based on oxidation and reduction reaction between the
        titrant and analyte is called Redox titration.&nbsp;Oxidation is the
        process of the addition of oxygen or removal of hydrogen/electron and
        reduction involves the process of addition of hydrogen/electrons or
        removal of oxygen. Oxidizing agents are substances that gain one or more
        electrons and are reduced. Reducing agents are substances that lose one
        or more electrons and are oxidized. That is, oxidizing agents are
        electron acceptors, and reducing agents are electron donors.
      </p>

      <p>
        In redox systems, the titration method can be adopted to determine the
        strength of a reductant/oxidant using a redox sensitive indicator. Redox
        titrations involving potassium permanganate are called permanganometric
        titrations. In these reactions, MnO<sub>4</sub>
        <sup>-</sup> ions acts as the self indicator.
      </p>

      <h2 className={classes.secondaryTag}>
        Titration of&nbsp; KMnO<sub>4</sub> against Oxalic acid
      </h2>

      <h3>
        Preparation of standard solution of Oxalic acid [250 ml M/10 (0.1 M)
        solution]
      </h3>

      <p>
        The molecular mass of crystalline oxalic acid is, H<sub>2</sub>C
        <sub>2</sub>O<sub>4</sub>.2H<sub>2</sub>O = 126
      </p>

      <p>
        Weight of oxalic acid crystals required to prepare 1000 ml of 1 M
        solution = 126 g
      </p>

      <h3>
        Determination of strength of KMnO<sub>4</sub> using standard solution of
        oxalic acid
      </h3>

      <p>
        In this titration KMnO<sub>4</sub> is the titrant and oxalic acid is the
        analyte. Here, potassium permanganate is the oxidizing agent and oxalic
        acid is the reducing agent. The reaction between potassium permanganate
        and oxalic acid is carried out in an acidic medium because permanganate
        ion in the acidic medium is a very strong oxidizing agent. Acidity is
        introduced by adding dil. H<sub>2</sub>SO<sub>4</sub>.
      </p>
      <p>

        <br />
        No other indicators are used to determine the endpoint, because KMnO
        <sub>4</sub> acts as the indicator. Permanganate (MnO<sub>4</sub>
        <sup>-</sup>) ion has a dark purple colour. In an acidic medium, MnO
        <sub>4</sub>
        <sup>-</sup> is reduced to colourless manganous (Mn<sup>2+</sup>) ions.
        On reaching the end point, the addition of the last single drop of
        permanganate imparts a light pink colour to the solution. The chemical
        reaction that takes place during titration can be represented by the
        chemical equation.
      </p>

      <h3>Molecular equation</h3>

      <p>
        <img
          src={Molecular1}
        />
      </p>
      <h3>Ionic equation</h3>

      <p>
        &nbsp;
        <img
         src={Ionic1}
        />
      </p>

      <h3>Balanced chemical equation</h3>

      <p>
        From the balanced chemical equation, it is clear that 2 moles of KMnO
        <sub>4</sub> reacts with 5 moles of oxalic acid.
      </p>

      <p>
        &nbsp;
        <img
         src={BalanceEqu1}
        />
      </p>
      <p>
        &nbsp;
        <img
         src={BalanceEqu11}
        />
      </p>
      <p>
        If oxalic acid is to be titrated, add the required amount of dil. H
        <sub>2</sub>SO<sub>4 </sub>and heat the flask to 60°-70°C. The purpose
        of heating is to increase the rate of reaction, which otherwise is slow
        at room temperature.
      </p>

      <h2 className={classes.secondaryTag}>
        Titration of Potassium permanganate (KMnO<sub>4</sub>) against Mohr’s
        salt solution
      </h2>

      <h3>
        Preparation of standard solution of Mohr's salt[250 ml M/20 (0.05 M)
        solution]
      </h3>

      <p>
        The molecular mass of Mohr's salt is, FeSO<sub>4</sub>.(NH<sub>4</sub>)
        <sub>2</sub>SO<sub>4</sub>.6H<sub>2</sub>O= 392
      </p>

      <h3>
        Determination of strength of KMnO<sub>4</sub> using standard solution of
        Mohr's salt
      </h3>

      <p>
        In this titration, potassium permanganate is the oxidizing agent and
        Mohr’s salt is the reducing agent. Mohr’s salt is a double salt of
        ferrous sulphate and ammonium sulphate and its composition is FeSO
        <sub>4</sub>.(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.6H<sub>2</sub>O.
        It is a primary standard. Therefore, its standard solution can be
        prepared directly. Ferrous ions of Mohr’s salt undergo hydrolysis in
        aqueous solution. To prevent the hydrolysis, Conc. H<sub>2</sub>SO
        <sub>4</sub> needs to be added to the Mohr’s salt crystals during the
        preparation of its standard solution.
      </p>

      <p>
        In this titration, the MnO<sub>4</sub>
        <sup>-</sup> ion is reduced to Mn<sup>2+</sup> in the presence of acid
        and Fe<sup>2+</sup> ions of Mohr’s salt is oxidized to Fe<sup>3+</sup>
      </p>

      <p>
        The chemical reaction that occurs in this titration can be represented
        by the following chemical equations.
      </p>

      <h3>Molecular equation</h3>

      <p>
        <img src={Molecular2} />
      </p>

      <h3>Ionic equation</h3>

      <p>In ionic form the reaction can be represented as,</p>

      <p>
        <img
          src={Ionic2}
        />
      </p>

      <h3>Balanced chemical equation</h3>

      <p>
        From the overall balanced chemical equation, it is clear that 2 moles of
        potassium permanganate react with 10 moles of Mohr’s salt.
      </p>

      <p>
        <img
         src={BalanceEqu2}
        />
      </p>

      <p>
        <img
          src={BalanceEqu22}
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcome</h1>

      <ul>
        <li>
          Students understand the terms- volumetric analysis, morarity, molality
          normality and redox titration.
        </li>
        <li>
          Students acquire the knowledge to calculate the strength of KMnO
          <sub>4</sub> using molarity equation.
        </li>
        <li>
          Students understand the purpose of addition of dil. H<sub>2</sub>SO
          <sub>4</sub> and the purpose of heating of oxalic acid before
          titration.
        </li>
        <li>
          Students acquire the skill to prepare standard solutions of oxalic
          acid and Mohr’s salt.
        </li>
        <li>Students understand the apparatus used for a titration.</li>
        <li>
          Students acquire the skill to perform the redox-titration in the real
          lab after understanding the different steps.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>
          Acknowledgement:
        </h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Determination of concentration of KMnO₄
          solution. Retrieved 28 February 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=115&cnt=551
        </Typography>
      </div>
    </div>
  );
}
