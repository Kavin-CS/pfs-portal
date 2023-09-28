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
      <h1 className={classes.header}>Books:</h1>

      <p>Laboratory Manual Biology for class XII - Published by NCERT.</p>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          <a href="https://en.wikipedia.org/wiki/Turbidity" target="_blank">
            https://en.wikipedia.org/wiki/Turbidity
          </a>
        </li>
        <li>
          <a
            href="http://water.epa.gov/type/rsl/monitoring/vms55.cfm"
            target="_blank"
          >
            http://water.epa.gov/type/rsl/monitoring/vms55.cfm
          </a>
        </li>
        <li>
          <a
            href="http://www.lamotte.com/en/blog/test-factors/91-what-is-turbidity"
            target="_blank"
          >
            http://www.lamotte.com/en/blog/test-factors/91-what-is-turbidity
          </a>
        </li>
        <li>
          <a href="http://www.optek.com/Turbidity.asp" target="_blank">
            http://www.optek.com/Turbidity.asp
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Secchi_disk" target="_blank">
            https://en.wikipedia.org/wiki/Secchi_disk
          </a>
        </li>
        <li>
          <a
            href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3736366/"
            target="_blank"
          >
            http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3736366/
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/PH" target="_blank">
            https://en.wikipedia.org/wiki/PH
          </a>
        </li>
        <li>
          <a
            href="http://www.fondriest.com/environmental-measurements/parameters/water-quality/ph/"
            target="_blank"
          >
            http://www.fondriest.com/environmental-measurements/parameters/water-quality/ph/
          </a>
        </li>
        <li>
          <a href="http://water.usgs.gov/edu/ph.html" target="_blank">
            http://water.usgs.gov/edu/ph.html
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/PH" target="_blank">
            https://en.wikipedia.org/wiki/PH
          </a>
        </li>
        <li>
          <a
            href="http://www.funsci.com/fun3_en/guide/guide1/micro1_en.htm"
            target="_blank"
          >
            http://www.funsci.com/fun3_en/guide/guide1/micro1_en.htm
          </a>
        </li>
        <li>
          <a
            href="http://www.microscope-microscope.org/applications/pond-critters/pond-critters.htm"
            target="_blank"
          >
            http://www.microscope-microscope.org/applications/pond-critters/pond-critters.htm
          </a>
        </li>
      </ul>

      <p>&nbsp;</p>

      <p>&nbsp;</p>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Studies on Turbidity, pH and Microbial
          Presence in Water. Retrieved 28 February 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=229&cnt=677
        </Typography>
      </div>
    </div>
  );
}
