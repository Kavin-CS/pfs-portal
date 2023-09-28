import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
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

        <p>To determine the melting point of ice.</p>

        <h1 className={classes.headTag}>The Theory</h1>

        <h2 className={classes.secondaryTag}>Can you define the melting point of a solid?</h2>

        <p>
          Melting point of a solid is defined as the temperature at which a
          solid changes into a liquid. Melting point of a solid indicates the
          strength of the force of attraction between the particles of the
          solid. On heating a solid, its molecules absorb energy in the form of
          heat and their kinetic energy increases.
        </p>

        <p>
          As the kinetic energy increases, the temperature of the solid
          increases. As a result, the force of attraction between the molecules
          decreases and the molecules become more and more separated.&nbsp; This
          increases the potential energy of the molecule and the particles leave
          their fixed positions and start moving more freely.
        </p>

        <p>
          At a particular temperature, the separation of the molecules increases
          by a large amount and the solid melts and converts into liquid. This
          particular temperature is the melting point of that solid. The melting
          point of a pure substance is always higher than the melting point of
          that substance when a small amount of an impurity is present. Pressure
          also affects the melting point of a substance. As the pressure on the
          substance increases, the melting point decreases.
        </p>

        <h2 className={classes.secondaryTag}>
          What are the benefits of knowing the melting point of a compound?
        </h2>

        <p>
          The melting point of a compound helps in the identification of that
          compound. Measurement of the melting point of a solid can also provide
          information on the purity of the substance. Melting point of mixtures
          is lower than the melting point of a pure solid.&nbsp; Pure
          crystalline solids melt over a very narrow range of temperatures,
          whereas mixtures melt over a broad range of temperatures.
        </p>

        <p>
          The temperature of the reverse change from liquid to solid is called
          the freezing point or crystallization point. For most substances the
          melting point and freezing points are equal.
        </p>

        <p>
          For ice, the melting point is 0°C or 273K. The chemical element with
          the highest melting point is tungsten (3410°C), which is used for
          making filaments in light bulbs.
        </p>

        <p>
          During the melting process, till all the ice melts, the temperature of
          the system does not increase until after the melting point is reached.
          The whole of the supplied heat energy is consumed in increasing the
          potential energy of the ice molecules. The kinetic energy of the
          molecule does not increase further, and the temperature does not
          increase, so long as the melting continues.
        </p>

        <p>
          The quantity of heat required to completely change 1 kg of ice into
          water at atmospheric pressure at its melting point is called latent
          heat of fusion. For ice, it is 3.34 x 10<sup>5</sup> J/kg at
          0°C.&nbsp;
        </p>

        <p>Melting points of some common substances are given in the table.</p>

        <table
          align="center"
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td valign="top" width="163">
                Substance
              </td>
              <td valign="top" width="126">
                Melting point (°C)
              </td>
            </tr>
            <tr>
              <td valign="top" width="163">
                Ice
              </td>
              <td valign="top" width="126">
                0
              </td>
            </tr>
            <tr>
              <td valign="top" width="163">
                Mercury
              </td>
              <td valign="top" width="126">
                ~-39
              </td>
            </tr>
            <tr>
              <td valign="top" width="163">
                Hydrogen
              </td>
              <td valign="top" width="126">
                -259
              </td>
            </tr>
            <tr>
              <td valign="top" width="163">
                Oxygen
              </td>
              <td valign="top" width="126">
                ~-219
              </td>
            </tr>
            <tr>
              <td valign="top" width="163">
                Helium
              </td>
              <td valign="top" width="126">
                ~-272
              </td>
            </tr>
            <tr>
              <td valign="top" width="163">
                Glucose
              </td>
              <td valign="top" width="126">
                146
              </td>
            </tr>
            <tr>
              <td valign="top" width="163">
                Iron
              </td>
              <td valign="top" width="126">
                ~1535
              </td>
            </tr>
            <tr>
              <td valign="top" width="163">
                Silver
              </td>
              <td valign="top" width="126">
                ~961
              </td>
            </tr>
            <tr>
              <td valign="top" width="163">
                Gold
              </td>
              <td valign="top" width="126">
                1063
              </td>
            </tr>
          </tbody>
        </table>

        <h1 className={classes.headTag}>&nbsp;Learning outcomes</h1>

        <ol start="1" type="1">
          <li>
            Students understand the term 'melting point' through this
            experiment.
          </li>
          <li>
            Students perform the experiment for ice cubes &amp; notice the
            physical change that happens during the melting of ice.
          </li>
          <li>
            Students will be able to do the experiment faster and more
            accurately in the real lab once they understand the different steps.
          </li>
          <li>
            Students realize that temperature remains constant when a solid
            melts at its melting point.
          </li>
        </ol>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2011). Melting Point of Ice. Retrieved 3 March 2021, from amrita.olabs.edu.in/?sub=73&brch=2&sim=30&cnt=1 
        </Typography>
      </div>
    </div>
  );
}
