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
import CombinationProcedure from '../../../../../../../../../assets/Images/Subjects/Chemistry/CombinationProcedure.png';
import CombinationProcedure1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/CombinationProcedure1.png';

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
    <div className={classes.divContent}>
      <h1 className={classes.headTag}>Materials required:</h1>

      <p>
        <img alt="" src={CombinationProcedure} />
      </p>

      <ul />

      <h1 className={classes.headTag}>Procedure:</h1>

      <h2 className={classes.secondaryTag}>As performed in a real lab:</h2>

      <ul>
        <li>
          Take a small quantity of calcium oxide (quick lime) in a beaker.
        </li>
        <li>
          Slowly add water to the quick lime taken in the beaker. Pour enough
          water so that the quick lime remains submerged in the water.
        </li>
        <li>Touch the beaker with fingers to note the temperature.</li>
        <li>Leave the beaker undisturbed for some time.</li>
        <li>
          Take a small quantity of clear solution from the beaker in a test tube
          and blow exhaled air into the lime water.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/">Online Labs</a>)
      </h2>

      <ul>
        <li>
          Drag the spatula containing quicklime over to the empty beaker to
          transfer the contents into it.
        </li>
        <li>
          Drag the beaker containing distilled water to pour it into the beaker
          containing quick lime.
        </li>
        <li>
          Wait for some time till the quick lime reacts with water to form a
          suspension of slaked lime.
        </li>
        <li>
          You can see that the thermometer shows an increase in temperature.
        </li>
        <li>View the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          You will get a clear solution of lime water as the suspension of
          slaked lime settles down at the bottom of the beaker.
        </li>
        <li>
          Now, drag the dropper and dip it in the beaker to suck lime water in
          it and then drag it towards&nbsp;the test tube to pour the lime water
          into it.
        </li>
        <li>
          Drag the cork with the bent tube towards the test tube to close it.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Click on the blow button to blow in exhaled air into the test tube
          containing lime water.
        </li>
        <li>The lime turns milky.</li>
        <li>View the inference by clicking on the inference icon.</li>
        <li>You can click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the ‘HELP’ button to see the
        instructions
      </p>

      <h1 className={classes.headTag}>Observations:</h1>

      <ul>
        <li>
          When water is added to quick lime, a suspension of slaked lime is
          formed.
        </li>
        <li>On touching the beaker we feel it is hot.</li>
        <li>
          A clear solution appears as the suspension of slaked lime settles down
          to the bottom of the beaker.
        </li>
        <li>
          On blowing exhaled air that contains sufficient carbon dioxide, lime
          water turns milky.
        </li>
      </ul>

      <h1 className={classes.headTag}>Inferences:</h1>

      <ul>
        <li>
          Quick lime reacts vigorously with water to produce slaked lime
          releasing a large amount of heat. So the reaction is highly
          exothermic.
        </li>
      </ul>

      <p>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img alt="" src={CombinationProcedure1} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <ul>
        <li>
          Slaked lime is only slightly soluble in water, so it forms a
          suspension of slaked lime in water.
        </li>
        <li>
          The clear solution obtained after the suspension settles is called
          lime water.
        </li>
        <li>Exhaled air contains CO2 which turns lime water milky.</li>
        <li>
          Calcium oxide and water react to form only a single product, calcium
          hydroxide. So the reaction is a combination reaction.
        </li>
      </ul>

      <h1 className={classes.headTag}>Precautions:</h1>

      <p>&nbsp;</p>

      <p>
        <strong>Enjoy your experiment!!</strong>
      </p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2012). Combination Reaction. Retrieved 3 March 2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=79&cnt=174 
        </Typography>
      </div>
    </div>
  );
}
