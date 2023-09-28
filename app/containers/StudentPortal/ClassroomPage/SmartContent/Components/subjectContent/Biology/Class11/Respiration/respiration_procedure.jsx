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
import RespirationPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Respiration1/respiration-pro1.jpg';

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
      <h1 className={classes.headTag}>To do the experiment, we require:</h1>

      <p>
        <img alt="" src={RespirationPro1} width="80%;" />
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure&nbsp;&nbsp;</h1>

      <ul>
        <li>
          Using a spatula,&nbsp; place about 30 germinating bean seeds in a
          conical flask.
        </li>
        <li>
          Pour 4ml of potassium hydroxide solution into a measuring cylinder.
        </li>
        <li>
          Transfer the potassium hydroxide solution from the measuring cylinder
          into a small test tube.
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
          Observe the position of the water level in the delivery tube. This is
          the initial reading of the water level in the delivery tube.
        </li>
        <li>Use your finger to take some petroleum jelly.</li>
        <li>
          Apply the petroleum jelly on the cork to make the apparatus air tight.
        </li>
        <li>Keep the apparatus undisturbed for two hours.</li>
        <li>Repeat the same procedure for the groundnut and wheat.</li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure (as performed through the Online Labs)</h1>

      <ul>
        <li>
          To change the type of seed, select from the drop down list, ‘Select
          the seeds’.
        </li>
        <li>
          You can increase or decrease the number of seeds inside the beaker by
          moving the ‘Number of seeds’ slider accordingly.
        </li>
        <li>
          Increase or decrease the temperature using the slider, ‘Temperature’.
        </li>
        <li>Click on the ‘Start’ button to begin the experiment.</li>
        <li>
          You can observe that the level of water rises in the delivery tube
          dipped in the beaker.
        </li>
        <li>A timer is shown. Wait till the timer stops.</li>
        <li>
          Measure the rise of water level in the delivery tube and enter the
          values in the test box, ‘Rising level of water (ml):’ on the left
          pane.
        </li>
        <li>Click on the submit button to verify your result.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Observation</h1>

      <p>
        After two hours, you will see that the level of water has risen in the
        delivery tube at the end dipped in the beaker of water.&nbsp; Note this
        level as the final level.
      </p>

      <h1 className={classes.headTag}>Conclusion</h1>

      <p>
        The rise in water level at the end of the delivery tube dipped in the
        beaker proves that germinating seeds release carbon dioxide during
        respiration. In the case of groundnut and bean seeds, the rise in water
        level is relatively lesser because these seeds use fat and proteins as
        respiratory substrate and release a very small amount of carbon dioxide.
        <br />
        But in the case wheat grains, the rise in water level is greater because
        they use carbohydrate as respiratory substrate. When carbohydrates are
        used as substrate, equal amounts of carbon dioxide and oxygen are
        evolved and consumed.
      </p>

      <h1 className={classes.headTag}>Precautions</h1>

      <p>
        Ensure all connections are airtight.
        <br />
        Use a freshly prepared concentrated solution of potassium hydroxide.
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Rate of Respiration. Retrieved 5 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=204&cnt=2
        </Typography>
      </div>
    </div>
  );
}
