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
      <p>
        <a
          class="hoverclass"
          href="http://ncert.nic.in/NCERTS/textbook/textbook.htm?jesc1=0-16"
          target="_blank"
        >
          NCERT Textbook for class X
        </a>
      </p>

      <p fontSize="16px;">
        Chemical reactions and equations{' '}
        <a
          class="hoverclass"
          href="http://www.it.iitb.ac.in/ekshiksha/eContent-Show.do?topicId=12&amp;linkId=1"
          style="cursor:pointer;"
          target="blank"
        >
          (Click here to read)
        </a>
      </p>

      <p fontSize="16px;">
        <a
          href="https://en.wikipedia.org/wiki/Exothermic_reaction"
          target="blank"
        >
          Exothermic reaction
        </a>
      </p>

      <p fontSize="16px;">
        <a
          href="https://en.wikipedia.org/wiki/Endothermic_process"
          target="blank"
        >
          Endothermic reaction
        </a>
      </p>

      <p>
        <iframe
          allowfullscreen="true"
          frameborder="0"
          height="315"
          src="https://www.youtube.com/embed/XYRCXoFWPZw"
          width="420"
        />
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Exothermic and Endothermic Reactions.
          Retrieved 3 April 2021, from
          cdac.olabs.edu.in/?sub=75&brch=12&sim=92&cnt=6
        </Typography>
      </div>
    </div>
  );
}
