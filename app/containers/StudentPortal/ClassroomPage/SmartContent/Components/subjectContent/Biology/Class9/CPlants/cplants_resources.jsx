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
          Manual of Secondary Science Kit for Classes IX and X - &nbsp;Published
          by NCERT
        </li>
      </ul>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/560520/Spirogyra"
            target="_blank"
          >
            www.britannica.com/EBchecked/topic/560520/Spirogyra
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Spirogyra" target="_blank">
            en.wikipedia.org/wiki/Spirogyra
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/222357/fungus"
            target="_blank"
          >
            www.britannica.com/EBchecked/topic/222357/fungus
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Fungus" target="_blank">
            en.wikipedia.org/wiki/Fungus
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/393741/moss"
            target="_blank"
          >
            www.britannica.com/EBchecked/topic/393741/moss
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Moss" target="_blank">
            en.wikipedia.org/wiki/Moss
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/204819/fern"
            target="_blank"
          >
            www.britannica.com/EBchecked/topic/204819/fern
          </a>
        </li>
        <li>
          <a href="http://www.pinetum.org/Lovett/pinecones.htm" target="_blank">
            www.pinetum.org/Lovett/pinecones.htm
          </a>
        </li>
        <li>
          <a
            href="http://biology.clc.uc.edu/courses/bio106/angio.htm"
            target="_blank"
          >
            biology.clc.uc.edu/courses/bio106/angio.htm
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Characteristics of Plants. Retrieved 7
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=130&cnt=278
        </Typography>
      </div>
    </div>
  );
}
