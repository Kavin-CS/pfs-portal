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
        <li>Laboratory Manual Biology for class XI - Published by NCERT.</li>
      </ul>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          <a href="http://en.wikipedia.org/wiki/Carbohydrate" target="_blank">
            http://en.wikipedia.org/wiki/Carbohydrate
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/94687/carbohydrate"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/94687/carbohydrate
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/342808/lipid"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/342808/lipid
          </a>
        </li>
        <li>
          <a
            href="http://www.sciencecompany.com/Food-Chemistry-Experiments.aspx#3"
            target="_blank"
          >
            http://www.sciencecompany.com/Food-Chemistry-Experiments.aspx#3
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Fat" target="_blank">
            http://en.wikipedia.org/wiki/Fat
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Protein" target="_blank">
            http://en.wikipedia.org/wiki/Protein
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Carbohydrates, Proteins and
          Fats. Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=17&sim=205&cnt=461
        </Typography>
      </div>
    </div>
  );
}
