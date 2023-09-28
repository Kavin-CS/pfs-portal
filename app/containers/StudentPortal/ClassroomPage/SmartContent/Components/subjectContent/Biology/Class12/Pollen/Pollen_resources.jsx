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
    <div className={classes.animationWrap}>
      <div class="divContent">
        <h1 className={classes.header}>Books:</h1>

        <p>Laboratory Manual Biology for class XII - Published by NCERT.</p>

        <h1 className={classes.header}>Websites:</h1>

        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Pollination" target="_blank">
              https://en.wikipedia.org/wiki/Pollination
            </a>
          </li>
          <li>
            <a
              href="http://sciencelearn.org.nz/Contexts/Pollination/Science-Ideas-and-Concepts/Pollination-and-fertilisation"
              target="_blank"
            >
              http://sciencelearn.org.nz/Contexts/Pollination/Science-Ideas-and-Concepts/Pollination-and-fertilisation
            </a>
          </li>
          <li>
            <a
              href="http://www.britannica.com/science/pollination"
              target="_blank"
            >
              http://www.britannica.com/science/pollination
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Pollen_tube" target="_blank">
              https://en.wikipedia.org/wiki/Pollen_tube
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/?title=Pollen" target="_blank">
              https://en.wikipedia.org/?title=Pollen
            </a>
          </li>
          <li>
            <a
              href="http://www.nuffieldfoundation.org/practical-biology/observing-growth-pollen-tubes"
              target="_blank"
            >
              http://www.nuffieldfoundation.org/practical-biology/observing-growth-pollen-tubes
            </a>
          </li>
        </ul>

      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of Pollen Germination. Retrieved
          28 February 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=228&cnt=618
        </Typography>
      </div>
    </div>
  );
}
