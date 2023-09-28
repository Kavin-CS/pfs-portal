import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import MixtureSeparationPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureSeparation1/mixtureseparation-pro1.png';

const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    paddingTop: 0,
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

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Materials Required:</h1>

      <p>
        <img
          alt=""
          src={MixtureSeparationPro1}
          width="90%;"
        />
      </p>

      <h1 className={classes.headTag}>The Procedure:</h1>

      <h2 className={classes.secondaryTag}>Preparing the mixture of ammonium chloride, sand and common salt:</h2>

      <p>
        Take a small quantity of a mixture of sand, common salt and ammonium
        chloride in a china dish.
      </p>

      <h2 className={classes.secondaryTag}>Separation of Ammonium Chloride:</h2>

      <h3 className={classes.secondaryTag}>
        <strong>Real Lab Procedure:</strong>
      </h3>

      <ul type="disc">
        <li>
          Place the china dish on a wire gauze that is placed over a tripod
          stand.
        </li>
        <li>
          Cover the china dish with an inverted glass funnel and plug in a
          little cotton at the opening of the stem of the funnel.
        </li>
        <li>
          On heating the mixture in the china dish, white fumes evolve and rise
          inside the funnel.
        </li>
        <li>
          Stop heating when the white fumes stop rising and allow the funnel to
          cool.
        </li>
        <li>
          After cooling, remove the funnel from the china dish and using a
          spatula, transfer the solid ammonium chloride sticking on the walls of
          the funnel into a watch glass.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Inference:</h3>

      <ul>
        <li>
          Ammonium chloride sublime and can be separated from the mixture of
          salt and sand by the process of sublimation.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Separation of sand particles:</h2>

      <h3 className={classes.secondaryTag}>Real Lab Procedure:</h3>

      <ul type="disc">
        <li>
          Transfer the contents of the china dish into a beaker and pour some
          distilled water into it and stir it well using a glass rod.
        </li>
        <li>Filter the contents of the funnel into another beaker.</li>
        <li>
          Transfer the sand particles left on the filter paper into a watch
          glass using a spatula.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Inference:</h3>

      <p>
        Sand can be separated from the mixture of sand and salt by dissolving
        salt in water and then by filtration.
      </p>

      <h2 className={classes.secondaryTag}>Separation of salt:</h2>

      <h3 className={classes.secondaryTag}>Real Lab Procedure:</h3>

      <ul type="disc">
        <li>
          Transfer the filtrate in the beaker into a china dish and strongly
          heat it.
        </li>
        <li>
          After some time, the salt is left as a residue in the china dish;
          transfer it into another watch glass.
        </li>
        <li>
          Finally label the three components that have been separated from the
          mixture.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Inference:</h3>

      <ul>
        <li>Salt can be separated through the process of evaporation.</li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/">Online Labs</a>)
      </h2>

      <p>
        You can select the mixture from the ‘Select the mixture’ drop down list.
      </p>

      <p>
        <strong>Step 1: Sublimation</strong>
      </p>

      <ul>
        <li>
          You can separate the sublimating substance (Naphthalene / Anthracene /
          Camphor / Ammonium chloride) from the mixture through the process of
          sublimation.
        </li>
        <li>To start sublimation, click on the ‘Start Sublimation’ button.</li>
        <li>
          To heat the mixture in the china dish, drag the china dish over the
          Bunsen burner.
        </li>
        <li>
          Drag the glass funnel over the china dish and cover it, to collect the
          fumes of the sublimating substance.
        </li>
        <li>
          You can go to the next process by clicking on the ‘Next’ button.
        </li>
        <li>
          Drag the spatula into the finnel to collect the sublimed substance
          sticking inside it.
        </li>
        <li>
          Once collected, drag the spatula back to put the substance in the
          watch glass.
        </li>
        <li>You can click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Step 2: Filtration</strong>
      </p>

      <ul>
        <li>
          You can separate soil / sand from the mixture through the process of
          filtration.
        </li>
        <li>
          Drag the china dish towards the beaker containing water to transfer
          the mixture into it.
        </li>
        <li>Click on the glass rod to stir the contents in the beaker.</li>
        <li>
          To filter the contents in the beaker, drag it towards the funnel.
        </li>
        <li>
          You can go to the next process by clicking on the ‘Next’ button.
        </li>
        <li>
          To collect the soil / sand from the funnel, drag the spatula towards
          it.
        </li>
        <li>
          Once collected, drag the spatula back to put the substance in the
          watch glass.
        </li>
        <li>You can click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Step 3: Evaporation</strong>
      </p>

      <ul>
        <li>
          You can separate sugar / salt from the mixture through the process of
          evaporation.
        </li>
        <li>
          Drag the beaker towards the china dish to pour the contents of the
          beaker into the china dish.
        </li>
        <li>Wait for sometime until the water evaporates.</li>
        <li>
          Drag the spatula towards the china dish to collect the sugar / salt
          from the china dish.
        </li>
        <li>
          Once collected, drag the spatula back to put the substance in the
          watch glass.
        </li>
        <li>You can click on the inference icon to see the inference.</li>
      </ul>

      <p>Click on the ‘Reset’ button to redo the experiment.</p>

      <p>
        <strong>Note:</strong> Click on the ‘HELP’ button to see the
        instructions.
      </p>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ul>
        <li>Always heat china dish on a wire gauze.</li>
        <li>
          Plue the opening of the stem of the funnel with cotton while heating
          substances which sublimate.
        </li>
        <li>
          Always separate sublimate from the mixture first or before dissolving
          salt in water.
        </li>
        <li>
          While filtering a solution drop the contents along a glass rod into
          the funnel.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Separation of Components of a Mixture.
          Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=39&cnt=2
        </Typography>
      </div>
    </div>
  );
}
