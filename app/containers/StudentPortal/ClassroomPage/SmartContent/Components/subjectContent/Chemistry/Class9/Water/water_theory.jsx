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
      <title />
      <h1 className={classes.headTag}>Our Objective</h1>

      <p>To determine the boiling point of water.</p>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What are liquids?</h2>

      <p>
        Liquids are one of the three states of matter. They are able to flow and
        occupy the shape of the container.
      </p>

      <h2 className={classes.secondaryTag}>What happens when a liquid is heated?</h2>

      <p>
        As a liquid is heated, its temperature increases. As its temperature
        increases, the molecules of the liquid gain energy and their kinetic
        energy increases.&nbsp; As the kinetic energy increases, the molecular
        motion increases and the molecules of the liquid overcome the force of
        attraction between them.
      </p>

      <p>
        On continuous heating, a particular temperature is reached where the
        molecules of the liquid leave the surface in the form of vapour. This
        produces a pressure above the liquid equal to the atmospheric pressure
        and the liquid starts boiling.
      </p>

      <p>
        At this stage, the temperature of the liquid remains stationary even on
        further heating. This stationary temperature at which the vapour
        pressure of the liquid is equal to the atmospheric pressure is called
        the boiling point of that liquid. At this temperature, bubbles begin to
        form and rise in the liquid. Before reaching this temperature,&nbsp; The
        bubble is not forming because the atmospheric pressure is greater than
        the pressure in the bubbles and they collapse.
      </p>

      <h2 className={classes.secondaryTag}>Can you define the process of evaporation and boiling?</h2>

      <p>
        Evaporation and boiling are two different processes. Evaporation is a
        process where liquid is converted into gas at any temperature below its
        melting point. Boiling is the process in which liquid is converted into
        vapour at its boiling point. Evaporation is a surface phenomenon,
        whereas boiling is a bulk phenomenon. Evaporation is the gradual
        vaporisation of a liquid on the surface Whereas the boiling is the rapid
        vaporisation of a liquid when it is heated to its boiling point. Below
        the boiling point, a liquid evaporates from its surface. At the boiling
        point, vapour bubbles come from the bulk of the liquid.
      </p>

      <p>
        <br />
        At an atmospheric pressure of exactly 760mm Hg (1 atm), the temperature
        at which a liquid boils is called the normal boiling point of the
        liquid. For water, the vapour pressure reaches the standard atmospheric
        pressure of 1 atmosphere at 100°C. So the normal boiling point of water
        is 100°C (212°F or 373K).The boiling point of pure water increases on
        the addition of soluble substances such as sugar or common salt. Boiling
        point of pure water increases with increase in pressure.
      </p>

      <p>
        <br />
        The quantity of heat required to completely vaporise a unit mass of a
        liquid gas at its boiling point is called latent heat of vaporisation of
        the liquid. It is represented by the symbol <strong>L</strong>. In the
        case of water the Latent heat of vaporisation is 22.57 x 10<sup>5</sup>{' '}
        J/kg at 100°C.
      </p>

      <h2 className={classes.secondaryTag}>What are the factors that affect the boiling point of a liquid?</h2>

      <p>
        <strong>Pressure: </strong>If the external pressure is higher than one
        atmosphere, the liquid will boil at a higher temperature than the normal
        boiling point. Example: In a pressure cooker, we increase the pressure
        so that the pressure inside the pressure cooker is greater than one
        atmosphere. So the water in the cooker boils at a higher temperature and
        food cooks more quickly. Conversely, if the external pressure is lower
        than one atmosphere, the liquid will boil at a lower temperature than
        the normal boiling point. Example: At higher elevations, such as hills
        and mountains, the atmospheric pressure is lower than one atmosphere, so
        water boils at a lower temperature than the normal boiling point.
      </p>

      <p>
        <strong>Molecule Types: </strong>Types of molecules in the liquid affect
        the boiling point of the liquid. If the force of attraction between the
        molecules is relatively strong, the boiling point will be relatively
        high. If the force of attraction between molecules is relatively weak,
        the boiling point will be relatively low.
        <br />
        The boiling points of some liquids at 1 atmospheric pressure are shown
        in the table.
      </p>

      <table
        align="center"
        border="1"
        cellpadding="0"
        cellspacing="0"
        class="responsive_table"
      >
        <tbody>
          <tr>
            <td valign="top" width="199">
              <strong>Compound</strong>
            </td>
            <td valign="top" width="120">
              <strong>Boiling Point</strong>
            </td>
          </tr>
          <tr>
            <td align="center" colspan="2" valign="top" width="319">
              <strong>Covalent compounds</strong>
            </td>
          </tr>
          <tr>
            <td valign="top" width="199">
              Acetone
            </td>
            <td valign="top" width="120">
              56-57°C
            </td>
          </tr>
          <tr>
            <td valign="top" width="199">
              Benzene
            </td>
            <td valign="top" width="120">
              78-80°C
            </td>
          </tr>
          <tr>
            <td valign="top" width="199">
              Chloroform
            </td>
            <td valign="top" width="120">
              60-62°C
            </td>
          </tr>
          <tr>
            <td valign="top" width="199">
              Ethyl alcohol
            </td>
            <td valign="top" width="120">
              78°C
            </td>
          </tr>
          <tr>
            <td valign="top" width="199">
              Carbon tetrachloride
            </td>
            <td valign="top" width="120">
              76.7°C
            </td>
          </tr>
          <tr>
            <td align="center" colspan="2" valign="top" width="319">
              <strong>Ionic Compounds</strong>
            </td>
          </tr>
          <tr>
            <td valign="top" width="199">
              Water
            </td>
            <td valign="top" width="120">
              100°C
            </td>
          </tr>
          <tr>
            <td valign="top" width="199">
              Nitric acid
            </td>
            <td valign="top" width="120">
              ~83°C
            </td>
          </tr>
          <tr>
            <td valign="top" width="199">
              10% NaCl solution in water
            </td>
            <td valign="top" width="120">
              ~100.5°C
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        From the above data, it is clear that, most of the ionic compounds have
        higher boiling points than the covalent compounds. This is due to the
        presence of ionic bond in ionic compounds. The addition of salt in water
        raises its boiling point.
      </p>

      <h1 className={classes.headTag}>&nbsp;Learning Outcomes</h1>

      <ol start="1" type="1">
        <li>
          Students understand the term 'boiling point' through this experiment.
        </li>
        <li>
          Students perform the experiment using water &amp; notice the physical
          change that happens during the process.
        </li>
        <li>
          Students may be able to design the same experiment with a few more
          solvents suggested by the teachers.
        </li>
        <li>
          Students realize that temperature remains constant when a liquid boils
          at its boiling point.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Boiling Point of Water. Retrieved 3
          April 2021, from amrita.olabs.edu.in/?sub=73&brch=2&sim=29&cnt=1
        </Typography>
      </div>
    </div>
  );
}
