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
      <h1 className={classes.headTag}>Materials required:&nbsp;</h1>

      <ul>
        <li>Vegetable oil (castor oil, olive oil, coconut oil or palm oil)</li>
        <li>20% sodium hydroxide solution</li>
        <li>Common salt</li>
        <li>Measuring cylinders</li>
        <li>Glass beaker (250 ml)</li>
        <li>Blue and red litmus papers</li>
        <li>Glass rod</li>
        <li>Bunsen burner</li>
        <li>Wire gauze</li>
        <li>Tripod stand</li>
        <li>Filter funnel</li>
        <li>Filter paper</li>
        <li>Spatula</li>
        <li>Knife</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <ul>
        <li>
          Take 25 ml of coconut oil in a measuring cylinder and pour it into a
          250 ml glass beaker.
        </li>
        <li>
          Measure 30 ml of 20% NaOH solution in another measuring cylinder and
          add it into the beaker containing vegetable oil.
        </li>
        <li>Vigorously stir the mixture using a glass rod.</li>
        <li>
          Touch the beaker from outside.&nbsp; It is observed that the beaker is
          warm.
        </li>
        <li>Place the beaker on a wire gauze placed over a tripod stand.</li>
        <li>
          Heat the beaker using a Bunsen burner till the mixture become a
          whitish paste.
        </li>
        <li>Remove the beaker from the flame and allow it to cool.</li>
        <li>Dip a red litmus paper in the suspension formed.</li>
        <li>
          When dipped in the suspension, the red litmus paper changes its colour
          to blue.
        </li>
        <li>Dip a blue litmus paper in the suspension.</li>
        <li>The colour of blue litmus paper remains the same.</li>
        <li>
          To the above suspension, add 15g of common salt and stir it well with
          a glass rod.
        </li>
        <li>
          After adding common salt, soap in the suspension gets precipitated out
          as solid.
        </li>
        <li>
          Take a filter funnel and place a filter paper in it and fix it in a
          stand.
        </li>
        <li>Place a beaker below the funnel.</li>
        <li>
          Pour the contents of the beaker into the funnel over a glass rod and
          filter the contents of the beaker.
        </li>
        <li>After filtration, soap is left behind in the filter paper.</li>
        <li>
          Transfer the soap into another filter paper using a spatula and dry it
          by pressing with another filter paper.
        </li>
        <li>Then, cut it into desired shape with a knife.</li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure:</h1>

      <ul>
        <li>
          To start the simulator, click on the measuring cylinder containing 25
          ml coconut oil to pour it into the beaker.
        </li>
        <li>
          Click on the measuring cylinder containing 30 ml 20% NaOH solution to
          pour it into the beaker containing coconut oil.
        </li>
        <li>Click on the glass rod to stir the mixture.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>Click on the 'NEXT STEP' button to go to the next process.</li>
        <li>Turn on the burner by clicking on the 'knob' of the burner.</li>
        <li>
          Click on the beaker to place it over the Bunsen burner and heat it.
        </li>
        <li>Click on the information icon to see the inference.</li>
        <li>
          Click on the beaker to place it back from the burner for allowing it
          to cool.
        </li>
        <li>Turn off the burner by clicking on the 'knob' of the burner.</li>
        <li>Click on the 'NEXT STEP' button to go to the next process.</li>
        <li>
          Click on the red litmus paper to dip it into the soap suspension.
        </li>
        <li>Click on the information icon to see the inference.</li>
        <li>
          Click on the blue litmus paper to dip it into the soap suspension.
        </li>
        <li>Click on the information icon to see the inference.</li>
        <li>
          Click on the watch glass containing common salt to add it into the
          soap suspension.
        </li>
        <li>Click on the glass rod to stir the mixture.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>Click on the 'NEXT STEP' button to go to the next process.</li>
        <li>Click on the beaker to filter the contents.</li>
        <li>Click on the spatula to take soap from the funnel.</li>
        <li>Click on the filter paper to dry the soap.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>
          You can redo the experiment anytime by clicking on the 'Reset' button.
        </li>
      </ul>

      <h1 className={classes.headTag}>Observations:</h1>

      <ul>
        <li>
          When 20% NaOH solution was added to the beaker containing vegetable
          oil, it was observed that the beaker was warm when touched from the
          outside.
        </li>
        <li>
          A whitish suspension was formed by heating the mixture of vegetable
          oil and 20% NaOH solution.
        </li>
        <li>
          Red litmus paper changed colour to blue when dipped in
          suspension.&nbsp; Blue litmus paper was not affected by the
          suspension.
        </li>
        <li>
          After adding common salt, the soap in suspension form precipitated out
          as solid.
        </li>
      </ul>

      <h1 className={classes.headTag}>Conclusions:</h1>

      <ul>
        <li>
          The reaction between vegetable oil and sodium hydroxide solution is
          exothermic in nature because heat is liberated during the reaction.
        </li>
        <li>
          The white suspension formed is made up of soap and glycerol. The
          process of formation of soap is called saponification.
        </li>
        <li>
          Test using red and blue litmus papers shows that soap suspension is
          basic in nature and not acidic in nature.
        </li>
        <li>
          The process of precipitation of soap from the suspension is called
          salting out.
        </li>
      </ul>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ul>
        <li>
          Do not touch the NaOH solution with bare hands as it may burn the
          skin.
        </li>
        <li>
          Do not breathe the fumes of NaOH or let the fumes get in your eyes.
          Keep the windows of the laboratory open.
        </li>
        <li>The mixture of oil and alkali should be stirred thoroughly.</li>
        <li>
          It is necessary to stir the soap solution after adding common salt to
          it, in order to precipitate out the soap in solid form.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Saponification-The process of Making
          Soap. Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=119&cnt=2
        </Typography>
      </div>
    </div>
  );
}
