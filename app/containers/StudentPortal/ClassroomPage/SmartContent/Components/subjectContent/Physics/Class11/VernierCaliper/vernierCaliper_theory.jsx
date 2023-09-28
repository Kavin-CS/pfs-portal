import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import VernierImg from '../../../../../../../../../assets/Images/Subjects/Physics/VernierCalliperImg.jpg';

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
      <h1 className={classes.headTag}>Our Objective&nbsp;</h1>

      <ul>
        <li>To know the use of the Vernier Calipers.</li>
        <li>
          To measure the diameter of a small spherical / cylindrical body.&nbsp;
        </li>
        <li>
          To measure the length, width and height of the given rectangular
          block.
        </li>
        <li>
          To measure the internal diameter and depth of a given
          beaker/calorimeter and hence find its volume.&nbsp;&nbsp;
        </li>
      </ul>

      <h1 className={classes.headTag}>The Theory&nbsp;</h1>

      <h1 className={classes.headTag}>What is a Vernier Caliper?</h1>

      <p>
        A calliper is a device used to measure the distance between two opposing
        sides of an object. It can be as simple as a compass with inward or
        outward-facing points. First the tips of the calliper are adjusted to
        fit across the points to be measured and the calliper is then removed
        and the distance between the tips is measured using a ruler.&nbsp;
      </p>

      <p>
        The modern Vernier calliper was invented by Joseph R. Brown in 1851. It
        was the first practical tool for exact measurements that could be sold
        at an affordable price to ordinary machinists.&nbsp;&nbsp; The Vernier
        Calliper consists of a main scale fitted with a jaw at one end. Another
        jaw, containing the vernier scale, moves over the main scale. When the
        two jaws are in contact, the zero of the main scale and the zero of the
        Vernier scale should coincide. If both the zeros do not coincide, there
        will be a positive or negative zero error.&nbsp;
      </p>

      <h1 className={classes.headTag}>Parts of a Vernier Caliper</h1>

      <img src={VernierImg} />

      <h2 className={classes.secondaryTag}>
        1.Main Scale
        <img alt="" src="/userfiles/1/image/Vernier%20Calliper_.JPG" />
      </h2>

      <p>
        The main scale consists of a steel metallic strip graduated in
        centimeters at one edge and in inches at the other edge . It carries the
        inner and outer measuring jaws. When the two jaws are in contact, the
        zero of the main scale and the zero of the Vernier scale should
        coincide. If both the zeros do not coincide, there will be a positive or
        negative zero error.
      </p>

      <h2 className={classes.secondaryTag}>2. Vernier Scale</h2>

      <p>
        A vernier scale&nbsp; slides on the strip. It can be fixed in any
        position by the retainer. On the Vernier scale, 0.9 cm is divided into
        ten equal parts.
      </p>

      <h2 className={classes.secondaryTag}>3. Outer Measuring Jaws</h2>

      <p>
        The outer measuring jaws helps to take the outer dimension of an object
      </p>

      <h2 className={classes.secondaryTag}>4. Inner Measuring Jaws</h2>

      <p>
        The inner measuring jaws helps to take the inner dimension of an object.
      </p>

      <h2 className={classes.secondaryTag}>5. Retainer</h2>

      <p>
        The retainer helps to retain the object within the jaws of the Vernier
        calipers.
      </p>

      <h2 className={classes.secondaryTag}>6. Depth Measuring Prong</h2>

      <p>
        The depth measuring prong helps to measure the depth of an object.&nbsp;
      </p>

      <h1 className={classes.headTag}>Least Count</h1>

      <p>
        The least count or the smallest reading which you can get with the
        instrument can be calculated as;
      </p>

      <p>
        First calculate the least count and only then place the object between
        the two jaws.
      </p>

      <p>
        Record the position of zero of the Vernier scale on the main
        scale.&nbsp;
      </p>

      <h1 className={classes.headTag}>Calculating the Reading&nbsp;</h1>

      <p>When a body is between the jaws of the Vernier Caliper;&nbsp;</p>

      <p>
        If the zero of the vernier scale lies ahead of the Nth division of the
        main scale, then the main scale reading (MSR) is;
      </p>

      <p>
        If nth division of Vernier scale coincides with any division of the main
        scale, then the Vernier scale reading (VSR) is;
      </p>

      <p>Total reading,</p>

      <h1 className={classes.headTag}>Finding the Volumes</h1>

      <h1 className={classes.headTag}>Volume of a Beaker / Calorimeter</h1>

      <p>
        Volume of the beaker / calorimeter = internal area of the cross section
        x depth
      </p>

      <p>This can be expressed as;</p>

      <p>
        where 'D' is the internal diameter of beaker / calorimeter and 'd' the
        depth of beaker / calorimeter.
      </p>

      <h1 className={classes.headTag}>Volume of a Sphere</h1>

      <p>where 'r' is the radius of the sphere.</p>

      <h1 className={classes.headTag}>Volume of a Rectangular Block</h1>

      <p>
        where 'l' is length of the block, 'b' the breadth and 'h' the height of
        the block.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>Students get to know the use of vernier calipers.</li>
        <li>Students know what is the Least count of vernier callipers.</li>
      </ul>

      <p>&nbsp;</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Vernier Calipers. Retrieved 2 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=16&cnt=391
        </Typography>
      </div>
    </div>
  );
}
