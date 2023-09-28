import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ConservationThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Conservation1/conservation-the1.png';
import ConservationThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Conservation1/conservation-the2.png';
import ConservationThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Conservation1/conservation-the3.png';
import ConservationThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Conservation1/conservation-the4.png';
import ConservationThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Conservation1/conservation-the5.png';
import ConservationThe6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Conservation1/conservation-the6.png';
import ConservationThe7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Conservation1/conservation-the7.png';


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
      <h1 className={classes.headTag}>Our Objective</h1>

      <p>
        To verify the Law of Conservation of Mass during a chemical reaction.
      </p>

      <h1 className={classes.headTag}>The Theory&nbsp;</h1>

      <p>
        <strong>What is meant by a chemical reaction?</strong>
      </p>

      <p>
        <strong>
          A chemical reaction is process by which one set of chemical substances
          is transformed to another.
        </strong>{' '}
        There are different types of chemical reactions such as:
      </p>

      <ul>
        <li>Acid-base Reactions</li>
        <li>Precipitation Reactions</li>
        <li>Synthesis Reactions</li>
        <li>Oxidation-Reduction Reactions</li>
        <li>Displacement Reactions</li>
        <li>Decomposition Reactions&nbsp;&nbsp;&nbsp;</li>
      </ul>

      <p>
        <img alt="" src={ConservationThe1} />
      </p>

      <p>
        Substances which chemically react are called reactants and the newly
        formed substances are called products.
        <br />
        <strong>
          A French chemist, Antoine Lavoisier, who is known as the father of
          modern chemistry, changed chemistry from a qualitative to a
          quantitative science
        </strong>
        . He proved that the mass of the products in a chemical reaction is
        equal to the mass of the reactants. There are no more atoms at the end
        of the chemical reaction than there were at the beginning.
      </p>

      <p>
        <strong>
          The Law of Conservation of Mass states that matter can neither be
          created nor destroyed in a chemical reaction.
        </strong>
      </p>

      <p>
        <strong>Examples:</strong>
      </p>

      <ul>
        <li>
          Consider the formation of water molecule. Hydrogen combines with
          oxygen to form&nbsp; a water molecule.
        </li>
      </ul>

      <p>
        <img alt="" src={ConservationThe2} />
      </p>

      <p>
        <img alt="" src={ConservationThe3} />
        &nbsp;
      </p>

      <p>
        In this case, the total mass of the reactants = total mass of the
        products. Also, the number of atoms of hydrogen and oxygen in the
        reactants side and the products side are equal.
      </p>

      <ul>
        <li>
          Carbon combines with oxygen at low concentration to form carbon
          monoxide.
        </li>
      </ul>

      <p>
        <img alt="" src={ConservationThe4} />
      </p>

      <p>
        <img alt="" src={ConservationThe5} />
      </p>

      <p>
        In this case, the total mass of reactants and products also are equal.
        The number of atoms at the beginning and at the end is equal as well.
      </p>

      <ul>
        <li>
          &nbsp;Hydrochloric acid reacts with sodium hydroxide to form sodium
          chloride and water.
        </li>
      </ul>

      <p>
        <img alt="" src={ConservationThe6} />
      </p>

      <p>
        <img alt="" src={ConservationThe7} />
      </p>

      <p>In this case, total mass of reactants = total mass of products.</p>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ul>
        <li>Students understand “The Law of Conservation of Mass”.</li>
        <li>
          Students acquire the skill to verify the Law of Conservation of Mass.
        </li>
        <li>
          Students identify the chemicals required for the verification of the
          Law of Conservation of Mass.
        </li>
        <li>
          Students will be able to do the experiment quicker and more accurately
          in the real lab after understanding the different steps.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). The Law of Conservation of Mass in a
          Chemical Reaction. Retrieved 3 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=118&cnt=1
        </Typography>
      </div>
    </div>
  );
}
