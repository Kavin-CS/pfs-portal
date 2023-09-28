import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import AcidBaseThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/AcidBase1/acidbase-the1.png';
import AcidBaseThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/AcidBase1/acidbase-the2.png';
import AcidBaseThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/AcidBase1/acidbase-the3.png';
import AcidBaseThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/AcidBase1/acidbase-the4.png';
import AcidBaseThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/AcidBase1/acidbase-the5.gif';
import AcidBaseThe6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/AcidBase1/acidbase-the6.gif';
import AcidBaseThe7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/AcidBase1/acidbase-the7.jpg';


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

      <p>
        To study the properties of acids and bases (HCl and NaOH) by&nbsp;their
        reaction with:
      </p>

      <ul>
        <li>Litmus solution (blue/Red)</li>
        <li>Zinc metal</li>
        <li>Solid sodium carbonate</li>
      </ul>

      <h1 className={classes.headTag}>Objective(A)</h1>

      <p>
        How to carry out the reactions of an acid (HCl) with (i) litmus solution
        (blue and red), (ii) zinc metal (iii) solid sodium carbonate.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        <strong>Some examples of acids and bases from our daily life:</strong>
      </p>

      <p>
        The sour and bitter tastes we find in food are due to the presence of
        acids and bases. Some naturally occurring acids are: vinegar (acetic
        acid), citric acid (present in orange and lemon) and tartaric acid
        (present in tamarind). Our stomach also produces hydrochloric acid which
        helps in the digestion of food. Some commonly used bases are baking soda
        and tooth paste. Tooth paste is a basic substance used for cleaning the
        teeth and it neutralizes the excess of acids present in the mouth and
        prevents tooth decay.
      </p>

      <p>
        <strong>
          &nbsp;What are different concepts about acids and bases?
        </strong>
        &nbsp;
      </p>

      <ul>
        <li>
          According to Arrhenius concept of acid and bases,
          <strong>
            an acid is a substance which furnishes H<sup>+</sup> ions, when
            dissolved in water.
          </strong>{' '}
          For example,&nbsp;
        </li>
      </ul>

      <p>
        <img alt="" src={AcidBaseThe1} />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img alt="" src={AcidBaseThe2} />
      </p>

      <ul>
        <li>HCl is an acid and turns blue litmus to red.</li>
        <li>
          HCl reacts with zinc metal to form zinc chloride and
          hydrogen.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
      </ul>

      <ul>
        <li>
          HCl reacts with sodium hydroxide, which is a strong alkali, to form
          sodium chloride.&nbsp;
        </li>
      </ul>

      <p>
        <img alt="" src={AcidBaseThe3} />
        &nbsp;
      </p>

      <ul>
        <li>
          HCl reacts with sodium carbonate to give rise to CO<sub>2</sub>.&nbsp;
        </li>
      </ul>

      <h1 className={classes.headTag}>Objective(B)</h1>

      <p>
        &nbsp;To carry out the reactions of a base (NaOH) with (i) litmus
        solution (blue and red), (ii) zinc metal (iii) solid sodium carbonate.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        <strong>&nbsp;What are bases?</strong>
      </p>

      <ul>
        <li>
          Sodium hydroxide (NaOH)&nbsp;is a strong alkali. Its pH is much higher
          than 7. So, it turns red litmus to blue.
        </li>
        <li>NaOH reacts with zinc to form sodium zincate and hydrogen.</li>
      </ul>

      <p>
        &nbsp;&nbsp;
        <img alt="" src={AcidBaseThe4} />
      </p>

      <ul>
        <li>
          Phenolphthalein is an indicator. In alkaline solution it gives pink
          colour, whereas it becomes colourless in acidic medium. So, NaOH gives
          pink colour with phenolphthalein.&nbsp;
        </li>
      </ul>

      <p>
        <strong>
          &nbsp;The strength of an acid depends on its ability to donate a
          proton and the strength of a base depends on its ability to donate
          a&nbsp;hydroxide ion.
        </strong>{' '}
        A strong acid dissociates completely in an aqueous solution by losing
        protons, while a weak acid does not dissociate completely. Also a strong
        base ionizes completely in an aqueous solution, but a weak base does not
        ionize completely in the same.
      </p>

      <p>
        <strong>
          The hydrogen ion concentration is measured using a scale called pH
          scale
        </strong>
        . It was introduced by Sorensen in 1909.&nbsp;
      </p>

      <p>
        <strong>Do you know who Sorensen was?</strong>
      </p>

      <p>
        <em>Soren Peder Lauritz Sorensen </em>was a Danish chemist, famous for
        the introduction of the concept of pH, a scale for measuring acidity and
        basicity.&nbsp;&nbsp; While working at the Carlsberg Laboratory, he
        studied the effect of ion concentration on proteins, and understood the
        concentration of hydrogen ions was particularly important. To express
        the hydronium ion (H<sub>3</sub>O<sup>+</sup>) concentration in a
        solution he devised a logarithmic scale known as pH scale.
      </p>

      <p>
        <strong>Define pH:</strong>
      </p>

      <p>
        pH is defined as the negative logarithm (base ten) of hydrogen ion
        concentration in moles/ litre.
      </p>

      <p>
        <img alt="" src={AcidBaseThe5} />
      </p>

      <p>
        We can measure the pH value from 0 to 14 on a pH scale.{' '}
        <strong>
          The pH value for an acidic solution is always less than 7
        </strong>{' '}
        and{' '}
        <strong>
          <span color="#00FFFF;">t</span>
          <span>
            he pH for a basic solution is always greater than 7
          </span>
        </strong>
        <span>. </span>
        <strong>
          <span color="#008000;">The pH of a neutral solution is 7</span>.
          <span fontSize="12px">
            {' '}
            The higher the concentration of H<sup>+</sup> ions, the lower is the
            pH value.
          </span>
        </strong>{' '}
        The increase of pH from 7 to 14 indicates the increase in the
        concentration of OH <sup>-</sup> ions. The pH scale is shown below.
      </p>

      <p>
        <img alt="" src={AcidBaseThe6} />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <strong>
          The acidic and basic nature of various substances can be studied using
          different acid-base indicators.{' '}
        </strong>
      </p>

      <p>
        Acidic and basic substances can be identified by noting the change in
        the colour of the indicator in the acidic and basic medium. Some
        commonly used acid-base indicators are given below.
      </p>

      <table
        align="center"
        border="1"
        cellpadding="0"
        cellspacing="0"
        class="responsive_table"
        width="655"
      >
        <tbody>
          <tr>
            <td valign="top" width="128">
              <h5>Indicator</h5>
            </td>
            <td valign="top" width="128">
              <h5>Acidic medium</h5>
            </td>
            <td valign="top" width="128">
              <h5>Basic medium</h5>
            </td>
          </tr>
          <tr>
            <td valign="top" width="128">
              <p>Methyl orange</p>
            </td>
            <td valign="top" width="128">
              <p>Orange-red</p>
            </td>
            <td valign="top" width="128">
              <p>Yellow</p>
            </td>
          </tr>
          <tr>
            <td valign="top" width="128">
              <p>Phenolphthalein</p>
            </td>
            <td valign="top" width="128">
              <p>Colourless</p>
            </td>
            <td valign="top" width="128">
              <p>Pink</p>
            </td>
          </tr>
          <tr>
            <td valign="top" width="128">
              <p>Methyl red</p>
            </td>
            <td valign="top" width="128">
              <p>Red</p>
            </td>
            <td valign="top" width="128">
              <p>Yellow</p>
            </td>
          </tr>
          <tr>
            <td valign="top" width="128">
              <p>Phenol red</p>
            </td>
            <td valign="top" width="128">
              <p>Yellow</p>
            </td>
            <td valign="top" width="128">
              <p>Red</p>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className={classes.secondaryTag}>&nbsp;Action of Litmus solution in an acid and a base:</h2>

      <ul>
        <li>
          The Litmus solution is another indicator used to identify the acidic
          and basic nature of a substance. It is a solution of different dyes
          extracted from lichen plants.
        </li>
        <li>
          Acids have the property to change the colour of blue litmus to
          red.&nbsp; Bases change the colour of red litmus to
          blue.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
      </ul>

      <p>
        <img alt="" src={AcidBaseThe7} />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol start="1" type="1">
        <li>
          Students understand&nbsp; terms like acids &amp; bases based on the
          given chemical reactions.
        </li>
        <li>
          Students acquire skills to classify the given compounds as acids and
          bases using the following materials.
          <ul type="disc">
            <li>Litmus solution</li>
            <li>Zinc metal</li>
            <li>Solid sodium carbonate.</li>
          </ul>
        </li>
        <li>
          Based on acquired skills the student will be able to analyze the given
          samples &amp; classify them as acids or bases in the future.
        </li>
        <li>
          Students obtain the skill to safely handle the acids and bases in the
          lab.
        </li>
        <li>
          Students acquire a general understanding of the common requirements to
          perform this experiment &amp; how to arrange it in the lab.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Properties of Acids and Bases. Retrieved
          1 April 2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=6&cnt=1
        </Typography>
      </div>
    </div>
  );
}
