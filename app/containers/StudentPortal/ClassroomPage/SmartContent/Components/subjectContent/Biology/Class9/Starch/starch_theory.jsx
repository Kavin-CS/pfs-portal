import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import StarchThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Starch1/starch-the1.gif';
import StarchThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/Starch1/starch-the2.gif';
import StarchThe3 from '../../../../../../../../../assets/Images/Subjects/Biology/Starch1/starch-the3.gif';


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
      <h1 className={classes.headTag}>Objective</h1>

      <p>
        Our objective is to test for the presence of starch in a given food
        sample.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        Starch is the most common carbohydrate in the human diet and is
        contained in many staple foods. The major sources of starch intake
        worldwide are cereals (rice, wheat, and maize) and root vegetables
        (potatoes and cassava). We can use iodine solution to test for the
        presence of starch. If starch is present is a food item, it turns
        blue-black colour when iodine solution is added to it.
      </p>

      <h2 className={classes.secondaryTag}>What are Carbohydrates?</h2>

      <p>
        Carbohydrates are one of the main components of our daily diet. This
        category of foods include sugars, starches, and fibre. Carbohydrates are
        built up of sugar molecules that contain hydrogen, carbon and oxygen.
        Chemically, most of these carbon atoms have a hydrogen group and
        hydroxyl group attached to it. Thus, the word Carbohydrates C
        <sub>n</sub>(H<sub>2</sub>O)<sub>n</sub> literally mean carbon (carbo) +
        water (hydrate).&nbsp;
      </p>

      <h2 className={classes.secondaryTag}>Classification of Carbohydrates</h2>

      <p>
        Carbohydrates are classified as simple or complex. This classification
        depends on the chemical structure of the food, and how quickly the sugar
        is digested and absorbed.
      </p>

      <h3 className={classes.secondaryTag}>Simple Carbohydrates</h3>

      <p>
        Simple carbohydrates are simple sugars with a chemical structure that is
        composed of one or two sugars. There are two types of simple
        carbohydrates - monosaccharides and disaccharides.
      </p>

      <ul>
        <li>
          Monosaccharides consist of only one sugar, and examples are glucose,
          fructose and galactose.
        </li>
        <li>
          Disaccharides consist of two chemically-linked monosaccharides, and
          examples are sucrose, lactose and matose.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Complex Carbohydrates</h3>

      <p>
        Complex carbohydrates have three or more sugars and are classified as
        oligosaccharides and polysaccharides.
      </p>

      <ul>
        <li>
          Oligosaccharides consist of a small number of monosaccharides, which
          does not exceed 10. They are important in the absorption of certain
          minerals and the formation of fatty acids. Examples are raffinose and
          stachyose.
        </li>
        <li>
          Polysaccharides are often made up of a large number of monosaccharides
          and disaccharides. Examples are starch, glycogen and cellulose.
        </li>
      </ul>

      <p>
        <img alt="" src={StarchThe1} />
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>What is Starch?</h2>

      <p>
        Starch is the major carbohydrate reserved in plant tubers and seed
        endosperm. It is stored in plant cells. Starch molecules arrange
        themselves in the plant in semi-crystalline granules. A starch molecule
        contains a large number of glucose molecules. These glucose molecules
        are arranged either as occasionally branched chains (amylopectin) or as
        unbranched chains (amylose). Amylose is a much smaller molecule than
        amylopectin.
      </p>

      <p>
        <img alt="" src={StarchThe2} />
      </p>

      <p>
        The colour of natural starch is milky white and the pure form of starch
        is insoluble in water and alcohol. Depending on the plant, starch
        generally contains 20-25% amylase and 75-80% amylopectin. Each plant
        species have a unique starch granular size.&nbsp; Rice starch is
        relatively small (about 2μm), while potato starches have larger granules
        (up to 100μm). Starch becomes soluble in water when heated.
      </p>

      <p>
        <img
          alt=""
          src={StarchThe3}
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol>
        <li>
          Students understand the terms carbohydrates, monosaccharides,
          disaccharides, oligosaccharides, polysaccharides and starch.
        </li>
        <li>
          Students understand the method to test for the presence of starch.
        </li>
        <li>
          Students acquire the skills to perform the experiment using different
          food samples having observed the{' '}
          <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=15&amp;sim=121&amp;cnt=244">
            animation
          </a>{' '}
          and{' '}
          <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=15&amp;sim=121&amp;cnt=4">
            simulation
          </a>
          .
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Detection of Starch in Food Samples.
          Retrieved 7 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=15&sim=121&cnt=1
        </Typography>
      </div>
    </div>
  );
}
