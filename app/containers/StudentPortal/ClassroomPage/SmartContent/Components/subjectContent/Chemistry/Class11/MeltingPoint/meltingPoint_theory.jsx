import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import MeltingPointTheory1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/meltingTheory1.jpg';
import MeltingPointTheory2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/meltingTheory2.jpg';

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
      <div class="divContent">
        <h1 className={classes.headTag}>Our Objective</h1>

        <p>
          Our objective is to determine the melting point of an organic
          compound.
        </p>

        <h1 className={classes.headTag}>The Theory</h1>

        <h2 className={classes.secondaryTag}>
          What is the importance of knowing the melting point of organic
          compounds?
        </h2>

        <p>
          The melting point is an important physical property of a compound. The
          melting point can be used to identify a substance and as an indication
          of its purity. The melting point of solid is defined as the
          temperature at which the solid exists in equilibrium with its liquid
          under an external pressure of one atmosphere.
        </p>

        <p>
          A pure crystalline compound usually possesses a sharp melting point
          and it melts completely over a narrow range of temperature of not more
          that 0.5-1<sup>o</sup>C. The presence of even small amount of
          impurities usually produces a depression in the freezing points and
          shows a marked increase in the width of the melting point range. The
          melting point range of &gt; 5<sup>o</sup>C indicates that the
          substance is impure. For a material whose identity is known, an
          estimate of degree of purity can be made by comparing its melting
          point with that of &nbsp;a pure sample.&nbsp;
        </p>

        <h2 className={classes.secondaryTag}>
          What are the factors that affect the melting point?&nbsp;
        </h2>

        <h2 className={classes.secondaryTag}>
          <b>&nbsp;1. Size of the molecule </b>
        </h2>

        <p>
          Melting point is also used for the identification and characterisation
          of a compound. If the melting point of two pure samples shows a clear
          difference in melting points, it indicates that the two compounds must
          have different structural arrangements. or they must have different
          arrangements of atoms or configurations. If two materials have the
          same melting point, then they may (not necessarily) have the same
          structure.
        </p>

        <p>
          Consider the isomers n-butanol and t-butanol. Both have the same
          molecular formula (C<sub>4</sub> H<sub>10</sub>O), but differ in their
          structure.&nbsp;
        </p>

        <p>
          <img alt="" src={MeltingPointTheory1} />
        </p>

        <h2 className={classes.secondaryTag}>
          <b>2. Force of attraction between the molecules </b>
        </h2>

        <p>
          The force of attraction between the molecules affects the melting
          point of a compound. Stronger intermolecular interactions result in
          higher melting points. Ionic compounds usually have high melting
          points because the electrostatic forces holding the ions (ion-ion
          interaction) are much stronger. In organic compounds the presence of
          polarity, or especially hydrogen bonding, generally leads to higher
          melting point.
        </p>

        <p>Consider the following examples.&nbsp;&nbsp;</p>

        <p>
          <img alt="" src={MeltingPointTheory2} />
        </p>

        <p>
          The only force of attraction between butane molecules is weak Van der
          Waals force of attraction, so it has very low melting point. But in
          the case of methyl propionate, because of the presence of polar C – O
          group, the molecules are held together by dipole-dipole interaction.
          Therefore, its melting point is greater than that of butane. In the
          case of &nbsp;butyric acid, the molecules are held together by
          hydrogen bonding, so it has a higher melting point. The melting point
          of sodium butanoate is higher than that of butyric acid because the
          attractive force in sodium butanoate is strong ionic interation.&nbsp;
        </p>

        <h2 className={classes.secondaryTag}>
          &nbsp;Melting point of some common organic compounds&nbsp;
        </h2>

        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <thead>
            <tr>
              <th align="center" scope="col" width="200">
                Compound
              </th>
              <th align="center" scope="col" width="150">
                Melting Point (<sup>o</sup>C)
              </th>
              <th align="center" scope="col" width="200">
                Compound
              </th>
              <th align="center" scope="col" width="150">
                Melting Point (<sup>o</sup>C)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Phenol</td>
              <td>42</td>
              <td>α-Naphthylamine</td>
              <td>50</td>
            </tr>
            <tr>
              <td>α-Naphthol</td>
              <td>96</td>
              <td>Acetamide</td>
              <td>82</td>
            </tr>
            <tr>
              <td>β-Naphthol</td>
              <td>123</td>
              <td>Benzamide</td>
              <td>128</td>
            </tr>
            <tr>
              <td>Oxalic Acid</td>
              <td>101</td>
              <td>Urea</td>
              <td>132</td>
            </tr>
            <tr>
              <td>Benzoic Acid</td>
              <td>122</td>
              <td>Fructose</td>
              <td>103</td>
            </tr>
            <tr>
              <td>Cinnamic Acid</td>
              <td>133</td>
              <td>Glucose</td>
              <td>146</td>
            </tr>
            <tr>
              <td>p-Toludine</td>
              <td>43</td>
              <td>Sucrose</td>
              <td>186</td>
            </tr>
            <tr>
              <td>Naththalene</td>
              <td>80</td>
              <td>Acetanilide</td>
              <td>114.3</td>
            </tr>
          </tbody>
        </table>

        <h1 className={classes.headTag}>Learning outcomes</h1>

        <ul>
          <li>
            &nbsp;Students understand the term ‘melting point’ through this
            experiment.
          </li>
          <li>
            &nbsp;Students will able to do the experiment in the real lab
            quicker and more accurately after they understand the steps.
          </li>
          <li>
            &nbsp;Students understand that the melting point of a solid is a
            constant value.&nbsp;
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Melting Point of an Organic Compound..
          Retrieved 2 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=33&cnt=341
        </Typography>
      </div>
    </div>
  );
}
