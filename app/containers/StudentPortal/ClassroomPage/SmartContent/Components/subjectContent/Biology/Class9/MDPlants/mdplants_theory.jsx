import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import MDPlantsThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/MDPlants1/mdplants-the1.jpg';

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
        Our objective is to study the external features of Monocot and Dicot
        plants.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        <strong>
          <span>Flowering plants, also known as Angiosperms</span>,
        </strong>{' '}
        are the most diverse group of land plants in the world, with at least
        2,60,000 living species classified into 453 families.{' '}
        <em fontWeight="normal">
          <strong>
            (The word Angiosperm finds its origin from two Greek words – ‘angio’
            meaning covered and ‘sperma’ meaning seed.
          </strong>
          ) &nbsp;<span> </span>
        </em>
        <span>
          <strong>
            Angiosperms are divided into two groups- monocots and dicots.&nbsp;{' '}
          </strong>
        </span>
      </p>

      <p>
        Monocot and dicot plants have specific characteristics. We identify
        plants by looking at their external characteristics such as seeds,
        roots, leaves, flowers, pollen, stems and vascular bundles.&nbsp; Based
        on the differences, they are placed in one of these two groups.
      </p>

      <h2 className={classes.secondaryTag}>Comparison between Monocot and Dicot Plants</h2>

      <p>
        There are some specific characteristics that help us identify the plant
        as a monocot or a dicot. Let us look at them.
      </p>

      <h3 className={classes.secondaryTag}>
        <span>
          <strong>Seeds</strong>
        </span>
      </h3>

      <p>
        Plant embryos in seeds have structures called{' '}
        <strong>cotyledons</strong>. A cotyledon is the central portion of a
        seed embryo to which the epicotyl (immature shoot) and radicle (immature
        root) are attached. The number of cotyledons differs in these two groups
        of plants and that forms the basis for the main classification of
        monocots and dicots.
        <strong>
          &nbsp; A seed of a monocot plant has one cotyledon and that of a dicot
          plants has two cotyledons.
        </strong>
        &nbsp;&nbsp; (Note: This is easy to remember when you know mono=one and
        di=two).
      </p>

      <h3 className={classes.secondaryTag}>
        <span>
          <strong>Root</strong>s
        </span>
      </h3>

      <p>
        Roots can develop either from a main radicle that is one large{' '}
        <strong>taproot</strong> with many small secondary lateral roots growing
        out of it, or can be a fibrous mass of roots that arise from the nodes
        in the stem, called <strong>adventitious roots</strong>.
        <strong>
          {' '}
          Monocots have adventitious roots,&nbsp; whereas dicots have a radicle
          from which a root develops.
        </strong>
      </p>

      <h3 className={classes.secondaryTag}>
        <span>Leaves</span>
      </h3>

      <p>
        Leaves have more than one characteristic that help differentiate a
        monocot from a dicot.
        <strong> If the leaf has a stalk, then the plant is a dicot.</strong>{' '}
        <strong>
          But, in the case of a monocot plant, the leaf is sessile, which means
          it is attached directly by its base without a stalk.{' '}
        </strong>
      </p>

      <p>
        The next characteristic that helps in the identification is the{' '}
        <strong>venation</strong>.{' '}
        <strong>
          If the leaves have parallel venations that are long and thin, then the
          plant is monocot. If the leaves have a branched venation, then the
          plant is a dicot.
        </strong>
      </p>

      <h3 className={classes.secondaryTag}>
        <span>Flowering Parts</span>
      </h3>

      <p>
        Monocot flowers tend to have a number of petals or other floral parts
        that is divisible by three, usually three or six. Dicot flowers on the
        other hand, are likely to have parts in multiples of four or five (four,
        five, ten, etc.). This character is not always reliable, and is not easy
        to use in identification of some flowers with reduced or numerous parts.
      </p>

      <h3 className={classes.secondaryTag}>
        <span>
          <strong>Pollen Structure</strong>
        </span>
      </h3>

      <p>
        Monocot and dicot plants have different pollen structures.{' '}
        <strong>
          In a monocot, the pollen grain produced by the flower has a single
          furrow or pore through the outer layer. In a dicot plant, the pollen
          grain has three furrows or pores.
        </strong>
      </p>

      <h3 className={classes.secondaryTag}>
        <span>
          <strong>Stem &amp; Vascular Bundles</strong>
        </span>
      </h3>

      <p>
        <strong>
          Monocot plants normally have a weak stem, whereas dicots have a strong
          stem.
        </strong>{' '}
        Vascular tissues are seen as long strands and are called
        <strong> vascular bundles</strong>.{' '}
        <strong>
          In the dicot plant, the vascular bundles are arranged in a ring form,
          whereas in a monocot, these bundles appear scattered through the stem,
          with more of the bundles located towards the periphery (outer edge) of
          the stem than at the centre.
        </strong>
      </p>

      <p>
        <strong>Note: </strong>There are some exceptions to this classification
        however, as some species of plants belonging to monocots can have
        characters belonging to dicots, since the two groups have a shared
        ancestry.
      </p>

      <p>Let's have a look on different parts of monocot and dicot plants.</p>

      <p>
        <img alt="" src={MDPlantsThe1} />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol>
        <li>Students understand the terms angiosperm, monocot, and dicot..</li>
        <li>
          Students understand the differences between monocot and dicot plants.
        </li>
        <li>Students understand different parts of the angiospermic plant.</li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Monocot and Dicot Plants. Retrieved 7
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=139&cnt=1
        </Typography>
      </div>
    </div>
  );
}
