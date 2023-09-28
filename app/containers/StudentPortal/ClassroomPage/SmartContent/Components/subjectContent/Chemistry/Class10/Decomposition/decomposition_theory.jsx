import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import DecompositionThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-the1.png';
import DecompositionThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-the2.gif';
import DecompositionThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-the3.gif';
import DecompositionThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-the4.gif';
import DecompositionThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-the5.gif';
import DecompositionThe6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-the6.gif';
import DecompositionThe7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-the7.gif';
import DecompositionThe8 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-the8.jpg';
import DecompositionThe9 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-the9.gif';
import DecompositionThe10 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-the10.gif';
import DecompositionThe11 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-the11.jpg';
import DecompositionThe12 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-the12.gif';
import DecompositionThe13 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-the13.gif';


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

      <p>To study decomposition reactions.</p>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>
        What is a <strong>decomposition reaction</strong>?
      </h2>

      <p>
        <strong>
          Decomposition is a type of chemical reaction.&nbsp; It is defined as
          the reaction in which a single compound splits into two or more simple
          substances under suitable conditions.
        </strong>{' '}
        It is just the opposite of the combination reaction.
      </p>

      <p>
        In a combination reaction, a substance is formed as a result of chemical
        combination, while in a decomposition reaction, the substance breaks
        into new substances.
      </p>

      <p>
        <img
          alt=""
          src={DecompositionThe1}
        />
      </p>

      <p>&nbsp;</p>

      <p>
        For example:&nbsp; The digestion of food in our body is accompanied by a
        number of decomposition reactions. The major constituents of our food
        such as carbohydrates, fats, proteins, etc.,decompose to form a number
        of simpler substances.&nbsp; These substances further react, releasing
        large amounts of energy, which keeps our body working.
      </p>

      <p>The general equation that describes a decomposition reaction is:</p>

      <p>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img alt="" src={DecompositionThe2} />
      </p>

      <h2 className={classes.secondaryTag}>Types of Decomposition Reactions</h2>

      <p>Decomposition reactions can be classified into three types:</p>

      <ul type="1">
        <li>Thermal decomposition reaction</li>
        <li>Electrolytic decomposition reaction</li>
        <li>Photo decomposition reaction</li>
      </ul>

      <p>
        Thermal decomposition is a chemical reaction where a single substance
        breaks into two or more simple substances when heated. The reaction is
        usually <strong>endothermic</strong> because heat is required to break
        the bonds present in the substance.
        <br />
        Examples:
      </p>

      <p>
        Photo decomposition is a chemical reaction in which a substance is
        broken down into simple substances by exposure to light (photons).
      </p>

      <ul type="1">
        <li>
          Thermal decomposition reaction (Thermolysis)
          <ul type="disc">
            <li>
              Decomposition of calcium carbonate:Calcium carbonate (lime stone)
              decomposes into calcium oxide (quick lime) and carbon dioxide when
              heated. Quick lime is the major constituent of cement.
              <p>
                <img
                  alt=""
                  src={DecompositionThe3}
                />
                <br />
                &nbsp;
              </p>
            </li>
            <li>
              Decomposition of potassium chlorate:When heated strongly,
              potassium chlorate decomposes into potassium chloride and oxygen.
              This reaction is used for the preparation of oxygen.
              <p>
                <img
                  align="middle"
                  alt="e2"
                  src={DecompositionThe4}
                  width="288px;" height= "30px;"
                />
              </p>
              <p>
                If the decomposition is carried out in the presence of manganese
                dioxide (MnO<sub>2</sub>), it takes place at a lower
                temperature. In this case, MnO<sub>2</sub> is used as a
                catalyst.
              </p>
            </li>
            <li>
              Decomposition of ferric hydroxide:Ferric hydroxide undergoes
              decomposition in the presence of heat, giving ferric oxide and
              water molecules.
              <p>
                <img
                  align="middle"
                  alt=""
                  src={DecompositionThe5}
                  width="276px;" height= "28px;"
                />
              </p>
              <p>&nbsp;</p>
            </li>
            <li>
              Decomposition of hydrated oxalic acid:
              <p>
                Hydrated oxalic acid (H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>.2H
                <sub>2</sub>O) decomposes into oxalic acid and water when
                heated.
              </p>
              <p>
                <img
                  alt=""
                  src={DecompositionThe6}
                />
              </p>
            </li>
          </ul>
        </li>
        <li>
          Electrolytic decomposition reaction (Electrolysis)
          <p>
            Electrolytic decomposition may result when electric current is
            passed through an aqueous solution of a compound. A good example is
            the electrolysis of water.
          </p>
          <p>
            <img
              alt=""
              src={DecompositionThe7}
            />
            <img alt="" src={DecompositionThe8} />
          </p>
          <p>
            <img
              alt=""
              src={DecompositionThe9}
            />
          </p>
          <ul type="disc">
            <li>
              <strong>Electrolysis of water:</strong> Electrolysis of water is
              the decomposition of water into hydrogen and oxygen due to the
              passage of electric current through it.
            </li>
            <li>
              Decomposition of sodium chloride:On passing electricity through
              molten sodium chloride, it decomposes into sodium and chlorine.
            </li>
          </ul>
        </li>
        <li>
          &nbsp; &nbsp; &nbsp; Photo decomposition reaction (Photolysis)
          <p>&nbsp;</p>
          <ul type="disc">
            <li>
              Decomposition of silver chloride:Place a small quantity of silver
              chloride (AgCl) taken in a watch glass under sunlight for some
              time. The crystals slowly acquire a grey colour. On analysis, it
              is found that the sunlight has caused decomposition of silver
              chloride into silver and chlorine.
              <p>
                <img
                  alt=""
                  src={DecompositionThe10}
                />
                <img alt="" src={DecompositionThe11} />
                &nbsp; &nbsp;
              </p>
              <p>Silver bromide also decomposes in the same way.</p>
              <p>
                <img
                  alt=""
                  src={DecompositionThe12}
                />
                &nbsp; &nbsp;&nbsp;
              </p>
            </li>
            <li>
              <strong>Decomposition of hydrogen peroxide:</strong> In the
              presence of light, hydrogen peroxide decomposes into water and
              oxygen
              <p>
                &nbsp; &nbsp;
                <img
                  align="middle"
                  alt=""
                  src={DecompositionThe13}
                />
                &nbsp;
              </p>
            </li>
          </ul>
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Why are decomposition reactions mostly endothermic in nature?</h2>

      <p>
        Most decomposition reactions require energy either in the form of heat,
        light or electricity. Absorption of energy causes the breaking of the
        bonds present in the reacting substance which decomposes to give the
        product.
      </p>

      <h2 className={classes.secondaryTag}>Learning Outcomes</h2>

      <ol>
        <li>
          Students understand the characteristics of a decomposition reaction
          &amp; different types of such reactions.
        </li>
        <li>
          Students identify the compounds that may give a decomposition
          reaction.
        </li>
        <li>
          Students acquire skills to perform a decomposition reaction in the
          lab.
        </li>
        <li>
          Students will be able to distinguish a decomposition reaction from a
          given set of chemical reactions.
          <br />
          &nbsp;
        </li>
      </ol>

      <p>
        <strong>
          Let’s discuss the decomposition reaction of ferrous sulphate crystals
          by the action of heat.
        </strong>{' '}
        &nbsp;
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Decomposition Reaction. Retrieved 1
          April 2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=80&cnt=1
        </Typography>
      </div>
    </div>
  );
}
