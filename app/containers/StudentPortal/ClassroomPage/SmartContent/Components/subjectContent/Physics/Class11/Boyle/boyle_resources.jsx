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
  headTag: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Books</h1>

      <ul>
        <li>Laboratory Manual Physics for class XI - Published by NCERT</li>
        <li>Chemistry Text book Part I for class XI by NCERT</li>
      </ul>

      <h1 className={classes.headTag}>Websites</h1>

      <ul>
        <li>
          <a href="http://www.chemistryexplained.com/Fe-Ge/Gases.html">
            http://www.chemistryexplained.com/Fe-Ge/Gases.html
          </a>
        </li>
        <li>
          <a href="http://chemwiki.ucdavis.edu/Physical_Chemistry/Physical_Properties_of_Matter/Phases_of_Matter/Gases/Gas_Laws">
            http://chemwiki.ucdavis.edu/Physical_Chemistry/Physical_Properties_of_Matter/Phases_of_Matter/Gases/Gas_Laws
          </a>
        </li>
        <li>
          <a href="http://www.passmyexams.co.uk/GCSE/physics/pressure-volume-relationship-of-gas-Boyles-law.html">
            http://www.passmyexams.co.uk/GCSE/physics/pressure-volume-relationship-of-gas-Boyles-law.html
          </a>
        </li>
        <li>
          <a href="http://hubpages.com/hub/Examples-of-Boyles-Law">
            http://hubpages.com/hub/Examples-of-Boyles-Law
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Boyle's Law. Retrieved 24 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=226&cnt=545
        </Typography>
      </div>
    </div>
  );
}
