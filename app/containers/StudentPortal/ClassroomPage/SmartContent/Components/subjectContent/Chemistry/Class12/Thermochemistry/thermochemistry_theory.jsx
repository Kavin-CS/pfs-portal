import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ThermocheThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Thermochemistry1/thermoche-the1.png';
import ThermocheThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Thermochemistry1/thermoche-the2.png';
import ThermocheThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Thermochemistry1/thermoche-the3.png';
import ThermocheThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Thermochemistry1/thermoche-the4.png';
import ThermocheThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Thermochemistry1/thermoche-the5.png';

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
      <h1 className={classes.headTag}>Objective</h1>

      <p>To determine:</p>

      <ul>
        <li>Water equivalent of calorimeter.</li>
        <li>Enthalpy of dissolution of given salt.</li>
      </ul>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        Thermochemistry is the study of heat and energy associated with a
        chemical reaction or a physical transformation.&nbsp; A reaction may
        absorb or release energy. The reaction which absorbs energy in the form
        of heat is called endothermic reaction and that which releases energy in
        the form of heat is called exothermic reaction.
      </p>

      <p>
        Measurement of heat changes are carried out in vessels called
        calorimeters. Metallic calorimeters are not used for measuring
        thermochemical changes because metals may react with substances.
        Stainless steel or gold plated copper calorimeters may be used.
        Reactions may also be carried out in beakers placed in a thermo flask,
        in a thermally insulated box or in a styrofoam cup. During measurement
        of heat changes, the calorimeter also absorbs some heat; this amount of
        heat should also be known. It is called calorimeter constant or water
        equivalent of calorimeter. To determine the water equivalent of
        calorimeter, known volume of hot water at a specified temperature is
        added to known volume of water contained in the calorimeter at room
        temperature. Since energy is conserved, the heat taken by calorimeter
        and cold water should be equal to heat given by hot water. Thus, we can
        write the following equation,
      </p>

      <p>
        <img
          alt=""
          src={ThermocheThe1}
          width="593px;" height="62px;"
        />
        ​
      </p>

      <p>
        <img
          alt=""
          src={ThermocheThe2}
          width="455px;" height="168px;"
        />
        ​​
      </p>

      <p>
        <img
          alt=""
          src={ThermocheThe3}
          width="275px;" height="106px;"
        />
      </p>

      <p>
        It is known that when a solute is dissolved in a solvent, heat is
        absorbed or evolved. Thus, dissolution of a solute in a solvent is
        accompanied by enthalpy change (∆H) of the system. If heat is absorbed,
        ∆H is positive. If heat is evolved, ∆H is negative.
      </p>

      <p>
        The enthalpy change per mole of a solute dissolved varies with the
        concentration of the solution. The enthalpy of dissolution is defined as
        the enthalpy change per mole of a solute when it is dissolved in a pure
        solvent to give a solution of specified concentration.
      </p>

      <p>
        For example, when one mole of anhydrous calcium chloride is dissolved in
        400 moles of water, 78.60 kJ heat is evolved. The thermochemical
        equation is written as:
      </p>

      <p>
        <img
          alt=""
          src={ThermocheThe4}
        />
        ​
      </p>

      <p>
        Similarly, when one mole of hydrated calcium chloride is dissolved in
        400 moles of water, 18.83 kJ heat is absorbed. The thermochemical
        equation is written as:
      </p>

      <p>
        <img
          alt=""
          src={ThermocheThe5}
          width="567px;" height="18px;"
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the terms, water equivalent of calorimeter,
          enthaply of dissolution of salt etc.
        </li>
        <li>
          Students acquire the skill to perform the experiment in the real lab,
          once they understand the different steps.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Thermochemistry. Retrieved 29 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=8&sim=145&cnt=1
        </Typography>
      </div>
    </div>
  );
}
