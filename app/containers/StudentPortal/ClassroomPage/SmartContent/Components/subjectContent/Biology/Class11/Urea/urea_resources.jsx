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
        <li>Laboratory Manual Biology for class XI - Published by NCERT.</li>
      </ul>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          <a href="http://en.wikipedia.org/wiki/Urea" target="_blank">
            http://en.wikipedia.org/wiki/Urea
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Urine_urea_nitrogen"
            target="_blank"
          >
            http://en.wikipedia.org/wiki/Urine_urea_nitrogen
          </a>
        </li>
        <li>
          <a
            href="http://www.nlm.nih.gov/medlineplus/ency/article/003605.htm"
            target="_blank"
          >
            http://www.nlm.nih.gov/medlineplus/ency/article/003605.htm
          </a>
        </li>
        <li>
          <a
            href="http://www.bbc.co.uk/schools/gcsebitesize/science/add_aqa_pre_2011/homeo/homeostasis1.shtml"
            target="_blank"
          >
            http://www.bbc.co.uk/schools/gcsebitesize/science/add_aqa_pre_2011/homeo/homeostasis1.shtml
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/619637/urea"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/619637/urea
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Urea in Urine. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=206&cnt=465
        </Typography>
      </div>
    </div>
  );
}
