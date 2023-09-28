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
      <p>&nbsp;</p>

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
          <a href="//www.youtube.com/watch?v=k-HiZdafzt4" target="_blank">
            //www.youtube.com/watch?v=k-HiZdafzt4
          </a>
        </li>
        <li>
          <a
            href="http://www.biotopics.co.uk/plants/psfac2.html"
            target="_blank"
          >
            http://www.biotopics.co.uk/plants/psfac2.html
          </a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Photosynthesis"
            target="_blank"
          >
            https://en.wikipedia.org/wiki/Photosynthesis
          </a>
        </li>
        <li>
          <a
            href="https://sites.google.com/site/sed695b3/projects/longitudinal-research/passive-transport-carol-cao"
            target="_blank"
          >
            https://sites.google.com/site/sed695b3/projects/longitudinal-research/passive-transport-carol-cao
          </a>
        </li>
      </ul>

      <p>
        <br />
        &nbsp;
      </p>
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
