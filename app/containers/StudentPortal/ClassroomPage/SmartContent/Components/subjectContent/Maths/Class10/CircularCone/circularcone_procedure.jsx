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
    <div class="divContent">
      <h2 className={classes.secondaryTag}>
        <strong lineHeight="1.2;" fontSize="13px;">
          <span fontSize="16px;">As performed in the real lab:</span>
        </strong>
      </h2>

      <h3>
        <strong>
          <span fontfamily="arial,helvetica,sans-serif;">
            <span fontSize="16px;">Materials required:</span>
          </span>
        </strong>
      </h3>

      <p>
        <span fontSize="14px;">
          3 sets of a cone and cylinder. In each set, the cone and cylinder have
          the same height and base radius.
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <span fontSize="14px;">Procedure:</span>
      </h2>

      <p>1. Take one set of the cone and cylinder.</p>

      <p>2. Fill the cone with sand.</p>

      <p>3. Pour the sand from the cone to the cylinder.</p>

      <p>
        4. Fill the cone again with sand and repeat step 3 to fill the cylinder
        completely with sand.
      </p>

      <p>5. Repeat the activity with other sets of cones.</p>

      

      <h2 className={classes.secondaryTag}>As performed in the simulator:</h2>

      <p>
        1.Check the two checkboxes in the toolbox to generate cone and cylinder.
      </p>

      <p>2.Click on the cone to invert it.</p>

      <p>3.Click on next.</p>

      <p>4.Click on cone to invert it.</p>

      <p>5.Click on jug to fill it with sand.</p>

      <p>6.Click on jug to fill it with sand.</p>

      <p>7.Click on the tilted cone.</p>

      <p>8.Repeat the process for two more times.</p>

      <p>9.Repeat the process for one more time.</p>

      <p>10.Click on "Next" and follow the derivation.</p>

      

      <h2 className={classes.secondaryTag}>Observations:</h2>

      <p>
        The student observes that for each set, it needs three pourings from the
        cone to fill the cylinder completely.
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Volume of right circular cone. Retrieved 7
          April 2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=164&cnt=2
        </Typography>
      </div>
    </div>
  );
}
