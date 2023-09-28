import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import BoilingTheory1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/boilingTheory1.jpg';
import BoilingTheory2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/boilingTheory2.jpg';
import BoilingTheory3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/boilingTheory3.jpg';

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
      <div class="divContent">
        <h1 className={classes.headTag}>Our Objective</h1>

        <p>
          Our objective is to determine the boiling point of an organic
          compound.
        </p>

        <h1 className={classes.headTag}>The Theory</h1>

        <h2 className={classes.secondaryTag}>
          What is the importance of knowing the boiling point of organic
          compounds?
        </h2>

        <p>
          The boiling point of organic compounds can give important information
          about their physical properties and structural characteristics.
          Boiling point helps identify and characterise a compound. A liquid
          boils when its vapour pressure is equal to the atmospheric pressure.
          Vapour pressure is determined by the kinetic energy of a molecule.
        </p>

        <p>
          Kinetic energy depends on the temperature, mass and velocity of a
          molecule. When the temperature increases, the average kinetic energy
          of particles also increases. When the temperature reaches the boiling
          point, the average kinetic energy becomes sufficient to overcome the
          force of attraction between the liquid particles. As the force of
          attraction decreases, the molecules in the liquid state escape from
          the surface and turn into gas.
        </p>

        <p>
          The boiling point of a liquid varies with the surrounding atmospheric
          pressure. A liquid at a higher pressure has a higher boiling point
          than when that liquid is at lower atmospheric pressure.
        </p>

        <p>
          The normal boiling point of a compound is an indicator of the
          volatility of that compound. The higher the boiling point, the less
          volatile is the compound. Conversely, the lower the boiling point, the
          more highly volatile is the compound. At a given temperature, if a
          compound’s normal boiling point is lower, then that compound will
          generally exist as a gas at atmospheric pressure. If the boiling point
          of the compound is higher, it then exists as a liquid or a solid.
        </p>

        <h2 className={classes.secondaryTag}>
          What are the general trends that affect the boiling point?
        </h2>

        <h2 className={classes.secondaryTag}>
          1. Strength of intermolecular forces
        </h2>

        <p>
          The relative strength of intermolecular forces such as ionic, hydrogen
          bonding, dipole-dipole interaction and Vander Waals dispersion force
          affects the boiling point of a compound. The influence of these forces
          depends on the functional group present. We can explain the effect of
          these forces on the boiling point of compounds with the help of some
          examples.
        </p>

        <p>
          Consider butane and its three derivatives such as diethyl ether, n-
          butanol and sodium n- butoxide.&nbsp;
        </p>

        <p>
          <img
            alt="BoilingTheory1"
            className={classes.theoryImg}
            src={BoilingTheory1}
          />
        </p>

        <p>
          n-butane (C<sub>4</sub>H<sub>10</sub>) contains no polar functional
          group. The only attraction between the butane molecules is weak Vander
          Waals dispersion forces. The result is that butane boils at a
          temperature at which water freezes, and is much lower than diethyl
          ether. In the case of diethyl ether, the molecules are held together
          by dipole-dipole interaction which arises due to the polarized C-O
          bond. Its boiling point is 35<sup>o</sup>C.&nbsp; Compare its boiling
          point with that of n-butanol. The boiling point of n-butanol is 117
          <sup>o</sup>C. The greatly increased boiling point is due to the fact
          that butanol contains hydroxyl group, which is capable of hydrogen
          bonding. But the boiling point of sodium butoxide is higher than that
          of butanol because the attractive force in sodium butoxide is very
          strong ionic bond.
        </p>

        <p>
          The intermolecular forces go in the order Ionic &gt; Hydrogen Bonding
          &gt; Dipole-Dipole &gt; Van der &nbsp;Waals dispersion force.&nbsp;
        </p>

        <h2 className={classes.secondaryTag}>
          2. Length of carbon-carbon chain
        </h2>

        <p>
          As the number of carbon atoms increases or the length of carbon-carbon
          chain increases, the boiling point also increases. This is because the
          force of attraction between the molecules increases as the molecule
          gets longer and has more electrons. It takes more energy to overcome
          the force of attraction, and so the boiling point rises.
        </p>

        <p>
          <img alt="" className={classes.theoryImg} src={BoilingTheory2} />
        </p>

        <h2 className={classes.secondaryTag}>
          3. Branching decreases the boiling point
        </h2>

        <p>
          As the length of carbon chain increases, the surface area of the
          compound will also increase. Van der Waals dispersion force is
          proportional to the surface area. So the increase of surface area
          increases the ability of individual molecules to attract each other.
          Branching in molecules decreases the surface area thereby decreasing
          the attractive force between individual molecules. As a result, the
          boiling point decreases.
        </p>

        <p>
          Consider the boiling point of n-pentane and neo-pentane (2,2-dimethyl
          propane). These are isomers having the same molecular formula (C
          <sub>5</sub>H<sub>12</sub>), but differ in their structures.&nbsp;
        </p>

        <p>
          <img alt="" className={classes.theoryImg1} src={BoilingTheory3} />
        </p>

        <p>
          The boiling point of neopentane is much lower than that of
          n-pentane.&nbsp;
        </p>

        <h2 className={classes.secondaryTag}>4. Polarity</h2>

        <p>
          Polarity of the molecule determines the force of attraction between
          the molecules in the liquid state. In polar compounds, the positive
          end of one molecule is attracted by the negative end of another
          molecule. That means polar molecules are attracted by opposite charge
          effect. The polarity of a molecule is determined by its functional
          group. The greater the polarity, the higher is the boiling point.
        </p>

        <h2 className={classes.secondaryTag}>
          Boiling point of some common organic compounds&nbsp;
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
                Boiling Point (<sup>o</sup>C)
              </th>
              <th align="center" scope="col" width="200">
                Compound
              </th>
              <th align="center" scope="col" width="150">
                Boiling Point (<sup>o</sup>C)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Benzyl Alcohol</td>
              <td>205</td>
              <td>Ethyl Benzoate</td>
              <td>213</td>
            </tr>
            <tr>
              <td>Glycerol</td>
              <td>290</td>
              <td>Methyl Salicylate</td>
              <td>223</td>
            </tr>
            <tr>
              <td>Ethylene Glycol</td>
              <td>197</td>
              <td>Nitrobenzene</td>
              <td>211</td>
            </tr>
            <tr>
              <td>Phenol</td>
              <td>182</td>
              <td>Aniline</td>
              <td>184</td>
            </tr>
            <tr>
              <td>o-Cresol</td>
              <td>191</td>
              <td>o-Toluidine</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Benzaldehyde</td>
              <td>178</td>
              <td>Chlorobenzene</td>
              <td>132</td>
            </tr>
            <tr>
              <td>Acetophenone</td>
              <td>202</td>
              <td>Bromobenzene</td>
              <td>156</td>
            </tr>
            <tr>
              <td>Phenyl Acetate</td>
              <td>196</td>
              <td>Benzoyl Chloride</td>
              <td>197</td>
            </tr>
          </tbody>
        </table>

        <h1 className={classes.headTag}>&nbsp;Learning Outcomes</h1>

        <ol>
          <li>
            Students understand the term boiling point from this experiment.
          </li>
          <li>
            Students understand the procedure to determine the boiling point in
            other organic liquids.
          </li>
          <li>
            Students understand that the boiling point of a liquid is a
            constant.
          </li>
        </ol>

        <p>&nbsp;</p>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Boiling Point of an Organic Compound.
          Retrieved 2 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=111&cnt=481
        </Typography>
      </div>
    </div>
  );
}
