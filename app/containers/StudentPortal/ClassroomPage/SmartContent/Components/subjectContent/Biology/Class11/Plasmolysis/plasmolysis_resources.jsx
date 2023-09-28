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
          <a href="http://en.wikipedia.org/wiki/Plasmolysis" target="_blank">
            http://en.wikipedia.org/wiki/Plasmolysis
          </a>
        </li>
        <li>
          <a
            href="http://5e.plantphys.net/article.php?ch=3&amp;id=31"
            target="_blank"
          >
            http://5e.plantphys.net/article.php?ch=3&amp;id=31
          </a>
        </li>
        <li>
          <a
            href="https://www.princeton.edu/~achaney/tmve/wiki100k/docs/Plasmolysis.html"
            target="_blank"
          >
            https://www.princeton.edu/~achaney/tmve/wiki100k/docs/Plasmolysis.html
          </a>
        </li>
        <li>
          <a
            href="http://www.phschool.com/science/biology_place/biocoach/biomembrane1/animals.html"
            target="_blank"
          >
            http://www.phschool.com/science/biology_place/biocoach/biomembrane1/animals.html
          </a>
        </li>
        <li>
          <a
            href="http://academickids.com/encyclopedia/index.php/Plasmolysed"
            target="_blank"
          >
            http://academickids.com/encyclopedia/index.php/Plasmolysed
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of Plasmolysis. Retrieved 5 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=199&cnt=453
        </Typography>
      </div>
    </div>
  );
}
