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
      <h2 className={classes.headTag}>
        <span>
          As performed in the real lab:
        </span>
      </h2>

      <h3 className={classes.secondaryTag}>
        <span>
          Apparatus:&nbsp;
        </span>
      </h3>

      <p>
        <span>
          <span>
            A horse shoe magnet, a small aluminium rod, an ammeter,&nbsp;two
            wooden stands,&nbsp;two connecting wires, a battery, a plug key.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <span>Procedure:</span>
      </h3>

      <ol>
        <li>
          <span>
            <span>
              Suspend the aluminium rod horizontally from the stand using clean
              connecting wires.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Place the horse-shoe magnet in such a way that the rod lies in
              between both the poles such that south pole is vertically above
              and north pole is vertically below the rod.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Connect the rod in series to the battery, key and the rheostat.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Now switch on the current and observe the displacement of the rod.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Reverse the direction of the current and observe the change in the
              displacement of the rod.&nbsp;
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.headTag}>
        <span>
          As performed in the simulator:
        </span>
      </h2>

      <ol>
        <li>
          <span>
            <span>
              Click on "Switch" to start/stop the flow of current through the
              circuit.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Observe and note the change in the position of the aluminum rod as
              the current flows through the circuit.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              To reverse the direction of the current switch off the circuit,
              then click on the wire.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Repeat the procedure.
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.headTag}>
        <span>
          Observation &amp; Inference:
        </span>
      </h2>

      <h3 className={classes.secondaryTag}>
        <span>
          Observation:
        </span>
      </h3>

      <p>
        <span>
          <span>
            On passing current through a straight conductor (aluminium rod) kept
            in a magnetic field, the conductor gets displaced upward or
            downward.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <span>Inference:</span>
      </h3>

      <ol>
        <li>
          <span>
            <span>
              The direction of displacement of the conductor rod changes with
              the change in the direction of current through it.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              The displacement of aluminium rod is in accordance with Fleming’s
              left-hand rule.
            </span>
          </span>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Force on a current carrying conductor in a
          magnetic field. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=241&cnt=2
        </Typography>
      </div>
    </div>
  );
}
