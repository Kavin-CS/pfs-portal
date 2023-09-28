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

import CO2Pro1 from '../../../../../../../../../assets/Images/Subjects/Biology/CO21/co2-pro1.jpg';
import CO2Pro2 from '../../../../../../../../../assets/Images/Subjects/Biology/CO21/co2-pro2.jpg';

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
      <h1 className={classes.headTag}>Respiration in Plants</h1>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img alt="" src={CO2Pro1} />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ol>
        <li>
          Using a spatula, place about 30 germinating bean seeds in a conical
          flask.
        </li>
        <li>
          Pour 4ml of potassium hydroxide (KOH) solution into a measuring
          cylinder.
        </li>
        <li>
          Transfer the KOH solution from the measuring cylinder into a small
          test tube.
        </li>
        <li>Tie a cotton thread around the neck of the test tube.</li>
        <li>
          Suspend the test tube in the conical flask above the germinating
          seeds.
        </li>
        <li>Close the mouth of the conical flask with a cork.</li>
        <li>
          Insert one end of a delivery tube into the conical flask through the
          cork and dip the other in a beaker containing water.
        </li>
        <li>
          Take some Vaseline with your finger and apply this on the cork to make
          the apparatus air tight.
        </li>
        <li>Keep the apparatus undisturbed for two hours.</li>
      </ol>

      <h2 className={classes.secondaryTag}>Observation</h2>

      <p>
        After two hours, you will see that the level of water has risen in the
        delivery tube at the end dipped in the beaker of water.
      </p>

      <h2 className={classes.secondaryTag}>Conclusion</h2>

      <p>
        The germinating seeds in the conical flask release CO<sub>2</sub> during
        respiration, which is absorbed by the KOH solution kept in the small
        test tube. This creates a partial vacuum in the flask that forces the
        water up the delivery tube. Thus, it proves that germinating seeds
        produce carbon dioxide during respiration.
      </p>

      <h2 className={classes.secondaryTag}>Precautions:</h2>

      <ul>
        <li>
          Germination in seeds can be done by soaking them overnight and then
          keeping them in moist cotton wool for 1-2 days.
        </li>
        <li>Freshly prepared potassium hydroxide should be used.</li>
        <li>
          The apparatus should be air tight to prevent escape of CO<sub>2</sub>.
        </li>
      </ul>

      <h1 className={classes.headTag}>Respiration in animals</h1>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img alt="" src={CO2Pro2} />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ol>
        <li>
          Pour freshly prepared lime water into a test tube so that it is{' '}
          <sup>3</sup>/<sub>4</sub> full.
        </li>
        <li>
          Take a cork with two holes and fix it into the mouth of the test tube.
        </li>
        <li>
          Insert the glass tubes, let us name them A and B, into the test tube
          through the cork, such that end of the glass tube A dips in the lime
          water.
        </li>
        <li>
          Breathe out air with full force by putting your mouth at the end of
          tube A.
        </li>
        <li>Continue doing this vigorously for at least 1 minute.</li>
      </ol>

      <h2 className={classes.secondaryTag}>Observation</h2>

      <p>
        The bubbles of the air breathed out gradually turn the lime water milky.
      </p>

      <h2 className={classes.secondaryTag}>Conclusion</h2>

      <p>
        The only gas that can turn lime water milky is carbon dioxide. When
        carbon dioxide reacts with lime water, it forms calcium carbonate (CaCO
        <sub>3</sub>), thus giving lime water its milky appearance. So, we can
        conclude that humans and animals give out CO<sub>2</sub> during
        respiration.
      </p>

      <h2 className={classes.secondaryTag}>Precautions</h2>

      <ul>
        <li>Use freshly prepared calcium carbonate solution.</li>
        <li>Breathe out air vigorously for at least 1 minute.</li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <p>
        You can select the test - respiration in animals or plants, by clicking
        on the corresponding icon - ‘Animals’ or ‘Plants’.
      </p>

      <h2 className={classes.secondaryTag}>Respiration in Plants</h2>

      <ul>
        <li>
          You can increase or decrease the number of seeds inside the beaker by
          moving the ‘Number of seeds’ slider to the right and left
          respectively.
        </li>
        <li>
          The same way, you can increase or decrease the temperature by moving
          the ‘Temperature’ slider to the right and left respectively.
        </li>
        <li>Click on the ‘Start’ button to start the experiment.</li>
        <li>
          You can observe that the level of water in the delivery tube rises at
          the end dipped in the beaker.
        </li>
        <li>A timer is shown and you need to wait till the timer stops.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Respiration in Animals</h2>

      <p>
        To study respiration in a human being or a grasshopper, select your
        choice from the ‘Select the animal’ drop down list.
      </p>

      <h3 className={classes.secondaryTag}>Respiration in the Grasshopper:</h3>

      <ul>
        <li>
          You can increase or decrease the number of grasshoppers inside the
          beaker by moving the ‘Number of grasshoppers’ slider to the right and
          left respectively.
        </li>
        <li>
          The same way, you can increase or decrease the temperature by moving
          the ‘Temperature’ slider to the right and left respectively.
        </li>
        <li>Click on the ‘Start’ button to start the experiment.</li>
        <li>
          You can observe that the level of water in the delivery tube rises at
          the end dipped in the beaker.
        </li>
        <li>A timer is shown and you need to wait till the timer stops.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Respiration in Human Beings:</h3>

      <ul>
        <li>
          You can select the indicator - Lime water or BTB (Bromothymol Blue)
          from the ‘Select the indicator’ drop down list
        </li>
        <li>Click on the ‘Start’ button to start the experiment.</li>
        <li>A timer is shown and you need to wait till the timer stops.</li>
        <li>
          Observe the solution (indicator) in the test as the bubbles of air
          pass through the delivery tube.
        </li>
        <li>
          If the indicator chosen was lime water, it gradually turns milky, and
          if the chosen indicator was BTB (Bromothymol Blue), it turns green.
        </li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Role of Carbon Dioxide during
          Respiration. Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=136&cnt=2
        </Typography>
      </div>
    </div>
  );
}
