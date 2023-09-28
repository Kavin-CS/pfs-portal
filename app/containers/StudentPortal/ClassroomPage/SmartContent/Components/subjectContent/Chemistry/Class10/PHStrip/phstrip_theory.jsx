import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import PHStripThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PHStrip1/phstrip-the1.png';
import PHStripThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PHStrip1/phstrip-the2.png';
import PHStripThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PHStrip1/phstrip-the3.png';
import PHStripThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PHStrip1/phstrip-the4.gif';
import PHStripThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PHStrip1/phstrip-the5.png';

const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    textAlign: 'left',
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
  },
  OhmsLawImg: {
    width: '350px',
    height: '210px',
  },
  headTag: {
    fontSize: 20,
  },

  secondaryTag: {
    fontSize: 18,
  },
  theoryImg: {
    width: 840,
    height: 410,
  },
  theoryImg1: {
    width: 510,
    height: 220,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Our Objective</h1>

      <p>
        To find the pH of the following samples by using pH paper / universal
        indicator.
      </p>

      <ol start="1" type="1">
        <li>Dilute hydrochloric acid.</li>
        <li>Dilute NaOH solution.</li>
        <li>Dilute ethanoic acid solution.</li>
        <li>Lemon juice.</li>
        <li>Water.</li>
        <li>Dilute sodium bicarbonate solution.</li>
      </ol>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>Can you define pH?</h2>

      <p>
        pH is defined as the negative logarithm(base 10) of the hydrogen ion
        concentration in moles per litre. pH is written as:
      </p>

      <p>
        <img alt="" src={PHStripThe1} />
      </p>

      <p>
        Hydrogen ions cannot exist alone, but they exist after combining with
        water molecules. Thus, H<sup>+</sup>must always be shown as H
        <sup>+</sup>(aq) or hydronium ion(H<sub>3</sub>O<sup>+</sup>):
      </p>

      <p>
        <sup>
          <img alt="" src={PHStripThe2} />
        </sup>
      </p>

      <h2 className={classes.secondaryTag}>How do we represent the pH of a neutral solution?&nbsp;</h2>

      <p>
        <img alt="" src={PHStripThe3} />
      </p>

      <p>
        <img alt="" src={PHStripThe4} />
      </p>

      <p>
        Neutral solution has pH value 7. pH of acid solution is always less than
        7,&nbsp; whereas that of alkaline solution is always more than 7. pH of
        pure water is 7 or [H+]=10<sup>-7</sup> mol/L .
      </p>

      <h2 className={classes.secondaryTag}>What is a pH indicator?</h2>

      <p>
        pH indicator is a chemical that turns different colours in different
        media. For example, blue litmus turns red in acidic medium, the red
        litmus turns blue in alkaline medium.
      </p>

      <h2 className={classes.secondaryTag}>What is a litmus solution?</h2>

      <p>
        Litmus solution is a purple dye, which is extracted from a Thallophyte
        known as Lichen. Litmus solution when in neutral medium (i.e., neither
        acidic nor basic) is greenish in colour.
      </p>

      <h2 className={classes.secondaryTag}>
        What are the commonly used indicators to determine pH of a solution?
      </h2>

      <p>
        Litmus solution and litmus paper are commonly used as an indicator. pH
        paper is a piece or a strip of paper which is coated with pH-indicator.
      </p>

      <h2 className={classes.secondaryTag}>Know what a pH scale is?</h2>

      <p>
        A scale for measuring hydrogen ion concentration is known as pH scale.
        In the term pH, p stands for '<em>potenz</em>' in German meaning power.
      </p>

      <p>
        <img
          alt=""
          src={PHStripThe5}
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol>
        <li>
          Students understand the terms pH, acidic, basic and&nbsp; neutral
          through the experiments.
        </li>
        <li>
          Students acquire the following skills after performing the experiment.
          <ul>
            <li>
              How to measure the pH of a given solution using pH paper or
              universal indicator solution.
            </li>
            <li>
              How to classify the sample as acidic, basic or neutral based on
              the pH value.
            </li>
            <li>
              How to correlate the values obtained from the experiment with the
              pH scale&nbsp;
            </li>
          </ul>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Determine pH with pH indicator strips /
          universal indicator solution. Retrieved 31 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=78&cnt=1
        </Typography>
      </div>
    </div>
  );
}
