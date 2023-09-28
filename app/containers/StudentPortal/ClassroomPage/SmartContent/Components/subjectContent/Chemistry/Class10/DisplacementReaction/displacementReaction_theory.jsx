import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import DisplacementTheory1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/displacementTheory1.png';
import DisplacementTheory2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/displacementTheory2.png';
import DisplacementEqu1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/displacementReactionEqn1.gif';
import DisplacementEqu2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/displacementReactionEqn2.gif';
import DisplacementEqu3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/displacementReactionEqn3.gif';
import DisplacementEqu4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/displacementReactionEqn5.gif';
import DisplacementEqu5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/displacementReactionEqn6.gif';
import DisplacementEqu6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/displacementReactionEqn7.gif';
import DisplacementEqu7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/displacementReactionEqn4.gif';

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
        To study a single displacement reaction with the help of iron nails and
        copper sulphate solution.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>What is a displacement reaction?</h2>

      <p>
        <strong>
          Displacement reaction is a chemical reaction in which a more reactive
          element displaces a less reactive element from its compound. Both
          metals and non-metals take part in displacement reactions.
        </strong>
      </p>

      <p>
        <strong>
          Example : Reaction of iron nails with copper sulphate solution.
        </strong>
      </p>

      <p>
        <strong>
          <img alt="" src={DisplacementTheory1} />
        </strong>
      </p>

      <p>
        <strong>How is</strong>
        <strong>
          &nbsp;the chemical reactivity of metals linked with their position in
          the electrochemical series?
        </strong>
      </p>

      <p>
        <strong>Chemical reactivity</strong>
        <strong>
          &nbsp;of metals is linked with their relative positions in the
          activity series.
        </strong>{' '}
        Certain metals have the capacity to displace some metals from the
        aqueous solutions of their salts.
        <strong>
          A metal placed higher in the activity series can displace the metal
          that occupies a lower position from the aqueous solution of its salt.
        </strong>{' '}
        The displacement reaction is not limited to metals only.&nbsp;Even
        non-metals can take part in these reactions.
      </p>

      <p>
        Examples are halogens. The activity series of halogen is F &gt; Cl &gt;
        Br &gt; I.
      </p>

      <p>
        <strong>
          <img alt="" src={DisplacementTheory2} />
        </strong>
      </p>

      <p>
        <strong>Note the point:</strong>
      </p>

      <p>
        <strong>
          An important thing to remember with single displacement reaction is
          that elements that form cations can only displace cations and elements
          that form anions can only displace anions.
        </strong>
      </p>

      <p>
        <strong>Classification of single displacement reaction: </strong>
      </p>

      <ul>
        <li>Anion replacement reaction</li>
        <li>Cation replacement reaction</li>
      </ul>

      <h2 className={classes.secondaryTag}>(A) Cation Replacement Reaction</h2>

      <p>
        <strong>
          In this reaction, one cation replaces another one from its solution. A
          cation is a positively charged ion or metal. All metal displacement
          reactions are cation replacement reactions.{' '}
        </strong>
      </p>

      <p>Let us demonstrate some examples of cation replacement reactions.</p>

      <ul>
        <li>
          If a strip of magnesium metal is placed in copper sulphate solution,
          the blue colour of copper sulphate disappears and the magnesium metal
          turns brown as the displaced copper is deposited on it. In the
          reactivity series, the position of magnesium is above that of copper.
          So it is more reactive than copper and it would displace copper from
          copper sulphate solution.
        </li>
      </ul>

      <p>
        <img alt="" src={DisplacementEqu1} />
      </p>

      <ul>
        <li>
          Also metals like Zn, Al, Pb, Fe, etc., displace Cu from copper salt
          solution. The chemical reaction can be written as:
        </li>
      </ul>

      <p>
        <img alt="" src={DisplacementEqu2} />
      </p>

      <ul>
        <li>
          Iron displaces lead from the aqueous solution of lead
          nitrate.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
      </ul>

      <p>
        <img alt="" src={DisplacementEqu3} />
      </p>

      <ul>
        <li>
          Similarly, metals above hydrogen in the reactivity series displace
          hydrogen from dilute acids.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
      </ul>

      <p>
        For example :The metals such as potassium, sodium, lithium, etc. react
        more vigorously with dilute acids forming metal salts and hydrogen
        gases.&nbsp;&nbsp;&nbsp;
      </p>

      <p>
        <img alt="" src={DisplacementEqu7} />
      </p>

      <ul>
        <li>
          Metals such as aluminium, zinc, magnesium, iron, etc., react safely
          with dilute acids.&nbsp;&nbsp;
        </li>
      </ul>

      <p>For example,</p>

      <p>
        &nbsp;&nbsp;&nbsp; <img alt="" src={DisplacementEqu4} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <p>
        The reaction Zn with dil. H<sub>2</sub>SO<sub>4</sub> is often used in
        the laboratory for the preparation of hydrogen
        gas.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <p>
        If a less reactive metal is added to a salt solution of more reactive
        metal, nothing will happen.&nbsp;&nbsp;
      </p>

      <h2 className={classes.secondaryTag}>(B) Anion Replacement Reactions</h2>

      <p>
        <strong>
          In this reaction, one anion replaces another one from its solution.{' '}
        </strong>
        An anion is a negatively charged ion or non-metal.&nbsp; For example,
        more reactive halogen replaces less reactive halogen from its solution.
      </p>

      <ul>
        <li>
          Chlorine displaces bromine from an aqueous solution of sodium bromide.
        </li>
      </ul>

      <p>
        <img alt="" src={DisplacementEqu5} />
      </p>

      <ul>
        <li>Bromine splaces iodine from potassium iodide solution.</li>
      </ul>

      <p>
        <img alt="" src={DisplacementEqu6} />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol>
        <li>
          Students acquire good understanding about concepts like single
          displacement reaction, and cationic replacement reactions.
        </li>
        <li>
          Students classify the metals that can displace the other metals from
          salt solutions.
        </li>
        <li>
          Students develop the skill to demonstrate a single displacement
          reaction using iron nails and copper sulphate solution.
        </li>
        <li>
          Students will be able to distinguish a single displacement reaction
          from a given set of chemical reactions.
        </li>
      </ol>

      <p>
        <strong>
          Here, we will discuss the reaction between iron nails and copper
          sulphate solution.
        </strong>
        &nbsp;
      </p>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Single Displacement Reaction. Retrieved
          3 March 2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=81&cnt=108
        </Typography>
      </div>
    </div>
  );
}
