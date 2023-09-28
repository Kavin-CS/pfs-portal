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
import DisplacementMaterial from '../../../../../../../../../assets/Images/Subjects/Chemistry/DisplacementMaterials.png';
import displacementReactionProcedure from '../../../../../../../../../assets/Images/Subjects/Chemistry/displacementReactionProcEqn1.gif';

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
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Materials required:</h1>

      <p>
        <img alt="" src={DisplacementMaterial} />
      </p>

      <h1 className={classes.headTag}>Procedure:</h1>

      <ul>
        <li>
          Clean two iron nails of sufficient size by rubbing them with sand
          paper so that their colour appears grayish.
        </li>
        <li>
          Take sufficient quantity of copper sulphate solution in two different
          test tubes.
        </li>
        <li>Clamp the test tubes to different stands.</li>
        <li>
          Tie one nail using a thread and hang in one test tube. Tie the other
          end of the thread to the stand.
        </li>
        <li>
          Keep the other nail in a Petri dish for comparison after the
          experiment.
        </li>
        <li>Keep the two test tubes undisturbed for about 15 minutes.</li>
        <li>
          Remove the iron nail immersed in the copper sulphate solution and put
          it in the Petridish.
        </li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/">Online Labs</a>)
      </h1>

      <ul>
        <li>
          Drag any one of the iron nails tied with the thread to immerse it in
          one of the test tubes containing copper sulphate solution.
        </li>
        <li>Wait for 15 minutes to complete the reaction.</li>
        <li>Click on the thread to remove the iron nail from the test tube.</li>
        <li>
          You can compare the iron nail removed from the test tube with the
          other iron nail.
        </li>
        <li>
          You can also compare the colour of the solution after the experiment
          with the solution in the other test tube.
        </li>
        <li>To see the inference, click on the inference icon.</li>
        <li>You can click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        Note: Click on the ‘HELP’ button to see the instructions.
        <br />
        &nbsp;
      </p>

      <h1 className={classes.headTag}>Observations:</h1>

      <ul>
        <li>
          There is a brown coating on the iron nail dipped in the copper
          sulphate solution. Whereas the iron nail placed in the Petri dish
          shows the grayish colour of iron.
        </li>
        <li>
          The colour of the solution of copper sulphate in which the iron nail
          was dipped changes to light greenish, whereas the colour of copper
          sulphate solution in the other test tube does not change.
        </li>
      </ul>

      <h1 className={classes.headTag}>Inference:</h1>

      <ul>
        <li>
          The brown coating on the iron nail shows that copper is deposited on
          the iron nail by displacing iron.
        </li>
        <li>
          The greenish colour of the solution in the test tube shows that Fe
          <sup>2+</sup> ions are present in the solution.
        </li>
        <li>
          This shows that iron is more reactive than copper, as Fe
          <sup>2+</sup> ions have displaced Cu<sup>2+</sup> ions from copper
          sulphate solution.
        </li>
        <li>
          This is a single displacement reaction in which copper has been
          displaced from iron from copper sulphate solution.
        </li>
      </ul>

      <p>
        <img alt="" src={displacementReactionProcedure} />
      </p>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ol>
        <li>
          Clean the iron nails by rubbing with sand paper to remove rust, dust
          or greasy surface.
        </li>
        <li>
          Keep the control experiment to compare the colour of iron nails and
          copper sulphate solution.
        </li>
        <li>
          Avoid touching copper sulphate solution or nail dipped in copper
          sulphate solution as copper sulphate is poisonous.
        </li>
      </ol>

      <p>
        <strong>So, go ahead try out the experiment….!!</strong>
      </p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Single Displacement Reaction. Retrieved
          3 March 2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=81&cnt=108
        </Typography>
      </div>
    </div>
  );
}
