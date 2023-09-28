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

      <p>Laboratory Manual Biology for class XII - Published by NCERT</p>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://www.marietta.edu/~biol/introlab/Onion%20root%20mitosis.pdf"
            target="_blank"
          >
            http://www.marietta.edu/~biol/introlab/Onion%20root%20mitosis.pdf
          </a>
        </li>
        <li>
          <a href="http://www.britannica.com/science/mitosis" target="_blank">
            http://www.britannica.com/science/mitosis
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Mitosis" target="_blank">
            https://en.wikipedia.org/wiki/Mitosis
          </a>
        </li>
        <li>
          <a
            href="http://www.biology.arizona.edu/cell_bio/activities/cell_cycle/cell_cycle.html"
            target="_blank"
          >
            http://www.biology.arizona.edu/cell_bio/activities/cell_cycle/cell_cycle.html
          </a>
        </li>
        <li>
          <a
            href="http://www.biology.arizona.edu/cell_bio/tutorials/cell_cycle/cells3.html"
            target="_blank"
          >
            http://www.biology.arizona.edu/cell_bio/tutorials/cell_cycle/cells3.html
          </a>
        </li>
        <li>
          <a
            href="http://www.nature.com/scitable/topicpage/mitosis-14046258"
            target="_blank"
          >
            http://www.nature.com/scitable/topicpage/mitosis-14046258
          </a>
        </li>
        <li>
          <a
            href="http://www.nature.com/scitable/topicpage/mitosis-and-cell-division-205"
            target="_blank"
          >
            http://www.nature.com/scitable/topicpage/mitosis-and-cell-division-205
          </a>
        </li>
        <li>
          <a
            href="http://www.funsci.com/fun3_en/mitosis/garlic.htm"
            target="_blank"
          >
            http://www.funsci.com/fun3_en/mitosis/garlic.htm
          </a>
        </li>
        <li>
          <a
            href="http://www.instruction.greenriver.edu/kmarr/biology%20211/Labs%20and%20ALEs/B211%20Labs/B211%20Labs/Onion%20and%20Whitefish%20Mitosis/Onion%20Root%20Tip%20Mitosis/Onion%20Root%20tip%20Mitosis.html"
            target="_blank"
          >
            http://www.instruction.greenriver.edu/kmarr/biology%20211/Labs%20and%20ALEs/B211%20Labs/B211%20Labs/Onion%20and%20Whitefish%20Mitosis/Onion%20Root%20Tip%20Mitosis/Onion%20Root%20tip%20Mitosis.html
          </a>
        </li>
        <li>
          <a
            href="http://www.microscopy-uk.org.uk/mag/indexmag.html?http://www.microscopy-uk.org.uk/mag/artnov04macro/jronionroot.html"
            target="_blank"
          >
            http://www.microscopy-uk.org.uk/mag/indexmag.html?http://www.microscopy-uk.org.uk/mag/artnov04macro/jronionroot.html
          </a>
        </li>
        <li>
          <a
            href="http://home.jccsskc.edu.hk/~mtyeung/2007AL.files/2007Lab/lab_resources_E/Practical-28.pdf"
            target="_blank"
          >
            http://home.jccsskc.edu.hk/~mtyeung/2007AL.files/2007Lab/lab_resources_E/Practical-28.pdf
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study Mitosis in Onion Root Tip.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=237&cnt=661
        </Typography>
      </div>
    </div>
  );
}
