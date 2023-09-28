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
  animationWrap: {
    width: ' 90%',
    margin: '0 auto',
  },
  header: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.header}>Books:</h1>

      <ul>
        <li>
          &nbsp;Laboratory Manual Biology for class XI - Published by NCERT
        </li>
      </ul>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          <a href="http://en.wikipedia.org/wiki/Stoma" target="_blank">
            en.wikipedia.org/wiki/Stoma
          </a>
        </li>
        <li>
          <a
            href="http://www.saps.org.uk/secondary/teaching-resources/299-measuring-stomatal-density-"
            target="_blank"
          >
            www.saps.org.uk/secondary/teaching-resources/299-measuring-stomatal-density-
          </a>
        </li>
        <li>
          <a
            href="http://evolution.berkeley.edu/evolibrary/article/mcelwain_03"
            target="_blank"
          >
            evolution.berkeley.edu/evolibrary/article/mcelwain_03
          </a>
        </li>
        <li>
          <a
            href="http://www.academia.edu/2245893/DISTRIBUTION_DENSITY_AND_TYPES_OF_STOMATA_IN_SOME_CLEOME_SPECIES"
            target="_blank"
          >
            www.academia.edu/2245893/DISTRIBUTION_DENSITY_AND_TYPES_OF_STOMATA_IN_SOME_CLEOME_SPECIES
          </a>
        </li>
        <li>
          <a href="http://www.eoearth.org/view/article/156262/" target="_blank">
            www.eoearth.org/view/article/156262/
          </a>
        </li>
        <li>
          <a
            href="http://www.biologyjunction.com/leaf_stomata_lab.htm"
            target="_blank"
          >
            www.biologyjunction.com/leaf_stomata_lab.htm
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of distribution of stomata.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=7&sim=128&cnt=408
        </Typography>
      </div>
    </div>
  );
}
