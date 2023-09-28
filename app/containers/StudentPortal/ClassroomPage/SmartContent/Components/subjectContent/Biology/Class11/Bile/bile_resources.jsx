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
      <h1 className={classes.header}>
        <strong>Books:</strong>
      </h1>

      <ul>
        <li>Laboratory Manual Biology for class XI - Published by NCERT.</li>
      </ul>

      <h1 className={classes.header}>
        <strong>Websites:</strong>
      </h1>

      <ul>
        <li>
          <a href="http://en.wikipedia.org/wiki/Bilirubin" target="_blank">
            http://en.wikipedia.org/wiki/Bilirubin
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Bile" target="_blank">
            http://en.wikipedia.org/wiki/Bile
          </a>
        </li>
        <li>
          <a
            href="http://www.vivo.colostate.edu/hbooks/pathphys/digestion/liver/bile.html"
            target="_blank"
          >
            http://www.vivo.colostate.edu/hbooks/pathphys/digestion/liver/bile.html
          </a>
        </li>
        <li>
          <a href="http://flipper.diff.org/app/items/4481" target="_blank">
            http://flipper.diff.org/app/items/4481
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/65253/bile#ref60290"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/65253/bile#ref60290
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Bile salt in Urine.
          Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=17&sim=211&cnt=466
        </Typography>
      </div>
    </div>
  );
}
