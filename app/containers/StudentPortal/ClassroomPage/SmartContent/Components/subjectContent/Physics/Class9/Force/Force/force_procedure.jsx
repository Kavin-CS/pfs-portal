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
    <div className={classes.divContent}>
      <div class="divContent">
        <h1 className={classes.headTag}>Materials Required:</h1>

        <p>Wooden block and spring balance of 5 N.</p>

        <h1 className={classes.headTag}>Procedure in a real lab:</h1>

        <ol>
          <li>A wooden block with a hook is placed on a table.</li>
          <li>Note down the least count of the spring balance.</li>
          <li>The spring balance is attached to the hook.</li>
          <li>
            Hold the spring in such a way that the reading displayed in the
            spring balance can be noted down without any parallax error.
          </li>
          <li>
            The applied force on the spring balance is gradually increased until
            it just starts to move.
          </li>
          <li>The reading of the spring balance is noted.</li>
        </ol>

        <h1 className={classes.headTag}>Procedure using simulator:</h1>

        <ol>
          <li>
            From the combo box, select Environment, where the experiment to be
            carried out.
          </li>
          <li>Note down the least count of the spring balance.</li>
          <li>
            The user can increase the mass of the block by changing the slider
            ‘mass of the block’.
          </li>
          <li>
            The user can also change the roughness of the table by changing the
            ‘Roughness of the table’ slider.
          </li>
          <li>
            Apply force on the spring balance by changing the ‘Apply force in
            Newton’ slider.
          </li>
          <li>
            The ‘Reset’ button can be used to reset the experiment to its
            initial state.
          </li>
        </ol>

        <h1 className={classes.headTag}>Observation:</h1>

        <p>
          Least count of the spring balance = value of 1 small division =
          …….g.wt
        </p>

        <div>
          <table
            align="center"
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="responsive_table"
          >
            <tbody>
              <tr>
                <td>Trial No;</td>
                <td>Mass of the block, M (kg)</td>
                <td>Force required, F (N)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>&nbsp;</p>

        <p>
          As the mass of the block increases the force required to move the
          block is also increases.
        </p>

        <h1 className={classes.headTag}>Result:</h1>

        <p>
          Force applied to just move the block is directly proportional to the
          mass of the block.
        </p>

        <p>ie, F ∝ M</p>

        <h1 className={classes.headTag}>Precautions:</h1>

        <ol>
          <li>A suitable spring balance to pull the block must be used.</li>
          <li>
            The spring balance should be brought in elastic mode before doing
            the experiment.
          </li>
          <li>
            The reading of the spring balance should be taken without any
            parallax error.
          </li>
          <li>A smooth table or surface must be used.</li>
        </ol>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Force required to move a wooden block.
          Retrieved 3 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=108&cnt=1
        </Typography>
      </div>
    </div>
  );
}
