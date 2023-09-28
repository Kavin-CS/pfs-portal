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
      <h4 className={classes.header}>
        Some Useful links&nbsp; for theory and animations&nbsp; regarding
        Rutheford's Scattering Experiment&nbsp; are mentioned below :
      </h4>

      <ul>
        <li>
          <a href="http://abyss.uoregon.edu/%7Ejs/21st_century_science/lectures/lec11.html">
            Atomic Structure
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=zn0xGIxoZSo&amp;feature=related">
            //www.youtube.com/watch?v=zn0xGIxoZSo&amp;feature=related
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=bIVI-rMLm54&amp;feature=fvwrel">
            //www.youtube.com/watch?v=bIVI-rMLm54&amp;feature=fvwrel
          </a>
          &nbsp; ( Ernest Rutherford's Nuclear model of the Atom)
        </li>
        <li>
          <a href="http://chemistry.tutorvista.com/inorganic-chemistry/brief-history-of-rutherford-s-and-his-scattering-theory.html#">
            http://chemistry.tutorvista.com/inorganic-chemistry/brief-history-of-rutherford-s-and-his-scattering-theory.html#
          </a>{' '}
          (Rutherford's &nbsp;Scattering theory)
        </li>
      </ul>

      <h4 className={classes.header}>
        &nbsp;A video for watching Scattering of alpha particles through gold
        foil&nbsp; :
      </h4>

      <p align="center">
        <iframe
          allowfullscreen=""
          frameborder="0"
          height="315"
          src="https://www.youtube.com/embed/kHaR2rsFNhg"
          width="420"
        />
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Rutherford's Scattering Experiment.
          Retrieved 3 April 2021, from
          cdac.olabs.edu.in/?sub=75&brch=12&sim=88&cnt=6
        </Typography>
      </div>
    </div>
  );
}
