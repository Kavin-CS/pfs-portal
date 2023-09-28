import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import EthanoicThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Ethanoic1/ethanoic-the1.png';
import EthanoicThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Ethanoic1/ethanoic-the2.png';
import EthanoicThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Ethanoic1/ethanoic-the3.png';
import EthanoicThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Ethanoic1/ethanoic-the4.gif';
import EthanoicThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Ethanoic1/ethanoic-the5.gif';


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

      <p>To study the following properties of acetic acid (ethanoic acid):</p>

      <ul>
        <li>Odour</li>
        <li>Solubility in water</li>
        <li>Effect on litmus</li>
        <li>Reaction with sodium bicarbonate</li>
      </ul>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        <strong>What you know about acetic acid?</strong>
      </p>

      <p>
        <img alt="" src={EthanoicThe1} />
      </p>

      <p>
        Acetic acid is an organic acid with the formula CH<sub>3</sub>-COOH. Its
        functional group is carboxylic acid group.
      </p>

      <p>
        <img alt="" src={EthanoicThe2} />
      </p>

      <p>
        Acetic acid is a monocarboxylic acid because it contains only one
        "COOH"group. It has a sour taste and pungent smell. It is the main
        component of vinegar. Vinegar is typically 3-7% solution of acetic acid
        in water. Vinegar is mainly used as a preservative in food and in the
        pickling of vegetables. Water free acetic acid is known as glacial
        acetic acid.
      </p>

      <p>
        <strong>What are the properties of acetic acid?</strong>
      </p>

      <ol>
        <li>Acidic character</li>
        <li>
          When dissolved in water, acetic acid undergoes dissociation to form
          hydrogen (H<sup>+</sup>)&nbsp;ion. Because of the release of a proton,
          acetic acid has an acidic character. It turns blue litmus paper red,
          indicating that it is acidic in nature. However, it is a weak acid
          because it does not dissociate completely in aqueous solution.
          <p textAlign="center;">
            <font size="2">
              <img alt="" src={EthanoicThe3} />
            </font>
          </p>
          <font size="2"> </font>
        </li>
        <li>
          <font size="2">Reaction with sodium bicarbonate</font>
        </li>
        <li>
          <font size="2">
            Acetic acid reacts with sodium bicarbonate to produce carbon
            dioxide.
          </font>
          <p>
            <font size="2">
              <img alt="" src={EthanoicThe4} />
            </font>
          </p>
          <font size="2">
            {' '}
            On passing CO<sub>2</sub> gas through lime water, the lime water
            turns milky. The milky appearance of lime water is due to the
            formation of solid calcium carbonate (CaCO<sub>3</sub>).{' '}
          </font>
          <p>
            <font size="2">
              <img alt="" src={EthanoicThe5} />
            </font>
          </p>
          <font size="2"> </font>
        </li>
      </ol>

      <p>
        <font size="4">
          <strong>Common uses of acetic acid:</strong>
        </font>
      </p>

      <ol>
        <li>
          <font size="2">
            Acetic acid is used as coagulant in the manufacture of rubber.
          </font>
        </li>
        <li>
          <font size="2">
            It is used in the manufacture of various dye stuffs and perfumes.
          </font>
        </li>
        <li>
          <font size="2">It is used in the manufacture of rayon fibre.</font>
        </li>
        <li>
          <font size="2">It is used as a solvent.</font>
        </li>
      </ol>

      <h1 className={classes.headTag}>
        Learning Outcomes
      </h1>

      <ol start="1" type="1">
        <li>
          <font size="2">
            Students understand the chemical properties of acetic acid after
            this experiment.
          </font>
        </li>
        <li>
          <font size="2">
            Students acquire skills to perform &amp; visualize the reaction of
            acetic acid with the following.{' '}
          </font>
          <ul type="disc">
            <li>
              <font size="2">Water</font>
            </li>
            <li>
              <font size="2">Litmus paper</font>
            </li>
            <li>
              <font size="2">Sodium bicarbonate</font>
            </li>
          </ul>
          <font size="2"> </font>
        </li>
        <li>
          <font size="2">
            Students will be able to properly use glassware like thistle funnel,
            delivery tubes, etc., in the real lab.
          </font>
        </li>
        <li>
          <font size="2">
            Based on acquired skills, the student will be able to analyze a
            given sample &amp; recognize it as acetic acid.
          </font>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Properties of Acetic Acid (Ethanoic
          Acid). Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=11&cnt=1
        </Typography>
      </div>
    </div>
  );
}
