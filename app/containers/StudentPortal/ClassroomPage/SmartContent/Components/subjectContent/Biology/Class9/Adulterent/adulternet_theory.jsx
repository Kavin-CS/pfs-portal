import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
// import OhmsLaw from '../../../../../../assets/Images/Subjects/Physics/ohm-content.jpg';
import Metnail from '../../../../../../../../../assets/Images/Subjects/Biology/Metanil.gif';

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
      <div class="divContent">
        <h1 className={classes.headTag}>Objective</h1>

        <p>
          The objective of this experiment is to test for the presence of the
          adulterant ‘Metanil Yellow’ in dal.
        </p>

        <h1 className={classes.headTag}>The Theory</h1>

        <p>
          Metanil yellow is a principal non-permitted food colour used
          extensively in India. The effect of long-term consumption of metanil
          yellow on the developing and adult brain causes neurotoxicity.
          Neurotoxicity occurs when the exposure to natural or artificial toxic
          substances, alters the normal activity of the nervous system in such a
          way as to cause damage to the nervous tissue. Metanil yellow is used
          in dal as an adulterant for colouring. Its presence can be tested in
          dal by adding a few drops of HCl to a test sample, if the solution
          turns pink in colour, it indicates the presence of metanil yellow.
        </p>

        <p>
          <img alt="" src={Metnail} />
        </p>

        <p>&nbsp;</p>

        <h2 className={classes.secondaryTag}>What is food?</h2>

        <p>
          Food is one of the essential factors in our daily life that provides
          nutritional support for the human body. Food supplies fuel for our
          body by providing it with the many nutrients that are essential for
          good health. Most food has its origin in plants.
        </p>

        <p>
          Many plants and plant parts such as leaves (spinach, lettuce), stems
          (bamboo, asparagus), roots (potatoes, carrots), and fruits (tomatoes,
          pumpkins) are used as food. Animals are used as food either directly
          (meat) or indirectly (eggs, milk). Ancient India produced food that
          was more than the required demand and people ate fresh food daily. We
          now buy food products from traders or manufacturers.
        </p>

        <h2 className={classes.secondaryTag}>
          How pure is the food we consume?
        </h2>

        <p>
          We have all started thinking about the purity of the food we buy from
          traders. Due to the population explosion in India the demand for food
          has increased and traders have started mixing cheaper substances with
          food. These cheaper or undesirable substances added to food are called
          adulterants.
        </p>

        <h2 className={classes.secondaryTag}>What is food adulteration?</h2>

        <p>
          Food adulteration is the process by which either toxic substances are
          added to food, or some valuable nutrients are removed from food items.
          Adulterated food is generally defined as impure, unsafe, or
          unwholesome food. Food adulteration may be done intentionally or
          unintentionally. Those traders or manufacturers who want to make a
          quick economic profit sell adulterated food intentionally.
          Unintentional adulteration happens when people are not aware of the
          rules, regulations and&nbsp; methods of preparing wholesome food.
        </p>

        <h2 className={classes.secondaryTag}>
          Government Act to Prevent the Adulteration of Food
        </h2>

        <p>
          The adulterants used by vendors are cheaper and sometimes toxic
          substitutes. Consumption of these food products can cause diseases
          like cancer, paralysis and skin allergy, etc. The government enacted
          the Prevention of Food Adulteration Act in 1954 to protect people from
          adulterated foods.
        </p>

        <p>
          The organisations that issue certificates of reliability and purity of
          food items are:
        </p>

        <ul>
          <li>Food Products Order (FPO)</li>
          <li>Indian Standards Institute (ISI)</li>
          <li>Agricultural Marketing (AGMARK)</li>
        </ul>

        <h2 className={classes.secondaryTag}>Diseases caused by Adulterants</h2>

        <p>
          Some common adulterants found in our daily food products and the
          diseases caused by them are listed in the table below.
        </p>

        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <thead>
            <tr>
              <th scope="col">Food</th>
              <th scope="col">Adulterants</th>
              <th scope="col">Diseases Caused</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Black pepper</td>
              <td>Dried papaya seeds</td>
              <td>Stomach irritation, liver damage, cancer</td>
            </tr>
            <tr>
              <td>Chilly powder</td>
              <td>Brick powder, artificial colour</td>
              <td>Liver damage, stomach irritation</td>
            </tr>
            <tr>
              <td>Arhar dal</td>
              <td>Metanil yellow, khesari dal</td>
              <td>Paralysis</td>
            </tr>
            <tr>
              <td>Mustard</td>
              <td>Argemone</td>
              <td>Epidemic dropsy</td>
            </tr>
          </tbody>
        </table>

        <h1 className={classes.headTag}>Learning Outcomes</h1>

        <ol>
          <li>
            Students understand the terms food adulteration and adulterant.
          </li>
          <li>
            Students understand the different types of adulterants used in food.
          </li>
          <li>
            Students acquire the skill to detect the presence of adulterants in
            different food samples after having observed the{' '}
            <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=15&amp;sim=122&amp;cnt=242">
              animation
            </a>{' '}
            and{' '}
            <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=15&amp;sim=122&amp;cnt=4">
              simulation
            </a>
            .
          </li>
        </ol>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Detection of Adulterant in Dal.
          Retrieved 4 March 2021, from
          amrita.olabs.edu.in/?sub=79&brch=15&sim=122&cnt=270
        </Typography>
      </div>
    </div>
  );
}
