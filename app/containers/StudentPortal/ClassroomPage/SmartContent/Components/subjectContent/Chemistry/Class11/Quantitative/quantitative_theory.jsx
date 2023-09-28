import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import QuantitativeThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Quantitative1/quantitative-the1.png';
import QuantitativeThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Quantitative1/quantitative-the2.png';
import QuantitativeThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Quantitative1/quantitative-the3.png';
import QuantitativeThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Quantitative1/quantitative-the4.png';
import QuantitativeThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Quantitative1/quantitative-the5.png';
import QuantitativeThe6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Quantitative1/quantitative-the6.png';
import QuantitativeThe7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Quantitative1/quantitative-the7.png';
import QuantitativeThe8 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Quantitative1/quantitative-the8.png';
import QuantitativeThe9 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Quantitative1/quantitative-the9.png';
import QuantitativeThe10 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Quantitative1/quantitative-the10.png';
import QuantitativeThe11 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Quantitative1/quantitative-the11.png';
import QuantitativeThe12 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Quantitative1/quantitative-the12.png';



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
      <h1 className={classes.headTag}>Objectives</h1>

      <ul>
        <li>To prepare a standard solution of sodium carbonate.</li>
        <li>
          To determine the strength of a given solution of hydrochloric acid by
          titrating it against <span>standard sodium carbonate solution.</span>
        </li>
      </ul>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What is Titration?</h2>

      <p>
        One of the important methods in Quantitative Analysis is Volumetric
        Analysis, a commonly used laboratory technique. It is used to determine
        the unknown concentration of a sample by measuring its volume. This
        process is also called titration. In a titration, a solution of unknown
        concentration is reacted with a solution of known concentration. The
        solution taken in the burette is called the titrant and the solution
        taken in the conical flask is called the analyte.
      </p>

      <h2 className={classes.secondaryTag}>What does the end point of a titration mean?</h2>

      <p>
        The endpoint of a titration is the point at which the reaction between
        the titrant and the analyte becomes complete. Generally the endpoint of
        a titration is determined using indicators.
      </p>

      <h2 className={classes.secondaryTag}>What is a standard solution?</h2>

      <p>
        A solution of known concentration is called the standard solution. A
        standard solution can be prepared by dissolving a known quantity of the
        substance in a definite volume of the solvent. The substance used to
        prepare the standard solution can be classified into two types.
      </p>

      <h3 className={classes.secondaryTag}>1. Primary standard</h3>

      <p>A primary standard has the following features.</p>

      <ul>
        <li>It is highly pure and cheaply available.</li>
        <li>It is highly soluble in water.</li>
        <li>It is neither deliquescent nor hygroscopic.</li>
        <li>It is highly stable.</li>
      </ul>

      <p>
        Oxalic acid, Mohr's salt, potassium dichromate are some examples of
        primary standards.
      </p>

      <h3 className={classes.secondaryTag}>2. Secondary standard</h3>

      <p>
        Substances whose standard solutions cannot be prepared directly are
        called secondary standards.
      </p>

      <p>Some examples are sodium hydroxide and potassium permanganate.</p>

      <h2 className={classes.secondaryTag}>How do we express the concentration of a solution?</h2>

      <p>
        The concentration of a solution can be expressed in the following ways.
      </p>

      <p>
        <strong>Normality:</strong> It is defined as the number of gram
        equivalent of solute dissolved in one litre of the solution. It is
        denoted by the letter 'N'.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Normality«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»N«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»r«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»q«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»V«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mo»(«/mo»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»)«/mo»«mo»§nbsp;«/mo»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={QuantitativeThe1}
          title="Double click to edit"
        />
      </p>

      <p>
        <strong>Molarity:</strong> It is defined as the number of gram moles of
        solute dissolved in one litre of the solution. It is denoted by the
        letter 'M'.
        <span lang="EN-GB">
          {' '}
        </span>
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Molarity«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»N«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»r«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»s«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«/mrow»«mrow»«mi mathvariant=¨normal¨»V«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mo»(«/mo»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»)«/mo»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={QuantitativeThe2}
          title="Double click to edit"
        />
      </p>

      <p>
        <strong>Molality:</strong> It is defined as the number of moles of the
        solute dissolved in 1Kg of the solvent. It is denoted by the letter 'm'.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Molality«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»N«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»r«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»s«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»M«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»s«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mo»(«/mo»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»K«/mi»«mi mathvariant=¨normal¨»g«/mi»«mo»)«/mo»«mo»§nbsp;«/mo»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={QuantitativeThe3}
          title="Double click to edit"
        />
      </p>

      <h2 className={classes.secondaryTag}>What does Acid-Base titration mean?</h2>

      <p>
        Titration can be classified into various types depending upon the
        chemical reactions occurring during titration. One of the commonly known
        titrations is the Acid-Base titration. It is a method used to determine
        the strength of an acid or alkali and this type of titration is based on
        the neutralisation reaction. In this reaction, acids and bases react to
        form salt and water.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mtable columnalign=¨left¨ rowspacing=¨0¨»«mtr»«mtd»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»AH«/mi»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»BOH«/mi»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»AB«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«/mtd»«/mtr»«mtr»«mtd»«mo»§nbsp;«/mo»«mfenced»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«/mrow»«/mfenced»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mfenced»«mrow»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/mfenced»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»(«/mo»«mi mathvariant=¨normal¨»Salt«/mi»«mo»)«/mo»«/mtd»«/mtr»«/mtable»«/math»"
          class="Wirisformula"
          src={QuantitativeThe4}
          title="Double click to edit"
        />{' '}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
      </p>

      <h2 className={classes.secondaryTag}>What is an indicator?</h2>

      <p>
        An indicator is a chemical substance that undergoes a colour change at
        the endpoint. The endpoint of an acid-base titration can be determined
        using acid-base indicators. Acid Base indicators are either weak organic
        acids or weak organic bases. The colour change of an indicator depends
        on the pH of the medium. The un-ionized form of an indicator has one
        colour, but its ionized form has a different colour.
      </p>

      <p>
        For example, consider the indicator phenolphthalein, whose ionization
        can be written as,
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mtable columnalign=¨left¨ rowspacing=¨0¨»«mtr»«mtd»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Hph«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»3«/mn»«/msub»«msup»«mi mathvariant=¨normal¨»O«/mi»«mo»+«/mo»«/msup»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msup»«mi mathvariant=¨normal¨»Ph«/mi»«mrow»«mo»-«/mo»«mo»§nbsp;«/mo»«/mrow»«/msup»«/mtd»«/mtr»«mtr»«mtd»«mi mathvariant=¨normal¨»Colourless«/mi»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Pink«/mi»«/mtd»«/mtr»«/mtable»«/math»"
          class="Wirisformula"
          src={QuantitativeThe5}
          title="Double click to edit"
        />
      </p>

      <h2 className={classes.secondaryTag}>Some common examples of acid-base indicators</h2>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        class="responsive_table"
        width="600"
      >
        <thead>
          <tr>
            <th scope="col">Indicators</th>
            <th scope="col">pH Range</th>
            <th scope="col">&nbsp;Acid</th>
            <th scope="col">Base</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&nbsp;Phenolphthalein</td>
            <td>8.0 - 10.0</td>
            <td>&nbsp;Colourless</td>
            <td>&nbsp;Pink</td>
          </tr>
          <tr>
            <td>&nbsp;Methyl Orange</td>
            <td>3.1 - 4.4</td>
            <td>&nbsp;Red</td>
            <td>&nbsp;Orange</td>
          </tr>
          <tr>
            <td>&nbsp;Methyl Red</td>
            <td>4.4 - 6.2</td>
            <td>&nbsp;Red</td>
            <td>&nbsp;Yellow</td>
          </tr>
          <tr>
            <td>&nbsp;Phenol Red</td>
            <td>6.4 - 8.0</td>
            <td>&nbsp;Yellow</td>
            <td>&nbsp;Red</td>
          </tr>
          <tr>
            <td>&nbsp;Thymol Blue</td>
            <td>1.2 - 2.8</td>
            <td>&nbsp;Red</td>
            <td>&nbsp;Yellow</td>
          </tr>
          <tr>
            <td>&nbsp;Thymol Blue</td>
            <td>8.0 - 9.6</td>
            <td>&nbsp;Yellow</td>
            <td>&nbsp;Blue</td>
          </tr>
          <tr>
            <td>&nbsp;Methyl Yellow</td>
            <td>2.9 - 4.0</td>
            <td>&nbsp;Red</td>
            <td>&nbsp;Yellow</td>
          </tr>
        </tbody>
      </table>

      <h2 className={classes.secondaryTag}>What are the different types of Acid-Base titrations?</h2>

      <p>Acid-base titration can be classified into the following types.</p>

      <ol>
        <li>
          Strong acid-Strong base titration:In this type, a strong acid is
          titrated against a strong base. Both the acid and base are of equal
          strength, so at the endpoint, the pH will be neutral. The indicators
          used are phenolphthalein and methyl orange.
          <ul>
            <li>Example: Titration of HCl Vs NaOH</li>
          </ul>
        </li>
        <li>
          Strong acid-weak base titration: In this type, strong acid reacts with
          a weak base to form an acidic solution. So the pH of the solution is
          &lt;7. Methyl orange is the indicator used to determine the endpoint.
          <ul>
            <li>
              Example: Titration of HCl Vs NH<sub>4</sub>OH
            </li>
          </ul>
        </li>
        <li>
          Strong base-weak acid titration: Here a strong base reacts with a weak
          acid to form a basic solution. So the pH of the solution is &gt;7. In
          this type phenolphthalein is a suitable indicator for the
          determination of the end point.
          <ul>
            <li>
              Example: Titration of CH<sub>3</sub>COOH Vs NaOH
            </li>
          </ul>
        </li>
        <li>
          Weak acid-weak base titration: This type of titration is not very
          practical. Here both the acid and base are very weak so they do not
          ionize completely. So, it is difficult to determine the pH range
          around the end point and it is difficult to choose a suitable
          indicator for this type of titration.
          <ul>
            <li>
              Example: Titration of CH<sub>3</sub>COOH Vs NH<sub>4</sub>OH
            </li>
          </ul>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>How do we determine the strength of a given acid or base?</h2>

      <p>
        Determination of the strength is based on the Law of Equivalents.
        According to this law, the number of equivalence of the substance to be
        titrated is equal to the number of equivalence of the titrant used.
      </p>

      <p>
        Consider an acid-alkali titration. V<sub>1 </sub>cm<sup>3</sup> is that
        of an acid solution of normality N<sub>1</sub> required to neutralize V
        <sub>2 </sub>cm<sup>3</sup> of a base of normality N<sub>2</sub>.
      </p>

      <p>
        We know that 1000 cm<sup>3</sup> of 1N acid solution contains acid = 1
        gram equivalent
      </p>

      <p>
        V<sub>1 </sub>cm<sup>3</sup>of 1N acid solution contains acid= V
        <sub>1</sub>/1000 gram equivalents
      </p>

      <p>
        Thus number of gram equivalents of acid in V<sub>1</sub> cm<sup>3</sup>{' '}
        of N<sub>1</sub> acid solution is;{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mrow»«msub»«mi mathvariant=¨normal¨»V«/mi»«mn»1«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»N«/mi»«mn»1«/mn»«/msub»«/mrow»«mn»1000«/mn»«/mfrac»«/math»"
          class="Wirisformula"
          src={QuantitativeThe6}
          title="Double click to edit"
        />
      </p>

      <p>
        Similarly, number of gram equivalents of base in V<sub>2</sub> cm
        <sup>3</sup> of N<sub>2</sub> basic solution is;{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mrow»«msub»«mi mathvariant=¨normal¨»V«/mi»«mn»2«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»N«/mi»«mn»2«/mn»«/msub»«/mrow»«mn»1000«/mn»«/mfrac»«/math»"
          class="Wirisformula"
          src={QuantitativeThe7}
          title="Double click to edit"
        />
      </p>

      <p>
        By the law of equivalents, at the end point,{' '}
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mrow»«msub»«mi mathvariant=¨normal¨»V«/mi»«mn»1«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»N«/mi»«mn»1«/mn»«/msub»«/mrow»«mn»1000«/mn»«/mfrac»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«msub»«mi mathvariant=¨normal¨»V«/mi»«mn»2«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»N«/mi»«mn»2«/mn»«/msub»«/mrow»«mn»1000«/mn»«/mfrac»«/math»"
          class="Wirisformula"
          src={QuantitativeThe8}
          title="Double click to edit"
        />
      </p>

      <p>
        i.e,{' '}
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»N«/mi»«mn»1«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»V«/mi»«mn»1«/mn»«/msub»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»N«/mi»«mn»2«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»V«/mi»«mn»2«/mn»«/msub»«/math»"
          class="Wirisformula"
          src={QuantitativeThe9}
          title="Double click to edit"
        />
      </p>

      <p>This is called the Normality Equation.</p>

      <p>Similarly, Molarity equation can be written as,</p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mrow»«mfenced close=¨]¨ open=¨[¨»«mrow»«mi mathvariant=¨normal¨»M«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»y«/mi»«mfenced»«msub»«mi mathvariant=¨normal¨»M«/mi»«mn»1«/mn»«/msub»«/mfenced»«mo»§#215;«/mo»«mi mathvariant=¨normal¨»V«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»e«/mi»«mfenced»«msub»«mi mathvariant=¨normal¨»V«/mi»«mn»1«/mn»«/msub»«/mfenced»«/mrow»«/mfenced»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Acid«/mi»«/mrow»«mrow»«mfenced close=¨]¨ open=¨[¨»«mrow»«mi mathvariant=¨normal¨»M«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»y«/mi»«mfenced»«msub»«mi mathvariant=¨normal¨»M«/mi»«mn»2«/mn»«/msub»«/mfenced»«mo»§#215;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»V«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»e«/mi»«mfenced»«msub»«mi mathvariant=¨normal¨»V«/mi»«mn»2«/mn»«/msub»«/mfenced»«/mrow»«/mfenced»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/mfrac»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»N«/mi»«mi mathvariant=¨normal¨»o«/mi»«mo».«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»s«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»q«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»N«/mi»«mi mathvariant=¨normal¨»o«/mi»«mo».«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»s«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»q«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={QuantitativeThe10}
          title="Double click to edit"
        />
      </p>

      <p>
        Here we determine the strength of HCl by titrating it against a standard
        solution of sodium carbonate and they react to form NaCl, CO­
        <sub>2</sub> and water. The chemical reaction can be represented as;
      </p>

      <p>
        &nbsp;
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mtable columnalign=¨left¨ rowspacing=¨0¨»«mtr»«mtd»«msub»«mi mathvariant=¨normal¨»Na«/mi»«mn»2«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»CO«/mi»«mn»3«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«mi mathvariant=¨normal¨»HCl«/mi»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«mi mathvariant=¨normal¨»NaCl«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»CO«/mi»«mn»2«/mn»«/msub»«/mtd»«/mtr»«mtr»«mtd»«mn»1«/mn»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»mole«/mi»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»moles«/mi»«/mtd»«/mtr»«/mtable»«/math»"
          class="Wirisformula"
          src={QuantitativeThe11}
          title="Double click to edit"
        />
      </p>

      <p>
        Here 1&nbsp;mole&nbsp;of sodium carbonate reacts with 2&nbsp;moles of
        HCl. So according to Molarity equation,
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mrow»«mfenced close=¨]¨ open=¨[¨»«mrow»«mi mathvariant=¨normal¨»M«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»y«/mi»«mfenced»«msub»«mi mathvariant=¨normal¨»M«/mi»«mn»1«/mn»«/msub»«/mfenced»«mo»§#215;«/mo»«mi mathvariant=¨normal¨»V«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»e«/mi»«mfenced»«msub»«mi mathvariant=¨normal¨»V«/mi»«mn»1«/mn»«/msub»«/mfenced»«/mrow»«/mfenced»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»H«/mi»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»l«/mi»«/mrow»«mrow»«mfenced close=¨]¨ open=¨[¨»«mrow»«mi mathvariant=¨normal¨»M«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»y«/mi»«mfenced»«msub»«mi mathvariant=¨normal¨»M«/mi»«mn»2«/mn»«/msub»«/mfenced»«mo»§#215;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»V«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»e«/mi»«mfenced»«msub»«mi mathvariant=¨normal¨»V«/mi»«mn»2«/mn»«/msub»«/mfenced»«/mrow»«/mfenced»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»N«/mi»«msub»«mi mathvariant=¨normal¨»a«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»C«/mi»«msub»«mi mathvariant=¨normal¨»O«/mi»«mn»3«/mn»«/msub»«/mrow»«/mfrac»«mo»§nbsp;«/mo»«mo»=«/mo»«mfrac»«mn»2«/mn»«mn»1«/mn»«/mfrac»«/math»"
          class="Wirisformula"
          src={QuantitativeThe12}
          title="Double click to edit"
        />
      </p>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ol>
        <li>
          Students understand the terms: quantitative estimation, acid-base
          titrations, end point, standard solutions, molarity, molality,
          normality and indicators..
        </li>
        <li>
          Students can calculate the strength of a given acid or base using
          molarity or normality equations.
        </li>
        <li>
          Students acquire the skill to prepare the standard solution and to
          determine the end point.
        </li>
        <li>
          Students acquire the skill to select the indicators based on the
          nature of the solution.
        </li>
        <li>Students are familiar with the apparatus used for titration.</li>
        <li>
          Students acquire the skill to perform the titration using sodium
          carbonate and hydrochloric acid in the real lab once they visualize
          the different steps.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Quantitative Estimation. Retrieved 30
          March 2021, from amrita.olabs.edu.in/?sub=73&brch=7&sim=109&cnt=1
        </Typography>
      </div>
    </div>
  );
}
