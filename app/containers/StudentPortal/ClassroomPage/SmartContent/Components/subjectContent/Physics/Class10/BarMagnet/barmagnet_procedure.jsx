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
        <span>As performed in the lab</span>
      </h2>

      <h3 className={classes.secondaryTag}>
        <span>Materials :</span>
      </h3>

      <p>
        <span>
          <span>
            White paper sheet, drawing board, adhesive, bar magnet, iron filings
            and magnetic compass.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <span>Procedure :</span>
      </h3>

      <ol>
        <li>
          <span>
            Fix a sheet of white paper on a drawing board using some adhesive
            material.
          </span>
        </li>
        <li>
          <span>
            Place a bar magnet in the centre of it.
          </span>
        </li>
        <li>
          <span>
            Sprinkle some iron filings uniformly around the bar magnet.
          </span>
        </li>
        <li>
          <span>Now tap the board gently.</span>
        </li>
        <li>
          <span>
            Observe the pattern in which the iron filings arrange themselves.
          </span>
        </li>
        <li>
          <span>
            Use a magnetic compass to determine the direction of the field
            lines.
          </span>
        </li>
      </ol>

      <div>
        <h2 className={classes.headTag}>As performed in the simulator</h2>

        <ol>
          <li>
            <span>
              Drag the bar magnet or magnetic compass around and observe the
              deflection in needle of compass and&nbsp;
              <strong>magnetic field (B)</strong>&nbsp;acting on the magnetic
              compass.
            </span>
          </li>
          <li>
            <span>
              To view the magnetic field lines, click on&nbsp;
              <strong>Show Field Lines</strong>&nbsp;checkbox.
            </span>
          </li>
          <li>
            <span>
              For more detailed insights of the activity click on&nbsp;
              <strong>Observation</strong>&nbsp;tab.
            </span>
          </li>
        </ol>

        <h3 className={classes.secondaryTag}>Observation</h3>

        <ol>
          <li>
            <span>
              Direction in which compass needle points is the direction of the
              magnetic field.
            </span>
          </li>
          <li>
            <span>
              The strength of the magnetic field is inversely proportional to
              the distance between the field lines.
            </span>
          </li>
          <li>
            <span>
              Magnetic field lines never cross each other. It is unique at every
              point in space.
            </span>
          </li>
          <li>
            <span>
              Magnetic field lines begin at the north pole of a magnet and
              terminate on the south pole.
            </span>
          </li>
        </ol>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To study the field lines formed around a
          bar magnet. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=74&cnt=2
        </Typography>
      </div>
    </div>
  );
}
