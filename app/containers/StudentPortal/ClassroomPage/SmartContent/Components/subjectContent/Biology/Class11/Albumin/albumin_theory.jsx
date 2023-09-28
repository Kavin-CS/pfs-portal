import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import AlbuminThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Albumin1/albumin-the1.jpg';

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
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Objective:</h1>

      <p>Our objective is to detect the presence of albumin in urine.</p>

      <h1 className={classes.headTag}>The Theory:</h1>

      <h2 className={classes.secondaryTag}>
        Let’s understand what albumin is and its role in our body.
      </h2>

      <p>
        Albumin is a protein produced by the liver and is mainly found in the
        blood. Its main functions are the ability to maintain intravascular
        oncotic pressure, meaning it keeps the fluid pressure stable within the
        blood vessels.&nbsp; It is also a carrier protein for steroids, fatty
        acids, and thyroid hormones in the blood.
      </p>

      <h2 className={classes.secondaryTag}>What is albuminuria?</h2>

      <p>
        A healthy kidney does not let albumin pass into the urine. A trace of
        protein which is less than 250 mg is found in normal urine daily.&nbsp;
        Under pathological conditions like albuminuria, level of albumin found
        in urine will be way above the normal level. Albuminuria indicates some
        damage to the kidney, as it is starting to pass some albumin into the
        urine. In kidney disturbance and in high blood pressure, albumin level
        in urine is significantly high.
      </p>

      <p>
        <img alt="" src={AlbuminThe1} />
      </p>

      <p>
        We can test the presence of albumin in urine using Heller’s test and
        Sulphosalicylic acid test. Heller’s test causes the precipitation of
        albumin and forms a white ring in the solution. When heated or treated
        with sulphosalicylic acid, albumin undergoes coagulation and forms a
        white turbidity (cloudiness) in the solution.
      </p>

      <h1 className={classes.headTag}>Learning outcomes:</h1>

      <ul>
        <li>Students understand the characteristics of albumin.</li>
        <li>Students understand term “albuminuria”.</li>
        <li>
          Students understand the tests to detect the presence of albumin in
          urine sample.
        </li>
        <li>
          Students will be able to do the experiment more accurately in the real
          lab once they understand the steps through the animation and
          simulation.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Albumin in Urine. Retrieved
          6 April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=208&cnt=1
        </Typography>
      </div>
    </div>
  );
}
