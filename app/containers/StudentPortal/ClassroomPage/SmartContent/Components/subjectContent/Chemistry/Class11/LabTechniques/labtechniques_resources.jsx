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

      <ul>
        <li>Laboratory Manual Chemistry for class XI - Published by NCERT</li>
        <li>
          Text book for Class XI Chemistry Part I, National Council of
          Educational Research and Training
        </li>
      </ul>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="https://www.google.co.in/?gfe_rd=cr&amp;ei=fRpRU-WkCsbM8geLw4CYBg#q=bunsen+burner"
            target="_blank"
          >
            www.google.co.in/
          </a>
        </li>
        <li>
          <a
            href="http://www.eiu.edu/~eiuchem/GenChem/burner.pdf"
            target="_blank"
          >
            www.eiu.edu/~eiuchem/GenChem/burner.pdf
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=N7ssCM3qM3U" target="_blank">
            www.youtube.com/watch
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=W3xHWzmSOfU" target="_blank">
            www.youtube.com/watch
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Wash_bottle" target="_blank">
            en.wikipedia.org/wiki/Wash_bottle
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Stirring_rod" target="_blank">
            en.wikipedia.org/wiki/Stirring_rod
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=oE_26YP0IRM" target="_blank">
            www.youtube.com/watch
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=LznzCBGQjXw" target="_blank">
            www.youtube.com/watch
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=P-ldT5-aDiM" target="_blank">
            www.youtube.com/watch
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Basic Laboratory Techniques. Retrieved
          30 March 2021, from amrita.olabs.edu.in/?sub=73&brch=7&sim=32&cnt=340
        </Typography>
      </div>
    </div>
  );
}
