import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import ConcaveFocalThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/ConcaveFocal1/concavefocal_theory1.png';
import ConcaveFocalThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/ConcaveFocal1/concavefocal_theory2.png';
import ConcaveFocalThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/ConcaveFocal1/concavefocal_theory3.jpg';
import ConcaveFocalThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/ConcaveFocal1/concavefocal_theory4.png';
import ConcaveFocalThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/ConcaveFocal1/concavefocal_theory5.jpg';

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
      <h1 className={classes.headTag}>Our Objective:</h1>

      <p>To find the focal length of a concave lens using a convex lens by:</p>

      <ul>
        <li>Lens in contact method</li>
        <li>Lens out of contact method</li>
      </ul>

      <h1 className={classes.headTag}>The Theory:</h1>

      <h2 className={classes.secondaryTag}>Concave lens</h2>

      <p>
        A concave lens is thinner at the center that at the edges. So the light
        beams passing through the lens are spread out or diverged. Therefore,
        the concave lens is called a diverging lens. The image formed by a
        concave lens is virtual and diminished.
        <br />
        Since a concave lens will not produce a real image, a convex lens is
        used to measure its focal length. There are two methods to find the
        focal length of a concave lens.
      </p>

      <h3 className={classes.secondaryTag}>a) Lens in contact method</h3>

      <p>
        When a concave lens of focal length f<sub>2</sub> is placed coaxially in
        contact with a convex lens of focal length f<sub>1 </sub>and if F is the
        focal length of the combination, then,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
        <img alt="" src={ConcaveFocalThe1} />
      </p>

      <p>Therefore, the focal length of the concave lens,</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <img alt="" src={ConcaveFocalThe2} />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={ConcaveFocalThe3} />
      </p>

      <h3 className={classes.secondaryTag}>b) Lens out of contact method</h3>

      <p>
        The real image (I<sub>1</sub>) formed by the convex lens will act as the
        virtual object for the concave lens. When concave lens is interposed
        between the convex lens and the real image I<sub>1</sub>, the new real
        image is formed at I<sub>2</sub>. If u is the distance of the concave
        lens from the virtual object I<sub>1</sub> and v is the distance of the
        concave lens from the real image I<sub>2</sub>, then the focal length of
        the given concave lens is,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img alt="" src={ConcaveFocalThe4} />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={ConcaveFocalThe5} />
      </p>

      <h1 className={classes.headTag}>Learning outcomes:</h1>

      <ul>
        <li>Students list the properties of concave lens.</li>
        <li>Students deduce and apply the lens formula.</li>
        <li>
          Students identify the two methods used to determine the focal length
          of concave lens.
          <br />
          &nbsp;
        </li>
      </ul>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Concave Lens - Focal Length. Retrieved
          22 March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=244&cnt=1
        </Typography>
      </div>
    </div>
  );
}
