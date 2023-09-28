import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import CombinationReactionEqn1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReactionEqn1.gif';
import CombinationReactionEqn2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReactionEqn2.gif';
import CombinationReactionEqn3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReactionEqn3.gif';
import CombinationReactionEqn4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReactionEqn4.gif';
import CombinationReactionEqn5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReactionEqn5.gif';
import CombinationReactionEqn6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReactionEqn6.gif';
import CombinationReactionEqn7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReactionEqn7.gif';
import CombinationReactionEqn8 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReactionEqn8.gif';
import CombinationReactionEqn9 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReactionEqn9.gif';
import CombinationReactionEqn10 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReactionEqn10.gif';
import CombinationReactionEqn11 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReactionEqn11.gif';
import CombinationReactionEqn12 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReactionEqn12.gif';
import CombinationTheory1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combReact.jpg';
import CombinationTheory2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combReact1.jpg';
import CombinationTheory3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/combReact2.jpg';
import CombinationReationImg from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReationImg.png';
import CombinationReactionPic from '../../../../../../../../../assets/Images/Subjects/Chemistry/combinationReactionThPic2.gif';

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
  mainTag: {
    fontSize: 20,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.mainTag}>Our Objective</h1>
      <p>Our objective is to study combination reactions.</p>
      <h1 className={classes.mainTag}>The Theory</h1>
      <p>
        <strong>
          Before performing the experiment, let’s find out what combination
          reactions are!
        </strong>
      </p>
      <p>
        A combination reaction is a general category of chemical reactions. It
        may be defined as a chemical reaction in which two or more substances
        combine to form a single substance under suitable conditions.
      </p>
      <p>
        Combination reactions are also known as synthesis, because in these
        reactions new substances are synthesized.
      </p>
      <p>The general equation that describes a combination reaction is:</p>
      <p>
        <strong>What are the types of combination reaction?</strong>
      </p>
      <p>Combination reactions are of three types.</p>
      <img alt="" src={CombinationReactionEqn1} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <p>
        Similarly, non-metals may react with highly active metals to form
        covalent compounds. Example, sulphur reacts with oxygen gas to form
        gaseous sulphur dioxide
      </p>
      <img alt="" src={CombinationTheory1} />
      <p>
        &nbsp; &nbsp; &nbsp;&nbsp;
        <img alt="" src={CombinationTheory2} />
        <img alt="" src={CombinationTheory2} />
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <img alt="" src={CombinationReactionEqn2} />
        &nbsp;
      </p>
      <ul>
        <li>
          Reaction between two or more elements:An example of this type of
          combination reaction is the reaction between a metal and a non- metal.
          Most metals react with non-metals to form ionic compounds.&nbsp; A
          good example of this would be:
        </li>
      </ul>
      <p>&nbsp;</p>
      <p>
        <img alt="" src={CombinationTheory3} />
        <img alt="" src={CombinationTheory3} />
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;
        <img align="middle" alt="" src={CombinationReactionEqn3} />
      </p>
      <p>&nbsp;</p>
      <ul>
        <li>
          Reaction between elements and compounds:&nbsp;An element and a
          compound react to form another compound. Example, carbon monoxide
          reacts with oxygen gas to form carbon dioxide.
        </li>
        <li>
          Reaction between two compounds:&nbsp; Two compounds react with each
          other to form a new compound. Example, calcium oxide (quick lime)
          reacts with carbon dioxide gas to form calcium carbonate (lime stone).
        </li>
      </ul>
      <p>
        <img alt="" src={CombinationReactionEqn4} />
        &nbsp;
      </p>
      <p>
        <strong>
          Most combination reactions are exothermic in nature. Why?
        </strong>
      </p>
      <p>
        Combination reactions involve the formation of new bonds and this
        process releases a large amount of energy in the form of heat.
        <br />
        Let us discuss some more examples of combination
        reactions.&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
      <p>
        <img alt="" src={CombinationReationImg} />
      </p>
      <ul>
        <li>
          Formation of Calcium Hydroxide:Reaction between quick lime (Calcium
          oxide, CaO) and water is a combination reaction.
        </li>
      </ul>
      <p>
        In this reaction, quick lime reacts with water to form slaked lime
        (calcium hydroxide, Ca(OH)2).
        <br />
        The reaction between quick lime and water is highly vigorous as well as
        exothermic.
      </p>
      <p>
        <img alt="" src={CombinationReactionEqn5} />
      </p>
      <ul>
        <li>
          Combustion Reactions: Combustion of coal and combustion of hydrogen
          are examples of combination reactions.
        </li>
      </ul>
      <p>Coal burns in air to form carbon dioxide gas.</p>
      <p>
        <img alt="" src={CombinationReactionEqn6} />
      </p>
      <p>
        Hydrogen burns in the presence of oxygen to form water in the form of
        steam. Upon cooling, it becomes liquid.
      </p>
      <p>
        <img alt="" src={CombinationReactionEqn7} />
        <br />
        <img alt="" src={CombinationReactionPic} />
        &nbsp;
      </p>
      <ul>
        <li>
          Formation of Ammonium chloride:Ammonium chloride is formed by
          combining vapours of ammonia with hydrogen chloride gas. It is a
          white-coloured solid.
        </li>
      </ul>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img alt="" src={CombinationReactionEqn8} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
      <p>&nbsp;</p>
      <ul>
        <li>
          Formation of Sulphuric acid: Formation of sulphuric acid from sulphur
          trioxide is also a combination reaction. Sulphur trioxide on hydration
          forms sulphuric acid. This reaction is highly exothermic in nature.
        </li>
      </ul>
      <p>
        <img alt="" src={CombinationReactionEqn9} />
      </p>
      <ul>
        <li>
          Formation of ferrous sulphide:It is formed by heating fine pieces of
          iron with sulphur powder.
        </li>
      </ul>
      <p>
        <img alt="" src={CombinationReactionEqn10} />
      </p>
      <ul>
        <li>
          Manufacture of Ammonia:The manufacture of ammonia gas from nitrogen
          and oxygen is also a combination reaction.
        </li>
      </ul>
      <p>
        <img alt="" src={CombinationReactionEqn11} />
        <br />
        &nbsp;
      </p>
      <ul>
        <li>
          Combination of sodium oxide and water:&nbsp; Sodium oxide combines
          with water to form sodium hydroxide.
        </li>
      </ul>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img align="middle" alt="" src={CombinationReactionEqn12} />
      </p>
      <h1 className={classes.mainTag}>&nbsp;Learning Outcomes</h1>
      <ol>
        <li>Students acquire knowledge about combination reactions.</li>
        <li>
          Students acquire skills to perform a combination reaction using quick
          lime and water.
        </li>
        <li>
          Students will be able to distinguish a combination reaction from a
          given set of chemical reactions.
        </li>
      </ol>
      <p>
        <strong>
          So, let’s do a combination reaction between water and quick lime…
        </strong>
      </p>
      <div className={classes.wrap}>
        <h1 className={classes.mainTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Combination Reaction. Retrieved 3 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=79&cnt=174
        </Typography>
      </div>
    </div>
  );
}
