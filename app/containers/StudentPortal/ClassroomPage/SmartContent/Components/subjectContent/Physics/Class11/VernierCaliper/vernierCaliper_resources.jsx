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
    <div className={classes.animationWrap}>
      <div class="divContent">
        <h1 className={classes.headTag}>Books&nbsp;</h1>

        <p>
          Laboratory Manual Physics for class XI - Published by NCERTBooks&nbsp;
        </p>

        <h1 className={classes.headTag}>Websites</h1>

        <ul>
          <li>
            <a
              href="http://www.wikihow.com/Use-a-Vernier-Caliper"
              target="_blank"
            >
              http://www.wikihow.com/Use-a-Vernier-Caliper
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=VOar5f3LfZs"
              target="_blank"
            >
              https://www.youtube.com/watch?v=VOar5f3LfZs
            </a>
          </li>
          <li>
            <a
              href="http://www.technologystudent.com/equip1/vernier3.htm"
              target="_blank"
            >
              http://www.technologystudent.com/equip1/vernier3.htm
            </a>
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>&nbsp;</p>

       
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2014). Vernier Calipers. Retrieved 2 March 2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=16&cnt=391 
        </Typography>
      </div>
    </div>
  );
}
