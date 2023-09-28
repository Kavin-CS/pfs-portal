import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';


import ChemicalReactionPic from '../../../../../../../../../assets/Images/Subjects/Chemistry/ChemicalReactionpic.jpg';
import ChemicalReaction1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ChemicalReaction1.jpg';
import ChemicalReaction2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ChemicalReaction2.gif';
import ChemicalReaction3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ChemicalReaction3.jpg';
import ChemicalReaction4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ChemicalReaction4.gif';
import ChemicalReaction5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ChemicalReaction5.gif';
import ChemicalReaction6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ChemicalReaction6.gif';
import ChemicalReaction7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ChemicalReaction7.gif';
import ChemicalReaction8 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ChemicalReaction8.gif';
import ChemicalReaction9 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ChemicalReaction9.gif';

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
      <div class="divContent">
        <h1 className={classes.headTag}>Our Objective</h1>

        <p>
          To carry out the following reactions and classify them as Physical or
          Chemical changes.
        </p>

        <ul>
          <li>Burning of magnesium in air</li>
          <li>
            Sodium sulphate with barium chloride in the form of their solutions
            in water
          </li>
          <li>Iron nail with copper sulphate solution in water</li>
          <li>Zinc with dilute sulphuric acid</li>
          <li>Heating of copper sulphate</li>
        </ul>

        <h1 className={classes.headTag}>The Theory</h1>

        <h2 className={classes.secondaryTag}>What is a chemical change?</h2>

        <p>
          In a chemical change, chemical reaction takes place and the substances
          undergo a change in their state.&nbsp; During chemical reactions, one
          substance reacts with another to form a new substance. The chemical
          composition of the new substance is different from that of the
          reacting species.&nbsp; Due to a chemical change, the chemical
          properties of matter also change. That means the product is entirely
          different from either of the reactants. Some chemical reactions may be
          either exothermic or endothermic in nature.
        </p>

        <h2 className={classes.secondaryTag}>
          <img alt="" src={ChemicalReactionPic} />
        </h2>

        <p>What are exothermic and endothermic reactions?</p>

        <p>
          In endothermic reactions, a substance absorbs energy in the form of
          heat and undergoes a chemical reaction. An example is the heat energy
          absorbed during a chemical change involved in cooking, like baking a
          cake.
          <br />
          <br />
          In exothermic reactions, heat energy is released. Explosion of
          fireworks is an example of exothermic chemical change. The explosion
          releases energy in the form of light.
        </p>

        <h2 className={classes.secondaryTag}>
          Do you know what a photochemical reaction is?
        </h2>

        <p>
          Some chemical reactions do not take place in the dark, but take place
          only in the presence of sunlight or other radiations. Such reactions
          are called photochemical reactions. The most commonly known example is
          photosynthesis, in which plants convert carbon dioxide and water into
          sugars using energy from sunlight&nbsp; and produce oxygen as a side
          product.
        </p>

        <p>
          A chemical change changes the identity or property of a substance and
          may or may not be reversed.
        </p>

        <p>
          <strong>Examples of Some Irreversible Chemical changes: </strong>
        </p>

        <ul>
          <li>
            Combustion (burning) of fuels:In combustion reaction, the fuel burns
            with an oxidizing agent such as oxygen or fluorine to form new
            products.
          </li>
          <li>
            Neutralization reaction:Neutralization reaction is a type of
            chemical reaction in which an acid and a base react to form salt and
            water. For example, sodium hydroxide reacts with hydrochloric acid
            to form sodium chloride and water. This reaction is highly
            exothermic, which means it releases heat in the form of energy.
          </li>
          <li>
            Rusting of iron:Rust is a chemical substance formed by the chemical
            action of moist air on iron. It is basically an oxidation reaction.
            The formula of rust is Fe<sub>2</sub>O<sub>3</sub>.xH<sub>2</sub>O.
          </li>
          <li>
            Ripening of fruit and cooking of eggs are also chemical changes.
          </li>
        </ul>

        <p>
          There are also some chemical changes which are reversible in nature.
        </p>

        <p>
          <strong>Examples:</strong>
        </p>

        <ul>
          <li>
            The thermal decomposition of ammonium chloride is a reversible
            chemical change. On heating above 340°C, it decomposes to form two
            gases such as ammonia and hydrogen chloride. On cooling, the
            reaction is reversed and solid ammonium chloride is
            formed.&nbsp;&nbsp;
          </li>
        </ul>

        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <img alt="" src={ChemicalReaction1} />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        </p>

        <ul>
          <li>
            The synthesis of ammonia from hydrogen and oxygen is a reversible
            reaction.
          </li>
        </ul>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; <img alt="" src={ChemicalReaction2} />
        </p>

        <ul>
          <li>
            The synthesis of hydrogen chloride from hydrogen and chlorine is
            also a reversible reaction.
          </li>
        </ul>

        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <img align="middle" alt="" src={ChemicalReaction3} />
        </p>

        <p>Let us discuss about some simple chemical reactions.</p>

        <h2 className={classes.secondaryTag}>Burning of Magnesium in Air</h2>

        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          <img alt="" src={ChemicalReaction4} />
          &nbsp;
        </p>

        <p>
          Magnesium is an alkaline earth metal with symbol Mg. It is a silvery
          white metal. Magnesium is a highly inflammable metal and it is easy to
          ignite its powdered form or thin strips. Magnesium burns in air by
          taking oxygen from air to form magnesium oxide and is basic in
          nature.&nbsp;
        </p>

        <p>&nbsp;</p>

        <h2 className={classes.secondaryTag}>
          Reaction between Sodium Sulphate and Barium Chloride
        </h2>

        <p>
          When barium chloride combines with sodium sulphate in the form of
          their aqueous solutions, a white precipitate of barium sulphate is
          formed which is insoluble in water. The reaction also creates sodium
          chloride, which remains dissolved in water and so cannot be seen. The
          precipitate of barium sulphate is insoluble in dil.HCl.
        </p>

        <p>
          <br />
          &nbsp;
          <img alt="" src={ChemicalReaction5} /> &nbsp;
        </p>

        <p>
          Here, the products formed are entirely different from the reactants in
          chemical composition and chemical properties. So this reaction is a
          chemical change.
        </p>

        <h2 className={classes.secondaryTag}>
          Reaction of Iron Nails with Copper Sulphate Solution in Water
        </h2>

        <p>
          &nbsp; &nbsp;
          <img align="middle" alt="" src={ChemicalReaction6} />
        </p>

        <p>
          When an iron nail is dipped in copper sulphate solution, a brown
          coating of copper is formed on the surface of iron and the colour of
          copper sulphate solution changes from blue to light green. This
          reaction shows that iron is more reactive than copper as it displaces
          copper from its solution and iron passes into solution as Fe
          <sup>2+</sup> ions and ferrous sulphate solution is formed.
        </p>

        <p>This reaction is a single displacement reaction.</p>

        <h2 className={classes.secondaryTag}>
          Reaction of Zinc with Dilute Sulphuric Acid
        </h2>

        <p>
          Zinc is more reactive than hydrogen and it displaces hydrogen from
          dilute acids. Zinc reacts with dilute sulphuric acid to form zinc
          sulphate and hydrogen gas is evolved. This is a single displacement
          reaction of a non-metal by a metal.
        </p>

        <p>
          &nbsp; &nbsp;&nbsp;
          <img align="middle" alt="" src={ChemicalReaction7} />
        </p>

        <p>
          The products ZnSO<sub>4</sub> and H<sub>2</sub> (g) are entirely
          different in chemical composition and chemical properties from the
          reactants Zn and H<sub>2</sub>SO<sub>4</sub>. So, this reaction is a
          chemical change.
        </p>

        <h2 className={classes.secondaryTag}>Heating of Copper Sulphate</h2>

        <p>
          Copper sulphate pentahydrate contain 5 moles of water per one mole of
          copper (II) sulphate. Its formula is written as CuSO<sub>4</sub>.5H
          <sub>2</sub>O. It can be converted into anhydrous copper sulphate when
          heated strongly. The blue colour of copper sulphate is due to water of
          hydration. When heated, it loses two water molecules at ~63°C followed
          by two more at ~109°C and the final water molecule at ~200°C and turns
          to white coloured anhydrous copper sulphate.
        </p>

        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;
          <img align="middle" alt="" src={ChemicalReaction8} />
          &nbsp;
        </p>

        <p>
          The above process can be reversed. When water is added to white
          coloured anhydrous copper sulphate, its colour changes to blue,
          indicating that the blue coloured copper sulphate pentahydrate is
          regenerated. &nbsp;So, it is a reversible chemical change.
        </p>

        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
          <img alt="" src={ChemicalReaction9} />
        </p>

        <p>
          On further heating at ~650°C, the anhydrous copper sulphate decomposes
          to form copper oxide (CuO) and sulphur trioxide (SO<sub>3</sub>) and
          the reaction become irreversible.
        </p>

        <h1 className={classes.headTag}>Learning Outcomes</h1>

        <ol start="1" type="1">
          <li>Students understand the term “Chemical reaction”.</li>
          <li>
            Students visualize the different chemical reactions and understand
            the differences between physical changes and chemical changes.
          </li>
          <li>
            Students perform different chemical reactions using the following:
            <ul type="disc">
              <li>Magnesium ribbon</li>
              <li>Sodium sulphate and barium chloride</li>
              <li>Iron nail and aqueous solution of copper sulphate</li>
              <li>Zinc granules and dil. HCl</li>
              <li>Hydrated copper sulphate</li>
            </ul>
          </li>
          <li>
            Students identify the products formed in each reaction &amp;
            conclude that they are chemically different from that of reactants.
          </li>
          <li>
            Based on the acquired skills, students should be able to perform a
            chemical reaction.
          </li>
        </ol>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Chemical Reactions. Retrieved 3 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=2&sim=77&cnt=223
        </Typography>
      </div>
    </div>
  );
}
