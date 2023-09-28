import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import Galvanometer1 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/1435829806_fig-mg-1.jpg';
import Galvanometer2 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/1513336756_figureOfMerit_theory1.png';
import Galvanometer3 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/1513336765_figureofMerit_theory2.png';
import Galvanometer4 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/1513336776_figureOfMerrit_theory3.png';
import Galvanometer5 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/1513336788_figureOfMerit_theory4.png';
import Galvanometer6 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/1513336797_figureOfMerit_theory5.png';
import Galvanometer7 from '../../../../../../../../../assets/Images/Subjects/Physics/Galvanometer1/1513336807_figureOfMerrit_theory6.png';

const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    paddingTop: 0,
    textAlign: 'left',
    // font-family: 'Noto Sans','Noto Sans Malayalam','Noto Sans Telugu', sans-serif;
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
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
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Objective</h1>

      <p>
        &nbsp;To determine the resistance of a galvanometer by half deflection
        method and to find its figure of merit.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>Galvanometer</h2>

      <p>
        A galvanometer is a device used to detect feeble electric currents in a
        circuit. It consists of a coil suspended between the poles of a powerful
        magnet. As current passes through the coil, it deflects. It can be
        detected from the deflection on galvanometer needle. The deflection is
        proportional to the current passed through it. &nbsp;
      </p>

      <h2 className={classes.secondaryTag}>
        <em>Resistance of galvanometer by half deflection method&nbsp;</em>
      </h2>

      <p>
        <img alt="" src={Galvanometer1} />
      </p>

      <p>
        <br />
        Here, current will flows through th circuit when key k1 is closed and k2
        is open. The current flowing through the galvanometer is proportional to
        the deflection in it.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
        <img alt="" src={Galvanometer2} />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Where, E - emf f
        the cell
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;R - resistance from the resistance box
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;G - galvanometer resistance for current I
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;θ - galvanometer deflection for current I
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;k – proportionality constant.
      </p>

      <p>
        When k<sub>2</sub> is closed and by adjusting the shunt resistance S, we
        can make galvanometer deflection as θ/2.
      </p>

      <p>Then the current in the circuit is ;</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img alt="" src={Galvanometer3} />
      </p>

      <p>
        Now, a fraction, S/ (G+S) of the current in the circuit is flows through
        the galvanometer, which is given by,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
        <img alt="" src={Galvanometer4} />
      </p>

      <p>
        Now, from the above relations, we can get the resistance of the given
        galvanometer as,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <img alt="" src={Galvanometer5} />
      </p>

      <h2 className={classes.secondaryTag}>
        <em>Figure of merit of a galvanometer</em>
      </h2>

      <p>
        &nbsp;Figure of merit is in general is the numerical value representing
        the degree of effectiveness or efficiency of an instrument approximated
        by different estimation techniques.&nbsp;
      </p>

      <p>
        The figure of merit of a galvanometer is the current required to produce
        a deflection of one division in the galvanometer scale. It is
        represented by the letter k, and is given as,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <img alt="" src={Galvanometer6} />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;or &nbsp;, &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{' '}
        <img alt="" src={Galvanometer7} />
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
      </p>

      <h1 className={classes.headTag}>&nbsp;</h1>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the various components used in the experiment.
        </li>
        <li>Students learn the concept, ‘figure of merit’.</li>
        <li>
          Students are able to construct circuits based on circuit diagrams.
        </li>
      </ul>

      <p>&nbsp;</p>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Figure of Merit of a galvanometer.
          Retrieved 19 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=152&cnt=1
        </Typography>
      </div>

      <p>
        <br />
        &nbsp;
      </p>
    </div>
  );
}
