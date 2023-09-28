import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import DicotThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Dicot1/dicot-the1.gif';
import DicotThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/Dicot1/dicot-the2.gif';


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
        Our objective is to identify the different parts of an{' '}
        <a href="#Plant_Embryo">embryo</a> of dicot seeds-{' '}
        <a href="#Pea__Gram_and_Bean">pea, gram and bean</a>.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        A seed is a small embryonic plant enclosed inside a seed coat. It is the
        ripened and fertilised ovule of gymnospermic and angiospermic plants. A
        seed has a three parts:
      </p>

      <ol>
        <li>An embryo</li>
        <li>A supply of nutrients for the embryo</li>
        <li>A seed coat</li>
      </ol>

      <p>
        The embryo is an undeveloped plant inside a seed from which a new plant
        develops. All seeds do not have the same size, shape and colour. We will
        be looking at the embryo of a{' '}
        <a href="#Pea__Gram_and_Bean">pea, gram and bean</a> seed to identify
        their different parts.
      </p>

      <h2 className={classes.secondaryTag}>
        <a name="Plant_Embryo" />Plant Embryo
      </h2>

      <p>
        Plant embryos in seeds have structures called cotyledons. A cotyledon is
        the central portion of a seed embryo to which the epicotyls- the
        immature shoot, and the radicle- the immature roots, are attached.
      </p>

      <p>
        Plants are classified according to the number of cotyledons present in
        the embryo. If the embryo has one cotyledon (monocotyledon) it is a
        monocot plant, and if there are two cotyledons (dicotyledon), it is a
        dicot plant.
      </p>

      <h2 className={classes.secondaryTag}>Seed Subdivision</h2>

      <p>
        Based on the type and location of storage materials, seeds can be
        subdivided into endosperms and non endosperms.
      </p>

      <h3 className={classes.secondaryTag}>Endospermic Seeds</h3>

      <p>
        Endospermic seeds are those that have an endosperm in the mature seed.
        It is fleshy, oily, surrounds the embryo, and functions as the sole food
        storage organ. Inside the seed coat, a thin and papery cotyledon is
        present. Monocot plants have endospermic seeds.
      </p>

      <h3 className={classes.secondaryTag}>Non-endospermic Seeds</h3>

      <p>
        Non-endospermic seeds do not have an endosperm in the mature seed. The
        cotyledons are thick and fleshy, and function as the sole food storage
        organs. Dicot plants have non-endospermic seeds.
      </p>

      <p>
        <img alt="" src={DicotThe1} />
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>Seed Germination</h2>

      <p>
        Germination is the process in which the seed breaks apart, and the
        embryo inside begins to grow with the help of water and nutrients from
        the soil. Seeds normally begin to germinate when they get an appropriate
        range of soil, temperature and when water and oxygen are available.
        During germination the seeds absorb water either through the micropyle
        (pore like opening), if it is present, or through the testa (outer seed
        coat) when it is permeable. The entry of water activates the embryo
        cells.
      </p>

      <h3 className={classes.secondaryTag}>
        <a name="Pea__Gram_and_Bean" />Germination in a Dicot Seed (Pea, Gram
        and Bean)
      </h3>

      <p>
        The pea, gram and bean seeds have two seed coats that envelope and
        protect the embryo. The outer seed coat called the testa is thick and
        strong. The inner coat is called tegmen, which is thin and membranous.
      </p>

      <p>
        The outer seed coat has a notch on one side and a scar along the notch,
        called the hilum. It is the hilum that attaches the seed to the inner
        margin or the seed stalk. There is a small pore called micropyle located
        at one end of the hilum. The seed imbibes water through the microphyle.
      </p>

      <p>
        Once soaked for the required time, the part of the plant that first
        emerges from the seed is the embryonic root known as the radicle. The
        radicle allows the seedling to anchor itself to the ground and start
        absorbing water.
      </p>

      <p>
        After the root starts absorbing water, an embryonic shoot emerges from
        the seed. This shoot comprises of three main parts- the cotyledons (seed
        leaves), the hypocotyl (section of shoot below the cotyledons), and the
        epicotyl (section of shoot above the cotyledons).
      </p>

      <p>
        <img alt="" src={DicotThe2} />
      </p>

      <p>&nbsp;</p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol>
        <li>
          Students understand the meaning of cotyledons, endosperm, embryo, etc.
        </li>
        <li>
          Students understand the different parts of the embryo of the dicot
          seed.
        </li>
        <li>
          Students understand the difference between endospermic and
          non-endospermic seeds.
        </li>
        <li>
          Students understand the experiment better through the{' '}
          <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=16&amp;sim=135&amp;cnt=291">
            animated demonstration
          </a>
          .
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Embryo of Dicot Seeds. Retrieved 6 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=16&sim=135&cnt=1
        </Typography>
      </div>
    </div>
  );
}
