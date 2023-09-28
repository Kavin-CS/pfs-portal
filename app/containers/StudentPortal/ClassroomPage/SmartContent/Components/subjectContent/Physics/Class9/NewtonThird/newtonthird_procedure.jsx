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
    // font-family: 'Noto Sans','Noto Sans Malayalam','Noto Sans Telugu', sans-serif;
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
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
      

      <h1 className={classes.headTag}>Procedure for doing real Lab:</h1>

      <ol>
        <li>
          Take two similar spring balances of different ranges, say A and B.
        </li>
        <li>Note the least count of the spring balances.</li>
        <li>
          Attach the ring of spring balance A on a hook fixed in the wall and
          the spring balance B is attached to the hook of spring balance A.
        </li>
        <li>Hold the spring balances exactly horizontal to the table.</li>
        <li>&nbsp;Pull the ring of spring balance B gently.</li>
        <li>
          Observe and note the reading of both the spring balances.Repeat the
          experiment by applying different forces.
        </li>
      </ol>

      <h1 className={classes.headTag}>Procedure for doing simulator:</h1>

      <ol>
        <li>
          Change the ‘Applied force’ slider and observe the reading on the two
          spring balances.
        </li>
        <li>Repeat the experiment by applying different forces.</li>
        <li>Click on the reset button for reset the experiment.</li>
      </ol>

      <h1 className={classes.headTag}>Observations:</h1>

      <ol>
        <li>Least count of the spring balance = value of 1 small division</li>
        <li>Least count of the spring balance A=………N</li>
        <li>Least count of the spring balance B =…………………N</li>
      </ol>

      

      <div>
        <table
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td valign="top" width="160">
                <div>No. of observations</div>
              </td>
              <td valign="top" width="160">
                <div>
                  Reading of &nbsp;B (Second spring balance) when force applied
                  (N)
                </div>
              </td>
              <td valign="top" width="160">
                <div>
                  Reading of &nbsp;A (First spring balance) when force applied
                  (N)
                </div>
              </td>
              <td valign="top" width="160">
                <div>Difference in reading of A and B (N)</div>
              </td>
            </tr>
            <tr>
              <td valign="top" width="160">
                <div>&nbsp;</div>
              </td>
              <td valign="top" width="160">
                <div>&nbsp;</div>
              </td>
              <td valign="top" width="160">
                <div>&nbsp;</div>
              </td>
              <td valign="top" width="160">
                <div>&nbsp;</div>
              </td>
            </tr>
            <tr>
              <td valign="top" width="160">
                <div>&nbsp;</div>
              </td>
              <td valign="top" width="160">
                <div>&nbsp;</div>
              </td>
              <td valign="top" width="160">
                <div>&nbsp;</div>
              </td>
              <td valign="top" width="160">
                <div>&nbsp;</div>
              </td>
            </tr>
            <tr>
              <td valign="top" width="160">
                <div>&nbsp;</div>
              </td>
              <td valign="top" width="160">
                <div>&nbsp;</div>
              </td>
              <td valign="top" width="160">
                <div>&nbsp;</div>
              </td>
              <td valign="top" width="160">
                <div>&nbsp;</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <h1 className={classes.headTag}>Result:</h1>

      <div>
        The readings on both the balances are the same in each case. Thus action
        and reaction forces are equal and opposite and act on two different
        bodies.
      </div>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ol>
        <li>Spring balance of different least count should be taken.</li>
        <li>
          The spring balance should be brought in elastic mode before doing the
          experiment.
        </li>
        <li>
          The second spring balance should not be pulled beyond its elastic
          limit.
        </li>
        <li>
          The reading of the spring balance should be taken without any parallax
          error.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Newton's Third law of Motion. Retrieved
          26 March 2021, from amrita.olabs.edu.in/?sub=1&brch=1&sim=105&cnt=2
        </Typography>
      </div>
    </div>
  );
}
