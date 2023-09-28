import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import PollyImg from '../../../../../../../../../assets/Images/Subjects/Biology/polly1.jpg';

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
  primaryTag: {
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
        <h1 className={classes.primaryTag}>Our Objective</h1>

        <p>Our aim is to study pollen germination on a slide.</p>

        <h1 className={classes.primaryTag}>Theory</h1>

        <h2 className={classes.secondaryTag}>What is pollination?</h2>

        <p>
          Pollination is a very important part of the life cycle of a flowering
          plant.&nbsp; Pollination is the transference of pollen grain from the
          anthers of a flower to the stigma of the same or another flower,
          mediated by abiotic or biotic means. Abiotic means the pollen is not
          carried by organisms, but through means such as wind or water.&nbsp;
          Biotic pollination occurs through agents like animals, insects or
          birds.&nbsp; The majority of plants are pollinated through biotic
          pollination.
          <br />
          <strong>
            <em>Let’s see how pollen germinates</em>
          </strong>
        </p>

        <p>
          In flowering plants, however, the ovules are contained within a hollow
          organ called the pistil, and the pollen is deposited on the pistil’s
          receptive surface, the stigma.&nbsp; On the stigma, the germination of
          pollen grains begins by absorption of water and nutrients and the
          pollen grain produces a tiny pollen tube through the style to the
          ovary.&nbsp; The tube cell enlarges and comes out of the pollen grain
          through one of the germ pores to form a pollen tube. The tube nucleus
          descends to the tip of the pollen tube.
        </p>

        <p>
          The generative cell also passes into it. It soon divides into two male
          gametes. In an act of double fertilization, one of the two sperm cells
          within the pollen tube fuses with the egg cell of the ovule, making
          possible the development of an embryo, and the other cell combines
          with the two subsidiary sexual nuclei of the ovule, which initiates
          formation of a reserve food tissue, the endosperm. The growing ovule
          then transforms itself into a seed. We can stimulate pollen
          germination in vitro with the help of a nutrient medium.
        </p>

        <p>
          <img
            alt=""
            style={{ width: '420px', height: '320px' }}
            src={PollyImg}
          />
        </p>

        <h1 className={classes.primaryTag}>Learning Outcomes:</h1>

        <p>
          Students understand the term pollination.
          <br />
          Students understand how pollen germinates.
          <br />
          Students do the experiment better in the real lab having gone through
          the animation and simulation.
        </p>

        <p>&nbsp;</p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.primaryTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of Pollen Germination. Retrieved
          28 February 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=228&cnt=618
        </Typography>
      </div>
    </div>
  );
}
