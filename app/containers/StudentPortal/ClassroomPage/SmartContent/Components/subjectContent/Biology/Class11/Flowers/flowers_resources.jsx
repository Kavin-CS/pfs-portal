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
      <h1 className={classes.header}>
        <strong>Books:</strong>
      </h1>

      <ul>
        <li>Laboratory Manual Biology for class XI - Published by NCERT</li>
      </ul>

      <h1 className={classes.header}>
        <strong>Websites:</strong>
      </h1>

      <ul>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Flowering_plant"
            target="_blank"
          >
            http://en.wikipedia.org/wiki/Flowering_plant
          </a>
        </li>
        <li>
          <a
            href="http://www.cs.rochester.edu/~nelson/wildflowers/glossaries/flowers/index.html"
            target="_blank"
          >
            http://www.cs.rochester.edu/~nelson/wildflowers/glossaries/flowers/index.html
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/211029/flower"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/211029/flower
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/454641/petunia"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/454641/petunia
          </a>
        </li>
        <li>
          <a href="http://creationwiki.org/Sweet_pea" target="_blank">
            http://creationwiki.org/Sweet_pea
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/552838/Solanaceae"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/552838/Solanaceae
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Liliaceae" target="_blank">
            http://en.wikipedia.org/wiki/Liliaceae
          </a>
        </li>
        <li>
          <a href="http://theseedsite.co.uk/liliaceae.html" target="_blank">
            http://theseedsite.co.uk/liliaceae.html
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Fabaceae#Flowers"
            target="_blank"
          >
            http://en.wikipedia.org/wiki/Fabaceae#Flowers
          </a>
        </li>
        <li>
          <a href="http://waynesword.palomar.edu/legume1.htm" target="_blank">
            http://waynesword.palomar.edu/legume1.htm
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Characteristics of Flowers. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=198&cnt=468
        </Typography>
      </div>
    </div>
  );
}
