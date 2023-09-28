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
          <a href="http://en.wikipedia.org/wiki/Chromatography" target="_blank">
            http://en.wikipedia.org/wiki/Chromatography
          </a>
        </li>
        <li>
          <a
            href="http://www.rpi.edu/dept/chem-eng/Biotech-Environ/CHROMO/chromintro.html"
            target="_blank"
          >
            http://www.rpi.edu/dept/chem-eng/Biotech-Environ/CHROMO/chromintro.html
          </a>
        </li>
        <li>
          <a
            href="http://www.chemguide.co.uk/analysis/chromatography/paper.html"
            target="_blank"
          >
            http://www.chemguide.co.uk/analysis/chromatography/paper.html
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/115917/chromatography"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/115917/chromatography
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Photosynthetic_pigment"
            target="_blank"
          >
            http://en.wikipedia.org/wiki/Photosynthetic_pigment
          </a>
        </li>
        <li>
          <a
            href="http://www.bbc.co.uk/schools/gcsebitesize/science/add_ocr_gateway/green_world/leavesrev3.shtml"
            target="_blank"
          >
            http://www.bbc.co.uk/schools/gcsebitesize/science/add_ocr_gateway/green_world/leavesrev3.shtml
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=u6jD0hJO-28" target="_blank">
            https://www.youtube.com/watch?v=u6jD0hJO-28
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Paper Chromatography. Retrieved 5 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=124&cnt=409
        </Typography>
      </div>
    </div>
  );
}
