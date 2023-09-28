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
          Manual of Secondary Science Kit for Classes IX and X - &nbsp;Published
          by NCERT
        </li>
      </ul>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/176371/earthworm"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/176371/earthworm
          </a>
        </li>
        <li>
          <a
            href="http://www.sciencelearn.org.nz/Science-Stories/Earthworms/Earthworm-adaptations"
            target="_blank"
          >
            http://www.sciencelearn.org.nz/Science-Stories/Earthworms/Earthworm-adaptations
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/123709/cockroach"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/123709/cockroach
          </a>
        </li>
        <li>
          <a
            href="http://www.uri.edu/ce/factsheets/sheets/cockroaches.html"
            target="_blank"
          >
            http://www.uri.edu/ce/factsheets/sheets/cockroaches.html
          </a>
        </li>
        <li>
          <a
            href="http://www.biologyjunction.com/bird_adaptations.htm"
            target="_blank"
          >
            http://www.biologyjunction.com/bird_adaptations.htm
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Bird" target="_blank">
            http://en.wikipedia.org/wiki/Bird
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/66391/bird"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/66391/bird
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/73261/bony-fish"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/73261/bony-fish
          </a>
        </li>
        <li>
          <a
            href="http://www.seaworld.org/animal-info/info-books/bony-fish/senses.htm"
            target="_blank"
          >
            http://www.seaworld.org/animal-info/info-books/bony-fish/senses.htm
          </a>
        </li>
        <li>
          <a
            href="http://www.ehow.com/info_8562795_unique-adaptations-bony-fish.html"
            target="_blank"
          >
            http://www.ehow.com/info_8562795_unique-adaptations-bony-fish.html
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Adaptation in Animals. Retrieved 7 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=129&cnt=273
        </Typography>
      </div>
    </div>
  );
}
