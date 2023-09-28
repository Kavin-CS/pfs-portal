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
          <a
            href="http://www.tiem.utk.edu/~gross/bioed/webmodules/respiratoryquotient.html"
            target="_blank"
          >
            http://www.tiem.utk.edu/~gross/bioed/webmodules/respiratoryquotient.html
          </a>
        </li>
        <li>
          <a
            href="http://www.openanesthesia.org/ABA:Respiratory_quotient_-_Energy_sources"
            target="_blank"
          >
            http://www.openanesthesia.org/ABA:Respiratory_quotient_-_Energy_sources
          </a>
        </li>
        <li>
          <a
            href="http://revisionworld.com/a2-level-level-revision/biology/energy-life/respiration/respiratory-quotient"
            target="_blank"
          >
            http://revisionworld.com/a2-level-level-revision/biology/energy-life/respiration/respiratory-quotient
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Respiratory_quotient"
            target="_blank"
          >
            http://en.wikipedia.org/wiki/Respiratory_quotient
          </a>
        </li>
        <li>
          <a
            href="http://www.wisegeek.com/what-is-respiratory-quotient.htm#"
            target="_blank"
          >
            http://www.wisegeek.com/what-is-respiratory-quotient.htm#
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Rate of Respiration. Retrieved 5 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=204&cnt=463
        </Typography>
      </div>
    </div>
  );
}
