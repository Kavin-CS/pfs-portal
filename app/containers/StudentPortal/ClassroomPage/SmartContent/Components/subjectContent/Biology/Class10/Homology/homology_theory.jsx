import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import HomologyThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Homology1/homology-the1.jpg';
import HomologyThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/Homology1/homology-the2.gif';
import HomologyThe3 from '../../../../../../../../../assets/Images/Subjects/Biology/Homology1/homology-the3.gif';
import HomologyThe4 from '../../../../../../../../../assets/Images/Subjects/Biology/Homology1/homology-the4.gif';
import HomologyThe5 from '../../../../../../../../../assets/Images/Subjects/Biology/Homology1/homology-the5.gif';
import HomologyThe6 from '../../../../../../../../../assets/Images/Subjects/Biology/Homology1/homology-the6.gif';
import HomologyThe7 from '../../../../../../../../../assets/Images/Subjects/Biology/Homology1/homology-the7.gif';

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
        Our objective is to identify and study the homologous and analogous
        organs in plants and animals.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        The central idea of biological evolution is that all life on earth
        shares a common ancestry and some similarities have evolved in other
        ways. These are called homologies and analogies. We will look at the
        different characteristics and identify the homologous and analogous
        organs in the plants and animals we have selected.
      </p>

      <h2 className={classes.secondaryTag}>Homology</h2>

      <p>
        Homology refers to the traits inherited by two different organisms from
        a common ancestry.
      </p>

      <h3 className={classes.secondaryTag}>Homology in Animals</h3>

      <p>
        Organs such as bat's wing, wings of birds, seal’s flipper, forelimb of a
        horse, and human arm have a common underlying anatomy that was present
        in their last common ancestors; therefore their forelimbs are homologous
        organs.
      </p>

      <p>
        We can observe that though the shape and the size of the bones are not
        similar, there is a similarity in their structure that is, they have the
        same set of bones - humerus, radius, ulna, carpals, metacarpals and
        phalanges.
      </p>

      <p>
        Man uses his hands to grasp and perform tasks, whales use their flippers
        for swimming, bats and birds use their wings for flight and horses use
        their forelimbs for running.
      </p>

      <p>
        <img alt="" src={HomologyThe1} width="823px;" height="433px;" />
      </p>

      <p>
        Frogs, birds, rabbits and lizards all have differently shaped forelimbs,
        reflecting their different lifestyles. But those different forelimbs all
        share the same set of homologous bones: the humerus, radius, and ulna.
        Such homologies reveal the common ancestry of all these animals.
      </p>

      <p>
        <img alt="" src={HomologyThe2} />
      </p>

      <h3 className={classes.secondaryTag}>Homology in Plants</h3>

      <p>
        Plants too have homologous structures like those seen in animals. In
        some plants like the pitcher, venus fly trap, poinsettia and cactus, the
        leaves show different functions and shapes from the ‘normal’ leaves we
        think about. Each of these leaves is a homologous structure, derived
        from a common ancestral form.
      </p>

      <p>
        The pitcher plant and the venus flytrap uses leaves to trap and digest
        insects. The bright red leaves of the poinsettia though leaves, look
        like flower petals. The cactus leaves are modified into small spines
        that help reduce water loss and protect the cactus from plant-eaters.
      </p>

      <p>
        <img alt="" src={HomologyThe3} />
      </p>

      <p>
        The tendril of a pea plant and spines of a barberry plant are homologous
        organs showing similar functions. The tendril of a pea plant is a
        modified leaf used for providing mechanical support to the plant. But in
        the case of barberry plants, the spines are modified leaves meant for
        protection. The tendril of a pea plant and spines of a barberry though
        originated from leaves, are homologous organs performing different
        functions.
      </p>

      <p>
        <img alt="" src={HomologyThe4} />
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>Analogy</h2>

      <p>
        Analogy refers to the similarity in function of two different organisms
        due to convergent evolution and not common ancestry.
      </p>

      <h3 className={classes.secondaryTag}>Analogy in Animals</h3>

      <p>
        Analogous organs are the opposite of homologous organs, which have
        similar functions but different origins. An example of an analogous
        trait would be the wings of insects, bats and birds that evolved
        independently in each lineage separately after diverging from an
        ancestor without wings. The wings of insects originate from the inner or
        outer surface of the insect’s body. Feathers of birds originate from
        their forelimbs, and the wings of bats originate from both the fore limb
        and the membranous skin of the abdomen.
      </p>

      <p>
        <img alt="" src={HomologyThe5} />
      </p>

      <p>
        Another example of analogous animals is sugar gliders and flying
        squirrels. These two animals can glide in air using their gliding wings.
        Both species are different from each other in many ways. Flying squirrel
        are placental mammals, where as sugar gliders are marsupial mammals like
        kangaroos. To adapt a common function, the flying squirrel and sugar
        glider evolved similar gliding wings.
      </p>

      <p>
        <img alt="" src={HomologyThe6} />
      </p>

      <h3 className={classes.secondaryTag}>Analogy in plants</h3>

      <p>
        The leaves of opuntia and peepal are analogous organs in plants. In
        opuntia the stem is modified into a broad succulent leaf like structure
        that performs photosynthesis like leaves. Peepal leaf is a normal leaf
        that performs photosynthesis. So both the opuntia and peepal leaves
        perform common function through photosynthesis, so they are analogous.
      </p>

      <p>
        Many of the cacti and African euphorbias are similar in appearance,
        being succulent, spiny, water-storing, and adapted to desert conditions
        generally. But these two plants belong to different families though they
        share traits according to the similar environmental conditions they are
        placed in.
      </p>

      <p>
        Potato and sweet potato also show similar characteristics, but have
        different origins. Potato is a modified stem meant for storage of food.
        Sweet potato is a modified root also meant for the storage of food, so
        they are analogous.
      </p>

      <p>
        <img alt="" src={HomologyThe7} />
      </p>

      <p>&nbsp;</p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol>
        <li>Students understand the terms homology and analogy.</li>
        <li>
          Students will be able identify organisms that show homological
          similarities.
        </li>
        <li>
          Students will be able identify organisms that show analogical
          similarities. gvgv
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Homology and Analogy. Retrieved 6 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=16&sim=132&cnt=1&cnt=1
        </Typography>
      </div>
    </div>
  );
}
