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
        <p>&nbsp;</p>

        <h1 className={classes.header}>Books:</h1>

        <ul>
          <li>
            Manual of Secondary Science Kit for Classes IX and X -
            &nbsp;Published by NCERT
          </li>
        </ul>

        <h1 className={classes.header}>Websites:</h1>

        <ul>
          <li>
            <a
              href="http://users.rcn.com/jkimball.ma.ultranet/BiologyPages/Y/Yeast.html"
              target="_blank"
            >
              http://users.rcn.com/jkimball.ma.ultranet/BiologyPages/Y/Yeast.html
            </a>
          </li>
          <li>
            <a href="http://en.wikipedia.org/wiki/Yeast" target="_blank">
              http://en.wikipedia.org/wiki/Yeast
            </a>
          </li>
          <li>
            <a
              href="http://simple.wikipedia.org/wiki/Binary_fission"
              target="_blank"
            >
              http://simple.wikipedia.org/wiki/Binary_fission
            </a>
          </li>
          <li>
            <a
              href="http://mohtadialkhaliq.wordpress.com/2011/02/05/binary-fission-the-amoeba/"
              target="_blank"
            >
              http://mohtadialkhaliq.wordpress.com/2011/02/05/binary-fission-the-amoeba/
            </a>
          </li>
          <li>
            <a
              href="http://www.scienceclarified.com/Al-As/Amoeba.html"
              target="_blank"
            >
              http://www.scienceclarified.com/Al-As/Amoeba.html
            </a>
          </li>
          <li>
            <a
              href="http://www.enchantedlearning.com/paint/subjects/protists/amoeba.shtml"
              target="_blank"
            >
              http://www.enchantedlearning.com/paint/subjects/protists/amoeba.shtml
            </a>
          </li>
        </ul>

        <p>
          <br />
          &nbsp;
        </p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Asexual Reproduction in Amoeba and
          Yeast. Retrieved 4 March 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=134&cnt=1
        </Typography>
      </div>
    </div>
  );
}
