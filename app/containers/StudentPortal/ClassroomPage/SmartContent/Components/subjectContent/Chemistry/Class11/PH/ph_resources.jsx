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
      <h1 className={classes.headTag}>Book:</h1>

      <ul>
        <li>Laboratory Manual Chemistry for class XI - Published by NCERT</li>
      </ul>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://nitttrc.ac.in/Four%20quadrant/eel/Quadrant%20-%201/Exp1_pdf.pdf"
            target="_blank"
          >
            nitttrc.ac.in/Four%20quadrant/eel/Quadrant%20-%201/Exp1_pdf.pdf
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/PH" target="_blank">
            en.wikipedia.org/wiki/PH
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Universal_indicator"
            target="_blank"
          >
            en.wikipedia.org/wiki/Universal_indicator
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/PH_meter" target="_blank">
            en.wikipedia.org/wiki/PH_meter
          </a>
        </li>
        <li>
          <a
            href="http://chem.wisc.edu/deptfiles/genchem/lab/labdocs/modules/phpaper/pHpaperselct.htm"
            target="_blank"
          >
            chem.wisc.edu/deptfiles/genchem/lab/labdocs/modules/phpaper/pHpaperselct.htm
          </a>
        </li>
        <li>
          <a
            href="http://www.funsci.com/fun3_en/acids/acids.htm"
            target="_blank"
          >
            www.funsci.com/fun3_en/acids/acids.htm
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=sMAMuhCR8iw" target="_blank">
            www.youtube.com/watch
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=BBvtCBwTemo" target="_blank">
            www.youtube.com/watch
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=3yfIHGlG6fE" target="_blank">
            www.youtube.com/watch
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=b1tVlbxY_1w" target="_blank">
            www.youtube.com/watch
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=6fc8KBz_I9s" target="_blank">
            www.youtube.com/watch
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=ni3XRxwTvWQ" target="_blank">
            www.youtube.com/watch
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Determination of pH. Retrieved 30 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=7&sim=144&cnt=334
        </Typography>
      </div>
    </div>
  );
}
