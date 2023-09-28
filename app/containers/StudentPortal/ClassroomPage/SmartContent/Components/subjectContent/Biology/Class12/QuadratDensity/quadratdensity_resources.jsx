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
            href="http://www.webpages.uidaho.edu/veg_measure/Modules/Lessons/Module%205%28Density%29/5_2_Plot-Based_Techniques.htm"
            target="_blank"
          >
            http://www.webpages.uidaho.edu/veg_measure/Modules/Lessons/Module%205%28Density%29/5_2_Plot-Based_Techniques.htm
          </a>
        </li>
        <li>
          <a
            href="https://www.boundless.com/biology/textbooks/boundless-biology-textbook/population-and-community-ecology-45/population-demography-249/population-size-and-density-925-12181/"
            target="_blank"
          >
            https://www.boundless.com/biology/textbooks/boundless-biology-textbook/population-and-community-ecology-45/population-demography-249/population-size-and-density-925-12181/
          </a>
        </li>
        <li>
          <a href="http://www.countrysideinfo.co.uk/howto.htm" target="_blank">
            http://www.countrysideinfo.co.uk/howto.htm
          </a>
        </li>
        <li>
          <a
            href="http://bio150.chass.utoronto.ca/sampling/book/sampling.html"
            target="_blank"
          >
            http://bio150.chass.utoronto.ca/sampling/book/sampling.html
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Quadrat" target="_blank">
            https://en.wikipedia.org/wiki/Quadrat
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of plant population density by
          quadrat method. Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=239&cnt=667
        </Typography>
      </div>
    </div>
  );
}
