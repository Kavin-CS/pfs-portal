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
import DoubleDisplacementPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/DoubleDisplacement1/doubledisplacement-pro1.png';
import DoubleDisplacementPro2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/DoubleDisplacement1/doubledisplacement-pro2.gif';

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
      <h1 className={classes.headTag}>Materials required:</h1>

      <p>
        <img
          alt=""
          src={DoubleDisplacementPro1}
        />
      </p>

      <h1 className={classes.headTag}>Procedure:</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:</h2>

      <ul>
        <li>Take 2ml of sodium sulphate solution in a test tube.</li>
        <li>Take 1ml of barium chloride solution in another test tube.</li>
        <li>Add barium chloride solution to sodium sulphate solution.</li>
        <li>Observe the change.</li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/">Online Labs</a>)
      </h2>

      <ul>
        <li>
          To pour barium chloride solution (BaCl<sub>2</sub>) into the test
          tube, drag the dropper towards it.
        </li>
        <li>
          To pour sodium sulphate solution (Na<sub>2</sub>SO<sub>4</sub>) into
          the same test tube, drag the dropper towards it.
        </li>
        <li>
          You can see that a white precipitate is formed in the test tube.
        </li>
        <li>See the inference by clicking on the inference icon.</li>
        <li>To see the zoomed view of the test tube, click on it.</li>
        <li>To go back to the previous screen, click on the ‘Back’ button.</li>
        <li>
          Drag the test tube towards the beaker to decant the upper solution
          into it.
        </li>
        <li>
          To pour dilute HCl into the test tube containing the white
          precipitate, drag the dropper towards it.
        </li>
        <li>
          After shaking, you can view the zoomed view of the test tube by
          clicking on it.
        </li>
        <li>To go back to the previous screen, click on the 'Back' button.</li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>You can click the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the ‘HELP’ button to see the
        instructions.
      </p>

      <h1 className={classes.headTag}>Observation:</h1>

      <ul>
        <li>A white precipitate appears that is insoluble in dilute HCl.</li>
      </ul>

      <h1 className={classes.headTag}>Inference:</h1>

      <ul>
        <li>
          When sodium sulphate chemically reacts with barium chloride in the
          form of their aqueous solutions, white precipitate of barium sulphate
          appears. This confirms the presence of sulphate (SO4<sup>2-</sup>)
          ions.
        </li>
      </ul>

      <p>
        <img
          alt=""
          src={DoubleDisplacementPro2}
        />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <ul>
        <li>
          It is a double displacement reaction in which sulphate ions are
          displaced by chloride ions and chloride ions are displaced by sulphate
          ions.
        </li>
      </ul>

      <h1 className={classes.headTag}>&nbsp;Precautions:</h1>

      <ol>
        <li>Use the chemicals judiciously.</li>
        <li>
          Keep the mouth of the test tube away from your face and also from
          other classmates.
        </li>
        <li>Handle the acids and alkali carefully.</li>
      </ol>

      <p>
        <strong>So, try it out and “Have a safe lab!”</strong>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Double Displacement Reaction. Retrieved
          1 April 2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=82&cnt=2
        </Typography>
      </div>
    </div>
  );
}
