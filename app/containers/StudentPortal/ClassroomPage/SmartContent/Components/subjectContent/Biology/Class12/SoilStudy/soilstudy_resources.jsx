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
  headTag: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      

      <h1 className={classes.headTag}>Books:</h1>

      <p>Laboratory Manual Biology for class XII - Published by NCERT.</p>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://landresources.montana.edu/swm/documents/Final_proof_SW1.pdf"
            target="_blank"
          >
            http://landresources.montana.edu/swm/documents/Final_proof_SW1.pdf
          </a>
        </li>
        <li>
          <a
            href="http://www.fao.org/docrep/field/003/ac172e/AC172E03.htm"
            target="_blank"
          >
            http://www.fao.org/docrep/field/003/ac172e/AC172E03.htm
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Soil" target="_blank">
            https://en.wikipedia.org/wiki/Soil
          </a>
        </li>
        <li>
          <a
            href="http://www.had2know.com/garden/classify-soil-texture-triangle-chart.html"
            target="_blank"
          >
            http://www.had2know.com/garden/classify-soil-texture-triangle-chart.html
          </a>
        </li>
        <li>
          <a
            href="http://www.nbcsd.org/cms/lib/PA01001217/Centricity/Domain/116/Soil%20Texture%20Soil%20Activity.pdf"
            target="_blank"
          >
            http://www.nbcsd.org/cms/lib/PA01001217/Centricity/Domain/116/Soil%20Texture%20Soil%20Activity.pdf
          </a>
        </li>
        <li>
          <a
            href="https://www.rhs.org.uk/advice/profile?PID=239"
            target="_blank"
          >
            https://www.rhs.org.uk/advice/profile?PID=239
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Soil_pH" target="_blank">
            https://en.wikipedia.org/wiki/Soil_pH
          </a>
        </li>
        <li>
          <a
            href="http://www.esf.edu/pubprog/brochure/soilph/soilph.htm"
            target="_blank"
          >
            http://www.esf.edu/pubprog/brochure/soilph/soilph.htm
          </a>
        </li>
        <li>
          <a
            href="http://www.rodalesorganiclife.com/garden/understanding-ph"
            target="_blank"
          >
            http://www.rodalesorganiclife.com/garden/understanding-ph
          </a>
        </li>
        <li>
          <a
            href="http://nmsp.cals.cornell.edu/publications/factsheets/factsheet29.pdf"
            target="_blank"
          >
            http://nmsp.cals.cornell.edu/publications/factsheets/factsheet29.pdf
          </a>
        </li>
        <li>
          <a
            href="http://www.ctahr.hawaii.edu/mauisoil/a_factor_ts.aspx"
            target="_blank"
          >
            http://www.ctahr.hawaii.edu/mauisoil/a_factor_ts.aspx
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Soil_texture" target="_blank">
            https://en.wikipedia.org/wiki/Soil_texture
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of Physical Properties of Soil.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=235&cnt=662
        </Typography>
      </div>
    </div>
  );
}
