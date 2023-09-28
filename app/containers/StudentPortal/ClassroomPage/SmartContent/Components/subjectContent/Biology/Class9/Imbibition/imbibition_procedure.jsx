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

import ImbibitionPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Imbibition1/imbibition-pro1.jpg';
import ImbibitionPro2 from '../../../../../../../../../assets/Images/Subjects/Biology/Imbibition1/imbibition-pro2.png';
import ImbibitionPro3 from '../../../../../../../../../assets/Images/Subjects/Biology/Imbibition1/imbibition-pro3.png';

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
      <h1 className={classes.headTag}>Materials Required</h1>

      <p>
        <img alt="" src={ImbibitionPro1} />
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>Take about 20 dry raisins that have intact stalks.</li>
        <li>Weigh the raisins on an electronic balance and note the weight.</li>
        <li>Pour some distilled water into a beaker.</li>
        <li>Transfer the raisins from the balance into the beaker.</li>
        <li>Allow the raisins to soak for 2-3 hours.</li>
        <li>
          Remove the swollen raisins from the water using a spatula and put them
          in a Petri dish containing a blotting paper.
        </li>
        <li>Gently dry the raisins using another blotting paper.</li>
        <li>
          Weigh the swollen raisins on the electronic balance and note the
          weight.
        </li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <p>
        You can select the measurement method by clicking on any one of the
        icon.
      </p>

      <ul>
        <li>Measure by weight</li>
        <li>Measure by volume</li>
      </ul>

      <h2 className={classes.secondaryTag}>Measure by weight</h2>

      <ul>
        <li>
          Select the sample (Raisins, Pea seeds and Gram seeds) by clicking on
          the required sample’s icon.
        </li>
        <li>Click and drag the sample to place it on the weighing machine.</li>
        <li>
          If you require more of the sample to weigh, you can drag it multiple
          times onto the weighing machine.
        </li>
        <li>Note the weight of the sample, as the initial weight (x).</li>
        <li>The initial weight (x) can be entered in the worksheet.</li>
        <li>
          Click and drag the weighed sample from the weighing machine and drop
          it into the beaker containing distilled water, to soak it.
        </li>
        <li>
          After the soak time is complete (the clock stops once complete), click
          and drag the swollen sample back onto the weighing machine to weigh it
          again.
        </li>
        <li>Note the weight of the swollen sample, as the final weight (y).</li>
        <li>The final weight (y) can be entered in the worksheet.</li>
        <li>
          Based on the values entered, the worksheet gives the percentage of
          water absorbed by the sample.
        </li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Measure by volume</h2>

      <ul>
        <li>
          Select the sample (Raisins, Pea seeds and Gram seeds) by clicking on
          the required sample’s icon.
        </li>
        <li>
          Click, drag and drop the sample into the measuring cylinder containing
          30 ml distilled water, so as to allow it to soak.
        </li>
        <li>
          If you require more of the sample, you can drag it and drop it into
          the measuring jar multiple times.
        </li>
        <li>The raise in the water level is noted as initial volume (x).</li>
        <li>The initial volume (x) can be entered in the worksheet.</li>
        <li>
          Click on the sample in the measuring jar and drag it back to place it
          in the watch glass.
        </li>
        <li>
          The measuring cylinder is again filled with distilled water, up to
          30ml.
        </li>
        <li>
          Now click and drag the sample on the watch glass and drop it into the
          measuring jar again.
        </li>
        <li>The raise in the water level is noted as the final volume (y).</li>
        <li>The final volume (y) can be entered in the worksheet.</li>
        <li>
          Based on the values entered, the worksheet gives the percentage of
          water absorbed by the sample.
        </li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <ul>
        <li>The weight of dry raisins is,x… gm</li>
        <li>
          The weight of swollen raisins is, y…gm
          <br />
          &nbsp;
        </li>
      </ul>

      <h1 className={classes.headTag}>Calculations</h1>

      <ul>
        <li>
          Weight of water absorbed by the raisins ={' '}
          <img
            alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfenced»«mrow»«mi»y«/mi»«mo»-«/mo»«mi»x«/mi»«/mrow»«/mfenced»«mi»g«/mi»«mi»m«/mi»«/math»"
            class="Wirisformula"
            src={ImbibitionPro2}
            title="Double click to edit"
          />
        </li>
        <li>
          Percentage of water absorbed by the raisins ={' '}
          <img
            alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mrow»«mo»(«/mo»«mi»y«/mi»«mo»-«/mo»«mi»x«/mi»«mo»)«/mo»«/mrow»«mi»x«/mi»«/mfrac»«/math»"
            class="Wirisformula"
            src={ImbibitionPro3}
            title="Double click to edit"
          />
        </li>
      </ul>

      <h1 className={classes.headTag}>Precautions</h1>

      <p>Raisins should be clean and dry and should have intact stalks.</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Imbibition by Raisins. Retrieved 7 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=123&cnt=2
        </Typography>
      </div>
    </div>
  );
}
