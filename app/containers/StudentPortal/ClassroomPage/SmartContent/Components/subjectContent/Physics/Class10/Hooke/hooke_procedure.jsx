import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

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
      <p>
        <strong>
          <span>
            <span>
              As performed in the lab
            </span>
          </span>
        </strong>
      </p>

      <p>
        <span>
          <strong>Materials Required -</strong>
        </span>
      </p>

      <p>
        <span>
          <span>
            A spring, a measuring ruler and weights.
          </span>
        </span>
      </p>

      <p>
        <strong>
          <span>
            <span>Procedure -</span>
          </span>
        </strong>
      </p>

      <ol>
        <li>
          <span>
            <span>
              Hang a spring from a horizontal metal rod.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              <span>
                Attach a mass hanger directly to the bottom of the hanging
                spring and record the position of the bottom of the mass hanger
                relative to a meter stick.
              </span>
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              <span>
                Hang a weight from the spring and wait for it to come to rest.
              </span>
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Record the final position of the mass hanger.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Calculate increase in length and&nbsp;and note in the "Observation
              Table".
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Repeat the above steps with different weights.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              <span>
                Plot a graph with your readings. Force applied (mass X gravity)
                vs Increase in length (Initial length - Final Length).
              </span>
            </span>
          </span>
        </li>
      </ol>

      <p>
        <span>
          <span>
            <strong>As performed in the simulator</strong>
          </span>
        </span>
      </p>

      <ol>
        <li>
          <span>
            <span>
              Click on the weight to be attached to the spring.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Allow the spring to come to rest.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Record the reading on the scale in the "Observation Table".
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Repeat the procedure for other weights.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Once all the readings are recorded in the "Observation Table",
              click on "Plot" button to plot the graph.&nbsp;
            </span>
          </span>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). Verification of Hooke's Law. Retrieved 25
          March 2021, from cdac.olabs.edu.in/?sub=74&brch=9&sim=68&cnt=2
        </Typography>
      </div>
    </div>
  );
}
