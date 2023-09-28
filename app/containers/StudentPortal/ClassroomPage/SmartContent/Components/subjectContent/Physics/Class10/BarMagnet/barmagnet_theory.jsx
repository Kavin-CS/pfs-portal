import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import BarMagnetThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/BarMagnet1/barmagnet-the1.jpg';
const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    textAlign: 'left',
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
  },
  OhmsLawImg: {
    width: '350px',
    height: '210px',
  },
  headTag: {
    fontSize: 20,
  },
  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h2 className={classes.headTag}>Objective</h2>

      <p>To study field lines formed around the bar magnet.</p>

      <h2 className={classes.headTag}>Theory</h2>

      <ul>
        <li>Magnets have two types of poles: north poles and south poles.</li>
        <li>The magnetic strength at the pole is the strongest.</li>
        <li>
          When a bar magnet is suspended freely in a horizontal position, the
          bar magnet will align itself in north-south direction, where the north
          pole of the magnet points to the north pole of the Earth.
        </li>
        <li>Like poles repel and unlike poles attract.</li>
        <li>
          Magnetic materials such as iron, nickel, steel etc. are attarcted by
          the magnets.
        </li>
        <li>
          Attractive and repulsive force of magnet depends how strong the magnet
          is.
        </li>
        <li>
          Magnetic force also depends on distance between the magnet and the
          object.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>
        <strong>
          Behaviour of Bar Magnets in possible pole configurations.
        </strong>
      </h3>


      <div>
        <img
          alt=""
          height="441"
          src={BarMagnetThe1}
          width="351"
        />
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To study the field lines formed around a
          bar magnet. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=74&cnt=1
        </Typography>
      </div>
    </div>
  );
}
