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
      <h1 className={classes.headTag}>Aim</h1>

      <p>
        To study the presence of suspended particulate matter in the air at
        different sites.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        Pollution is the addition of any substances into the natural environment
        that makes it harmful to humans, animals and plants. Substances that
        cause pollution to the environment are called pollutants. Pollutants can
        be either foreign substances/energies or naturally occurring
        contaminants. The three main forms of pollution are air pollution, water
        pollution and land pollution. We will look at the air pollution in this
        experiment.
      </p>

      <h2 className={classes.secondaryTag}>Air pollution</h2>

      <p>
        Air pollution is the contamination of the air, by the introduction of
        particulates, smoke or harmful gases into the atmosphere.&nbsp; Some air
        pollutants are poisonous, which makes it difficult for plants, animals
        and humans to survive. The atmosphere in highly populated areas are very
        rich in dust, smoke and suspended particular matter, all due to
        vehicular exhausts and industrial emission. Air pollution causes major
        respiratory and heart problems in our bodies.
      </p>

      <h2 className={classes.secondaryTag}>
        Let’s look at some of the major air pollutants.
      </h2>

      <p>Major air pollutants are following:</p>

      <ul>
        <li>Carbon Monoxide: Emitted from combustion processes.</li>
        <li>
          Ground-level Ozone: Secondary pollutant formed by chemical reactions
          between oxides of nitrogen (NOx) and volatile organic compounds (VOC)
          in the presence of sunlight.
        </li>
        <li>
          Lead: Lead can be released into the air through metal refineries,
          battery manufacturing, volcanic eruptions, sea spray and bushfires.
        </li>
        <li>
          Nitrogen Dioxide: NO<sub>2</sub> forms from power plants, by fuel
          combustion and wood burning.
        </li>
        <li>
          Particulate Matter: Particulate matter is a sum of all extremely small
          particles and liquid droplets suspended in air. This is formed through
          chemical reactions, fuel combustion (e.g., burning coal, wood,
          diesel), industrial processes and farming (plowing, field burning).
        </li>
      </ul>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>Students understand the term pollution.</li>
        <li>Students understand different air pollutants.</li>
        <li>
          Students do the experiment better in the real lab having gone through
          the animation and simulation.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of pollutants in Air. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=18&sim=240&cnt=1
        </Typography>
      </div>
    </div>
  );
}
