import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import BileThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Bile1/bile-the1.jpg';

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

      <p>Our objective is to detect the presence of bile salt in urine.</p>

      <h1 className={classes.headTag}>Theory:</h1>

      <p>
        Bile is a yellow-green fluid that contains water and organic molecules
        such as cholesterol, bile acids, and bilirubin. In humans, the two main
        function of bile are digestion and absorption of fats and eliminating
        bile salts from the body by secretion into bile. Adult humans produce
        around 400 to 800 ml of bile daily.
      </p>

      <h2 className={classes.secondaryTag}>Let’s understand the formation of bile salts.</h2>

      <p>
        In humans and most vertebrates, bile is produced by the liver. The gall
        bladder holds the bile produced in the liver and when the organism eats,
        bile is discharged into the duodenum. The formation of bile salts starts
        with the breakdown of red blood cells. The old red blood cells become
        more fragile and may be damaged while they are passing through the small
        blood vessels. These old and damaged red blood cells rupture as they
        pass through the spleen or liver. The macrophages break down hemoglobin
        in the red blood cells and remove iron from the heme component. The
        iron-free portion of heme is converted to biliverdin, a green pigment,
        and then into bilirubin, a yellow orange pigment. In the liver,
        bilirubin are excreted in the bile as bile pigments, which passes into
        the small intestine and then into the large intestine. Bilirubin is
        detected in urine in certain pathological conditions only. Bilirubin is
        not found in urine. It is present in urine during jaundice or because of
        liver damage.&nbsp;
      </p>

      <p>
        <img alt="" src={BileThe1} />
      </p>

      <p>
        We can test for the presence of bile salt in urine using Smith’s reagent
        and Pattern Raffo’s test. On adding urine to the Smith’s reagent, a
        green ring is formed in the presence of bile salt in urine. Pattern
        Raffo’s test gives a red colour in the presence of bile salt.
      </p>

      <h1 className={classes.headTag}>Learning outcomes:</h1>

      <ul>
        <li>Students understand the characteristics of bile salt.</li>
        <li>Students understand metabolism of bile salt.</li>
        <li>
          Students understand the tests to detect the presence of bile salt in
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
          amrita.olabs.edu.in,. (2015). Detection of Bile salt in Urine.
          Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=17&sim=211&cnt=1
        </Typography>
      </div>
    </div>
  );
}
